import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import media from '@utils/media';
import PropTypes from 'prop-types';

const ComponentWrapper = ({ children }) => (
  <Wrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </Wrapper>
);

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  height: 100vh;

  ${media.small`
    flex-direction: column;
  `}
`;

ComponentWrapper.propTypes = {
  children: PropTypes.node,
};

export default ComponentWrapper;
