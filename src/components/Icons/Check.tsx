/* eslint-disable max-len */
import React from 'react';
import BaseSvg from './BaseSvg';

export const IconCheck = ({ color = 'currentColor', title = 'Yes', ...rest }) => (
  <BaseSvg width='24' height='24' viewBox='0 0 24 24' {...rest} title={title}>
    <path d='M22 5L8.25 19L2 12.6364' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </BaseSvg>
);
