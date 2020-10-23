/* eslint-disable max-len */
import React from 'react';

export const IconChevronDown: React.FC<BaseSvg> = ({ color = 'white', ...rest }) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
    <path d='M4 9L12 17L20 9' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
