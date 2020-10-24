/* eslint-disable max-len */
import React from 'react';

export const IconDocument: React.FC<BaseSvg> = ({ color = 'white', ...rest }) => (
  <svg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
    <path
      d='M46.6665 10V23.3333C46.6665 24.2174 47.0177 25.0652 47.6428 25.6904C48.2679 26.3155 49.1158 26.6667 49.9998 26.6667H63.3332'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M56.6665 70H23.3332C21.5651 70 19.8694 69.2976 18.6191 68.0474C17.3689 66.7971 16.6665 65.1014 16.6665 63.3333V16.6667C16.6665 14.8986 17.3689 13.2029 18.6191 11.9526C19.8694 10.7024 21.5651 10 23.3332 10H46.6665L63.3332 26.6667V63.3333C63.3332 65.1014 62.6308 66.7971 61.3806 68.0474C60.1303 69.2976 58.4346 70 56.6665 70Z'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M30 30H33.3333' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M30 43.333H50' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M30 56.667H50' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
