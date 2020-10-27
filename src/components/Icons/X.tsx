/* eslint-disable max-len */
import React from 'react';

export const IconX: React.FC<BaseSvg> = ({ color = 'currentColor', ...rest }) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
    <path d='M20 4L4 20' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M4 4L20 20' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
