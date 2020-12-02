import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '@utils/media';

const LeftWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

LeftWrapper.propTypes = {
  children: PropTypes.node,
};

const Wrapper = styled.div`
  overflow: visible;
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 5rem;

  ${media.medium`
    width: 100%;
`}
`;

export default LeftWrapper;
