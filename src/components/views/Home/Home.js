import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #070806;
  display: flex;
  justify-content: space-between;
  height: 100vh;
`;

const InsideWrapper = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid red;
`;

const Home = () => (
  <Wrapper>
    <InsideWrapper>
      <h1>Home</h1>
    </InsideWrapper>
    <InsideWrapper>
      <h1>Page</h1>
    </InsideWrapper>
  </Wrapper>
);

export default Home;
