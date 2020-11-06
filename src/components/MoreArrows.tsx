import { withTheme } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const ArrowsContainer = withTheme(styled.div`
  width: 40px;
  height: 80px;
  display: inline-block;
`);

const Arrow = withTheme(styled.div`
  display: block;
  width: 20px;
  height: 20px;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  transform: translate(20px, -10px) rotate(45deg);
  margin: -10px;
  animation: animate 2s infinite;
  will-change: transform, opacity;

  &:nth-child(2) {
    animation-delay: -0.2s;
  }

  &:nth-child(3) {
    animation-delay: -0.4s;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: translate(20px, -10px) rotate(45deg) translate(0, 0);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(20px, -10px) rotate(45deg) translate(30px, 30px);
    }
  }
`);

const Arrows = () => (
  <ArrowsContainer>
    <Arrow />
    <Arrow />
    <Arrow />
  </ArrowsContainer>
);

export default Arrows;
export { Arrows };
