import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '@assets/images/ring_old.svg';
import ButtonLink from '@components/common/ButtonLink/ButtonLink';
import letterVariants from '@utils/letterVariants';

import {
  HelloTextTemplate,
  NameTextTemplate,
  ProfessionTextTemplate,
} from '@utils/textTemplates';

const Home = () => (
  <Wrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0 }}
  >
    <InsideWrapper>
      <div>
        {/* Renders animated "Hello," */}
        {HelloTextTemplate.map(({ id, letter, delay }) => (
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
      </div>
      <MiddleDiv>
        {/* Renders animated "I'm Krystian," */}
        {NameTextTemplate.map(({ id, letter, delay }) => (
          <MotionSpan
            key={id}
            initial="hidden"
            animate="visible"
            transition={{ delay: delay, duration: 0.3 }}
            variants={letterVariants}
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
            initial="hidden"
            animate="visible"
            transition={{ delay: delay, duration: 0.3 }}
            variants={letterVariants}
          >
            {letter}
          </MotionSpan>
        ))}
      </ThirdDiv>
      <ButtonLink title={'Contact Me!'} path={'/contact'} />
    </InsideWrapper>
    <InsideWrapper>
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        src={logo}
      />
    </InsideWrapper>
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

export default Home;
