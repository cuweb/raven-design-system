import { useLinkContext } from '../LinkProvider/useLinkContext';
import type { NavItem } from './Nav';

export interface NavSubMenuProps {
  items: NavItem[];
  isOpen: boolean;
  variant?: 'desktop' | 'mobile';
}

export const NavSubMenu = ({ items, isOpen, variant = 'desktop' }: NavSubMenuProps) => {
  const LinkComponent = useLinkContext();

  if (!isOpen) return null;

  return (
    <ul className={`cu-nav__submenu${variant === 'mobile' ? ' cu-nav__submenu--mobile' : ''}`}>
      {items.map((item) => (
        <li key={item.title} className="cu-nav__submenu-item">
          <LinkComponent href={item.href ?? '#'} className="cu-nav__submenu-link">
            {item.title}
          </LinkComponent>
        </li>
      ))}
    </ul>
  );
};
