import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RightWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

RightWrapper.propTypes = {
  children: PropTypes.node,
};

const Wrapper = styled.div`
  overflow: visible;
  width: 30%;
  flex: 0 0 60%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default RightWrapper;
