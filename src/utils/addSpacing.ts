import { styled as muiStyled } from '@material-ui/core/styles';
import { spacing, SpacingProps } from '@material-ui/system';

// Add the `spacing` props to the component
//const addSpacing = (Comp: React.FC) => muiStyled(Comp)(spacing) as React.FC<any>;

function addSpacing<T>(Comp: React.FC<T>) {
  return muiStyled(Comp)(spacing) as React.FC<
    T & SpacingProps & { component?: React.ComponentType | keyof JSX.IntrinsicElements }
  >;
}

export default addSpacing;
export { addSpacing };
