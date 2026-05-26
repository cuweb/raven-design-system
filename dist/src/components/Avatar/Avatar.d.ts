export interface AvatarProps {
    firstName: string;
    lastName?: string;
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg';
    isCircle?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export declare const Avatar: ({ firstName, lastName, src, alt, size, isCircle, onClick, }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Avatar.d.ts.map