import Box, { BoxProps } from '@material-ui/core/Box';
import { ButtonProps } from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { clamp01 } from 'src/utils';
import { px } from 'src/utils/theme';
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
      duration: 100
    })};

  top: calc(var(--ouija-position-top, 0) * 1px);
  left: calc(var(--ouija-position-left, 0) * 1px);

  top: 50%;
  left: calc(var(--ouija-nearestanchor-left, 0) * 1px);
  left: var(--ouija-position-left, 0);

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
type Coords = XY & { height: number; width: number };
type UsefulCoordKeys = 'height' | 'width' | 'top' | 'left';
type UsefulCoords = OptionalWithRequired<ClientRect, UsefulCoordKeys>;

const initialXY: XY = { x: 0, y: 0 };

const getCenterCoords: (coords: UsefulCoords) => Coords = coords => {
  const y = coords.top + half(coords.height);
  const x = coords.left + half(coords.width);
  return { x, y, height: coords.height, width: coords.width };
};

const getAnchorNodes = () => Array.from(document.querySelectorAll('.ouija-anchor'));

const getAnchorCoordsList = () =>
  getAnchorNodes().map(el => {
    const coords = el.getBoundingClientRect();
    return getCenterCoords({
      top: window.pageYOffset + coords.top,
      left: window.pageXOffset + coords.left,
      width: coords.width,
      height: coords.height
    });
  });

const tfn = {
  linear: (k: number) => k,
  'ease-in': (k: number) => Math.pow(k, 1.675),
  'ease-out': (k: number) => 1 - Math.pow(1 - k, 1.675),
  'ease-in-out': (k: number) => 0.5 * (Math.sin((k - 0.5) * Math.PI) + 1)
};

/**
 * Calculates the position, in {x,y}, where the position should be between
 * coordinates `a` and `b`, with respect to their position and height, based on
 * the provided "center" coordinates. In other words, if `a` and `b` are
 * 2-dimensional boxes, where should the component be positioned so it's
 * proportionally between the two boxes given the center of the screen.
 * @param a Coordinates #1
 * @param b Coordinates #2
 * @param c Current screen-center coordinates
 */
const getPositionBetweenPoints = (a: Coords, b: Coords, c: XY): XY => {
  // prettier-ignore
  const aBottom = a.y + (a.height / 2);
  // prettier-ignore
  const bTop = b.y - (b.height / 2);
  const py = clamp01((c.y - aBottom) / (bTop - aBottom));

  const smoothedPy = tfn['ease-in-out'](py);
  // prettier-ignore
  const y = ((bTop - aBottom) * smoothedPy) + a.y + aBottom;
  // Using the `py` value below as a scroll position progress to apply to the X coordinates too
  // prettier-ignore
  const x = ((b.x - a.x) * smoothedPy) + a.x;

  return { x, y };
};

const setCenterPosition = (coords: XY): void => {
  const el: HTMLElement = document.documentElement;
  el.style.setProperty('--ouija-screen-center-position-top', coords.y.toString());
  el.style.setProperty('--ouija-screen-center-position-left', coords.x.toString());
};

const setPosition = (coords: XY): void => {
  const el: HTMLElement = document.documentElement;
  el.style.setProperty('--ouija-position-top', px(coords.y));
  el.style.setProperty('--ouija-position-left', px(coords.x));
};

const setNearestAnchorPosition = (coords: XY): void => {
  const el: HTMLElement = document.documentElement;
  el.style.setProperty('--ouija-nearestanchor-top', coords.y.toString());
  el.style.setProperty('--ouija-nearestanchor-left', coords.x.toString());
};

const hypot = (a: XY, b: XY): number => {
  const diffx = Math.abs(a.x - b.x);
  const diffy = Math.abs(a.y - b.y);
  return Math.hypot(diffx, diffy);
};

/**
 * Find the nearest anchor to our current coord.
 * @param current - Current screen position coordinates
 * @param anchors - List of anchors' coordinates
 */
const getNearestAnchor = <T extends XY>(current: XY, anchors: T[]): T => {
  let nearest = initialXY as T;
  let bestDist = 100000;

  anchors.forEach(a => {
    const dist = hypot(a, current);
    bestDist = Math.min(dist, bestDist);
    if (dist === bestDist) nearest = a;
  });

  return nearest;
};

/**
 * Find the nearest anchor without going past the next anchor given a list of anchors.
 * ("The Price Is Right" style)
 * @param current - Current screen position coordinates
 * @param anchors - List of anchors' coordinates
 */
const getMinimumAnchorIndex = (current: XY, anchors: XY[]): number => {
  const cy = current.y;
  let minAnchorIndex = 0;
  let py = 0;

  anchors.forEach((a, i) => {
    const ay = a.y;

    if (ay > py && ay < cy) {
      // found new closest without going over;
      py = ay;
      minAnchorIndex = i;
    }
  });
  return minAnchorIndex;
};

const getScreenCenter = (ev: Event): XY => {
  if (ev.target) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
      return center;
    }
  }
  return initialXY;
};

const Ouija: React.ExoticComponent<ButtonProps> = React.forwardRef(({ children, ...rest }, ref) => {
  const [stateMinAnchorIndex, setMinimumAnchor] = useState<number>(0);
  // const [list, setNearestAnchor] = useState<XY[]>([]);
  // const [nearestAnchor, setNearestAnchor] = useState<XY>(initialXY);

  useEffect(() => {
    const localHandleScreenMove = (ev: Event) => {
      const list = getAnchorCoordsList();
      const center = getScreenCenter(ev);
      setCenterPosition(center);
      const minAnchorIndex = getMinimumAnchorIndex(center, list);

      if (stateMinAnchorIndex !== minAnchorIndex) {
        setMinimumAnchor(minAnchorIndex);
      }

      const nearest = getNearestAnchor(center, list);
      setNearestAnchorPosition(nearest);

      setPosition(
        getPositionBetweenPoints(list[minAnchorIndex], list[minAnchorIndex + 1] || list[list.length - 1], center)
      );
    };

    window.addEventListener('scroll', localHandleScreenMove);
    window.addEventListener('resize', localHandleScreenMove);

    return () => {
      window.removeEventListener('scroll', localHandleScreenMove);
      window.removeEventListener('resize', localHandleScreenMove);
    };
  }, [stateMinAnchorIndex]);

  return (
    <StyledOuija {...rest} ref={ref}>
      {children}
    </StyledOuija>
  );
});

export default Ouija;
export { Ouija };
