import Box, { BoxProps } from '@material-ui/core/Box';
import { ButtonProps } from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledOuijaAnchor = withTheme(styled(Box)``);

export const OuijaAnchor: React.FC<BoxProps> = ({ ...rest }) => (
  <StyledOuijaAnchor height={1} width={1} position='relative' overflow='hidden' className='ouija-anchor' {...rest} />
);

const StyledOuija = withTheme(styled(Box)`
  ${({ theme }) => `
position: absolute;
position: fixed;
  z-index: 1;
  z-index: -1;
  background-color: mediumaquamarine;
	padding: 16px;
	border-radius: 16px;
	font-size: 200%;
	width: 20ex;
	text-align: center;
	height: 20ex;
	transform: translate(-50%,-50%);
  font-family: monospace;
  will-change: top, left;

  transition: ${theme.transitions.create('top', {
    easing: theme.transitions.easing.sharp,
    duration: 1000
  })},
    ${theme.transitions.create('left', {
      easing: theme.transitions.easing.sharp,
      duration: 1000
    })};

  top: calc(var(--ouija-position-top, 0) * 1px);
  left: calc(var(--ouija-position-left, 0) * 1px);

  top: 50%;
  left: calc(var(--ouija-nearestanchor-left, 0) * 1px);

    width: 100%;
    height: 70vh;
    padding: 0;
    background-color: transparent;
  `}
`);

const half = (num: number) => num / 2;

// https://github.com/Microsoft/TypeScript/issues/25760#issuecomment-614417742
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;
type OptionalWithRequired<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;

type XY = { x: number; y: number };
const initialXY: XY = { x: 0, y: 0 };

type UsefulCoordKeys = 'height' | 'width' | 'top' | 'left';

type UsefulCoords = OptionalWithRequired<ClientRect, UsefulCoordKeys>;

const getCenterCoords: (coords: UsefulCoords) => XY = coords => {
  const y = coords.top + half(coords.height);
  const x = coords.left + half(coords.width);
  return { x, y };
};

const getAnchorNodes = () => Array.from(document.querySelectorAll('.ouija-anchor'));

const getAnchorCoordsList = () => {
  const anchorNodes = getAnchorNodes();
  // console.log('anchorNodes:', anchorNodes);
  return anchorNodes.map(el => {
    const coords = el.getBoundingClientRect();
    // window.pageYOffset + coords.top
    return getCenterCoords({
      top: window.pageYOffset + coords.top,
      left: window.pageXOffset + coords.left,
      width: coords.width,
      height: coords.height
    });
  });
};

// const setScreenCenter = (ev: React.UIEvent<Window>): void => {
const setScreenCenter = (coords: XY): void => {
  const el: HTMLElement = document.documentElement;
  el.style.setProperty('--ouija-position-top', coords.y.toString());
  el.style.setProperty('--ouija-position-left', coords.x.toString());
};

const setNearestAnchorCenter = (coords: XY): void => {
  const el: HTMLElement = document.documentElement;
  el.style.setProperty('--ouija-nearestanchor-top', coords.y.toString());
  el.style.setProperty('--ouija-nearestanchor-left', coords.x.toString());
};

const hypot = (a: XY, b: XY): number => {
  const diffx = Math.abs(a.x - b.x);
  const diffy = Math.abs(a.y - b.y);

  // console.log({ diffx, diffy, a, b, 'hypot:': Math.hypot(diffx, diffy) });

  return Math.hypot(diffx, diffy);
};

const getNearestAnchor = (current: XY, anchors: XY[]): XY => {
  let nearest: XY = initialXY;
  // find the nearest anchor to our current coord.

  // const bestDiff = {};
  let bestDist = 100000;

  anchors.forEach(a => {
    const dist = hypot(a, current);
    bestDist = Math.min(dist, bestDist);
    if (dist === bestDist) nearest = a;
  });

  // console.log('bestDist:', bestDist, 'nearest:', nearest, 'anchors:', anchors);
  return nearest;
};

const getScreenCenter = (ev: Event): XY => {
  // console.log('getScreenCenter');
  if (ev.target) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const doc: Document = ev.type === 'resize' ? ev.target.document : ev.target;

    if (doc && 'scrollingElement' in doc && doc.scrollingElement) {
      const el = doc.scrollingElement;

      const center = getCenterCoords({
        top: el.scrollTop,
        left: el.scrollLeft,
        width: el.clientWidth,
        height: el.clientHeight
      });
      // console.log(center);

      // setScreenCenter(center);
      return center;
    }
  }
  // console.log('oops failed');
  return initialXY;
};

const Ouija: React.ExoticComponent<ButtonProps> = React.forwardRef(({ children, ...rest }, ref) => {
  // const [list, setNearestAnchor] = useState<XY[]>([]);
  // const [nearestAnchor, setNearestAnchor] = useState<XY>(initialXY);

  useEffect(() => {
    // setNearestAnchor(getAnchorCoordsList());

    const localHandleScreenMove = (ev: Event) => {
      const list = getAnchorCoordsList();
      const center = getScreenCenter(ev);
      setScreenCenter(center);

      // const currentCenter: XY = {
      //   y: Number(document.documentElement.style.getPropertyValue('--ouija-position-top')),
      //   x: Number(document.documentElement.style.getPropertyValue('--ouija-position-left'))
      // };

      const nearest = getNearestAnchor(center, list);
      // if (nearest.x !== nearestAnchor.x && nearest.y !== nearestAnchor.y) {
      // setNearestAnchor(nearest);
      setNearestAnchorCenter(nearest);
      // }
      // console.log('list:', list);
      // console.log('nearest:', nearest, 'center:', center);
    };

    window.addEventListener('scroll', localHandleScreenMove);
    window.addEventListener('resize', localHandleScreenMove);

    return () => {
      window.removeEventListener('scroll', localHandleScreenMove);
      window.removeEventListener('resize', localHandleScreenMove);
    };
  }, []);
  // }, [list, nearestAnchor.x, nearestAnchor.y]);

  console.log('Rendering Ouija');

  // <StyledOuija ref={ref} style={{ top: nearestAnchor.y, left: nearestAnchor.x }}>
  return (
    <StyledOuija {...rest} ref={ref}>
      {children}
    </StyledOuija>
  );
});

export default Ouija;
export { Ouija };
