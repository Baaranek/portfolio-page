import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonLink = ({ title, path }) => (
  <StyledMotionLink
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1.4 }}
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
  border: 1px solid #ed6337;
  color: #ed6337;
  border-radius: 0.2rem;
  width: 10rem;
  height: 2.5rem;
  margin-top: 3rem;
  transition: all 1s;
  background-size: 200%;
  background-position: 100% 0;
  background-image: linear-gradient(45deg, #ed6337 50%, transparent 50%);

  :hover {
    color: ${({ theme }) => theme.colors.ground};
    background-position: 0 100%;
  }
`;

export default ButtonLink;
