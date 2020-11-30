import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faGraduationCap,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faKickstarter,
} from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import media from '@utils/media';

const menuIcons = [
  { id: 1, icon: faHome, description: 'Home', route: '/' },
  { id: 2, icon: faUser, description: 'About', route: '/about' },
  { id: 3, icon: faGraduationCap, description: 'Skills', route: '/skills' },
  { id: 4, icon: faEnvelope, description: 'Contact', route: '/contact' },
];

const Menu = () => (
  <Wrapper
    initial={{ x: '-4vw' }}
    animate={{ x: 0 }}
    transition={{ duration: 1 }}
  >
    <MainIconDiv
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <MainIcon icon={faKickstarter} />
    </MainIconDiv>
    <motion.div
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <ul>
        {menuIcons.map(({ id, icon, description, route }) => (
          <StyledList
            key={id}
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
        ))}
      </ul>
    </motion.div>
    <motion.div
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 1.1 }}
    >
      <ul>
        <StyledList>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Baaranek"
          >
            <StyledFontAwesomeIcon icon={faGithub} />
          </a>
        </StyledList>
        <StyledList>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/krystian-otto-8b93241a5/"
          >
            <StyledFontAwesomeIcon icon={faLinkedin} />
          </a>
        </StyledList>
      </ul>
    </motion.div>
  </Wrapper>
);

/* STYLES */

const Wrapper = styled(motion.header)`
  width: 64px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.menu};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
  }

  > div {
    padding: 2rem 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0 0;
    text-align: center;

    ${media.phone`
      display: flex;
    `}
  }

  ${media.phone`
  flex-direction: row;
  width: 100vw;
  height: 64px;
  `}
`;

const StyledList = styled(motion.li)`
  padding: 0.6rem 0;
  height: 4rem;
  display: flex;
  flex-direction: column;
  position: relative;

  ${media.phone`
      padding: 0.6rem 1rem;
      align-items: center;
    `}
`;

const MainIconDiv = styled(motion.div)``;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.icon};
`;

const MainIcon = styled(StyledFontAwesomeIcon)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.active};
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

export default Menu;
