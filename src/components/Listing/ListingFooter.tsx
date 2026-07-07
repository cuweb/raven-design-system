import React from 'react';

export interface ListingFooterProps {
    children: React.ReactNode;
}

export const ListingFooter = ({ children }: ListingFooterProps) => {
    return <footer className="cu-listing__footer">{children}</footer>;
};

ListingFooter.displayName = 'Listing.Footer';
