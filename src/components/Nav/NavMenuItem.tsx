import { useLinkContext } from '../LinkProvider/useLinkContext';
import { NavSubMenu } from './NavSubMenu';
import type { NavItem } from './Nav';

export interface NavMenuItemProps {
    item: NavItem;
    isOpen: boolean;
    onToggle: () => void;
    variant?: 'desktop' | 'mobile';
}

export const NavMenuItem = ({ item, isOpen, onToggle, variant = 'desktop' }: NavMenuItemProps) => {
    const LinkComponent = useLinkContext();
    const hasSubmenu = Boolean(item.submenu?.length);
    const isMobile = variant === 'mobile';

    // Desktop: primary nav link/button styles.
    // Mobile (browse dropdown): submenu-link styles so all dropdown items — both
    // the primary submenu and browse overflow items — share identical look and feel.
    const linkClass = isMobile
        ? ['cu-nav__submenu-link', hasSubmenu && isOpen && 'cu-nav__submenu-link--open']
              .filter(Boolean)
              .join(' ')
        : ['cu-nav__link', hasSubmenu && isOpen && 'cu-nav__link--open'].filter(Boolean).join(' ');

    return (
        <li className={isMobile ? 'cu-nav__submenu-item' : 'cu-nav__item'}>
            {hasSubmenu ? (
                <button className={linkClass} onClick={onToggle} aria-expanded={isOpen}>
                    {item.title}
                    <span
                        className={`cu-nav__arrow${isOpen ? ' cu-nav__arrow--open' : ''}`}
                        aria-hidden="true"
                    />
                </button>
            ) : (
                // eslint-disable-next-line react-hooks/static-components
                <LinkComponent href={item.href ?? '#'} className={linkClass}>
                    {item.title}
                </LinkComponent>
            )}
            {hasSubmenu && (
                <NavSubMenu items={item.submenu ?? []} isOpen={isOpen} variant={variant} />
            )}
        </li>
    );
};
