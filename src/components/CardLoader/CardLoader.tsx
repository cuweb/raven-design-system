import { Card } from '../Card/Card';
import './styles.scss';

export type CardLoaderVariant = 'news' | 'event' | 'icon' | 'page' | 'people' | 'video';

export interface CardLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardLoaderVariant;
}

export const CardLoader = ({ variant = 'news', ...rest }: CardLoaderProps) => {
    const isCentered = variant === 'people';

    return (
        <Card isCenter={isCentered} revealOnScroll={false}>
            <div
                className={`cu-loader cu-loader--card cu-loader--card-${variant}`}
                role="status"
                aria-label="Loading content"
                {...rest}
            >
                {variant === 'news' && (
                    <>
                        <span className="cu-loader__card-figure" aria-hidden="true" />
                        <div className="cu-loader__card-body">
                            <span className="cu-loader__card-line cu-loader__card-line--title" />
                            <span className="cu-loader__card-line" />
                            <span className="cu-loader__card-line" />
                            <span className="cu-loader__card-line cu-loader__card-line--button" />
                        </div>
                    </>
                )}

                {variant === 'event' && (
                    <>
                        <span className="cu-loader__card-figure" aria-hidden="true" />
                        <span className="cu-loader__card-date-thumb" aria-hidden="true" />
                        <div className="cu-loader__card-body">
                            <span className="cu-loader__card-line cu-loader__card-line--title" />
                            <span className="cu-loader__card-line" />
                            <span className="cu-loader__card-line" />
                            <span className="cu-loader__card-line cu-loader__card-line--button" />
                        </div>
                    </>
                )}

                {variant === 'icon' && (
                    <div className="cu-loader__card-body">
                        <span className="cu-loader__card-icon" aria-hidden="true" />
                        <span className="cu-loader__card-line cu-loader__card-line--title" />
                        <span className="cu-loader__card-line cu-loader__card-line--paragraph" />
                        <span className="cu-loader__card-line cu-loader__card-line--button" />
                    </div>
                )}

                {variant === 'page' && (
                    <div className="cu-loader__card-body">
                        <span className="cu-loader__card-line cu-loader__card-line--title" />
                        <span className="cu-loader__card-line cu-loader__card-line--small" />
                        <span className="cu-loader__card-line cu-loader__card-line--paragraph" />
                        <span className="cu-loader__card-line cu-loader__card-line--button" />
                    </div>
                )}

                {variant === 'people' && (
                    <>
                        <span className="cu-loader__card-avatar" aria-hidden="true" />
                        <div className="cu-loader__card-body">
                            <span className="cu-loader__card-line cu-loader__card-line--title" />
                            <span className="cu-loader__card-line" />
                            <span className="cu-loader__card-line" />
                            <span className="cu-loader__card-line" />
                            <span className="cu-loader__card-line cu-loader__card-line--button" />
                        </div>
                    </>
                )}

                {variant === 'video' && (
                    <>
                        <span className="cu-loader__card-figure" aria-hidden="true" />
                        <div className="cu-loader__card-body">
                            <span className="cu-loader__card-line cu-loader__card-line--title" />
                        </div>
                    </>
                )}
            </div>
        </Card>
    );
};
