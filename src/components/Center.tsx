import Container, { ContainerProps } from '@material-ui/core/Container';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';
import { px } from 'src/utils/theme';
import styled from 'styled-components';

interface CenterProps extends Omit<ContainerProps, 'maxWidth'> {
  maxWidth?: ContainerProps['maxWidth'] | number;
}

const StyledCenter = withTheme(styled(({ maxWidth, ...rest }) => (
  <Container {...rest} maxWidth={typeof maxWidth !== 'number' ? maxWidth : undefined} />
))`
  text-align: center;
  ${({ maxWidth, theme }) => (typeof maxWidth === 'number' ? `max-width: ${px(theme.spacing(maxWidth))};` : '')}
`);

const Center = ({ maxWidth, ...rest }: CenterProps) => <StyledCenter {...rest} maxWidth={maxWidth} />;

export default Center;
export { Center };
