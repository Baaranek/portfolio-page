import React from 'react';
import Menu from '../Menu/Menu';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContaier = styled.div`
  display: flex;
`;

const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #070806;
  color: #fff;
`;

const MainLayout = ({children}) => (
  <MainContaier>
    <Menu />
    <StyledMain>
      {children}
    </StyledMain>
  </MainContaier>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
