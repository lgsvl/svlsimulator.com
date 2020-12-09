import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

import Button from 'src/components/Button';

import Link from 'src/components/Link';
import { IconX } from 'src/components/Icons';
import { useTranslation } from 'src/hooks/useTranslations';

const cookies = new Cookies();

const BannerDialog = styled(Dialog)`
  pointer-events: none;
  .MuiDialog-paper {
    pointer-events: auto;
    width: 100%;
    margin: 0;
  }
  .MuiDialog-scrollPaper {
    align-items: flex-end;
  }
`;

const BannerContent = styled(DialogContent)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  &:first-child {
    padding-right: 0px;
    padding-top: 8px;
  }
`;

const BannerContentText = styled(DialogContentText)`
  flex: 1;
  margin-bottom: 0px;
`;

const UserConsent = () => {
  const [open, setOpen] = useState<boolean>(cookies.get('gatsby-gdpr-google-analytics') !== 'true');
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const handleAccept = useCallback(() => {
    cookies.set('gatsby-gdpr-google-analytics', 'true');
    initializeAndTrack(window.location);
    setOpen(false);
  }, [setOpen]);
  const { t } = useTranslation();

  return (
    <BannerDialog
      fullWidth
      maxWidth='xl'
      open={open}
      onClose={handleClose}
      disableScrollLock
      hideBackdrop
      aria-label={t('main.consent.label')}
      aria-describedby='user-consent-description'
    >
      <BannerContent>
        <BannerContentText id='user-consent-description' variant='body2'>
          {t('main.consent.message')}
          <Link to='/privacy'>{t('main.consent.policy')}</Link>
        </BannerContentText>
        <DialogActions>
          <Button aria-label={t('main.consent.accept')} onClick={handleAccept}>
            {t('main.consent.accept')}
          </Button>
          <IconButton aria-label={t('main.consent.decline')} onClick={handleClose}>
            <IconX width='16' height='16' />
          </IconButton>
        </DialogActions>
      </BannerContent>
    </BannerDialog>
  );
};

export default UserConsent;
export { UserConsent };
