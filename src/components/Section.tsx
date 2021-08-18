import Box, { BoxProps } from '@material-ui/core/Box';
import { ButtonProps } from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { fade, withTheme, useTheme } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import Button, { ReadMoreButton, RequestDemoButton, UseFreeButton } from 'src/components/Button';
import GridBox, { GridBoxProps } from 'src/components/GridBox';
import Image, { ImageProps } from 'src/components/Image';
import { PageSection, PageSectionProps } from 'src/components/Page';
import { px } from 'src/utils/theme';
import styled from 'styled-components';
import BackgroundVideo from './BackgroundVideo';
import EntranceAnimation from './EntranceAnimation';
import { LinkProps } from './Link';
import VisualizationFrame, { VisualizationFrameProps } from 'src/components/VisualizationFrame';
import { RequestDemoFormMode } from 'src/@types/shared.d';

// Top of section is offset 9 spacing units so any section hash-linking
// will link at that document scroll position, which accounts for extra
// space for the floating fixed app bar header.
const SpacedSectionContainer = withTheme(styled(PageSection)`
  margin-top: ${({ theme }) => px(theme.spacing(-9))};
  padding-top: ${({ theme }) => px(theme.spacing(9))};
  margin-bottom: ${({ theme }) => px(theme.spacing(9))};
  &:last-child {
    margin-bottom: 0;
  }
`) as React.FC<PageSectionProps<'section', { component: string }>>;

const TitleGridBox = withTheme(styled(GridBox)`
  text-shadow: 0px 2px black, 0px 2px 10px rgba(0, 0, 0, 0.6);
`) as React.FC<GridBoxProps>;

interface StyledBodyGridBoxProps {
  /** Adds a little faded background behind the text, but only if `tuckImage` is also true. */
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

interface ShadowBoxProps extends BoxProps {
  flip?: boolean;
}
const ShadowBox = withTheme(styled(({ flip, ...rest }: ShadowBoxProps) => <Box {...rest} />)`
  -webkit-mask-image: -webkit-gradient(
    linear,
    ${({ flip }) => (flip ? 'left top, right top' : 'right top, left top')},
    color-stop(0, ${({ theme }) => fade(theme.palette.background.paper, 1)}),
    color-stop(0.85, ${({ theme }) => fade(theme.palette.background.paper, 1)}),
    color-stop(0.9, ${({ theme }) => fade(theme.palette.background.paper, 0.7)}),
    color-stop(0.95, ${({ theme }) => fade(theme.palette.background.paper, 0.3)}),
    color-stop(1, ${({ theme }) => fade(theme.palette.background.paper, 0)})
  );
`) as React.FC<ShadowBoxProps>;

const StyledImage = (props: ImageProps) => <Image minHeight={300} borderRadius='borderRadius' {...props} />;

const countChildren = (children: React.ReactNode | React.ReactChildren) =>
  React.Children.toArray(children).filter(c => Boolean(c)).length;

const roundTo = (num: number, toPlaces = 0) => Math.round(num * Math.pow(10, toPlaces)) / Math.pow(10, toPlaces);

// Must double this, since it's being applied inside a box that's half the normal width.
const doubleOneColumn = 2 / 12;

export type ColumnsType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type TuckingBoxProps = BoxProps & {
  imageColumns: ColumnsType;
};

const TuckingBox = withTheme(styled(({ imageColumns, ...rest }) => <Box {...rest} />)`
  ${({ imageColumns, theme }) => `
  min-height: 300px;
  width: 100%;
  height: 100%;
  position: relative;

  ${theme.breakpoints.up('md')} {
    width: ${roundTo(doubleOneColumn * imageColumns * 100, 4)}%;
  }
`}
`) as React.FC<TuckingBoxProps>;

const ReverseTuckingBox = withTheme(styled(TuckingBox)`
  ${({ imageColumns, theme }) => {
    // Avoid the godforsaken prettier rule that takes out mandatory parenthesis
    const offset = doubleOneColumn * imageColumns * -100;
    return `
      ${theme.breakpoints.up('md')} {
        margin-inline-start: ${roundTo(offset + 100, 4)}%;
      }
    `;
  }}
`) as React.FC<TuckingBoxProps>;

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
  imageColumns?: ColumnsType;
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
    case 'contactUs':
      button = (
        <RequestDemoButton mode={RequestDemoFormMode.ContactUs} color='secondary' variant='outlined' {...buttonProps} />
      );
      break;
    case 'getDemo':
      button = <RequestDemoButton {...buttonProps} />;
      break;
    case 'useFree':
      button = <UseFreeButton {...buttonProps} />;
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
        <TitleGridBox item mb={{ xs: 2, md: 5 }}>
          <Typography variant={variant}>{title}</Typography>
        </TitleGridBox>
      )}
      <BodyGridBox item flip={flip} contained={contained} tuckImage={tuckImage}>
        {typeof children === 'string' || typeof children === 'number' ? <Typography>{children}</Typography> : children}
        {buttonText && <Box mt={{ xs: 2 }}>{button}</Box>}
      </BodyGridBox>
    </GridBox>
  );
};

