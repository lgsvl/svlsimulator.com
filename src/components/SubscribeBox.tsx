import mailchimp from '@mailchimp/mailchimp_marketing';
import Box, { BoxProps } from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Grid, { GridProps } from '@material-ui/core/Grid';
import InputAdornment, { InputAdornmentProps } from '@material-ui/core/InputAdornment';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import BackgroundVideo from 'src/components/BackgroundVideo';
import GridBox from 'src/components/GridBox';
import Input, { InputProps } from 'src/components/Input';
import { useTranslation } from 'src/hooks/useTranslations';
import videoSrcSubscribe from 'src/videos/Subscription.mp4';
import styled from 'styled-components';
import * as yup from 'yup';
import Button, { ButtonProps } from './Button';
import { PageSectionFullWidth } from './Page';

mailchimp.setConfig({
  apiKey: 'xxxx',
  server: 'yyyy'
});
const MAILCHIMP_SUBSCRIBE_AUDIENCE_ID = '123';

const FullHeightGrid = withTheme(styled(Grid)`
  height: 100%;
`) as React.FC<GridProps>;

type FadingPaperProps = PaperProps & {
  showBackground?: boolean;
};
const FadingPaper: React.FC<FadingPaperProps> = ({ showBackground, ...rest }) => <Paper {...rest} />;
const StyledPaper = withTheme(styled(FadingPaper)`
  ${({ theme, showBackground }) => `
  background-color: ${showBackground ? theme.palette.background.paper : 'transparent'};
  transition: ${theme.transitions.create('background-color', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  })};
`}
`) as React.FC<FadingPaperProps>;

const StyledInput = withTheme(styled(Input)`
  & .MuiOutlinedInput-adornedEnd {
    padding-right: 0;
  }
`) as React.FC<InputProps>;

const StyledInputAdornment = withTheme(styled(InputAdornment)`
  padding-right: 4px;
`) as React.FC<InputAdornmentProps>;

const TransitioningButton = withTheme(styled(Button)`
  ${({ theme }) => `
  border-radius: 4px;

  transition: ${theme.transitions.create('opacity', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  })};
`}
`) as React.FC<ButtonProps>;

