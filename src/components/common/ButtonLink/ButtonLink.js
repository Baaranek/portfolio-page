import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonLink = ({ title, path }) => (
  <StyledMotionLink
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    to={path}
  >
    {title}
  </StyledMotionLink>
);

ButtonLink.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};

const MotionLink = motion.custom(Link);

const StyledMotionLink = styled(MotionLink)`
  position: relative;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 4px;
  line-height: 2.5rem;
  display: block;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.active};
  color: ${({ theme }) => theme.colors.active};
  border-radius: 0.1rem;
  width: 10rem;
  height: 2.5rem;
  margin-top: 3rem;
`;

export default ButtonLink;
