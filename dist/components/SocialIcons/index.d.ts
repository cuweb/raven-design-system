import { IconName } from '@cuweb/rds-icons';
import * as react from 'react';

interface SocialIconsItemProps {
    icon: IconName;
    href: string;
    label: string;
}

interface SocialIconsProps {
    children: React.ReactNode;
    prefix?: string;
}
declare const SocialIcons: {
    ({ children, prefix }: SocialIconsProps): react.JSX.Element;
    displayName: string;
} & {
    Item: {
        ({ icon, href, label }: SocialIconsItemProps): react.JSX.Element;
        displayName: string;
    };
};

export { SocialIcons };
export type { SocialIconsItemProps, SocialIconsProps };
