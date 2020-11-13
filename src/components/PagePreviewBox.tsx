import Box, { BoxProps } from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React, { VideoHTMLAttributes } from 'react';
import { ReadMoreButton } from 'src/components/Button';
import { ImageBase, ImageProps } from 'src/components/Image';
import { useTranslation } from 'src/hooks/useTranslations';
import srcCloudVideo from 'src/videos/cloud-simulation.mp4';
import srcDigitalTwinVideo from 'src/videos/digital-twin.mp4';
import srcSimulationVideo from 'src/videos/simulation-platform.mp4';
import srcCloudPoster from 'src/images/cloud-simulation.jpg';
import srcDigitalTwinPoster from 'src/images/digital-twin.jpg';
import srcSimulationPoster from 'src/images/simulation-platform.jpg';
import BackgroundVideo from './BackgroundVideo';

export interface PagePreviewBoxProps extends BoxProps {
  buttonText?: string;
  link: string;
  poster: React.VideoHTMLAttributes<HTMLVideoElement>['poster'];
  src: React.VideoHTMLAttributes<HTMLVideoElement>['src'];
  title: string;
}

const PagePreviewBox = ({ title, buttonText, link, poster, src, ...rest }: PagePreviewBoxProps) => (
  <Box
    mt={{ xs: 8, md: 16 }}
    p={4}
    alignItems='center'
    justifyContent='center'
    display='flex'
    position='relative'
    flexDirection='column'
    {...rest}
  >
    <BackgroundVideo src={src} poster={poster} position='absolute' fit='cover' />
    <Box mb={3}>
      <Typography>{title}</Typography>
    </Box>
    <Box>
      <ReadMoreButton to={link} />
    </Box>
  </Box>
);

const CloudPreviewBox = () => {
  const { t } = useTranslation();
  return <PagePreviewBox title={t('cloud.title')} link='/product/cloud' src={srcCloudVideo} poster={srcCloudPoster} />;
};

const DigitalTwinPreviewBox = () => {
  const { t } = useTranslation();
  return (
    <PagePreviewBox
      title={t('digitaltwin.title')}
      link='/product/digitaltwin'
      src={srcDigitalTwinVideo}
      poster={srcDigitalTwinPoster}
    />
  );
};

const SimulationPreviewBox = () => {
  const { t } = useTranslation();
  return (
    <PagePreviewBox
      title={t('simulation.title')}
      link='/product/simulation'
      src={srcSimulationVideo}
      poster={srcSimulationPoster}
    />
  );
};

export default PagePreviewBox;
export { PagePreviewBox, CloudPreviewBox, SimulationPreviewBox, DigitalTwinPreviewBox };
