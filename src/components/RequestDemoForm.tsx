import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle, { DialogTitleProps } from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { fade, withTheme } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useCallback, useEffect } from 'react';
import { RequestDemoFormMode } from 'src/@types/shared.d';
import { IconSVLSimulator, IconX } from 'src/components/Icons';
import Input, { InputProps } from 'src/components/Input';
import { useTranslation } from 'src/hooks/useTranslations';
import addSpacing from 'src/utils/addSpacing';
import { px } from 'src/utils/theme';
import styled from 'styled-components';
import * as yup from 'yup';

enum FormStatus {
  READY,
  SUBMITTED,
  ERROR
}

const FormDialog = withTheme(styled(Dialog)`
  .MuiDialog-paper {
    width: 1024px;
    height: 640px;
    max-width: 90vw;
    max-height: 90vh;
    background-color: ${({ theme }) => theme.palette.background.default};
  }
`) as React.FC<DialogProps>;

const FormDialogTitle = withTheme(styled(DialogTitle)`
  background-color: ${({ theme }) => fade(theme.palette.background.paper, 0.6)};
  padding-top: 0;
  padding-bottom: 0;
`) as React.FC<DialogTitleProps>;

const CloseIconButton = withTheme(styled(IconButton)`
  padding: ${({ theme }) => px(theme.spacing(1))};
`) as React.FC<IconButtonProps>;

const FormDialogContent = addSpacing(DialogContent);

const FormDialogActions = addSpacing(DialogActions);

const FormMessage = withTheme(styled(Typography)`
  padding: ${({ theme }) => px(theme.spacing(1.5)) + ' ' + px(theme.spacing(2))};
`) as React.FC<TypographyProps>;

interface RequestDemoFormProps extends DialogProps {
  mode?: RequestDemoFormMode;
}

