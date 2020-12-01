import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faCss3,
  faSass,
  faNodeJs,
  faHtml5,
  faGit,
  faJs,
} from '@fortawesome/free-brands-svg-icons';
import { StyledComponents } from '@styled-icons/simple-icons';

const data = [
  { id: 1, icon: faReact },
  { id: 2, icon: faCss3 },
  { id: 3, icon: faSass },
  { id: 4, icon: faNodeJs },
  { id: 5, icon: faHtml5 },
  { id: 6, icon: faGit },
  { id: 7, icon: faJs },
];

const HexVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Hexagon = () => (
  <Wrapper>
    <HexGrid>
      {data.map(({ id, icon }) => (
        <Hex
          key={id}
          variants={HexVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: id / 2, duration: 1 }}
        >
          <HexIn>
            <AwesomeIcon icon={icon} />
          </HexIn>
        </Hex>
      ))}
      <Hex
        variants={HexVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 4, duration: 1 }}
      >
        <HexIn>
          <StyledComponent size="110" />
        </HexIn>
      </Hex>
      <Hex
        variants={HexVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 4.5, duration: 1 }}
      >
        <HexIn>
          <Icon
            width="140"
            height="80"
            fill="#6b6e70"
            viewBox="0 0 290 150"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path d="M190.317684,91.214 C185.491684,92.789 180.302684,93.273 175.261684,94.156 C173.889684,94.396 172.442684,94.182 171.056684,94.374 C160.303684,95.866 156.240684,100.173 154.721684,111.623 C153.913684,117.718 152.309684,123.511 148.811684,128.697 C142.901684,137.456 131.420684,141.431 121.594684,138.009 C111.076684,134.346 104.705684,124.759 105.555684,113.874 C106.320684,104.067 114.066684,95.403 124.945684,92.885 C130.038684,91.706 135.323684,91.245 140.549684,90.769 C150.304684,89.882 154.613684,85.605 156.238684,76.013 C157.173684,70.494 156.340684,65.287 155.116684,60.081 C153.247684,52.124 147.453684,48.427 137.726684,47.719 C132.418684,47.332 127.018684,46.562 121.939684,45.036 C111.247684,41.821 105.022684,32.539 105.515684,21.65 C105.947684,12.115 113.712684,2.831 123.039684,0.699 C134.089684,-1.828 145.090684,2.591 149.789684,12.432 C152.255684,17.596 153.610684,23.446 154.575684,29.137 C156.304684,39.341 160.358684,43.3 170.536684,44.406 C177.118684,45.122 183.825684,45.938 190.102684,47.902 C199.634684,50.885 205.360684,59.768 205.358684,69.64 C205.357684,79.297 199.447684,88.235 190.317684,91.214 Z"></path>
            </g>
          </Icon>
        </HexIn>
      </Hex>
      <Hex
        variants={HexVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 5, duration: 1 }}
      >
        <HexIn>
          <Icon height="80" width="140" viewBox="0 0 12 25" fill="#6b6e70">
            <path d="M11.71 10.41C10.31 4.33 7.39 2.71 6.65 1.57 6.34 1.06 6.07 0.54 5.84 0 5.8 0.54 5.73 0.88 5.26 1.29 4.32 2.11 0.35 5.3 0.01 12.21 -0.3 18.65 4.82 22.62 5.5 23.03 6.02 23.28 6.65 23.03 6.96 22.8 9.43 21.13 12.8 16.69 11.71 10.41"></path>
            <path d="M5.95 19.5C5.82 21.08 5.72 22 5.38 22.9 5.38 22.9 5.61 24.41 5.76 26L6.32 26C6.45 24.88 6.65 23.76 6.92 22.66 6.21 22.33 5.98 20.89 5.95 19.5Z"></path>
            <path d="M7.03 22.75L7.03 22.75C6.34 22.43 6.14 20.94 6.11 19.55 6.28 17.25 6.33 14.95 6.26 12.64 6.22 11.44 6.28 1.46 5.96 0 6.18 0.49 6.43 0.97 6.7 1.44 7.44 2.59 10.33 4.21 11.71 10.32 12.79 16.61 9.47 21.06 7.03 22.75Z"></path>
          </Icon>
        </HexIn>
      </Hex>
      <Hex
        variants={HexVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 5.5, duration: 1 }}
      >
        <HexIn>
          <Icon
            height="80"
            width="140"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="#6b6e70"
          >
            <g>
              <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z" />
              <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z" />
              <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z" />
            </g>
          </Icon>
        </HexIn>
      </Hex>
      <Hex
        variants={HexVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 6, duration: 1 }}
      >
        <HexIn>
          <Icon
            height="80"
            width="140"
            xmlns="http://www.w3.org/2000/svg"
            fill="#6b6e70"
            viewBox="0 0 13 15"
          >
            <path d="M0 14V1l6.5 6.5L13 1v13l-3.25-3.25L6.5 14l-3.25-3.25z"></path>
          </Icon>
        </HexIn>
      </Hex>
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

  @media (min-width: 1280px) {
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

  @media (min-width: 1280px) {
    :nth-child(9n + 6) {
      margin-left: 74px;
    }
    :nth-child(9n + 10) {
      margin-left: 148px;
    }
  }
  @media (max-width: 1279px) and (min-width: 1024px) {
    :nth-child(6n + 4) {
      margin-left: 74px;
    }
  }
  @media (max-width: 1023px) and (min-width: 781px) {
    :nth-child(4n + 3) {
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

const Icon = styled.svg`
  position: absolute;
  z-index: 1;
  color: ${({ theme }) => theme.colors.icon};
  line-height: 80.83px;
  font-size: 80.83px;
`;

const StyledComponent = styled(StyledComponents)`
  position: absolute;
  z-index: 1;
  color: ${({ theme }) => theme.colors.icon};
  line-height: 80.83px;
  font-size: 80.83px;
  display: block;
  top: -20px;
`;

export default Hexagon;
