import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Paragraph = ({ children, delay }) => (
  <StyledParagraph
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: delay }}
  >
    {children}
  </StyledParagraph>
);

Paragraph.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
};

const StyledParagraph = styled(motion.p)`
  padding-right: 5rem;
`;

export default Paragraph;