const RequestDemoForm: React.FC<RequestDemoFormProps> = ({ onClose, mode, ...rest }) => {
  const { t, tMap } = useTranslation();
  const [status, setStatus] = React.useState<FormStatus>(FormStatus.READY);
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
    isValid,
    resetForm
  } = useFormik({
    initialValues: {
      _subject: '[Public Website] Demo Requested',
      _replyto: '',
      _confirmation: 'We will contact you to arrange the technology demo session',
      _after: '',
      nameGiven: '',
      nameFamily: '',
      email: '',
      emailVerify: '',
      organization: '',
      title: '',
      region: '',
      usecase: 'Autonomous Vehicle',
      other: ''
    },
    validationSchema: yup.object({
      nameGiven: yup.string().required(t('requestdemo.required.firstname')),
      nameFamily: yup.string().required(t('requestdemo.required.lastname')),
      email: yup.string().email(t('requestdemo.validate.email')).required(t('requestdemo.required.email')),
      emailVerify: yup
        .mixed()
        .test('email-match', t('requestdemo.validate.mismatch'), function (value) {
          const { email } = this.parent;
          return email === value;
        })
        .required(t('requestdemo.required.email')),
      region: yup.string().required(t('requestdemo.required.region'))
    }),
    onSubmit: data => {
      console.log(data);

      // Add custom fields:
      data._replyto = data.email;

      const config = { headers: { 'Content-Type': 'application/json' } };
      axios
        .post('https://formsubmit.co/ajax/contact@svlsimulator.com', data, config)
        .then(response => {
          setSubmitting(false);
          setStatus(FormStatus.SUBMITTED);
          // Remove comment if we want the form to auto-close on submit
          // if (onClose) onClose({}, 'escapeKeyDown');
        })
        .catch(err => {
          console.error(err);
          setSubmitting(false);
          setStatus(FormStatus.ERROR);
        });
    }
  });

  useEffect(() => {
    if (rest.open) {
      setStatus(state => {
        if (state === FormStatus.SUBMITTED) {
          resetForm();
        }
        return FormStatus.READY;
      });
    }
  }, [rest.open, resetForm]);

  const dispatchClose = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (onClose) onClose(event, 'escapeKeyDown');
    },
    [onClose]
  );

  const handleUsecaseChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      setFieldValue('usecase', event.target.value as string);
    },
    [setFieldValue]
  );

  const commonTextInputProps: InputProps = {
    onChange: handleChange,
    onBlur: handleBlur,
    InputLabelProps: { shrink: true },
    variant: 'outlined',
    fullWidth: true
  };

  let dialogTitle;
  switch (mode) {
    case RequestDemoFormMode.ContactUs: {
      dialogTitle = t('main.buttons.contactUs');
      break;
    }
    default: {
      dialogTitle = t('requestdemo.title');
    }
  }

  return (
    <FormDialog
      aria-labelledby='form-title'
      aria-describedby='form-description'
      disableScrollLock
      onClose={onClose}
      {...rest}
    >
      <FormDialogTitle disableTypography>
        <Box display='flex' alignItems='center' justifyContent='space-between' height={56}>
          <Typography id='form-title' variant='body1'>
            {dialogTitle}
          </Typography>
          <CloseIconButton aria-label='close' onClick={dispatchClose}>
            <IconX />
          </CloseIconButton>
        </Box>
      </FormDialogTitle>
      <form noValidate onSubmit={handleSubmit} style={{ display: 'contents' }}>
        <FormDialogContent p={3} pb={0}>
          <input type='hidden' name='_honeypot' value='' onChange={handleChange} />
          <Grid container spacing={3}>
            {mode === RequestDemoFormMode.Demo ? (
              <Hidden smDown>
                <Grid item sm={4}>
                  <Box mb={5}>
                    <IconSVLSimulator />
                  </Box>
                  {tMap('requestdemo.message', (msg, i) => (
                    <Typography id={`form-description${i || ''}`} variant='caption' key={`message${i}`} paragraph>
                      {msg}
                    </Typography>
                  ))}
                </Grid>
              </Hidden>
            ) : null}
            <Grid item sm={12} md={mode === RequestDemoFormMode.Demo ? 8 : 12}>
              <Grid container spacing={4} justify='space-between'>
                <Grid item xs={12} sm={6}>
                  <Input
                    {...commonTextInputProps}
                    required
                    name='nameGiven'
                    id='form-field-name-given'
                    label={t('requestdemo.labels.nameGiven')}
                    placeholder={t('requestdemo.placeholders.nameGiven')}
                    error={touched.nameGiven && Boolean(errors.nameGiven)}
                    helperText={touched.nameGiven && errors.nameGiven}
                    value={values.nameGiven}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    {...commonTextInputProps}
                    required
                    name='nameFamily'
                    id='form-field-name-family'
                    label={t('requestdemo.labels.nameFamily')}
                    placeholder={t('requestdemo.placeholders.nameFamily')}
                    error={touched.nameFamily && Boolean(errors.nameFamily)}
                    helperText={touched.nameFamily && errors.nameFamily}
                    value={values.nameFamily}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    {...commonTextInputProps}
                    required
                    name='email'
                    id='form-field-email'
                    label={t('requestdemo.labels.email')}
                    placeholder={t('requestdemo.placeholders.email')}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    value={values.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    {...commonTextInputProps}
                    required
                    name='emailVerify'
                    id='form-field-email-verify'
                    label={t('requestdemo.labels.emailVerify')}
                    placeholder={t('requestdemo.placeholders.emailVerify')}
                    error={touched.emailVerify && Boolean(errors.emailVerify)}
                    helperText={touched.emailVerify && errors.emailVerify}
                    value={values.emailVerify}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    {...commonTextInputProps}
                    name='organization'
                    id='form-field-organization'
                    label={t('requestdemo.labels.organization')}
                    placeholder={t('requestdemo.placeholders.organization')}
                    value={values.organization}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    {...commonTextInputProps}
                    name='title'
                    id='form-field-title'
                    label={t('requestdemo.labels.title')}
                    placeholder={t('requestdemo.placeholders.title')}
                    value={values.title}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    {...commonTextInputProps}
                    required
                    name='region'
                    id='form-field-region'
                    label={t('requestdemo.labels.region')}
                    placeholder={t('requestdemo.placeholders.region')}
                    error={touched.region && Boolean(errors.region)}
                    helperText={touched.region && errors.region}
                    value={values.region}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant='outlined' fullWidth>
                    <InputLabel id='form-usecase-label' htmlFor='form-field-usecase'>
                      {t('requestdemo.labels.usecase')}
                    </InputLabel>
                    <Select
                      required
                      label={t('requestdemo.labels.usecase')}
                      value={values.usecase}
                      onChange={handleUsecaseChange}
                      labelId='form-usecase-label'
                      id='form-field-usecase'
                    >
                      <MenuItem value='Autonomous Vehicle'>{t('requestdemo.usecases.vehicle')}</MenuItem>
                      <MenuItem value='Autonomous Driving Service/Software'>
                        {t('requestdemo.usecases.software')}
                      </MenuItem>
                      <MenuItem value='Sensor'>{t('requestdemo.usecases.sensor')}</MenuItem>
                      <MenuItem value='Robotics'>{t('requestdemo.usecases.robotics')}</MenuItem>
                      <MenuItem value='Academic Research'>{t('requestdemo.usecases.research')}</MenuItem>
                      <MenuItem value='Urban Transportation Planning'>{t('requestdemo.usecases.planning')}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Input
                    {...commonTextInputProps}
                    name='other'
                    id='form-field-other'
                    label={t('requestdemo.labels.other')}
                    placeholder={t('requestdemo.placeholders.other')}
                    value={values.other}
                    multiline
                    rows={3}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </FormDialogContent>
        <FormDialogActions py={1.5} px={3}>
          <Grid container spacing={3}>
            {mode === RequestDemoFormMode.Demo ? <Grid item sm={4}></Grid> : null}
            <Grid item sm={mode === RequestDemoFormMode.Demo ? 4 : 6}>
              <Typography variant='body2'>* indicates a required field.</Typography>
            </Grid>
            <Grid item sm={mode === RequestDemoFormMode.Demo ? 4 : 6} style={{ textAlign: 'end' }}>
              {status === FormStatus.SUBMITTED ? (
                <FormMessage variant='body1'>{t('requestdemo.submitted')}</FormMessage>
              ) : (
                <>
                  <FormControl>
                    <Button
                      color='primary'
                      variant='contained'
                      disabled={isSubmitting || !(isValid && dirty)}
                      type='submit'
                    >
                      {t('requestdemo.confirm')}
                    </Button>
                  </FormControl>
                </>
              )}
            </Grid>
          </Grid>
        </FormDialogActions>
        {status === FormStatus.ERROR && (
          <Box mt={-2} width='100%' textAlign='end'>
            <FormMessage color='error' variant='body2'>
              {t('requestdemo.error')}
            </FormMessage>
          </Box>
        )}
      </form>
    </FormDialog>
  );
};

export default RequestDemoForm;
export { RequestDemoForm };
