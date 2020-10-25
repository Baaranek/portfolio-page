import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAd } from '@fortawesome/free-solid-svg-icons';


const Wrapper = styled.section`
  font-size: 1.3rem;
  width: 5rem;
  height: 100vh;
  background-color: #181d1f;
  color: #38e89f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledList = styled.li`
  &:hover{ // Hover będzie z timeOutem wpływał na łądną animacje
    color: red;
  }
`;

const array = [
  {id:1, icon: faCoffee, description: 'Cofee'},
  {id:2, icon: faAd, description: 'Ad'},
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
    }, 300); // SetTimeout odpowiada ze deleya i uzycie tego w płynnej animacji w przyszłosci
  }

  render() {
    return (
      <Wrapper>
        <div>
          <p>Logo</p>
        </div>
        <div>
          <ul>
            { array.map( ({id, icon, description}) =>
              <StyledList key={id} onMouseEnter={this.hoverHandler.bind(this, id)} onMouseLeave={(e) => this.hoverHandler()}>
                {this.state.activeIndex === id
                  ?  description
                  : <FontAwesomeIcon icon={icon} />
                }
              </StyledList>
            )}
          </ul>
        </div>
        <div>
          <ul>
            <li><FontAwesomeIcon icon={faAd} /></li>
            <li><FontAwesomeIcon icon={faAd} /></li>
            <li><FontAwesomeIcon icon={faAd} /></li>
          </ul>
        </div>
      </Wrapper>
    );
  }
}

export default Menu;

