import { ButtonProps, withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import Button, { ButtonGetDemo, ButtonReadMore } from 'src/components/Button';
import GridBox, { GridBoxProps } from 'src/components/GridBox';
import Image, { ImageProps } from 'src/components/Image';
import { px } from 'src/utils/theme';
import styled from 'styled-components';
import { LinkProps } from './Link';

const SectionContainer = withTheme(styled(Container)`
  margin-bottom: ${({ theme }) => px(theme.spacing(9))};
  &:last-child {
    margin-bottom: 0;
  }
`);

const StyledPaper = withTheme(styled(Paper)``);

const TitleGridBox = withTheme(styled(GridBox)`
  text-shadow: 0px 2px black, 0px 2px 10px rgba(0, 0, 0, 0.6);
`);

const BodyGridBox = withTheme(styled(GridBox)`
  text-shadow: 0px 1px 1px black, 0px 3px 9px rgba(0, 0, 0, 0.6);

  .MuiTypography-paragraph:last-child {
    margin-bottom: 0;
  }
`) as typeof GridBox;

const StyledImage = (props: ImageProps) => <Image minHeight={300} borderRadius='borderRadius' {...props} />;

const countChildren = (children: React.ReactNode | React.ReactChildren) =>
  React.Children.toArray(children).filter(c => Boolean(c)).length;

const roundTo = (num: number, toPlaces = 0) => Math.round(num * Math.pow(10, toPlaces)) / Math.pow(10, toPlaces);

const twoColumns = roundTo(2 / 12, 4);
// Must double this, since it's being applied inside a box that's half the normal width.
const doubleTwoColumns = twoColumns * 2;

const TuckingBox = withTheme(styled(Box)`
  min-height: 300px;
  width: 100%;
  height: 100%;
  position: relative;

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: ${(1 + doubleTwoColumns) * 100}%;
  }
`) as typeof Box;

const ReverseTuckingBox = withTheme(styled(TuckingBox)`
  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-inline-start: ${roundTo(doubleTwoColumns * -100, 4)}%;
  }
`) as typeof TuckingBox;

type BaseSectionProps = {
  children: React.ReactNode;
  src?: string;
  title: string;
  variant?: TypographyProps['variant'];
};

interface ContentProps extends BaseSectionProps {
  buttonProps?: ButtonProps & LinkProps;
  buttonText?: string;
}

interface SectionProps extends ContentProps {
  flip?: boolean;
  image?: React.ReactNode;
  minHeight?: GridBoxProps['minHeight'];
  tuckImage?: boolean;
}

const Content = ({
  buttonProps,
  buttonText,
  children,
  direction = 'column',
  justify = 'center',
  title,
  variant = 'h4',
  ...rest // Rest allows all props from GridBoxProps to be applied to the containing GridBox component
}: ContentProps & GridBoxProps) => {
  let button;
  switch (buttonText) {
    case 'getDemo':
      button = <ButtonGetDemo {...buttonProps} />;
      break;
    case 'readMore':
      button = <ButtonReadMore {...buttonProps} />;
      break;
    default:
      button = <Button {...buttonProps}>{buttonText}</Button>;
  }
  return (
    <GridBox {...rest} direction={direction} justify={justify} container>
      <TitleGridBox item>
        <Typography variant={variant}>{title}</Typography>
      </TitleGridBox>
      <BodyGridBox item mt={{ xs: 2, md: 5 }}>
        {children}
      </BodyGridBox>
      {buttonText && (
        <GridBox item mt={{ xs: 2, md: 5 }}>
          {button}
        </GridBox>
      )}
    </GridBox>
  );
};

const Section = ({ buttonText, children, flip, minHeight, image, src, title, tuckImage, variant }: SectionProps) => {
  let imageTag = image || <StyledImage src={src} />;
  if (tuckImage) {
    let ImageContainerComponent = TuckingBox;
    if (flip) {
      ImageContainerComponent = ReverseTuckingBox;
    }
    imageTag = <ImageContainerComponent>{imageTag}</ImageContainerComponent>;
  }

  // Add a min-height for any h3 variant, if a custom one doesn't exist.
  if (variant === 'h3' && minHeight == null) {
    minHeight = { md: 458 };
  }

  return (
    <SectionContainer component='section' disableGutters>
      <StyledPaper elevation={0}>
        <Grid container spacing={tuckImage ? 0 : 3} direction={flip ? 'row-reverse' : 'row'}>
          <Grid item xs={12} md={6}>
            {imageTag}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box position='relative'>
              <Content title={title} buttonText={buttonText} minHeight={minHeight} variant={variant}>
                {children}
              </Content>
            </Box>
          </Grid>
        </Grid>
      </StyledPaper>
    </SectionContainer>
  );
};
const FullWidthSection = ({ children, src, title, variant = 'h5' }: BaseSectionProps) => (
  <SectionContainer component='section' disableGutters>
    <StyledPaper elevation={0}>
      <Box>
        {title ? (
          <Box mb={{ xs: 2, md: 5 }}>
            <Typography variant={variant}>{title}</Typography>
          </Box>
        ) : null}
        <StyledImage src={src} />
        {countChildren(children) ? <Box mt={{ xs: 2, md: 5 }}>{children}</Box> : null}
      </Box>
    </StyledPaper>
  </SectionContainer>
);

export default Section;
export { Section, Content as SectionContent, FullWidthSection };
