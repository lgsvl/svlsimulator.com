import Box, { BoxProps } from '@material-ui/core/Box';
import { useTheme, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { LinkButton, LinkButtonProps } from 'src/components/Button';
import { IconDocument } from 'src/components/Icons';
import styled from 'styled-components';

const StyledDocumentBox = withTheme(styled(Box)`
  border-color: ${({ theme }) => theme.palette.background.paper};
`);

const LabelTypo = withTheme(styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.dark};
`);

export interface DocumentBoxProps extends BoxProps {
  label?: string;
  buttonText?: string;
  to?: LinkButtonProps['to'];
}

const DocumentBox = ({ title, label, buttonText, to, ...rest }: DocumentBoxProps) => {
  const theme = useTheme();
  const isXs = !useMediaQuery(theme.breakpoints.up('sm'));
  const iconSize = isXs ? 42 : 80;
  return (
    <StyledDocumentBox
      border={1}
      my={4}
      p={2}
      alignItems='center'
      wrap='nowrap'
      display='flex'
      flexDirection={isXs ? 'column' : 'row'}
      borderRadius='borderRadius'
      {...rest}
    >
      <Box>
        <IconDocument height={iconSize} width={iconSize} />
      </Box>
      <Box flexGrow={1} ml={isXs ? 0 : 2} mt={isXs ? 1 : 0} textAlign={isXs ? 'center' : null}>
        <Typography>{title}</Typography>
        {label ? <LabelTypo variant='overline'>{label}</LabelTypo> : null}
      </Box>
      {buttonText ? (
        <Box ml={isXs ? 0 : 2} mt={isXs ? 3 : 0}>
          <LinkButton buttonVariant='outlined' to={to}>
            {buttonText}
          </LinkButton>
        </Box>
      ) : null}
    </StyledDocumentBox>
  );
};

export default DocumentBox;
export { DocumentBox };
