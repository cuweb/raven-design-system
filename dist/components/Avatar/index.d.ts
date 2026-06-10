import * as react from 'react';

interface AvatarProps {
    firstName: string;
    lastName?: string;
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg';
    isCircle?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const Avatar: ({ firstName, lastName, src, alt, size, isCircle, onClick, }: AvatarProps) => react.JSX.Element;

export { Avatar };
export type { AvatarProps };
