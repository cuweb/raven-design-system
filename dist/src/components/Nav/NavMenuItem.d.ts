import { NavItem } from './Nav';
export interface NavMenuItemProps {
    item: NavItem;
    isOpen: boolean;
    onToggle: () => void;
    variant?: 'desktop' | 'mobile';
}
export declare const NavMenuItem: ({ item, isOpen, onToggle, variant }: NavMenuItemProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=NavMenuItem.d.ts.map