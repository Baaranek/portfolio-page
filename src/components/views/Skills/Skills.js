import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SkillsTextTemplate } from '@utils/textTemplates';
import letterVariants from '@utils/letterVariants';
import LeftWrapper from '@layout/LeftWrapper/LeftWrapper';
import RightWrapper from '@layout/RightWrapper/RightWrapper';
import Hexagon from '@components/features/Hexagon/Hexagon';
import { useMediaQuery } from 'react-responsive';
import media from '@utils/media';

const Skills = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
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
          <Paragraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            I mainly learn frontend, but I also know some backend technologies.
          </Paragraph>
          <Paragraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            HTML, CSS(SCSS), JS, React with Router and Redux including Hooks. I
            like using Styled Components with Framer Motion for basic
            animations.
          </Paragraph>
          <Paragraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            I know basics of NodeJs with express. I also used MongoDb and
            websockets for small projects.
          </Paragraph>
          <Paragraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            Check out my github profile or contact mi via contact form or
            directly with my email: otto.krystiann@gmail.com
          </Paragraph>
        </DescriptionDiv>
      </LeftWrapper>
      <RightWrapper>{isDesktop && <Hexagon />}</RightWrapper>
    </Wrapper>
  );
};

const HeaderDiv = styled.div``;

const DescriptionDiv = styled.div``;

const Paragraph = styled(motion.p)`
  padding-right: 1rem;
`;

const MotionSpan = styled(motion.span)`
  display: inline-block;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.active};
`;

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  ${media.phone`
    flex-direction: column;
  `}
`;

export default Skills;
