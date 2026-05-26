import * as react_jsx_runtime from 'react/jsx-runtime';

interface AvatarProps {
    firstName: string;
    lastName?: string;
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg';
    isCircle?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const Avatar: ({ firstName, lastName, src, alt, size, isCircle, onClick, }: AvatarProps) => react_jsx_runtime.JSX.Element;

export { Avatar };
export type { AvatarProps };
