import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const MiddleDiv = styled.div`

  > :nth-child(3) {
    padding-right: 1rem;
  }
`;

const MotionSpan = styled(motion.span)`
  display: inline-block;
  font-size: 3rem;
`;

const Hello = [
  {id:1, letter: 'H', delay: .3},
  {id:2, letter: 'e', delay: .5},
  {id:3, letter: 'l', delay: .7},
  {id:4, letter: 'l', delay: .9},
  {id:5, letter: 'o', delay: 1.1},
  {id:6, letter: ',', delay: 1.3},
];

const Hellov2 = [
  {id:1, letter: 'I', delay: .3},
  {id:2, letter: `'`, delay: .5},
  {id:3, letter: 'm', delay: .7},
  {id:4, letter: 'K', delay: 1.1},
  {id:5, letter: 'r', delay: 1.1},
  {id:6, letter: 'y', delay: 1.3},
  {id:7, letter: 's', delay: 1.5},
  {id:8, letter: 't', delay: 1.7},
  {id:9, letter: 'i', delay: 1.9},
  {id:10, letter: 'a', delay: 2.1},
  {id:11, letter: 'n', delay: 2.3},

];

const Home = () => (
  <Wrapper>
    <InsideWrapper>
      <div>
        { Hello.map(({ id, letter, delay }) =>
          <MotionSpan key = {id}
            initial={{ opacity:0, scale: 0 }} animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: delay, duration: .3 }}
          >
            { letter }
          </MotionSpan>
        )}
      </div>
      <MiddleDiv>
        { Hellov2.map(({ id, letter, delay }) =>
          <MotionSpan key = {id}
            initial={{ opacity:0, scale: 0 }} animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: delay, duration: .3}}
          >
            { letter }
          </MotionSpan>
        )}
      </MiddleDiv>
    </InsideWrapper>
    <InsideWrapper>
    </InsideWrapper>
  </Wrapper>
);

export default Home;
