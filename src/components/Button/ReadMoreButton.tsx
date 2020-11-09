import React from 'react';
import { useTranslation } from 'src/hooks/useTranslations';
import LinkButton from '../LinkButton';

const ReadMoreButton: typeof LinkButton = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <LinkButton buttonVariant='outlined' {...props} ref={ref}>
      {t('main.buttons.readMore')}
    </LinkButton>
  );
});

export default ReadMoreButton;
export { ReadMoreButton };
