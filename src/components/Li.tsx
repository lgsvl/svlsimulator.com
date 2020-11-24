import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText, { ListItemTextProps } from '@material-ui/core/ListItemText';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

const LiText = withTheme(styled(ListItemText)`
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
`) as React.FC<ListItemTextProps>;

const Li = withTheme(styled(ListItem)`
  padding-top: initial;
  padding-bottom: initial;

  .MuiListItemText-root {
    margin-top: initial;
    margin-bottom: initial;
  }
`) as React.FC<ListItemProps>;

export default Li;
export { Li, LiText };
