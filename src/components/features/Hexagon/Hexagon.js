import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faCss3,
  faSass,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

const data = [
  { id: 1, icon: faReact },
  { id: 2, icon: faCss3 },
  { id: 3, icon: faSass },
  { id: 4, icon: faNodeJs },
  { id: 5, icon: faReact },
  { id: 6, icon: faCss3 },
  { id: 7, icon: faSass },
  { id: 8, icon: faReact },
  { id: 9, icon: faCss3 },
  { id: 10, icon: faReact },
  { id: 11, icon: faSass },
  { id: 12, icon: faNodeJs },
];

const Hexagon = () => (
  <Wrapper>
    <HexGrid>
      {data.map(({ id, icon }) => (
        <Hex key={id} whileHover={{ opacity: 0 }}>
          <HexIn>
            <AwesomeIcon icon={icon} />
          </HexIn>
        </Hex>
      ))}
    </HexGrid>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HexGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  /* transform: perspective(900px) rotateX(60deg); */

  @media (min-width: 1920px) {
    width: 960px;
  }
  @media (max-width: 1919px) and (min-width: 1280px) {
    width: 780px;
  }
  @media (max-width: 1279px) and (min-width: 1024px) {
    width: 640px;
  }
  @media (max-width: 1023px) and (min-width: 781px) {
    width: 480px;
  }
  @media (max-width: 780px) {
    width: 320px;
  }
`;

const Hex = styled(motion.li)`
  position: relative;
  width: 140px;
  height: 80.83px;
  background-color: ${({ theme }) => theme.colors.active};
  margin: 44px 2px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
  }
  &:before {
    bottom: 100%;
    border-bottom: 40.41px solid ${({ theme }) => theme.colors.active};
  }
  &:after {
    top: 100%;
    width: 0;
    border-top: 40.41px solid ${({ theme }) => theme.colors.active};
  }

  @media (min-width: 1920px) {
    :nth-child(12n + 7) {
      margin-left: 74px;
    }
  }
  @media (max-width: 1919px) and (min-width: 1280px) {
    :nth-child(9n + 6) {
      margin-left: 74px;
    }
  }
  @media (max-width: 1279px) and (min-width: 1024px) {
    :nth-child(7n + 5) {
      margin-left: 74px;
    }
  }
  @media (max-width: 1023px) and (min-width: 781px) {
    :nth-child(5n + 4) {
      margin-left: 74px;
    }
  }
  @media (max-width: 780px) {
    :nth-child(3n + 3) {
      margin-left: 74px;
    }
  }
`;

const HexIn = styled.div`
  position: relative;
  width: 136px;
  height: 78.52px;
  background-color: ${({ theme }) => theme.colors.ground};
  margin: 39.26px 0;
  display: flex;
  justify-content: center;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    border-left: 68px solid transparent;
    border-right: 68px solid transparent;
    z-index: 1;
  }
  &:before {
    bottom: 100%;
    border-bottom: 39.26px solid ${({ theme }) => theme.colors.ground};
  }
  &:after {
    top: 100%;
    width: 0;
    border-top: 39.26px solid ${({ theme }) => theme.colors.ground};
  }
`;

const AwesomeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  z-index: 1;
  color: ${({ theme }) => theme.colors.icon};
  line-height: 80.83px;
  font-size: 80.83px;
`;

export default Hexagon;
