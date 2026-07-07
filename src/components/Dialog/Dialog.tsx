import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { useDialogElement } from '../../utils/dialog/useDialogElement';
import './styles.scss';

export interface DialogProps {
  /** Action buttons rendered before the built-in "Close" button, e.g. a confirm `Button`. */
  children?: React.ReactNode;
  title: string;
  description?: string;
  /** Whether the dialog is open. */
  isOpen: boolean;
  /** Called when the dialog should close (the built-in "Close" button). */
  setIsOpen: (isOpen: boolean) => void;
}

/**
 * Blocking confirmation / action prompt. Unlike `Modal`, it cannot be dismissed via
 * the Esc key or a backdrop click — the user must choose one of the dialog's action
 * buttons. Use `Modal` for freeform, dismissible overlay content.
 */
export const Dialog = ({ children, title, description, isOpen, setIsOpen }: DialogProps) => {
  const { dialogRef } = useDialogElement({
    isOpen,
    onOpenChange: setIsOpen,
    dismissible: false,
  });

  return (
    <dialog
      ref={dialogRef}
      className="cu-dialog"
      aria-labelledby="cu-dialog-title"
      aria-describedby={description ? 'cu-dialog-description' : undefined}
    >
      <div className="cu-dialog__body">
        <h2 id="cu-dialog-title" className="cu-dialog__title">
          {title}
        </h2>
        {description && (
          <p id="cu-dialog-description" className="cu-dialog__description">
            {description}
          </p>
        )}
      </div>
      <ButtonGroup align="end">
        {children}
        <Button title="Close" isSmall color="grey" onClick={() => setIsOpen(false)} />
      </ButtonGroup>
    </dialog>
  );
};
