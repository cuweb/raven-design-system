export interface ListingInitialsProps {
    initials: string;
}

export const ListingInitials = ({ initials }: ListingInitialsProps) => {
    return (
        <figure className="cu-listing__initials">
            <img
                src="https://cu-production.s3.amazonaws.com/rds/assets/graphics/grey-bg.jpg"
                alt=""
                width={200}
                height={200}
            />
            <span className="cu-listing__initials-label">{initials}</span>
        </figure>
    );
};

ListingInitials.displayName = 'Listing.Initials';
