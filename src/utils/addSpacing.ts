import { styled as muiStyled } from '@material-ui/core/styles';
import { spacing, SpacingProps } from '@material-ui/system';

// Add the `spacing` props to the component
const addSpacing = (Comp: React.FC) => muiStyled(Comp)(spacing);

export default addSpacing;
export { addSpacing };
