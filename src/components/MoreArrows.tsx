import { withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
// import { px } from 'src/utils/theme';
import styled from 'styled-components';

const ArrowsContainer = withTheme(styled(Box)`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`);

const Arrow = withTheme(styled(Box)`
  display: block;
  width: 20px;
  height: 20px;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  transform: rotate(45deg);
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
      transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(20px, 20px);
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
