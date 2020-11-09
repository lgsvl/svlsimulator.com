import React, { useState, useCallback } from 'react';
import { useTranslation } from 'src/hooks/useTranslations';
import Button from './Button';
import RequestDemoForm from '../RequestDemoForm';

const RequestDemoButton: typeof Button = React.forwardRef((props, ref) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleForm = useCallback(() => {
    setOpen(state => !state);
  }, [setOpen]);
  const { t } = useTranslation();

  return (
    <>
      <RequestDemoForm open={open} onClose={toggleForm} />
      <Button color='primary' variant='contained' {...props} ref={ref} onClick={toggleForm}>
        {t('main.buttons.getDemo')}
      </Button>
    </>
  );
});

export default RequestDemoButton;
export { RequestDemoButton };
