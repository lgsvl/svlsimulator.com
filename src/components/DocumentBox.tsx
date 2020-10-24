import Box, { BoxProps } from '@material-ui/core/Box';
import { withTheme } from '@material-ui/core/styles';
// import { useTranslation } from 'src/hooks/useTranslations';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Button from 'src/components/Button';
import { IconDocument } from 'src/components/Icons';
import styled from 'styled-components';

const StyledDocumentBox = withTheme(styled(Box)`
  border-color: ${({ theme }) => theme.palette.background.paper};
`);

const DocumentBox = ({ title, label, buttonText, ...rest }: BoxProps & { label?: string; buttonText?: string }) => (
  <StyledDocumentBox display='flex' alignItems='center' border={1} my={4} p={2} borderRadius='borderRadius' {...rest}>
    <Box>
      <IconDocument />
    </Box>
    <Box flexGrow={1} ml={2}>
      <Typography>{title}</Typography>
      {label ? <Typography variant='body2'>{label}</Typography> : null}
    </Box>
    {buttonText ? (
      <Box ml={2}>
        <Button>{buttonText}</Button>
      </Box>
    ) : null}
  </StyledDocumentBox>
);

export default DocumentBox;
export { DocumentBox };
