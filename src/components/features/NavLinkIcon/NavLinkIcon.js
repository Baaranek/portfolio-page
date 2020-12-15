import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import media from '@utils/media';

const NavLinkIcon = ({ icon, description, route }) => {
  return (
    <StyledList
      whileHover={{ scale: 1.2 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <StyledNavLink exact to={route}>
        <StyledFontAwesomeIcon icon={icon} />
      </StyledNavLink>
      <StyledNavLink exact to={route}>
        <p>{description}</p>
      </StyledNavLink>
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

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.icon};
  text-decoration: none;

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
