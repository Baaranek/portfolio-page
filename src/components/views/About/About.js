import React from 'react';
import styled from 'styled-components';
import letterVariants from '@utils/letterVariants';
import { motion } from 'framer-motion';
import { AboutTextTemplate } from '@utils/TextTemplates';

const About = () => (
  <Wrapper>
    {/* Left Side */}
    <InsideWrapper>
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
        <p>Here is a desc</p>
      </DescriptionDiv>
    </InsideWrapper>
    {/* Right Side */}
    <InsideWrapper></InsideWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
`;

const InsideWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
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

export default About;
