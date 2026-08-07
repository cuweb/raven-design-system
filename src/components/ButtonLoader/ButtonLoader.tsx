import './styles.scss';

export interface ButtonLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    count?: number;
    isSmall?: boolean;
}

export const ButtonLoader = ({ count = 1, isSmall, ...rest }: ButtonLoaderProps) => {
    const sizeClass = isSmall ? 'cu-loader__button--small' : undefined;

    return (
        <div
            className="cu-loader cu-loader--button"
            role="status"
            aria-label="Loading content"
            {...rest}
        >
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className={`cu-loader__button ${sizeClass ?? ''}`.trim()}
                    aria-hidden="true"
                />
            ))}
        </div>
    );
};
