import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import { IconName } from '@cuweb/rds-icons';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    color?: 'red' | 'grey' | 'dark-grey' | 'blue' | 'black' | 'white';
    type?: 'button' | 'submit' | 'reset';
    isSmall?: boolean;
    isFull?: boolean;
    isDisabled?: boolean;
    isOutline?: boolean;
}
interface ButtonTitleProps extends ButtonProps {
    title: string;
    icon?: IconName;
    ariaLabel?: string;
}
interface ButtonNoTitleProps extends ButtonProps {
    title?: string;
    icon: IconName;
    ariaLabel: string;
}
declare const Button: ({ color, title, icon, type, isSmall, isFull, isDisabled, isOutline, ariaLabel, ...rest }: ButtonNoTitleProps | ButtonTitleProps) => react_jsx_runtime.JSX.Element;

export { Button };
export type { ButtonNoTitleProps, ButtonProps, ButtonTitleProps };
