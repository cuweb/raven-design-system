import type { IconName } from '@cuweb/rds-icons';
import { Icon } from '../Icon/Icon';
import './styles.scss';

export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
    title: string;
    content?: React.ReactNode;
    type?: 'success' | 'error' | 'warning' | 'info';
}

const alertIcons: Record<NonNullable<AlertProps['type']>, IconName> = {
    success: 'circle-check',
    error: 'circle-exclamation',
    warning: 'shield-exclamation',
    info: 'circle-info',
};

export const Alert = ({ title, content, type = 'info', ...rest }: AlertProps) => (
    <div className={`cu-alert cu-alert--${type}`} role="alert" {...rest}>
        <span className="cu-alert__icon">
            <Icon name={alertIcons[type]} size={24} aria-hidden="true" />
        </span>
        <div className="cu-alert__body">
            <p className="cu-alert__title">{title}</p>
            {content && <p className="cu-alert__content">{content}</p>}
        </div>
    </div>
);
