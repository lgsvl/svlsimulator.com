import React from 'react';
import { useAppState } from 'src/context/AppState';
import { useTranslation } from 'src/hooks/useTranslations';
import Button from './Button';

const RequestDemoButton: typeof Button = React.forwardRef(({ children, ...rest }, ref) => {
  const { setAppState } = useAppState();
  const { t } = useTranslation();

  const handleButtonClick = React.useCallback(() => {
    setAppState(true, 'requestDemoForm.open');
  }, [setAppState]);

  return (
    <Button color='primary' variant='outlined' {...rest} ref={ref} onClick={handleButtonClick}>
      {children || t('main.buttons.getDemo')}
    </Button>
  );
});

export default RequestDemoButton;
export { RequestDemoButton };
