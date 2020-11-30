import React from 'react';
import styled from 'styled-components';
import letterVariants from '@utils/letterVariants';
import { motion } from 'framer-motion';
import { AboutTextTemplate } from '@utils/textTemplates';
import Asteroid from '@components/common/Asteroid/Asteroid';
import { useMediaQuery } from 'react-responsive';
// Layout
import LeftWrapper from '@layout/LeftWrapper/LeftWrapper';
import RightWrapper from '@layout/RightWrapper/RightWrapper';
import ComponentWrapper from '@layout/ComponentWrapper/ComponentWrapper';
// import media from '@utils/media';

const About = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });

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
      <RightWrapper>{isDesktop && <Asteroid />}</RightWrapper>
    </ComponentWrapper>
  );
};

const MotionSpan = styled(motion.span)`
  display: inline-block;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.active};
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
