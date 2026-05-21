import * as react_jsx_runtime from 'react/jsx-runtime';

declare const borderRadiusClasses: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
};

type borderRadiusKeys = keyof typeof borderRadiusClasses;
interface BadgeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string;
    href?: string;
    rounded?: borderRadiusKeys;
    color?: 'grey' | 'white' | 'black80' | 'white80' | 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'teal';
}
declare const Badge: ({ text, href, rounded, color, ...rest }: BadgeProps) => react_jsx_runtime.JSX.Element;

export { Badge };
export type { BadgeProps };
