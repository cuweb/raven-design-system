import { ButtonLoader } from '../ButtonLoader/ButtonLoader';
import './styles.scss';

export type PageHeaderLoaderVariant = 'default' | 'event' | 'people';

export interface PageHeaderLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: PageHeaderLoaderVariant;
    content?: 'small' | 'large';
    isCenter?: boolean;
}

export const PageHeaderLoader = ({
    variant = 'default',
    content,
    isCenter,
    ...rest
}: PageHeaderLoaderProps) => {
    const wrapperClasses = [
        'cu-loader',
        'cu-loader--pageheader',
        `cu-loader--pageheader-${variant}`,
        variant === 'default' && isCenter ? 'cu-loader--pageheader-center' : undefined,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={wrapperClasses} role="status" aria-label="Loading content" {...rest}>
            {variant === 'default' && (
                <>
                    <span className="cu-loader__pageheader-title" aria-hidden="true" />
                    {content && (
                        <span
                            className={
                                content === 'large'
                                    ? 'cu-loader__pageheader-content cu-loader__pageheader-content--large'
                                    : 'cu-loader__pageheader-content'
                            }
                            aria-hidden="true"
                        />
                    )}
                </>
            )}

            {variant === 'event' && (
                <>
                    <span className="cu-loader__pageheader-figure" aria-hidden="true" />
                    <div className="cu-loader__pageheader-body">
                        <span className="cu-loader__pageheader-line cu-loader__pageheader-line--title" />
                        <div className="cu-loader__pageheader-lines">
                            <span className="cu-loader__pageheader-line cu-loader__pageheader-line--small" />
                            <span className="cu-loader__pageheader-line" />
                            <span className="cu-loader__pageheader-line cu-loader__pageheader-line--small" />
                            <span className="cu-loader__pageheader-line" />
                        </div>
                        <div className="cu-loader__pageheader-lines">
                            <span className="cu-loader__pageheader-line cu-loader__pageheader-line--small" />
                            <span className="cu-loader__pageheader-line" />
                        </div>
                        <ButtonLoader count={2} />
                    </div>
                </>
            )}

            {variant === 'people' && (
                <>
                    <span className="cu-loader__pageheader-figure" aria-hidden="true" />
                    <div className="cu-loader__pageheader-body">
                        <span className="cu-loader__pageheader-line cu-loader__pageheader-line--title" />
                        <div className="cu-loader__pageheader-lines">
                            <span className="cu-loader__pageheader-line" />
                            <span className="cu-loader__pageheader-line cu-loader__pageheader-line--small" />
                            <span className="cu-loader__pageheader-line cu-loader__pageheader-line--small" />
                            <span className="cu-loader__pageheader-line cu-loader__pageheader-line--small" />
                        </div>
                        <div className="cu-loader__pageheader-avatars" aria-hidden="true">
                            {Array.from({ length: 6 }, (_, index) => (
                                <span key={index} className="cu-loader__pageheader-avatar" />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
