import Grid, { GridProps } from '@material-ui/core/Grid';
import { styled as muiStyled } from '@material-ui/core/styles';
import { spacing, SpacingProps } from '@material-ui/system';

// interface GridBox extends GridProps, SpacingProps {}

// Add the `spacing` props to Grid
const GridBox = muiStyled(Grid)(spacing);

export default GridBox;
export { GridBox };
