import * as react from 'react';
import { ReactNode } from 'react';

interface NavButton {
    title: string;
    href: string;
    /** Visual style. 'primary' (default) is the red CTA; 'dark' is the black CTA (e.g. Donate). */
    variant?: 'primary' | 'dark';
}
interface NavButtonsProps {
    buttons?: NavButton[];
    isSearch?: boolean;
    onClickSearch?: () => void;
}

interface NavMenuProps {
    menu: NavItem[];
}

interface NavLogoProps {
    title?: string;
    link?: string;
}

interface NavItem {
    title: string;
    href?: string;
    submenu?: NavItem[];
}
interface NavProps {
    children: ReactNode;
}
declare const Nav: {
    ({ children }: NavProps): react.JSX.Element;
    displayName: string;
} & {
    Top: {
        ({ children }: react.PropsWithChildren): react.JSX.Element;
        displayName: string;
    };
    Bottom: {
        ({ children }: react.PropsWithChildren): react.JSX.Element;
        displayName: string;
    };
    Logo: {
        ({ title, link }: NavLogoProps): react.JSX.Element;
        displayName: string;
    };
    Menu: {
        ({ menu }: NavMenuProps): react.JSX.Element;
        displayName: string;
    };
    Buttons: {
        ({ buttons, isSearch, onClickSearch }: NavButtonsProps): react.JSX.Element | null;
        displayName: string;
    };
};

export { Nav };
export type { NavButton, NavButtonsProps, NavItem, NavLogoProps, NavMenuProps, NavProps };
