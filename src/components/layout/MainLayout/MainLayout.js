import React from 'react';
import Menu from '../Menu/Menu';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContaier = styled.div`
  display: flex;
`;

const MainLayout = ({children}) => (
  <MainContaier>
    <Menu />
    <main>
      {children}
    </main>
  </MainContaier>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
