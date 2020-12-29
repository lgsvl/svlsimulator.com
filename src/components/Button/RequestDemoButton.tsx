import React from 'react';
import { RequestDemoFormMode } from 'src/@types/shared.d';
import { useAppState } from 'src/context/AppState';
import { useTranslation } from 'src/hooks/useTranslations';
import Button, { ButtonProps } from './Button';

interface RequestDemoButtonProps extends ButtonProps {
  mode?: RequestDemoFormMode;
}

const RequestDemoButton: React.ExoticComponent<RequestDemoButtonProps> = React.forwardRef(
  ({ children, mode = RequestDemoFormMode.Demo, ...rest }, ref) => {
    const { setAppState } = useAppState();
    const { t } = useTranslation();

    const handleButtonClick = React.useCallback(() => {
      setAppState(mode, 'requestDemoForm.mode');
      setAppState(true, 'requestDemoForm.open');
    }, [mode, setAppState]);

    return (
      <Button color='primary' variant='outlined' {...rest} ref={ref} onClick={handleButtonClick}>
        {children || t('main.buttons.getDemo')}
      </Button>
    );
  }
);

export default RequestDemoButton;
export { RequestDemoButton };
