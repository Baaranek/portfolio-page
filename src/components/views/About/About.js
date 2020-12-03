import React from 'react';
import styled from 'styled-components';
import letterVariants from '@utils/letterVariants';
import { motion } from 'framer-motion';
import { AboutTextTemplate } from '@utils/textTemplates';
import Asteroid from '@components/common/Asteroid/Asteroid';
import Paragraph from '@components/common/Paragraph/Paragraph';
import media from '@utils/media';
// Layout
import LeftWrapper from '@layout/LeftWrapper/LeftWrapper';
import RightWrapper from '@layout/RightWrapper/RightWrapper';
import ComponentWrapper from '@layout/ComponentWrapper/ComponentWrapper';

const About = () => {
  return (
    <ComponentWrapper>
      {/* Left Side */}
      <LeftWrapper>
        {/* Returns 'About Me.' */}
        <HeaderDiv>
          {AboutTextTemplate.map(({ id, letter, delay }) => (
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
            I&apos;m a computer science student at WSB in Poznań. I graduated
            Technical High School for Computer Science.
          </Paragraph>
          <Paragraph delay={1.2}>
            I like reading fantasy and science books, for example Lord of The
            Rings. In free time I like play computer games.
          </Paragraph>
          <Paragraph delay={1.4}>
            I spend a lot of time learning the programming. For some time it has
            become my passion, I try to conscientiosly learn new things.
          </Paragraph>
          <Paragraph delay={1.6}>
            I&apos;m determined to find my first job as a web developer.
          </Paragraph>
        </DescriptionDiv>
      </LeftWrapper>
      {/* Right Side */}
      <RightWrapper>
        {' '}
        <Asteroid />
      </RightWrapper>
    </ComponentWrapper>
  );
};

const MotionSpan = styled(motion.span)`
  display: inline-block;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.active};

  ${media.tablet`
  font-size: 3rem;
  `}
`;

const HeaderDiv = styled.div`
  > :nth-child(5) {
    padding-right: 1rem;
  }
`;

const DescriptionDiv = styled.div``;

export default About;
