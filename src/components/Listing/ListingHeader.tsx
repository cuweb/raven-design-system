/* eslint-disable react-hooks/static-components -- LinkComponent is injected via context, stable across renders */
import { useLinkContext } from '../LinkProvider/useLinkContext';

export interface ListingHeaderProps {
    title: string;
    link?: string;
    as?: 'h2' | 'h3';
    date?: string | Date;
    datePrefix?: string;
    readTime?: string;
    position?: 'top' | 'bottom';
}

export const ListingHeader = ({
    title = 'No title available',
    link,
    as = 'h2',
    date,
    datePrefix,
    readTime,
    position = 'bottom',
}: ListingHeaderProps) => {
    const LinkComponent = useLinkContext();
    const HeaderComponent = as;

    const formattedDate = date
        ? new Date(date).toLocaleString('en-US', {
              month: 'long',
              day: '2-digit',
              year: 'numeric',
          })
        : null;

    const metaBlock = (date || readTime) && (
        <div className="cu-listing__header-meta">
            {date && (
                <time className="cu-listing__header-time">
                    {datePrefix && `${datePrefix} `}
                    {formattedDate}
                </time>
            )}
            {readTime && (
                <p
                    className={`cu-listing__header-readtime${date ? ' cu-listing__header-readtime--with-divider' : ''}`}
                >
                    {readTime} minute read
                </p>
            )}
        </div>
    );

    return (
        <header className="cu-listing__header">
            {(date || readTime) && position === 'top' && metaBlock}

            <HeaderComponent className="cu-listing__header-title">
                {link ? <LinkComponent href={link}>{title}</LinkComponent> : title}
            </HeaderComponent>

            {(date || readTime) && position === 'bottom' && metaBlock}
        </header>
    );
};

ListingHeader.displayName = 'Listing.Header';
