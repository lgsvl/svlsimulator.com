import { withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid, { GridProps } from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import MoreArrows from 'src/components/MoreArrows';
import Page from 'src/components/Page';
import { SectionContent } from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslations';
import styled from 'styled-components';
import { px } from 'src/utils/theme';
import { ButtonGetDemo } from 'src/components/Button';
import { IconApollo, IconBaidu, IconUnity, IconVelodyne } from 'src/components/Icons';

const Center = withTheme(styled(Container)`
  text-align: center;
  max-width: ${({ theme }) => px(theme.spacing(90))};
`);

const Image = withTheme(styled(Box)`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(-205deg, white, #9c27b0 30%, black);
  border-radius: 20px;
`);

const SmallImage = withTheme(styled(Image)`
  height: 456px;

  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
      height: 300px;
    }
    ${theme.breakpoints.down('xs')} {
      height: 200px;
    }
  `}
`);

const HeroBox = withTheme(styled(Box)`
  // height: 70vh;
  background-image: linear-gradient(-205deg, white, #9c27b0 30%, black);
`);

const HeroGrid = withTheme(styled(Grid)`
  height: 100%;
`);

const TypoWrapper = (str: string) => <Typography>{str}</Typography>;

// type SectionProps = {
//   buttonText?: string;
//   children: React.ReactNode;
//   direction?: GridProps['direction'];
//   title: string;
// };
// const Section = ({ buttonText, children, direction, title }: SectionProps) => (
//   <Grid container direction='column' spacing={5}>
//     <Grid item>
//       <Typography variant='h3'>{title}</Typography>
//     </Grid>
//     <Grid item>{children}</Grid>
//     {buttonText && (
//       <Grid item>
//         <Button color='primary' variant='contained'>
//           {buttonText}
//         </Button>
//         {/* <Button variant='outlined'>{buttonText}</Button> */}
//       </Grid>
//     )}
//   </Grid>
// );

const brandIconProps = { color: '#6D7B97', height: '100%', width: '100%' };

export default function Home() {
  const { t, tMap } = useTranslation();
  return (
    <Page>
      <HeroBox mb={15} height='70vh'>
        <HeroGrid container direction='column' alignItems='center' justify='center'>
          <Grid item>
            <Typography variant='h1'>{t('home.title')}</Typography>
          </Grid>
          <Grid item>
            <Center disableGutters>
              {tMap('home.body', TypoWrapper)}
              <Box mt={6}>
                <ButtonGetDemo />
              </Box>
            </Center>
          </Grid>
        </HeroGrid>
        <MoreArrows />
      </HeroBox>

      <Box my={15}>
        <Grid container>
          <Grid item xs={6}>
            <Image />
          </Grid>
          <Grid item xs={6}>
            <SectionContent title={t('home.section1.title')} buttonText='getDemo'>
              {tMap('home.section1.body', TypoWrapper)}
            </SectionContent>
          </Grid>
        </Grid>
      </Box>

      <Box my={15}>
        <Grid container direction='row-reverse'>
          <Grid item xs={6}>
            <Image />
          </Grid>
          <Grid item xs={6}>
            <SectionContent title={t('home.section2.title')} buttonText='getDemo'>
              {tMap('home.section2.body', TypoWrapper)}
            </SectionContent>
          </Grid>
        </Grid>
      </Box>

      <Box my={15}>
        <Center disableGutters>
          <Grid container spacing={8}>
            <Grid item xs={6} sm={3}>
              <IconBaidu {...brandIconProps} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <IconApollo {...brandIconProps} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <IconUnity {...brandIconProps} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <IconVelodyne {...brandIconProps} />
            </Grid>
          </Grid>
        </Center>
      </Box>

      <Box my={15}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SmallImage />
            <SectionContent title={t('home.features.0.title')} buttonText='Read More'>
              {tMap('home.features.0.body', TypoWrapper)}
            </SectionContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SmallImage />
            <SectionContent title={t('home.features.1.title')} buttonText='Read More'>
              {tMap('home.features.1.body', TypoWrapper)}
            </SectionContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SmallImage />
            <SectionContent title={t('home.features.2.title')} buttonText='Read More'>
              {tMap('home.features.2.body', TypoWrapper)}
            </SectionContent>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}
