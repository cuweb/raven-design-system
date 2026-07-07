import React from 'react';
import { Icon } from '../Icon/Icon';
import type { IconName } from '../Icon';
import './styles.scss';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    color?: 'red' | 'grey' | 'dark-grey' | 'blue' | 'black' | 'white';
    type?: 'button' | 'submit' | 'reset';
    isSmall?: boolean;
    isFull?: boolean;
    isDisabled?: boolean;
    isOutline?: boolean;
}

export interface ButtonTitleProps extends ButtonProps {
    title: string;
    icon?: IconName;
    ariaLabel?: string;
}

export interface ButtonNoTitleProps extends ButtonProps {
    title?: string;
    icon: IconName;
    ariaLabel: string;
}

export const Button = ({
    color = 'red',
    title,
    icon,
    type = 'button',
    isSmall,
    isFull,
    isDisabled,
    isOutline,
    ariaLabel,
    ...rest
}: ButtonNoTitleProps | ButtonTitleProps) => {
    const variantClass = isDisabled ? 'cu-button--disabled' : `cu-button--${color}`;
    const outlineClass = isOutline && !isDisabled ? 'cu-button--outline' : '';
    const sizeClass = isSmall ? 'cu-button--small' : '';
    const widthClass = isFull ? 'cu-button--full' : '';

    return (
        <button
            type={type}
            aria-label={ariaLabel}
            className={`cu-button ${variantClass} ${outlineClass} ${sizeClass} ${widthClass}`.trim()}
            disabled={isDisabled}
            {...rest}
        >
            {icon && <Icon className="cu-icon" name={icon} size={isSmall ? 16 : 20} />}
            {title}
        </button>
    );
};