const SubscribeBox: React.FC<BoxProps> = ({ ...rest }) => {
  const { t } = useTranslation();

  const [confirming, setConfirming] = React.useState(false);
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setSubmitting,
    setFieldValue,
    values,
    touched,
    errors,
    dirty,
    isValid
  } = useFormik({
    initialValues: {
      b_226621ee7c79910b83d6c77b8_c9a899ac03: '', // Bot protection honeypot field
      GIVENNAME: '',
      FAMILYNAME: '',
      EMAIL: ''
      // organization: '',
      // title: '',
    },
    validationSchema: yup.object({
      // nameGiven: yup.string().required(t('requestdemo.required.firstname')),
      // nameFamily: yup.string().required(t('requestdemo.required.lastname')),
      EMAIL: yup.string().email(t('requestdemo.validate.email')).required(t('requestdemo.required.email'))
    }),
    onSubmit: data => {
      console.log('onSubmit data:', data);

      async function submitToMailChimp() {
        const pingResponse = await mailchimp.ping.get();
        console.log(pingResponse);

        const response = await mailchimp.lists.addListMember(MAILCHIMP_SUBSCRIBE_AUDIENCE_ID, {
          email_address: data.email,
          status: 'subscribed',
          merge_fields: {
            GIVENNAME: data.nameGiven,
            FAMILYNAME: data.nameFamily
          }
        });

        console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
        setSubmitting(false);
      }

      submitToMailChimp();

      axios
        .post(
          'https://lgsvlsimulator.us20.list-manage.com/subscribe/post-json?u=226621ee7c79910b83d6c77b8&amp;id=c9a899ac03',
          data
        )
        .then(response => {
          // window.location.href = 'https://mailthis.to/confirm';
          console.log('Submited with response:', response, data);
          setConfirming(true);
        })
        .catch(err => {
          err = 'oh beans ';
        });

      setSubmitting(false);
    }
  });

  const submitVisible = Boolean(values.EMAIL);

  const commonTextInputProps: InputProps = {
    onChange: handleChange,
    onBlur: handleBlur,
    InputLabelProps: { shrink: true },
    variant: 'outlined',
    fullWidth: true
  };

  return (
    <PageSectionFullWidth>
      <Box mb={4} position='relative' {...rest}>
        <BackgroundVideo src={videoSrcSubscribe} position='absolute' fit='cover' overlayOffset={[0, '-200%']}>
          <Typography>
            A really cool looking video of a Lidar point-cloud following a simulated autonomous vehicle that makes you
            really want to subscribe to our email list for more information.
          </Typography>
        </BackgroundVideo>
        <Box p={2} height={{ xs: 600, sm: 400, md: 600 }}>
          <FullHeightGrid container alignItems='center' justify='center'>
            <Grid item xs={12} sm={10} md={6}>
              <Typography variant='h3' gutterBottom>
                {t('main.subscribe.title')}
              </Typography>
              <StyledPaper elevation={0} showBackground={submitVisible}>
                <form noValidate onSubmit={handleSubmit}>
                  <Box position='absolute' left={-5000} aria-hidden='true'>
                    <Input name='b_226621ee7c79910b83d6c77b8_c9a899ac03' tabIndex={-1} defaultValue='' />
                  </Box>
                  <Box p={1} pt={2}>
                    <StyledInput
                      {...commonTextInputProps}
                      required
                      name='EMAIL'
                      id='subscribeEmailAddress'
                      label={t('main.subscribe.emailPlaceholder')}
                      placeholder={t('main.subscribe.emailPlaceholder')}
                      error={touched.EMAIL && Boolean(errors.EMAIL)}
                      helperText={touched.EMAIL && errors.EMAIL}
                      value={values.EMAIL}
                      InputProps={{
                        endAdornment: (
                          <StyledInputAdornment position='end'>
                            <TransitioningButton
                              style={!submitVisible ? { opacity: 0, pointerEvents: 'none' } : undefined}
                              aria-label='submit subscription'
                              variant='contained'
                              size='medium'
                              disabled={isSubmitting || !(isValid && dirty)}
                              type='submit'
                            >
                              Subscribe
                            </TransitioningButton>
                          </StyledInputAdornment>
                        )
                      }}
                    />
                  </Box>
                  <Box px={1} mt={1}>
                    <Collapse in={submitVisible} timeout='auto' unmountOnExit>
                      <Grid container spacing={2} justify='space-between'>
                        <GridBox item xs={12} sm={6} mb={1}>
                          <Input
                            {...commonTextInputProps}
                            // required
                            name='GIVENNAME'
                            id='form-field-name-given'
                            label={t('requestdemo.labels.nameGiven')}
                            placeholder={t('requestdemo.placeholders.nameGiven')}
                            error={touched.GIVENNAME && Boolean(errors.GIVENNAME)}
                            helperText={touched.GIVENNAME && errors.GIVENNAME}
                            value={values.GIVENNAME}
                          />
                        </GridBox>
                        <GridBox item xs={12} sm={6} mb={1}>
                          <Input
                            {...commonTextInputProps}
                            // required
                            name='FAMILYNAME'
                            id='form-field-name-family'
                            label={t('requestdemo.labels.nameFamily')}
                            placeholder={t('requestdemo.placeholders.nameFamily')}
                            error={touched.FAMILYNAME && Boolean(errors.FAMILYNAME)}
                            helperText={touched.FAMILYNAME && errors.FAMILYNAME}
                            value={values.FAMILYNAME}
                          />
                        </GridBox>
                      </Grid>
                    </Collapse>
                  </Box>
                </form>
              </StyledPaper>
            </Grid>
          </FullHeightGrid>
        </Box>
      </Box>
    </PageSectionFullWidth>
  );
};

export default SubscribeBox;
export { SubscribeBox };
