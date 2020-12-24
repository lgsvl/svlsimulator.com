import React from 'react';
import { useTranslation } from 'src/hooks/useTranslations';
import LinkButton from './LinkButton';

const ReadMoreButton: typeof LinkButton = React.forwardRef(({ children, ...rest }, ref) => {
  const { t } = useTranslation();
  return (
    <LinkButton buttonVariant='outlined' {...rest} ref={ref}>
      {children || t('main.buttons.readMore')}
    </LinkButton>
  );
});

export default ReadMoreButton;
export { ReadMoreButton };
