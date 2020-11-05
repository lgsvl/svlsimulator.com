/* eslint-disable max-len */
import React from 'react';
import BaseSvg from './BaseSvg';

export const IconMenu = ({ color = 'currentColor', title = 'Menu', ...rest }) => (
  <BaseSvg width='24' height='24' viewBox='0 0 24 24' {...rest} title={title}>
    <g>
      <path
        d='M2 6C2 5.44772 2.55964 5 3.25 5H20.75C21.4404 5 22 5.44772 22 6C22 6.55228 21.4404 7 20.75 7H3.25C2.55964 7 2 6.55228 2 6Z'
        fill={color}
      />
      <path
        d='M2 18C2 17.4477 2.55964 17 3.25 17H20.75C21.4404 17 22 17.4477 22 18C22 18.5523 21.4404 19 20.75 19H3.25C2.55964 19 2 18.5523 2 18Z'
        fill={color}
      />
      <path
        d='M2 12C2 11.4477 2.55964 11 3.25 11H20.75C21.4404 11 22 11.4477 22 12C22 12.5523 21.4404 13 20.75 13H3.25C2.55964 13 2 12.5523 2 12Z'
        fill={color}
      />
    </g>
  </BaseSvg>
);