const Section = ({
  buttonText,
  buttonProps,
  children,
  imageColumns,
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
  const theme = useTheme();
  const isNarrow = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true
  });

  // If an amount of imageColumns was not set, but it is a tuckImage, go ahead and set a default value.
  if (!imageColumns) {
    imageColumns = tuckImage ? 8 : 6;
  }

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
    imageTag = <ImageContainerComponent imageColumns={imageColumns}>{imageTag}</ImageContainerComponent>;
  }

  // Add a min-height for any h3 variant, if a custom one doesn't exist.
  if (variant === 'h3' && minHeight == null) {
    minHeight = { md: 458 };
  }

  let columnsForImage: GridBoxProps['md'] = imageColumns;
  let columnsForText: GridBoxProps['md'] =
    typeof columnsForImage === 'number' ? ((12 - columnsForImage) as GridBoxProps['md']) : columnsForImage;

  if (tuckImage) {
    columnsForImage = 6;
    columnsForText = 6;
  }

  return (
    <SpacedSectionContainer component='section' id={title ? title.toLowerCase().replace(/\s+/g, '-') : undefined}>
      <Grid
        container
        spacing={tuckImage && !isNarrow ? 0 : 3}
        direction={flip ? 'row-reverse' : 'row'}
        alignItems='center'
      >
        <Grid item xs={12} md={columnsForImage} style={{ alignSelf: 'stretch' }}>
          {imageTag}
        </Grid>
        <Grid item xs={12} md={columnsForText}>
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

export type VisualizationSectionProps = BoxProps &
  SectionProps & {
    animate?: boolean;
    bgPosition?: string;
    webp?: string;
  };

const VisualizationSection: React.FC<VisualizationSectionProps> = ({
  animate,
  bgPosition,
  buttonProps,
  buttonText = 'contactUs',
  children,
  contained,
  flip,
  image,
  imageColumns,
  minHeight,
  src,
  title,
  tuckImage,
  variant,
  video,
  webp,
  ...rest
}) => {
  // If an amount of imageColumns was not set, but it is a tuckImage, go ahead and set a default value.
  if (!imageColumns) {
    imageColumns = tuckImage ? 8 : 6;
  }

  let columnsForImage: GridBoxProps['md'] = imageColumns;
  let columnsForText: GridBoxProps['md'] =
    typeof columnsForImage === 'number' ? ((12 - columnsForImage) as GridBoxProps['md']) : columnsForImage;

  if (tuckImage) {
    columnsForImage = 6;
    columnsForText = 6;
  }

  return (
    <Box {...rest}>
      <EntranceAnimation disabled={!animate}>
        <Grid container spacing={2} alignItems='center' justify='center' direction={flip ? 'row-reverse' : 'row'}>
          <Hidden xsDown>
            <Grid item xs={10} md={columnsForImage} style={{ overflow: 'hidden', height: 570 }}>
              <ShadowBox position='relative' height={1} overflow='hidden' flip={flip}>
                <VisualizationFrame
                  src={src}
                  webp={webp}
                  style={{ position: 'absolute', right: flip ? 'auto' : 0, height: '100%' }}
                  bgPosition={bgPosition}
                />
              </ShadowBox>
            </Grid>
          </Hidden>
          <Grid item xs={12} md={columnsForText}>
            {/* <Typography variant='h4'>{title}</Typography>
          {children}
          <RequestDemoButton mode={RequestDemoFormMode.ContactUs} /> */}
            <EntranceAnimation disabled={!animate}>
              <Content
                title={title}
                buttonText={buttonText}
                buttonProps={buttonProps}
                minHeight={minHeight}
                variant={variant}
                contained={contained}
                flip={flip}
              >
                {children}
              </Content>
            </EntranceAnimation>
          </Grid>
        </Grid>
      </EntranceAnimation>
    </Box>
  );
};

export default Section;
export { Section, Content as SectionContent, FullWidthSection, VisualizationSection };
