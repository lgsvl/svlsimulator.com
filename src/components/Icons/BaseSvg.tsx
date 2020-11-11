/* eslint-disable max-len */
import React from 'react';

export interface BaseSvgProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  title?: string;
}

// Accessible SVG Icon
// https://css-tricks.com/accessible-svgs/
export const BaseSvg: React.FC<BaseSvgProps> = ({ title = '', ...rest }) => (
  <svg
    width='20'
    height='10'
    viewBox='0 0 20 10'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label={title}
    {...rest}
  />
);

export default BaseSvg;
