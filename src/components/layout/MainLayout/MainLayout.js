import React from 'react';
import Menu from '../Menu/Menu';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '@utils/media';

const MainLayout = ({ children }) => (
  <MainContaier>
    <Menu />
    <StyledMain>{children}</StyledMain>
  </MainContaier>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

const MainContaier = styled.div`
  display: flex;

  ${media.phone`
  flex-direction: column;
`}
`;

const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.ground};
  color: ${({ theme }) => theme.colors.light};
`;

export default MainLayout;
