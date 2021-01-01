/* eslint-disable max-len */
import React from 'react';
import BaseSvg from './BaseSvg';

export const IconPlay = ({ color = 'currentColor', title = 'Play', ...rest }) => (
  <BaseSvg width='40' height='40' viewBox='0 0 40 40' {...rest} title={title}>
    <path
      d='M10 6.83166C10 6.0405 10.8752 5.56266 11.5408 5.99049L32.0248 19.1588C32.6372 19.5525 32.6372 20.4475 32.0248 20.8412L11.5408 34.0095C10.8752 34.4373 10 33.9595 10 33.1683V6.83166Z'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </BaseSvg>
);
