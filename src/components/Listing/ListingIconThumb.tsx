import { Icon } from '../Icon/Icon';
import type { IconName } from '../../icons';

export interface ListingIconThumbProps {
    icon: IconName;
}

export const ListingIconThumb = ({ icon }: ListingIconThumbProps) => {
    return (
        <figure className="cu-listing__icon-thumb" aria-hidden="true">
            <Icon name={icon} size={48} />
        </figure>
    );
};

ListingIconThumb.displayName = 'Listing.IconThumb';
