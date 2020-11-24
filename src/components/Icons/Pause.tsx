/* eslint-disable max-len */
import React from 'react';
import BaseSvg from './BaseSvg';

export const IconPause = ({ color = 'currentColor', title = 'Pause', ...rest }) => (
  <BaseSvg width='40' height='40' viewBox='0 0 40 40' {...rest} title={title}>
    <path
      d='M29.0002 6.6665H24.3335C23.7812 6.6665 23.3335 7.11422 23.3335 7.6665V32.3332C23.3335 32.8855 23.7812 33.3332 24.3335 33.3332H29.0002C29.5524 33.3332 30.0002 32.8855 30.0002 32.3332V7.6665C30.0002 7.11422 29.5524 6.6665 29.0002 6.6665Z'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.6667 6.6665H11C10.4477 6.6665 10 7.11422 10 7.6665V32.3332C10 32.8855 10.4477 33.3332 11 33.3332H15.6667C16.219 33.3332 16.6667 32.8855 16.6667 32.3332V7.6665C16.6667 7.11422 16.219 6.6665 15.6667 6.6665Z'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </BaseSvg>
);
