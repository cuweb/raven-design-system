import { ReactNode } from 'react';

export interface ListingContentProps {
    children?: ReactNode;
}

export const ListingContent = ({ children }: ListingContentProps) => {
    return <div className="cu-listing__content">{children}</div>;
};

ListingContent.displayName = 'Listing.Content';
