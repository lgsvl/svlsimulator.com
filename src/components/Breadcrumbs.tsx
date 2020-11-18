import MuiBreadcrumbs, { BreadcrumbsProps as MuiBreadcrumbsProps } from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { PageProps } from 'gatsby';
import React from 'react';
import Link from 'src/components/Link';
import { useTranslation } from 'src/hooks/useTranslations';
import { NewsIndexQuery } from '../../graphql-types';

type NewsItemNode = NewsIndexQuery['allMdx']['edges'][0]['node'];

export interface BreadcrumbsBaseProps {
  location: PageProps['location'];
  pageContext: PageProps['pageContext'] & {
    frontmatter?: NewsItemNode['frontmatter'];
  };
}

export interface BreadcrumbsProps extends BreadcrumbsBaseProps, MuiBreadcrumbsProps {}

export const Breadcrumbs = ({ location, pageContext, ...rest }: BreadcrumbsProps) => {
  const { t } = useTranslation();
  if (!location) return null;
  const pathnames = location.pathname.split('/').filter((x: string) => x);

  const breadcrumbNameMap: Record<string, string> = {
    '/products/cloud': t('cloud.navTitle'),
    '/products/digitaltwin': t('digitaltwin.navTitle'),
    '/products/simulation': t('simulation.navTitle'),
    '/news': t('news.navTitle'),
    '/applications': t('applications.navTitle'),
    '/about': t('about.navTitle')
  };

  return (
    <MuiBreadcrumbs aria-label='breadcrumb' color='textPrimary' {...rest}>
      <Typography variant='overline'>
        <Link color='inherit' to='/'>
          {t('home.navTitle')}
        </Link>
      </Typography>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const title = breadcrumbNameMap[to] || (last && pageContext?.frontmatter?.title) || to.split('/').pop();

        return last ? (
          <Typography variant='overline' color='textSecondary' key={to}>
            {title}
          </Typography>
        ) : (
          <Typography variant='overline' key={to}>
            <Link color='inherit' to={to}>
              {title}
            </Link>
          </Typography>
        );
      })}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
