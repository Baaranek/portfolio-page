import React from 'react';
import styled from 'styled-components';
import letterVariants from '@utils/letterVariants';
import { motion } from 'framer-motion';
import { AboutTextTemplate } from '@utils/textTemplates';
import Asteroid from '@components/common/Asteroid/Asteroid';
import LeftWrapper from '@layout/LeftWrapper/LeftWrapper';
import RightWrapper from '@layout/RightWrapper/RightWrapper';

const About = () => (
  <Wrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0 }}
  >
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
        <Paragraph
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          I&apos;m a computer science student at WSB in Poznań. I graduated
          Technical High School for Computer Science.
        </Paragraph>
        <Paragraph
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          I like reading fantasy and science books, for example Lord of The
          Rings. In free time I like play computer games.
        </Paragraph>
        <Paragraph
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          I spend a lot of time learning the programming. For some time it has
          become my passion, I try to conscientiosly learn new things.
        </Paragraph>
        <Paragraph
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          I&apos;m determined to find my first job as a web developer.
        </Paragraph>
      </DescriptionDiv>
    </LeftWrapper>
    {/* Right Side */}
    <RightWrapper>
      <Asteroid />
    </RightWrapper>
  </Wrapper>
);

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  height: 100vh;
`;

const MotionSpan = styled(motion.span)`
  display: inline-block;
  font-size: 3rem;
`;

const HeaderDiv = styled.div`
  > :nth-child(5) {
    padding-right: 1rem;
  }
`;

const DescriptionDiv = styled.div``;

const Paragraph = styled(motion.p)`
  padding-right: 1rem;
`;

export default About;
