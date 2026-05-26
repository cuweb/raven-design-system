import { ReactNode } from 'react';
export interface NavItem {
    title: string;
    href?: string;
    submenu?: NavItem[];
}
export interface NavProps {
    children: ReactNode;
}
export declare const Nav: {
    ({ children }: NavProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Top: {
        ({ children }: import('react').PropsWithChildren): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Bottom: {
        ({ children }: import('react').PropsWithChildren): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Logo: {
        ({ title, link }: import('./NavLogo').NavLogoProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Menu: {
        ({ menu }: import('./NavMenu').NavMenuProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Buttons: {
        ({ buttons, isSearch, onClickSearch }: import('./NavButtons').NavButtonsProps): import("react/jsx-runtime").JSX.Element | null;
        displayName: string;
    };
};
//# sourceMappingURL=Nav.d.ts.map