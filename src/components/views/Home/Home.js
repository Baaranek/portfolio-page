import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ButtonLink from '@components/common/ButtonLink/ButtonLink';
import letterVariants from '@utils/letterVariants';
import Asteroid from '@components/common/Asteroid/Asteroid';
// import MediaQuery from 'react-responsive'
// import media from '@utils/media';

// Layout
import LeftWrapper from '@layout/LeftWrapper/LeftWrapper';
import RightWrapper from '@layout/RightWrapper/RightWrapper';
import ComponentWrapper from '@layout/ComponentWrapper/ComponentWrapper';

import {
  HelloTextTemplate,
  NameTextTemplate,
  ProfessionTextTemplate,
} from '@utils/textTemplates';

const Home = () => {
  return (
    <ComponentWrapper>
      <LeftWrapper>
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
      </LeftWrapper>
      <RightWrapper>
        {' '}
        <Asteroid />
      </RightWrapper>
    </ComponentWrapper>
  );
};

const MiddleDiv = styled.div`
  > :nth-child(3) {
    padding-right: 1rem;
  }
`;

const ThirdDiv = styled.div`
  > :nth-child(3) {
    padding-right: 1rem;
  }
`;

const MotionSpan = styled(motion.span)`
  display: inline-block;
  font-size: 3.3rem;

  @media (max-width: 1160px) {
    font-size: 2.7rem;
  }

  @media (min-width: 78px) and (max-width: 885px) {
    font-size: 2.2rem;
  }
`;

export default Home;
