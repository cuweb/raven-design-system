import { Listing } from '../Listing/Listing';
import './styles.scss';

export type ListingLoaderVariant = 'news' | 'event' | 'icon' | 'page' | 'people' | 'description';

export interface ListingLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: ListingLoaderVariant;
}

export const ListingLoader = ({ variant = 'news', ...rest }: ListingLoaderProps) => {
    return (
        <Listing revealOnScroll={false}>
            <Listing.Body>
                <div
                    className={`cu-loader cu-loader--listing cu-loader--listing-${variant}`}
                    role="status"
                    aria-label="Loading content"
                    {...rest}
                >
                    {(variant === 'news' || variant === 'people') && (
                        <span className="cu-loader__listing-figure" aria-hidden="true" />
                    )}

                    {variant === 'event' && (
                        <span className="cu-loader__listing-date-thumb" aria-hidden="true" />
                    )}

                    {variant === 'icon' && (
                        <span className="cu-loader__listing-icon" aria-hidden="true" />
                    )}

                    <div className="cu-loader__listing-body">
                        <span className="cu-loader__listing-line cu-loader__listing-line--title" />
                        <span className="cu-loader__listing-line cu-loader__listing-line--small" />

                        {(variant === 'news' || variant === 'page' || variant === 'icon') && (
                            <span className="cu-loader__listing-line cu-loader__listing-line--paragraph" />
                        )}

                        {variant === 'people' && (
                            <>
                                <span className="cu-loader__listing-line cu-loader__listing-line--small" />
                                <span className="cu-loader__listing-line cu-loader__listing-line--small" />
                            </>
                        )}

                        {variant === 'description' && (
                            <span className="cu-loader__listing-line cu-loader__listing-line--small" />
                        )}
                    </div>
                </div>
            </Listing.Body>
        </Listing>
    );
};
