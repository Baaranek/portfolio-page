import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGraduationCap, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';


const Wrapper = styled.section`
  font-size: 1.5rem;
  width: 4rem;
  height: 100vh;
  background-color: #181d1f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

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
  padding: .2rem 0;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #38e89f;
`;

const StyledNavLink = styled(NavLink)`
  color: #38e89f;
  text-decoration: none;

  &.hover {
    opacity: 0.2;
  }
`;

const array = [
  {id:1, icon: faHome, description: 'Home', route: '/'},
  {id:2, icon: faUser, description: 'About', route: '/about'},
  {id:3, icon: faGraduationCap, description: 'Skills', route: '/skills'},
  {id:4, icon: faEnvelope, description: 'Contact', route: '/contact'},
];

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      activeIndex: null,
    };
  }

  hoverHandler(index){
    let activeIndex = this.state.activeIndex === index ? null : index;
    setTimeout(() => {
      this.setState({activeIndex});
    }, 100); // SetTimeout odpowiada ze deleya i uzycie tego w płynnej animacji w przyszłosci
  }

  render() {
    return (
      <Wrapper>
        <div>
          <StyledNavLink to='/'> <StyledFontAwesomeIcon icon={faHome} /></StyledNavLink>
        </div>
        <div>
          <ul>
            { array.map( ({id, icon, description, route}) =>
              <StyledList key={id} onMouseEnter={this.hoverHandler.bind(this, id)} onMouseLeave={(e) => this.hoverHandler()}>
                {this.state.activeIndex === id
                  ? <StyledNavLink to={route}>{description}</StyledNavLink>
                  : <StyledNavLink to={route}> <StyledFontAwesomeIcon icon={icon} /></StyledNavLink>
                }
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
  }
}

export default Menu;

