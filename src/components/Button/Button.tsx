import React from 'react';
import { Icon } from '../Icon/Icon';
import type { IconName } from '../Icon';
import { useLinkContext } from '../LinkProvider/useLinkContext';
import './styles.scss';

export interface ButtonProps
    extends
        React.ComponentPropsWithoutRef<'button'>,
        Pick<React.ComponentPropsWithoutRef<'a'>, 'target' | 'rel'> {
    color?: 'red' | 'grey' | 'dark-grey' | 'blue' | 'black' | 'white';
    type?: 'button' | 'submit' | 'reset';
    isSmall?: boolean;
    isFull?: boolean;
    isDisabled?: boolean;
    isOutline?: boolean;
    href?: string;
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
    href,
    ...rest
}: ButtonNoTitleProps | ButtonTitleProps) => {
    const LinkComponent = useLinkContext();
    const variantClass = isDisabled ? 'cu-button--disabled' : `cu-button--${color}`;
    const outlineClass = isOutline && !isDisabled ? 'cu-button--outline' : '';
    const sizeClass = isSmall ? 'cu-button--small' : '';
    const widthClass = isFull ? 'cu-button--full' : '';
    const className = `cu-button ${variantClass} ${outlineClass} ${sizeClass} ${widthClass}`.trim();

    if (href && !isDisabled) {
        return (
            // eslint-disable-next-line react-hooks/static-components -- LinkComponent is injected via context, stable across renders
            <LinkComponent
                href={href}
                aria-label={ariaLabel}
                className={className}
                {...(rest as React.ComponentPropsWithoutRef<'a'>)}
            >
                {icon && <Icon className="cu-icon" name={icon} size={isSmall ? 16 : 20} />}
                {title}
            </LinkComponent>
        );
    }

    return (
        <button
            type={type}
            aria-label={ariaLabel}
            className={className}
            disabled={isDisabled}
            {...rest}
        >
            {icon && <Icon className="cu-icon" name={icon} size={isSmall ? 16 : 20} />}
            {title}
        </button>
    );
};
