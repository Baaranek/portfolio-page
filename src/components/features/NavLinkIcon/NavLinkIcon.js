import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import media from '@utils/media';

const MotionLink = motion.custom(NavLink);

const NavLinkIcon = ({ icon, description, route }) => {
  const [isHover, setHover] = useState(false);

  const changeHoverStatus = () => setHover(!isHover);

  return (
    <StyledList
      onMouseEnter={changeHoverStatus}
      onMouseLeave={changeHoverStatus}
    >
      <AnimatePresence exitBeforeEnter>
        {!isHover ? (
          <StyledNavLink
            key="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exact
            to={route}
            exit={{ opacity: 0, duration: 0.2 }}
          >
            <StyledFontAwesomeIcon icon={icon} />
          </StyledNavLink>
        ) : (
          <StyledNavLink
            key="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exact
            to={route}
            exit={{ opacity: 0, duration: 0.2 }}
          >
            <p>{description}</p>
          </StyledNavLink>
        )}
      </AnimatePresence>
    </StyledList>
  );
};

NavLinkIcon.propTypes = {
  icon: PropTypes.object,
  description: PropTypes.node,
  route: PropTypes.node,
};

const StyledList = styled(motion.li)`
  padding: 0.6rem 0;
  height: 4rem;
  display: flex;
  flex-direction: column;
  position: relative;

  ${media.tablet`
      padding: 0.6rem 1rem;
      align-items: center;
    `}
`;

const StyledNavLink = styled(MotionLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.icon};
  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.colors.active};

    > * {
      color: ${({ theme }) => theme.colors.active};
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.active};

    > * {
      color: ${({ theme }) => theme.colors.active};
    }
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.icon};
`;

export default NavLinkIcon;
