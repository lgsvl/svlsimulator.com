// import React from 'react';
// import styled, { Interpolation } from 'styled-components';
// import { SpacingProps } from '@material-ui/core/system';
// import { Spacing, SpacingArgument, SpacingOptions } from '@material-ui/core/styles/createSpacing';
// import { Theme, withTheme } from '@material-ui/core/styles';

// type IThemedComponent<P> = {
//   theme: Theme;
// } & P;

/**
 * Provides a common simple interface to Styled-components
 *
 * This method also removes the `theme` prop from the component so it doesn't
 * get spread onto the rendered DOM node. If a `theme` prop is not provided,
 * the global theme is pulled from context using `withTheme`.
 *
 * @param Component{Object} - React component
 * @public
 */
// export function themed<P>(Component: React.ComponentType<P> | keyof JSX.IntrinsicElements) {
//   // eslint-disable-next-line
//   return (str: any, ...keys: Interpolation<IThemedComponent<P>>[]) => {
//     const Styled = styled(
//       React.forwardRef(
//         // eslint-disable-next-line
//         // @ts-ignore
//         // eslint-disable-next-line
//         ({ theme, ...rest }: any, ref) => <Component {...rest} ref={ref} />
//         // Ultimately, the goal here is to properly type the `theme`, `Component`, and `ref`,
//         // But it's just not working out. Saving this for a future time. -BS
//         // ({ theme, ...rest }: IThemedComponent<P>, ref) => <Component {...rest} ref={ref} />
//       )
//     )(str, ...keys);

//     const themedComponent = withTheme(Styled);
//     themedComponent.displayName = 'themed' + typeof Component;
//     return themedComponent;
//   };
// }

// Use the following format instead of themed to maintain support for static-rendering deployment:
//
// const StyledPaper = themed(Paper)``);
//
// becomes:
//
// const StyledPaper = withTheme(styled(Paper)``);
//

/**
 * Returns a in value with the specified unit given a number or a value in a string.
 *
 * If a unit is already specified on the first argument, the unit is not
 * appended and the original value is used. This does support whitespace-
 * separated shorthand values that may or may not include units.
 *
 * @param val (Number|String)
 */
export function appendUnit(val: number | string, unit: string) {
  if (typeof val === 'string') {
    // an array of 1 is just the value, no actual shorthand, but can be processed the same way.
    const cleanedValues = val.split(/\s+/g).map(v =>
      // If it ends in a non-digit character, it already has unit, just return that, otherwise append the unit
      v.match(/\D$/) ? v : `${v}${unit}`
    );
    return cleanedValues.join(' ');
  }
  return `${val}${unit}`;
}

/**
 * Returns a `px` suffixed string given a number or a value in a string.
 *
 * @param val (Number|String)
 * @public
 */
export const px = (val: number | string) => appendUnit(val, 'px');

export const hexOpacity = (opacity: number) => {
  const maxHexOpacity = parseInt('FF', 16);
  const boundedOpacity = Math.max(Math.min(1, opacity), 0);
  const hexOpacity = Math.round(boundedOpacity * maxHexOpacity).toString(16);
  return hexOpacity.padStart(2, '0');
  // return hexOpacity.length === 2 ? hexOpacity : `0${hexOpacity}`;
};

export const fade = (color: string, opacity: number) => color + hexOpacity(opacity);

// export function spacing(...args: SpacingArgument[]): Spacing {
//   return ({ theme }: IThemedComponent<{}>) => px(theme.spacing.apply(null, args))
// };
