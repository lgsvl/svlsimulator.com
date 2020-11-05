import { styled as muiStyled } from '@material-ui/core/styles';
import { compose, spacing, SpacingProps, sizing, SizingProps } from '@material-ui/system';

type SpacedProps<T = {}> = T &
  SpacingProps &
  SizingProps & {
    component?: React.ComponentType | React.ReactHTMLElement<HTMLElement>;
  };

type SpacedComponent<T> = React.FC<SpacedProps<T>>;

// Add the `spacing` and `sizing` props to the component
const addSpacing = <T>(Comp: SpacedComponent<T>) => muiStyled(Comp)(compose(spacing, sizing));

export default addSpacing;
export { addSpacing };
export type { SpacedComponent, SpacedProps };
