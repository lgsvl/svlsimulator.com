/* eslint-disable max-len */
import React from 'react';
import BaseSvg from './BaseSvg';

export const IconX = ({ color = 'currentColor', title = 'No', ...rest }) => (
  <BaseSvg width='24' height='24' viewBox='0 0 24 24' {...rest} title={title}>
    <g>
      <path d='M20 4L4 20' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M4 4L20 20' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    </g>
  </BaseSvg>
);
