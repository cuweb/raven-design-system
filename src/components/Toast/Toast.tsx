import { useState } from 'react';
import type { IconName } from '../../icons';
import { Icon } from '../Icon/Icon';
import './styles.scss';

export interface ToastProps {
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    content?: React.ReactNode;
}

export interface ToasterProps {
    children: React.ReactNode;
}

const toastIcons: Record<ToastProps['type'], IconName> = {
    success: 'circle-check',
    error: 'circle-exclamation',
    warning: 'shield-exclamation',
    info: 'circle-info',
};

const Toaster = ({ children }: ToasterProps) => (
    <div aria-live="assertive" aria-atomic="true" className="cu-toaster">
        <div className="cu-toaster__stack">{children}</div>
    </div>
);

const ToastBase = ({ type, title, content }: ToastProps) => {
    const [visible, setVisible] = useState(true);
    const [rendered, setRendered] = useState(true);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => setRendered(false), 200);
    };

    if (!rendered) return null;

    return (
        <div
            className={`cu-toast cu-toast--${type}${visible ? '' : ' cu-toast--hidden'}`}
            role="status"
        >
            <div className="cu-toast__inner">
                <span className="cu-toast__icon" aria-hidden="true">
                    <Icon name={toastIcons[type]} size={20} />
                </span>
                <div className="cu-toast__body">
                    <p className="cu-toast__title">{title}</p>
                    {content && <p className="cu-toast__content">{content}</p>}
                </div>
                <button
                    type="button"
                    className="cu-toast__close"
                    onClick={handleClose}
                    aria-label="Dismiss notification"
                >
                    <Icon name="xmark" size={16} aria-hidden="true" />
                </button>
            </div>
        </div>
    );
};

ToastBase.displayName = 'Toast';
Toaster.displayName = 'Toast.Toaster';

export const Toast = Object.assign(ToastBase, {
    Toaster,
});
