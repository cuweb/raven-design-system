import { Icon } from '../Icon/Icon';
import { useDialogElement } from '../../utils/dialog/useDialogElement';
import './styles.scss';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps {
  children: React.ReactNode;
  /** Whether the modal is open. */
  isOpen: boolean;
  /** Called whenever the modal should open or close (close button, Esc, backdrop click). */
  setIsOpen: (isOpen: boolean) => void;
  /** Accessible name for the dialog, used as `aria-label`. */
  ariaLabel: string;
  /** id of an element that describes the dialog, used as `aria-describedby`. */
  ariaDescribedBy?: string;
  /** Max-width of the modal. Defaults to `md`. */
  size?: ModalSize;
  /** Align the modal near the top of the viewport instead of vertically centering it. */
  alignTop?: boolean;
  /** Hide the built-in close (X) button. */
  hideCloseButton?: boolean;
  /** Prevent Esc and backdrop-click from closing the modal. */
  preventOutsideClick?: boolean;
}

/**
 * General-purpose overlay container for freeform content. Dismissible by default via
 * the close button, the Esc key, or a backdrop click. For a non-dismissible action
 * prompt with a built-in button footer, use `Dialog` instead.
 */
export const Modal = ({
  children,
  isOpen,
  setIsOpen,
  ariaLabel,
  ariaDescribedBy,
  size = 'md',
  alignTop = false,
  hideCloseButton = false,
  preventOutsideClick = false,
}: ModalProps) => {
  const { dialogRef, handleBackdropClick } = useDialogElement({
    isOpen,
    onOpenChange: setIsOpen,
    dismissible: !preventOutsideClick,
  });

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- detects backdrop clicks (event.target === the dialog itself, not its content); Esc key already closes the dialog natively via the `cancel` event
    <dialog
      ref={dialogRef}
      className={`cu-modal cu-modal--${size}${alignTop ? ' cu-modal--align-top' : ''}`}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      onClick={handleBackdropClick}
    >
      {!hideCloseButton && (
        <button type="button" className="cu-modal__close" onClick={() => setIsOpen(false)}>
          <span className="sr-only">Close</span>
          <Icon name="xmark" size={16} />
        </button>
      )}
      <div className="cu-modal__content">{children}</div>
    </dialog>
  );
};
