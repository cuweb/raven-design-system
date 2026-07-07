import React from 'react';

export interface ListingPeopleMetaProps {
    children?: React.ReactNode;
    jobTitle?: string;
    phone?: string;
}

export const ListingPeopleMeta = ({ jobTitle, children, phone }: ListingPeopleMetaProps) => {
    return (
        <ul className="cu-listing__meta">
            {jobTitle && <li className="cu-listing__people-meta-job">{jobTitle}</li>}
            {children && (
                <li>
                    <strong className="cu-listing__people-meta-email">{children}</strong>
                </li>
            )}
            {phone && <li>{phone}</li>}
        </ul>
    );
};

ListingPeopleMeta.displayName = 'Listing.PeopleMeta';
