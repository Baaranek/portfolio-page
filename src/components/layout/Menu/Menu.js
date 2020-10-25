import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGraduationCap, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';


const Wrapper = styled.header`
  width: 4rem;
  height: 100vh;
  background-color: #181d1f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p{
    margin: 0;
    padding: 0;
  }

  > div{
    padding: 2rem 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0 0;
    text-align: center;
  }
`;

const StyledList = styled.li`
  padding: .6rem 0;
  height: 4rem;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover{

    &:after{
      position: absolute;
      content: '';
      right: -1.2rem;
      top: 1rem;
      border: solid #38e89f;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(135deg);
    }
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: #38e89f;
`;

const StyledNavLink = styled(NavLink)`
  color: #38e89f;
  text-decoration: none;
`;

const array = [
  {id:1, icon: faHome, description: 'Home', route: '/'},
  {id:2, icon: faUser, description: 'About', route: '/about'},
  {id:3, icon: faGraduationCap, description: 'Skills', route: '/skills'},
  {id:4, icon: faEnvelope, description: 'Contact', route: '/contact'},
];

const Menu = () => (
  <Wrapper>
    <div>
      <StyledNavLink to='/'> <StyledFontAwesomeIcon icon={faHome} /></StyledNavLink>
    </div>
    <div>
      <ul>
        { array.map( ({id, icon, description, route}) =>
          <StyledList key={id}>
            <StyledNavLink to={route}> 
              <StyledFontAwesomeIcon icon={icon} />
            </StyledNavLink>
            <StyledNavLink to={route}>
              {description}
            </StyledNavLink>
          </StyledList>
        )}
      </ul>
    </div>
    <div>
      <ul>
        <StyledList><a target='_blank' rel='noopener noreferrer' href='https://github.com/Baaranek'><StyledFontAwesomeIcon icon={faGithub} /></a></StyledList>
        <StyledList><a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/krystian-otto-8b93241a5/'><StyledFontAwesomeIcon icon={faLinkedin} /></a></StyledList>
      </ul>
    </div>
  </Wrapper>
);

export default Menu;

