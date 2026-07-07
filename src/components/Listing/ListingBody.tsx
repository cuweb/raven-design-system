import React from 'react';

export interface ListingBodyProps {
    children: React.ReactNode;
}

export const ListingBody = ({ children }: ListingBodyProps) => {
    return <div className="cu-listing__body">{children}</div>;
};

ListingBody.displayName = 'Listing.Body';
