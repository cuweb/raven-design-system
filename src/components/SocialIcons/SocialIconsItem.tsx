import type { IconName } from '@cuweb/rds-icons';
import { useLinkContext } from '../LinkProvider/useLinkContext';
import { Icon } from '../Icon/Icon';
import { useSocialIconsContext } from './SocialIconsContext';

export interface SocialIconsItemProps {
    icon: IconName;
    href: string;
    label: string;
}

export const SocialIconsItem = ({ icon, href, label }: SocialIconsItemProps) => {
    const LinkComponent = useLinkContext();
    const { iconColor } = useSocialIconsContext();

    return (
        <li className="cu-social__item" data-social={iconColor ? icon : undefined}>
            {/* eslint-disable-next-line react-hooks/static-components -- LinkComponent is injected via context, stable across renders */}
            <LinkComponent className="cu-social__link" href={href} aria-label={label}>
                <Icon name={icon} />
            </LinkComponent>
        </li>
    );
};

SocialIconsItem.displayName = 'SocialIcons.Item';
