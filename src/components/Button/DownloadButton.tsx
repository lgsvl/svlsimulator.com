import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography, useTheme, withTheme } from '@material-ui/core';
import ButtonBase, { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import styled from 'styled-components';
import Link from '../Link';
import LinkButton from './LinkButton';
import { IconChevronDown, IconChevronUp } from '../Icons';
import PopperButton, { PopperButtonProps } from './PopperButton';
import { hexOpacity, px } from 'src/utils/theme';
import { useTranslation } from 'src/hooks/useTranslations';

const LGSVL_GITHUB_API_URL = 'https://api.github.com/repos/lgsvl/simulator/releases/latest';
const LGSVL_LATEST_RELEASE = 'https://github.com/lgsvl/simulator/releases';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 48px;
`;

const LinkWrapper = withTheme(styled(LinkButton)`
  display: flex;
  align-items: center;
  border-radius: 8px 0px 0px 8px;
  padding-right: 8px;
`) as typeof LinkButton;

const StyledPopper = withTheme(styled(PopperButton)`
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 0px 8px 8px 0;
  border-left: 0;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`) as React.FC<PopperButtonProps>;

const PopperDownloadWrapper = withTheme(styled('div')`
  position: relative;
  top: 5px;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.background.main};
`);

const StyledPopperLink = withTheme(styled(Link)`
  padding: 12px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    text-decoration: none;
  }
  &:focus,
  &:link,
  &:visited {
    text-decoration: none;
  }

  svg {
    display: none;
  }
`);

const LinkTypography = withTheme(styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 14px;
`) as typeof Typography;

interface SimulatorLatestReleaseUrls {
  linux?: string;
  windows?: string;
  latest: string;
}

type SimulatorDefaultRelease = keyof SimulatorLatestReleaseUrls | 'unavailable';

interface ReleaseConfiguration {
  defaultRelease: SimulatorDefaultRelease;
  latestRelease: SimulatorLatestReleaseUrls;
}

export const DownloadButton = () => {
  const { t } = useTranslation();
  const anchorRef = React.useRef(null);
  const [isSelectOsOpened, setIsSelectOsOpened] = useState<boolean>(false);
  const [githubData, setGithubData] = useState<ReleaseConfiguration>({
    defaultRelease: 'latest',
    latestRelease: {
      linux: '',
      windows: '',
      latest: ''
    }
  });
  useEffect(() => {
    if (githubData.defaultRelease === 'latest' && githubData.latestRelease.latest === '') {
      axios(LGSVL_GITHUB_API_URL)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((result: { data: { assets: any[] } }) => {
          const latestRelease = {
            linux: result.data.assets.find(asset => asset.name.includes('linux'))?.browser_download_url,
            windows: result.data.assets.find(asset => asset.name.includes('windows'))?.browser_download_url,
            latest: LGSVL_LATEST_RELEASE
          };
          const platform = navigator.userAgent.match(/Windows/i) ? 'windows' : 'linux';
          const defaultRelease: SimulatorDefaultRelease = latestRelease[platform] ? platform : 'latest';
          setGithubData({ defaultRelease, latestRelease });
        })
        .catch(err => {
          console.error(err);
          setGithubData({
            defaultRelease: 'unavailable',
            latestRelease: {
              linux: '',
              windows: '',
              latest: ''
            }
          });
        });
    }
  });

  const available = githubData.defaultRelease !== 'unavailable';

  return (
    <>
      {available && (
        <ButtonWrapper ref={anchorRef}>
          <LinkWrapper
            color='primary'
            buttonVariant='contained'
            download
            to={githubData.latestRelease[githubData.defaultRelease as keyof typeof githubData.latestRelease]}
          >
            <LinkTypography>{t('main.buttons.download.title')}</LinkTypography>
          </LinkWrapper>
          <StyledPopper
            isOpened={isSelectOsOpened}
            onOpen={() => setIsSelectOsOpened(true)}
            onClose={() => setIsSelectOsOpened(false)}
            icon={isSelectOsOpened ? <IconChevronUp /> : <IconChevronDown />}
            customAnchor={anchorRef}
          >
            <PopperDownloadWrapper>
              {githubData.latestRelease?.windows && (
                <StyledPopperLink download underline='none' to={githubData.latestRelease.windows}>
                  <LinkTypography>{t('main.buttons.download.windows')}</LinkTypography>
                </StyledPopperLink>
              )}
              {githubData.latestRelease?.linux && (
                <StyledPopperLink download underline='none' to={githubData.latestRelease.linux}>
                  <LinkTypography>{t('main.buttons.download.linux')}</LinkTypography>
                </StyledPopperLink>
              )}
              <StyledPopperLink download underline='none' to={githubData.latestRelease.latest} target='github'>
                <LinkTypography>{t('main.buttons.download.all')}</LinkTypography>
              </StyledPopperLink>
            </PopperDownloadWrapper>
          </StyledPopper>
        </ButtonWrapper>
      )}
    </>
  );
};
