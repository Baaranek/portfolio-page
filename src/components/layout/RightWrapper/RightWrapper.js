import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '@utils/media';

const RightWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

RightWrapper.propTypes = {
  children: PropTypes.node,
};

const Wrapper = styled.div`
  overflow: visible;
  width: 60%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.phone`
  width: 100%;
`}
`;

export default RightWrapper;
