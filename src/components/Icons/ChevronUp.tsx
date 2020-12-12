/* eslint-disable max-len */
import React from 'react';
import BaseSvg from './BaseSvg';

export const IconChevronUp = ({ color = 'currentColor', title = 'Chevron Up', ...rest }) => (
  <BaseSvg width='24' height='24' viewBox='0 0 24 24' {...rest} title={title}>
    <path d='M20 17L12 9L4 17' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </BaseSvg>
);
