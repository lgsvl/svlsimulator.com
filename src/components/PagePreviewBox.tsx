import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { ReadMoreButton } from 'src/components/Button';
import { ImageBase, ImageProps } from 'src/components/Image';
import { useTranslation } from 'src/hooks/useTranslations';
import srcCloudPoster from 'src/images/cloud-simulation.jpg';
import srcDigitalTwinPoster from 'src/images/digital-twin.jpg';
import srcSimulationPoster from 'src/images/simulation-platform.jpg';

export interface PagePreviewBoxProps extends ImageProps {
  buttonText?: string;
  link: string;
}

const PagePreviewBox = ({ title, buttonText, link, ...rest }: PagePreviewBoxProps) => (
  <ImageBase mt={{ xs: 8, md: 16 }} p={4} alignItems='center' display='flex' flexDirection='column' {...rest}>
    <Box mb={3}>
      <Typography>{title}</Typography>
    </Box>
    <Box>
      <ReadMoreButton to={link} />
    </Box>
  </ImageBase>
);

const CloudPreviewBox = () => {
  const { t } = useTranslation();
  return <PagePreviewBox title={t('cloud.title')} link='/product/cloud' src={srcCloudPoster} />;
};

const DigitalTwinPreviewBox = () => {
  const { t } = useTranslation();
  return <PagePreviewBox title={t('digitaltwin.title')} link='/product/digitaltwin' src={srcDigitalTwinPoster} />;
};

const SimulationPreviewBox = () => {
  const { t } = useTranslation();
  return <PagePreviewBox title={t('simulation.title')} link='/product/simulation' src={srcSimulationPoster} />;
};

export default PagePreviewBox;
export { PagePreviewBox, CloudPreviewBox, SimulationPreviewBox, DigitalTwinPreviewBox };
