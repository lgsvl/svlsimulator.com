import Box, { BoxProps } from '@material-ui/core/Box';
import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { ButtonReadMore } from 'src/components/Button';
import styled from 'styled-components';
import { useTranslation } from 'src/hooks/useTranslations';
import srcCloudPoster from 'src/images/cloud-simulation.jpg';
import srcDigitalTwinPoster from 'src/images/digital-twin.jpg';
import srcSimulationPoster from 'src/images/simulation-platform.jpg';

const StyledPagePreviewBox = withTheme(styled(({ src, ...rest }) => <Box {...rest} />)`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
`);

const PagePreviewBox = ({
  title,
  buttonText,
  link,
  ...rest
}: BoxProps & { buttonText?: string; link: string; src: string }) => (
  <StyledPagePreviewBox
    mt={{ xs: 8, md: 16 }}
    p={4}
    alignItems='center'
    wrap='nowrap'
    display='flex'
    flexDirection='column'
    {...rest}
  >
    <Box mb={3}>
      <Typography>{title}</Typography>
    </Box>
    <Box>
      <ButtonReadMore to={link} />
    </Box>
  </StyledPagePreviewBox>
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
