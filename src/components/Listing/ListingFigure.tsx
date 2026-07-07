import React from 'react';

export interface ListingFigureProps {
    children: React.ReactNode;
    isSquare?: boolean;
    isSmall?: boolean;
    hideMobile?: boolean;
}

export const ListingFigure = ({ children, isSquare, isSmall, hideMobile }: ListingFigureProps) => {
    const className = [
        'cu-listing__figure',
        isSquare && 'cu-listing__figure--square',
        isSmall && 'cu-listing__figure--small',
        hideMobile && 'cu-listing__figure--hide-mobile',
    ]
        .filter(Boolean)
        .join(' ');

    return <figure className={className}>{children}</figure>;
};

ListingFigure.displayName = 'Listing.Figure';
