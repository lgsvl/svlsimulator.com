import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent, { DialogContentProps } from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { useTheme, withTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import React, { useCallback, useState } from 'react';
import Button from 'src/components/Button';
import { IconX } from 'src/components/Icons';
import Link from 'src/components/Link';
import { useTranslation } from 'src/hooks/useTranslations';
import { px } from 'src/utils/theme';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

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

const BannerContent = withTheme(styled(DialogContent)`
  // Override the standard first-child behavior of DialogContent
  &:first-child {
    padding-top: ${({ theme }) => px(theme.spacing(1))};
  }
`) as React.FC<DialogContentProps>;

const BannerContentText = styled(DialogContentText)`
  margin-bottom: 0;
`;

const UserConsent = () => {
  const theme = useTheme();
  const isXs = !useMediaQuery(theme.breakpoints.up('sm'));
  const [open, setOpen] = useState<boolean>(cookies.get('gatsby-gdpr-google-analytics') !== 'true');
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const handleAccept = useCallback(() => {
    const cookieExpiry = new Date();
    cookieExpiry.setFullYear(cookieExpiry.getFullYear() + 10);
    cookies.set('gatsby-gdpr-google-analytics', 'true', { expires: cookieExpiry });
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
      disableEnforceFocus
      disableScrollLock
      hideBackdrop
      aria-label={t('main.consent.label')}
      aria-describedby='user-consent-description'
      PaperProps={{ square: true }}
    >
      <Grid container alignItems='center' justify='center' wrap={isXs ? 'wrap' : 'nowrap'}>
        <Grid item>
          <BannerContent>
            <BannerContentText id='user-consent-description' variant='body2'>
              {t('main.consent.message')}
              <Link to='https://www.lg.com/us/privacy'>{t('main.consent.policy')}</Link>
            </BannerContentText>
          </BannerContent>
        </Grid>
        <Grid item>
          <DialogActions>
            <Button aria-label={t('main.consent.accept')} onClick={handleAccept}>
              {t('main.consent.accept')}
            </Button>
            <IconButton aria-label={t('main.consent.accept')} onClick={handleAccept}>
              <IconX width='16' height='16' />
            </IconButton>
          </DialogActions>
        </Grid>
      </Grid>
    </BannerDialog>
  );
};

export default UserConsent;
export { UserConsent };
