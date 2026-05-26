import { IconName } from '@cuweb/rds-icons';
import * as react_jsx_runtime from 'react/jsx-runtime';

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
    ({ children, prefix }: SocialIconsProps): react_jsx_runtime.JSX.Element;
    displayName: string;
} & {
    Item: {
        ({ icon, href, label }: SocialIconsItemProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
};

export { SocialIcons };
export type { SocialIconsItemProps, SocialIconsProps };
