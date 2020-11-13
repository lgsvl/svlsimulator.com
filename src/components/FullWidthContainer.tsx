import Container, { ContainerProps } from '@material-ui/core/Container';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';
import { px } from 'src/utils/theme';
import styled from 'styled-components';

const PAGE_MAX_WIDTH = 1280;
const PAGE_PADDING = 24;
const PAGE_PADDING_XS = 16;
const SCROLLBAR_MD = 7;
const SCROLLBAR_XS = 15;

// prettier-ignore
const StyledContainer = withTheme(styled(Container)`
  ${({ theme }) => `

  ${theme.breakpoints.up('xs')} {
    width: calc(100vw - ${px(SCROLLBAR_XS)});
    max-width: calc(100vw - ${px(SCROLLBAR_XS)});
    margin-left: ${px(PAGE_PADDING_XS * -1)};
    margin-right: ${px(PAGE_PADDING_XS * -1)};
  }
  ${theme.breakpoints.up('sm')} {
    width: calc(100vw - ${px(SCROLLBAR_XS)});
    max-width: calc(100vw - ${px(SCROLLBAR_XS)});
    margin-left: ${px(PAGE_PADDING * -1)};
    margin-right: ${px(PAGE_PADDING * -1)};
  }
  ${theme.breakpoints.up('md')} {
    width: calc(100vw - ${px(SCROLLBAR_MD)});
    max-width: calc(100vw - ${px(SCROLLBAR_MD)});
  }
  ${theme.breakpoints.up('lg')} {
    margin-left: calc(((100vw - ${px(PAGE_MAX_WIDTH - (PAGE_PADDING * 2))}) / -2));
    margin-right: calc(((100vw - ${px(PAGE_MAX_WIDTH - (PAGE_PADDING * 2))}) / -2));
  }
`}
`) as React.FC<ContainerProps>;

const FullWidthContainer: React.FC<ContainerProps> = props => <StyledContainer disableGutters {...props} />;

export default FullWidthContainer;
export { FullWidthContainer };
