import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import React, { useCallback, useState, useMemo } from 'react';
import { IconLGSVLSimulator, IconX } from 'src/components/Icons';
import Input from 'src/components/Input';
import { useTranslation } from 'src/hooks/useTranslations';
import { px, fade } from 'src/utils/theme';
import styled from 'styled-components';

const FormDialog = withTheme(styled(Dialog)`
  .MuiDialog-paper {
    width: 1024px;
    height: 640px;
    max-width: 90vw;
    max-height: 90vh;
    background-color: ${({ theme }) => theme.palette.background.default};
    border-radius: 8px;
  }
`);

const FormDialogTitle = withTheme(styled(DialogTitle)`
  padding: 14px ${({ theme }) => px(theme.spacing(3))};
  background-color: ${({ theme }) => fade(theme.palette.background.paper, 0.6)};
`);

const CloseIconButton = withTheme(styled(IconButton)`
  padding: 0px;
  position: absolute;
  right: ${({ theme }) => px(theme.spacing(3))};
  top: 14px;
`);

const FormDialogContent = withTheme(styled(DialogContent)`
  padding: ${({ theme }) => px(theme.spacing(3))};
`);

const LogoImage = withTheme(styled(IconLGSVLSimulator)`
  display: block;
  padding-bottom: ${({ theme }) => px(theme.spacing(3))};
`);

const FormDialogActions = withTheme(styled(DialogActions)`
  padding-right: ${({ theme }) => px(theme.spacing(3))};
  padding-bottom: ${({ theme }) => px(theme.spacing(3))};
`);

const RequestDemoForm: React.FC<DialogProps> = ({ onClose, ...rest }) => {
  const { t } = useTranslation();
  const { handleChange, handleSubmit, isSubmitting, setSubmitting, setFieldValue, values } = useFormik({
    initialValues: {
      name: '',
      email: '',
      company: '',
      title: '',
      region: '',
      usecase: 'Autonomous Vehicle',
      other: ''
    },
    onSubmit: data => {
      console.log(data);
      // TODO: submit data to LG server to send demo request
      setSubmitting(false);
      if (onClose) onClose({}, 'escapeKeyDown');
    }
  });

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

  return (
    <FormDialog
      aria-labelledby='form-title'
      aria-describedby='form-description'
      disableScrollLock
      onClose={onClose}
      {...rest}
    >
      <form onSubmit={handleSubmit} autoComplete='off'>
        <FormDialogTitle disableTypography>
          <Typography id='form-title' variant='body1'>
            {t('requestdemo.title')}
          </Typography>
          <CloseIconButton aria-label='close' onClick={dispatchClose}>
            <IconX />
          </CloseIconButton>
        </FormDialogTitle>
        <FormDialogContent>
          <Grid container spacing={3}>
            <Hidden smDown>
              <Grid item sm={4}>
                <LogoImage />
                <Typography id='form-description' variant='caption' gutterBottom>
                  {t('requestdemo.message')}
                </Typography>
              </Grid>
            </Hidden>
            <Grid item sm={12} md={8}>
              <Grid container spacing={4} justify='space-between'>
                <Grid item xs={12} sm={6}>
                  <Input
                    name='name'
                    label={t('requestdemo.labels.first')}
                    placeholder={t('requestdemo.placeholders.first')}
                    value={values.name}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    name='email'
                    label={t('requestdemo.labels.email')}
                    placeholder={t('requestdemo.placeholders.email')}
                    value={values.email}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    name='company'
                    label={t('requestdemo.labels.company')}
                    placeholder={t('requestdemo.placeholders.company')}
                    value={values.company}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    name='title'
                    label={t('requestdemo.labels.title')}
                    placeholder={t('requestdemo.placeholders.title')}
                    value={values.title}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    name='region'
                    label={t('requestdemo.labels.region')}
                    placeholder={t('requestdemo.placeholders.region')}
                    value={values.region}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant='outlined' fullWidth>
                    <InputLabel htmlFor='usecase'>{t('requestdemo.labels.usecase')}</InputLabel>
                    <Select
                      label={t('requestdemo.labels.usecase')}
                      value={values.usecase}
                      onChange={handleUsecaseChange}
                      labelId='usecase'
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
                    name='other'
                    label={t('requestdemo.labels.other')}
                    placeholder={t('requestdemo.placeholders.other')}
                    value={values.other}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    variant='outlined'
                    multiline
                    rows={7}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </FormDialogContent>
        <FormDialogActions>
          <FormControl>
            <Button color='primary' variant='contained' disabled={isSubmitting} type='submit'>
              {t('requestdemo.confirm')}
            </Button>
          </FormControl>
        </FormDialogActions>
      </form>
    </FormDialog>
  );
};

export default RequestDemoForm;
export { RequestDemoForm };
