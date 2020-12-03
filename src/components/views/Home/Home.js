import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ButtonLink from '@components/common/ButtonLink/ButtonLink';
import letterVariants from '@utils/letterVariants';
import Asteroid from '@components/common/Asteroid/Asteroid';

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
        <Mention
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{
            delay: 1,
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
          }}
        >
          Asteroid made by{' '}
          <a
            href="https://www.flaticon.com/authors/icongeek26"
            title="Icongeek26"
          >
            Icongeek26
          </a>{' '}
          <br /> from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </Mention>
      </LeftWrapper>
      <RightWrapper>
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

const Mention = styled(motion.div)`
  position: fixed;
  right: 0;
  bottom: 10px;
  background-color: ${({ theme }) => theme.colors.menu};
  padding: 5px;

  a {
    color: ${({ theme }) => theme.colors.active};
    text-decoration: none;
  }
`;

export default Home;
