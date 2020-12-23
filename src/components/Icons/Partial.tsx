/* eslint-disable max-len */
import React from 'react';
import BaseSvg from './BaseSvg';

export const IconPartial = ({ color = 'currentColor', title = 'Partial', ...rest }) => (
  <BaseSvg width='32' height='32' viewBox='0 0 32 32' {...rest} title={title}>
    <path d='M8 16H24' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M26.6666 3.50002H5.33329C4.32077 3.50002 3.49996 4.32083 3.49996 5.33335V26.6667C3.49996 27.6792 4.32077 28.5 5.33329 28.5H26.6666C27.6791 28.5 28.5 27.6792 28.5 26.6667V5.33335C28.5 4.32083 27.6791 3.50002 26.6666 3.50002ZM3.16663 5.33335C3.16663 4.13674 4.13668 3.16669 5.33329 3.16669H26.6666C27.8632 3.16669 28.8333 4.13674 28.8333 5.33335V26.6667C28.8333 27.8633 27.8632 28.8334 26.6666 28.8334H5.33329C4.13668 28.8334 3.16663 27.8633 3.16663 26.6667V5.33335Z'
      fill={color}
      stroke={color}
    />
  </BaseSvg>
);
