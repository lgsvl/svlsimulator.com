import React from 'react';
import Page from '../components/Page';
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from '../hooks/useTranslations';
import { themed } from '../utils/theme';

const Center = themed('div')`
  text-align: center;
`;

export default function Home() {
  const { t } = useTranslation();
  return (
    <Page>
      <Typography>Hello world!</Typography>

      <Box my={10}>
        <Center>
          <Button color='primary' variant='contained'>
            {t('main.simulator.button')}
          </Button>
        </Center>
      </Box>

      <Box my={10}>
        <Grid container justify='flex-start'>
          <Grid item xs={6}>
            <Typography variant='h3'>Tools</Typography>
            <Typography>some description</Typography>
            <Button color='primary' variant='contained'>
              {t('main.buttons.getDemo')}
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box my={10}>
        <Grid container justify='flex-end'>
          <Grid item xs={6}>
            <Typography variant='h3'>High-fidelity</Typography>
            <Typography>some description</Typography>
            <Button color='primary' variant='contained'>
              {t('main.buttons.getDemo')}
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box my={10}>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant='h3'>Prod</Typography>
            <Typography>some description</Typography>
            <Button variant='outlined'>Read More</Button>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='h3'>Prod</Typography>
            <Typography>some description</Typography>
            <Button variant='outlined'>Read More</Button>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='h3'>Prod</Typography>
            <Typography>some description</Typography>
            <Button variant='outlined'>Read More</Button>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}
