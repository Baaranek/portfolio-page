import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '@utils/media';

const RightWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

RightWrapper.propTypes = {
  children: PropTypes.node,
};

const Wrapper = styled.div`
  position: relative;
  flex: 0 0 60%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1160px) {
    flex: 0 0 50%;
  }

  ${media.medium`
    width: 100%;
  `}

  ${media.small`
    width: 100%;
    height: 100%;
  `}
`;

export default RightWrapper;
