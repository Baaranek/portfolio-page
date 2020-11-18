import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../../../assets/images/ring_old.svg';

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

  img {
    height: 500px;
    width: 500px;
  }
`;

const MiddleDiv = styled.div`
  > :nth-child(3) {
    padding-right: 1rem;
  }
`;

const ThirdDiv = styled.div`
  > :nth-child(3) {
    padding-right: 1rem;
  }

  > :nth-child(6) {
    padding-right: 1rem;
  }
`;

const MotionSpan = styled(motion.span)`
  display: inline-block;
  font-size: 3rem;
`;

{
  /* Text Arrays Templates for web content */
}
const HelloTextTemplate = [
  { id: 1, letter: 'H', delay: 0.3 },
  { id: 2, letter: 'e', delay: 0.4 },
  { id: 3, letter: 'l', delay: 0.5 },
  { id: 4, letter: 'l', delay: 0.6 },
  { id: 5, letter: 'o', delay: 0.7 },
  { id: 6, letter: ',', delay: 0.8 },
];

const NameTextTemplate = [
  { id: 1, letter: 'I', delay: 0.3 },
  { id: 2, letter: `'`, delay: 0.4 },
  { id: 3, letter: 'm', delay: 0.5 },
  { id: 4, letter: 'K', delay: 0.6 },
  { id: 5, letter: 'r', delay: 0.7 },
  { id: 6, letter: 'y', delay: 0.8 },
  { id: 7, letter: 's', delay: 0.9 },
  { id: 8, letter: 't', delay: 1 },
  { id: 9, letter: 'i', delay: 1.1 },
  { id: 10, letter: 'a', delay: 1.2 },
  { id: 11, letter: 'n', delay: 1.3 },
  { id: 12, letter: ',', delay: 1.4 },
];

const ProfessionTextTemplate = [
  { id: 1, letter: 'J', delay: 0.3 },
  { id: 2, letter: `r`, delay: 0.4 },
  { id: 3, letter: '.', delay: 0.5 },
  { id: 4, letter: 'w', delay: 0.6 },
  { id: 5, letter: 'e', delay: 0.7 },
  { id: 6, letter: 'b', delay: 0.8 },
  { id: 7, letter: 'd', delay: 0.9 },
  { id: 8, letter: 'e', delay: 1 },
  { id: 9, letter: 'v', delay: 1.1 },
  { id: 10, letter: 'e', delay: 1.2 },
  { id: 11, letter: 'l', delay: 1.3 },
  { id: 12, letter: 'o', delay: 1.4 },
  { id: 13, letter: 'p', delay: 1.5 },
  { id: 14, letter: 'e', delay: 1.6 },
  { id: 15, letter: 'r', delay: 1.7 },
  { id: 16, letter: '.', delay: 1.8 },
];

const Home = () => (
  <Wrapper>
    <InsideWrapper>
      <div>
        {/* Renders animated "Hello," */}
        {HelloTextTemplate.map(({ id, letter, delay }) => (
          <MotionSpan
            key={id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay, duration: 0.3 }}
          >
            {letter}
          </MotionSpan>
        ))}
      </div>
      <MiddleDiv>
        {/* Renders animated "I'm Krystian," */}
        {NameTextTemplate.map(({ id, letter, delay }) => (
          <MotionSpan
            key={id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay, duration: 0.3 }}
          >
            {letter}
          </MotionSpan>
        ))}
      </MiddleDiv>
      <ThirdDiv>
        {/* Renders animated "Jr. web developer." */}
        {ProfessionTextTemplate.map(({ id, letter, delay }) => (
          <MotionSpan
            key={id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay, duration: 0.3 }}
          >
            {letter}
          </MotionSpan>
        ))}
      </ThirdDiv>
    </InsideWrapper>
    <InsideWrapper>
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        src={logo}
      />
    </InsideWrapper>
  </Wrapper>
);

export default Home;
