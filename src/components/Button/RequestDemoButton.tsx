import React from 'react';
import { useAppState } from 'src/context/AppState';
import { useTranslation } from 'src/hooks/useTranslations';
import Button from './Button';

const RequestDemoButton: typeof Button = React.forwardRef((props, ref) => {
  const { setAppState } = useAppState();
  const { t } = useTranslation();

  const handleButtonClick = React.useCallback(() => {
    setAppState(true, 'requestDemoForm.open');
  }, [setAppState]);

  return (
    <Button color='primary' variant='contained' {...props} ref={ref} onClick={handleButtonClick}>
      {t('main.buttons.getDemo')}
    </Button>
  );
});

export default RequestDemoButton;
export { RequestDemoButton };
