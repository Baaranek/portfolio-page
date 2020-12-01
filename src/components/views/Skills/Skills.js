import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SkillsTextTemplate } from '@utils/textTemplates';
import letterVariants from '@utils/letterVariants';
import Hexagon from '@components/features/Hexagon/Hexagon';
import { useMediaQuery } from 'react-responsive';
import Paragraph from '@components/common/Paragraph/Paragraph';
// import media from '@utils/media';
// Layout
import LeftWrapper from '@layout/LeftWrapper/LeftWrapper';
import RightWrapper from '@layout/RightWrapper/RightWrapper';
import ComponentWrapper from '@layout/ComponentWrapper/ComponentWrapper';

const Skills = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });

  return (
    <ComponentWrapper>
      <LeftWrapper>
        <HeaderDiv>
          {SkillsTextTemplate.map(({ id, letter, delay }) => (
            <MotionSpan
              key={id}
              initial="hidden"
              animate="visible"
              transition={{
                delay: delay,
                duration: 0.3,
              }}
              variants={letterVariants}
            >
              {letter}
            </MotionSpan>
          ))}
        </HeaderDiv>
        <DescriptionDiv>
          <Paragraph delay={1}>
            I mainly learn frontend, but I also know some backend technologies.
          </Paragraph>
          <Paragraph delay={1.2}>
            HTML, CSS(SCSS), JS, React with Router and Redux including Hooks. I
            like using Styled Components with Framer Motion for basic
            animations.
          </Paragraph>
          <Paragraph delay={1.4}>
            I know basics of NodeJs with express. I also used MongoDb and
            websockets for small projects.
          </Paragraph>
          <Paragraph delay={1.6}>
            Check out my github profile or contact mi via contact form or
            directly with my email: otto.krystiann@gmail.com
          </Paragraph>
        </DescriptionDiv>
      </LeftWrapper>
      <RightWrapper>{isDesktop && <Hexagon />}</RightWrapper>
    </ComponentWrapper>
  );
};

const HeaderDiv = styled.div``;

const DescriptionDiv = styled.div``;

const MotionSpan = styled(motion.span)`
  display: inline-block;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.active};
`;

export default Skills;
