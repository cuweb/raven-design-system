export interface NavButton {
    title: string;
    href: string;
    /** Visual style. 'primary' (default) is the red CTA; 'dark' is the black CTA (e.g. Donate). */
    variant?: 'primary' | 'dark';
}
export interface NavButtonsProps {
    buttons?: NavButton[];
    isSearch?: boolean;
    onClickSearch?: () => void;
}
export declare const NavButtons: {
    ({ buttons, isSearch, onClickSearch }: NavButtonsProps): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=NavButtons.d.ts.map