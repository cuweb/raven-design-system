import { IconName } from '@cuweb/rds-icons';
import * as react from 'react';

interface SocialIconsItemProps {
    icon: IconName;
    href: string;
    label: string;
}

type SocialIconsColor = 'black' | 'white' | 'brand';

interface SocialIconsProps {
    children: React.ReactNode;
    prefix?: string;
    iconColor?: SocialIconsColor;
}
declare const SocialIcons: {
    ({ children, prefix, iconColor }: SocialIconsProps): react.JSX.Element;
    displayName: string;
} & {
    Item: {
        ({ icon, href, label }: SocialIconsItemProps): react.JSX.Element;
        displayName: string;
    };
};

export { SocialIcons };
export type { SocialIconsItemProps, SocialIconsProps };
