import Grid from '@material-ui/core/Grid';
import { PropsFor } from '@material-ui/system';
import addSpacing from 'src/utils/addSpacing';

const GridBox = addSpacing(Grid);
export type GridBoxProps = PropsFor<typeof GridBox>;

export default GridBox;
export { GridBox };
