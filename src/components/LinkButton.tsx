import Button, { ButtonProps } from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
import Link, { LinkProps } from './Link';

const StyledButton = withTheme(styled(Button)``);

type LinkButtonProps = ButtonProps & Partial<LinkProps>;

const LinkButton = React.forwardRef((props: LinkButtonProps, ref) => (
  <StyledButton {...props} underline='none' component={Link} ref={ref} />
));

export default LinkButton;
export { LinkButton };
