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

  const linkClass = [
    'cu-nav__link',
    variant === 'mobile' && 'cu-nav__link--mobile',
    hasSubmenu && isOpen && 'cu-nav__link--open',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <li className={`cu-nav__item${variant === 'mobile' ? ' cu-nav__item--mobile' : ''}`}>
      {hasSubmenu ? (
        <button className={linkClass} onClick={onToggle} aria-expanded={isOpen}>
          {item.title}
          <span className={`cu-nav__arrow${isOpen ? ' cu-nav__arrow--open' : ''}`} aria-hidden="true" />
        </button>
      ) : (
        // eslint-disable-next-line react-hooks/static-components
        <LinkComponent href={item.href ?? '#'} className={linkClass}>
          {item.title}
        </LinkComponent>
      )}
      {hasSubmenu && <NavSubMenu items={item.submenu ?? []} isOpen={isOpen} variant={variant} />}
    </li>
  );
};
