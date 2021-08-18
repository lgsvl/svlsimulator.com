import React from 'react';
import { useTranslation } from 'src/hooks/useTranslations';
import LinkButton from './LinkButton';

const UseFreeButton: typeof LinkButton = React.forwardRef(({ children, ...rest }, ref) => {
  const { t } = useTranslation();
  return (
    <LinkButton
      color='primary'
      buttonVariant='contained'
      to='https://wise.svlsimulator.com/register'
      {...rest}
      ref={ref}
    >
      {children || t('main.buttons.useFree')}
    </LinkButton>
  );
});

export default UseFreeButton;
export { UseFreeButton };
