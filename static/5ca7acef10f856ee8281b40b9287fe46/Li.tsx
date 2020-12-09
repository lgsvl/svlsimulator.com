import ListItemText, { ListItemTextProps } from '@material-ui/core/ListItemText';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

const Li = withTheme(styled(ListItemText)`
  .MuiTypography-displayBlock {
    display: inline-block;
    text-indent: -1em;

    &::before {
      content: '–';
      display: inline-block;
      width: 1em;
      text-indent: 0.2em;
    }
  }
`);

export default Li;
export { Li };
