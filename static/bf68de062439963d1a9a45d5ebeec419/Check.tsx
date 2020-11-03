/* eslint-disable max-len */
import React from 'react';

export const IconCheck: React.FC<BaseSvg> = ({ color = 'currentColor', ...rest }) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
    <path d='M22 5L8.25 19L2 12.6364' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
