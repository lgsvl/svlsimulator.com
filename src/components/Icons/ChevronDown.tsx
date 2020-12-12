/* eslint-disable max-len */
import React from 'react';
import BaseSvg from './BaseSvg';

export const IconChevronDown = ({ color = 'currentColor', title = 'Chevron Down', ...rest }) => (
  <BaseSvg width='24' height='24' viewBox='0 0 24 24' {...rest} title={title}>
    <path d='M4 9L12 17L20 9' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </BaseSvg>
);
