import Box, { BoxProps } from '@material-ui/core/Box';
import { GridProps } from '@material-ui/core/Grid';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
import { px } from 'src/utils/theme';

interface LayoutGridProps {
  xs?: GridProps['xs'];
  sm?: GridProps['sm'];
  md?: GridProps['md'];
  lg?: GridProps['lg'];
  xl?: GridProps['xl'];
  spacing?: GridProps['spacing'];
}

const JustBox = ({ xs, sm, md, lg, xl, spacing, ...rest }: LayoutGridProps) => <Box {...rest} />;

const StyledBox = withTheme(styled(JustBox)`
  ${({ theme, xs, sm, md, lg, xl, spacing }) => `
  display: grid;
  grid-gap: ${px(theme.spacing(spacing))};
  // grid-template-columns: repeat(4, 1fr);

  ${xs && theme.breakpoints.up('xs')} {
    grid-template-columns: repeat(${xs}, 1fr);
  }
  ${sm && theme.breakpoints.up('sm')} {
    grid-template-columns: repeat(${sm}, 1fr);
  }
  ${md && theme.breakpoints.up('md')} {
    grid-template-columns: repeat(${md}, 1fr);
  }
  ${lg && theme.breakpoints.up('lg')} {
    grid-template-columns: repeat(${lg}, 1fr);
  }
  ${xl && theme.breakpoints.up('xl')} {
    grid-template-columns: repeat(${xs}, 1fr);
  }
`}
`);

const LayoutGrid: React.FC<BoxProps & LayoutGridProps> = props => <StyledBox {...props} />;

export default LayoutGrid;
export { LayoutGrid };
