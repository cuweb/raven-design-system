import { Icon } from '../Icon/Icon';
import type { IconName } from '../../icons';

export interface DetailsItemProps {
    children?: React.ReactNode;
    isBold?: boolean;
    iconName?: IconName;
}

export const DetailsItem = ({ children, isBold = false, iconName }: DetailsItemProps) => {
    const classes = [
        'cu-details__item',
        isBold ? 'cu-details__item--bold' : undefined,
        iconName ? 'cu-details__item--icon' : undefined,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <li className={classes}>
            {iconName && <Icon name={iconName} size={20} aria-hidden />}
            <span>{children}</span>
        </li>
    );
};

DetailsItem.displayName = 'Details.Item';
