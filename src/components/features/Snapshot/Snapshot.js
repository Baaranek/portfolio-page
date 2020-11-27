import React from 'react';
import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faReact,
// } from '@fortawesome/free-brands-svg-icons';

const Snapshot = () => (
  <Wrapper>
    <div>
      <HexGrid>
        <Hex>
          <HexIn></HexIn>
        </Hex>
        <Hex>
          <HexIn></HexIn>
        </Hex>
        <Hex>
          <HexIn></HexIn>
        </Hex>
        <Hex>
          <HexIn></HexIn>
        </Hex>
        <Hex>
          <HexIn></HexIn>
        </Hex>
        <Hex>
          <HexIn></HexIn>
        </Hex>
        <Hex>
          <HexIn></HexIn>
        </Hex>
      </HexGrid>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const HexGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  transform: perspective(900px) rotateX(60deg);

  @media (min-width: 1920px) {
    width: 1100px;
  }
  @media (max-width: 1919px) and (min-width: 1280px) {
    width: 960px;
  }
  @media (max-width: 1279px) and (min-width: 1024px) {
    width: 780px;
  }
  @media (max-width: 1023px) and (min-width: 781px) {
    width: 640px;
  }
  @media (max-width: 780px) and (min-width: 640px) {
    width: 320px;
  }
  @media (max-width: 639px) {
    width: 320px;
  }
`;

const Hex = styled.li`
  position: relative;
  width: 140px;
  height: 80.83px;
  background-color: red;
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
    border-bottom: 40.41px solid red;
  }
  &:after {
    top: 100%;
    width: 0;
    border-top: 40.41px solid red;
  }

  @media (min-width: 1920px) {
    :nth-child(14n + 8) {
      margin-left: 74px;
    }
  }
  @media (max-width: 1919px) and (min-width: 1280px) {
    :nth-child(12n + 7) {
      margin-left: 74px;
    }
  }
  @media (max-width: 1279px) and (min-width: 1024px) {
    :nth-child(9n + 6) {
      margin-left: 74px;
    }
  }
  @media (max-width: 1023px) and (min-width: 781px) {
    :nth-child(7n + 5) {
      margin-left: 74px;
    }
  }
  @media (max-width: 780px) and (min-width: 640px) {
    :nth-child(3n + 3) {
      margin-left: 74px;
    }
  }
  @media (max-width: 639px) {
    :nth-child(3n + 3) {
      margin-left: 74px;
    }
  }
`;

const HexIn = styled.div`
  position: relative;
  width: 136px;
  height: 78.52px;
  background-color: yellow;
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
    border-bottom: 39.26px solid yellow;
  }
  &:after {
    top: 100%;
    width: 0;
    border-top: 39.26px solid yellow;
  }
`;

export default Snapshot;
