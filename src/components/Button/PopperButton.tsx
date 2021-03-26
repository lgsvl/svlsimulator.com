import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import { IconChevronDown } from '../Icons';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';

export interface PopperButtonProps {
  isOpened: boolean;
  onOpen: (e: React.SyntheticEvent) => void;
  onClose: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  customAnchor?: React.MutableRefObject<null>;
  popperPlacement?: PopperPlacementType;
  disablePortal?: boolean;
}
export const PopperButton: React.FC<PopperButtonProps> = ({
  isOpened,
  onOpen,
  onClose,
  children,
  icon,
  className,
  customAnchor,
  popperPlacement,
  disablePortal
}) => {
  const anchorRef = React.useRef(null);
  return (
    <>
      <IconButton
        id='popperButton'
        color='primary'
        buttonRef={anchorRef}
        onClick={e => onOpen((e as unknown) as React.SyntheticEvent)}
        className={className}
      >
        {icon || <IconChevronDown />}
      </IconButton>
      <Popper
        open={isOpened}
        anchorEl={customAnchor?.current || anchorRef.current}
        placement={popperPlacement}
        disablePortal={disablePortal}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <>
              <ClickAwayListener onClickAway={onClose}>{children}</ClickAwayListener>
            </>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default PopperButton;
