import './styles.scss';

export interface AvatarProps {
    firstName: string;
    lastName?: string;
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg';
    isCircle?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const getInitials = (firstName: string, lastName?: string): string => {
    if (firstName && lastName) return `${firstName[0]}${lastName[0]}`;
    if (firstName) return firstName[0];
    if (lastName) return lastName[0];
    return 'CU';
};

export const Avatar = ({
    firstName,
    lastName,
    src,
    alt,
    size = 'md',
    isCircle = false,
    onClick,
}: AvatarProps) => {
    const fullName = lastName ? `${firstName} ${lastName}` : firstName;
    const shapeClass = isCircle ? 'cu-avatar--circle' : 'cu-avatar--square';
    const className = `cu-avatar cu-avatar--${size} ${shapeClass}`;

    const content = src ? (
        <img className="cu-avatar__image" src={src} alt="" aria-hidden="true" />
    ) : (
        <span className="cu-avatar__initials" aria-hidden="true">
            {getInitials(firstName, lastName)}
        </span>
    );

    if (onClick) {
        return (
            <button
                type="button"
                className={className}
                onClick={onClick}
                aria-label={alt ?? fullName}
            >
                {content}
            </button>
        );
    }

    return (
        <div className={className} role="img" aria-label={alt ?? fullName}>
            {content}
        </div>
    );
};
