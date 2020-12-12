import { withTheme } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const ARROW_THICKNESS = 2;
const ARROW_SIZE = 14;
// prettier-ignore
const ARROW_TRAVEL_DISTANCE = ((ARROW_SIZE + ARROW_THICKNESS) * 2) + 1;

// prettier-ignore
const ArrowsContainer = withTheme(styled.div`
  width: ${(ARROW_SIZE * 2) + ARROW_THICKNESS}px;
  height: ${ARROW_TRAVEL_DISTANCE + ((ARROW_SIZE + ARROW_THICKNESS) * 3)}px;
  display: inline-block;
`);

const Arrow = withTheme(styled.div`
  display: block;
  width: ${ARROW_SIZE}px;
  height: ${ARROW_SIZE}px;
  border-bottom: ${ARROW_THICKNESS}px solid white;
  border-right: ${ARROW_THICKNESS}px solid white;
  transform: rotate(45deg);
  transform-origin: bottom right;
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
      transform: translateY(0) rotate(45deg);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(${ARROW_TRAVEL_DISTANCE}px) rotate(45deg);
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
