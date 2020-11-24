import React from 'react';
import styled from 'styled-components';
import letterVariants from '@utils/letterVariants';
import { motion } from 'framer-motion';
import { AboutTextTemplate } from '@utils/textTemplates';

const About = () => (
  <Wrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0 }}
  >
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
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
          augue eget nulla venenatis tincidunt ut finibus metus. Duis pretium
          sed felis et commodo. Nam magna dolor, ultricies ac tellus at,
          tristique molestie nulla.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
          augue eget nulla venenatis tincidunt ut finibus metus. Duis pretium
          sed felis et commodo. Nam magna dolor, ultricies ac tellus at,
          tristique molestie nulla.
        </motion.p>
      </DescriptionDiv>
    </InsideWrapper>
    {/* Right Side */}
    <InsideWrapper></InsideWrapper>
  </Wrapper>
);

const Wrapper = styled(motion.div)`
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
