/* eslint-disable max-len */
import React from 'react';

export interface BaseSvgProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  title?: string;
}

const getUniqueId = () => new Date().getMilliseconds() + '-' + Math.round(Math.pow(Math.random(), -5));

// Accessible SVG Icon
// https://css-tricks.com/accessible-svgs/
export const BaseSvg: React.FC<BaseSvgProps> = ({ children, title = '', ...rest }) => {
  const uniqueId = `icon-${getUniqueId()}-title`;
  return (
    <svg
      width='20'
      height='10'
      viewBox='0 0 20 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
      aria-labelledby={uniqueId}
    >
      <title id={uniqueId}>{title}</title>
      {children}
    </svg>
  );
};

export default BaseSvg;
