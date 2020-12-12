import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText, { ListItemTextProps } from '@material-ui/core/ListItemText';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

export type LiProps = ListItemProps;
export type LiTextProps = ListItemTextProps;

const LiText = withTheme(styled(ListItemText)`
  .MuiTypography-displayBlock {
    display: inline-block;

    &::before {
      content: '–';
      display: inline-block;
      color: ${({ theme }) => theme.palette.text.secondary};
      // color: ${({ theme }) => theme.palette.secondary.dark};
      text-indent: -1.6ex; // Position the - just inside the Mui-LI's padding

      ol & {
        content: counter(list-item-counter) '.\x0000a0 '; // Inject a "hard" space, since trailing spaces get trimmed.
        text-align: right;
        text-indent: -8ex;
      }
    }
  }
`) as React.FC<LiTextProps>;

const Li = withTheme(styled(ListItem)`
  padding-top: initial;
  padding-bottom: initial;
  counter-increment: list-item-counter;

  .MuiListItemText-root {
    margin-top: initial;
    margin-bottom: initial;
  }
`) as React.FC<LiProps>;

export default Li;
export { Li, LiText };
