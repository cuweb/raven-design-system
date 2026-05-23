import { default as React } from 'react';
import { IconName } from '../Icon';
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    color?: 'red' | 'grey' | 'dark-grey' | 'black' | 'white';
    type?: 'button' | 'submit' | 'reset';
    isSmall?: boolean;
    isFull?: boolean;
    isDisabled?: boolean;
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
export declare const Button: ({ color, title, icon, type, isSmall, isFull, isDisabled, ariaLabel, ...rest }: ButtonNoTitleProps | ButtonTitleProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Button.d.ts.map