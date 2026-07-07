import { useEffect, useRef } from 'react';

export interface UseDialogElementOptions {
  /** Whether the dialog is currently open. */
  isOpen: boolean;
  /** Called whenever the dialog should change its open state (e.g. Esc key, backdrop click). */
  onOpenChange: (isOpen: boolean) => void;
  /** Whether Esc and backdrop clicks are allowed to close the dialog. Defaults to true. */
  dismissible?: boolean;
}

/**
 * Shared native `<dialog>` plumbing used by both Modal and Dialog:
 * - Syncs `showModal()` / `close()` with the `isOpen` prop
 * - Locks body scroll while open
 * - Handles the Esc key (`cancel` event) and backdrop clicks according to `dismissible`
 */
export const useDialogElement = ({
  isOpen,
  onOpenChange,
  dismissible = true,
}: UseDialogElementOptions) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.classList.toggle('cu-dialog-open', isOpen);

    return () => {
      document.body.classList.remove('cu-dialog-open');
    };
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (event: Event) => {
      if (!dismissible) {
        event.preventDefault();
      }
    };

    const handleClose = () => {
      onOpenChange(false);
    };

    dialog.addEventListener('cancel', handleCancel);
    dialog.addEventListener('close', handleClose);

    return () => {
      dialog.removeEventListener('cancel', handleCancel);
      dialog.removeEventListener('close', handleClose);
    };
  }, [dismissible, onOpenChange]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (dismissible && event.target === dialogRef.current) {
      onOpenChange(false);
    }
  };

  return { dialogRef, handleBackdropClick };
};
