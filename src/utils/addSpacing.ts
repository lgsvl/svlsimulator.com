import { styled as muiStyled } from '@material-ui/core/styles';
import { spacing, SpacingProps } from '@material-ui/system';

type SpacedComponent<T> = React.FC<T & SpacingProps & {
  component?: React.ComponentType | keyof JSX.IntrinsicElements
}>;

// Add the `spacing` props to the component
const addSpacing = <T>(Comp: React.FC<T>) => muiStyled(Comp)(spacing) as SpacedComponent<T>;

export default addSpacing;
export { addSpacing };
