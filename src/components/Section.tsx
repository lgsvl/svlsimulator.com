import Box, { BoxProps } from '@material-ui/core/Box';
import { ButtonProps } from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { fade, withTheme } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import Button, { ReadMoreButton, RequestDemoButton } from 'src/components/Button';
import GridBox, { GridBoxProps } from 'src/components/GridBox';
import Image, { ImageProps } from 'src/components/Image';
import { PageSection, PageSectionProps } from 'src/components/Page';
import { px } from 'src/utils/theme';
import styled from 'styled-components';
import BackgroundVideo from './BackgroundVideo';
import { LinkProps } from './Link';

const SpacedSectionContainer = withTheme(styled(PageSection)`
  margin-bottom: ${({ theme }) => px(theme.spacing(9))};
  &:last-child {
    margin-bottom: 0;
  }
`) as React.FC<PageSectionProps<'section', { component: string }>>;

const TitleGridBox = withTheme(styled(GridBox)`
  text-shadow: 0px 2px black, 0px 2px 10px rgba(0, 0, 0, 0.6);
`) as React.FC<GridBoxProps>;

interface StyledBodyGridBoxProps {
  contained?: boolean;
  flip?: boolean;
  tuckImage?: boolean;
}

interface BodyGridBoxProps extends GridBoxProps, StyledBodyGridBoxProps {}

const BodyGridBox = withTheme(styled(({ contained, flip, tuckImage, ...rest }: BodyGridBoxProps) => (
  <GridBox {...rest} />
))`
  ${({ contained, flip, tuckImage, theme }) => `
  text-shadow: 0px 1px 1px black, 0px 3px 9px rgba(0, 0, 0, 0.6);

  ${
    tuckImage && contained
      ? `
    padding: ${px(theme.spacing(2, flip ? 2 : 0, 2, !flip ? 2 : 0))};
    background-color: ${fade(theme.palette.background.default, 0.6)};
    border-radius: 8px;
    ${!flip ? `margin-left: ${px(theme.spacing(-2))};` : ''}
  `
      : ''
  }

  .MuiTypography-paragraph:last-child {
    margin-bottom: 0;
  }
`}
`) as React.FC<BodyGridBoxProps>;

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
`) as React.FC<BoxProps>;

const ReverseTuckingBox = withTheme(styled(TuckingBox)`
  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-inline-start: ${roundTo(doubleTwoColumns * -100, 4)}%;
  }
`) as React.FC<BoxProps>;

type BaseSectionProps = {
  children: React.ReactNode;
  src?: string;
  title?: string;
  variant?: TypographyProps['variant'];
};

interface ContentProps extends BaseSectionProps, StyledBodyGridBoxProps {
  buttonProps?: ButtonProps & LinkProps;
  buttonText?: string;
}

interface SectionProps extends ContentProps {
  flip?: boolean;
  image?: React.ReactNode;
  minHeight?: GridBoxProps['minHeight'];
  tuckImage?: boolean;
  video?: React.VideoHTMLAttributes<HTMLVideoElement>['src'];
}

const Content = ({
  buttonProps,
  buttonText,
  children,
  contained,
  direction = 'column',
  flip,
  justify = 'center',
  title,
  tuckImage,
  variant = 'h4',
  ...rest // Rest allows all props from GridBoxProps to be applied to the containing GridBox component
}: ContentProps & GridBoxProps) => {
  let button;
  switch (buttonText) {
    case 'getDemo':
      button = <RequestDemoButton {...buttonProps} />;
      break;
    case 'readMore':
      button = <ReadMoreButton {...buttonProps} />;
      break;
    default:
      button = <Button {...buttonProps}>{buttonText}</Button>;
  }
  return (
    <GridBox {...rest} direction={direction} justify={justify} container>
      {title && (
        <TitleGridBox item>
          <Typography variant={variant}>{title}</Typography>
        </TitleGridBox>
      )}
      <BodyGridBox item mt={{ xs: 2, md: 5 }} flip={flip} contained={contained} tuckImage={tuckImage}>
        <Typography>{children}</Typography>
      </BodyGridBox>
      {buttonText && (
        <GridBox item mt={{ xs: 2, md: 5 }}>
          <Box textAlign={!flip && contained ? 'end' : undefined}>{button}</Box>
        </GridBox>
      )}
    </GridBox>
  );
};

const Section = ({
  buttonText,
  buttonProps,
  children,
  contained,
  flip,
  image,
  minHeight,
  src,
  title,
  tuckImage,
  variant,
  video
}: SectionProps) => {
  let imageTag =
    image ||
    (video ? (
      <BackgroundVideo src={video} poster={src} borderRadius='borderRadius' fit='cover' />
    ) : (
      <StyledImage src={src} />
    ));
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
    <SpacedSectionContainer component='section' id={title ? title.toLowerCase().replace(/\s+/g, '-') : undefined}>
      <Grid container spacing={tuckImage ? 0 : 3} direction={flip ? 'row-reverse' : 'row'}>
        <Grid item xs={12} md={6}>
          {imageTag}
        </Grid>
        <Grid item xs={12} md={6}>
          <Box position='relative'>
            <Content
              title={title}
              buttonText={buttonText}
              buttonProps={buttonProps}
              minHeight={minHeight}
              variant={variant}
              contained={contained}
              flip={flip}
              tuckImage={tuckImage}
            >
              {children}
            </Content>
          </Box>
        </Grid>
      </Grid>
    </SpacedSectionContainer>
  );
};

const FullWidthSection = ({ children, src, title, variant = 'h5' }: BaseSectionProps) => (
  <SpacedSectionContainer component='section' maxWidth={false}>
    {title ? (
      <Box mb={{ xs: 2, md: 5 }}>
        <Typography variant={variant}>{title}</Typography>
      </Box>
    ) : null}
    <StyledImage src={src} />
    {countChildren(children) ? <Box mt={{ xs: 2, md: 5 }}>{children}</Box> : null}
  </SpacedSectionContainer>
);

export default Section;
export { Section, Content as SectionContent, FullWidthSection };
