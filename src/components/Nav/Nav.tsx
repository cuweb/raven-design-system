import {
  useState,
  useEffect,
  Children,
  isValidElement,
  cloneElement,
  type ReactNode,
  type ReactElement,
} from 'react';
import './styles.scss';
import { NavTop } from './NavTop';
import { NavBottom } from './NavBottom';
import { NavLogo } from './NavLogo';
import { NavMenu } from './NavMenu';
import { NavButtons } from './NavButtons';
import { useIsMobile } from './useIsMobile';

export interface NavItem {
  title: string;
  href?: string;
  submenu?: NavItem[];
}

export interface NavProps {
  children: ReactNode;
}

// On mobile the CTA buttons should sit beside the menu's Browse trigger in the
// bottom bar. When the menu is composed into Nav.Top, CSS handles that (buttons
// and menu already share a container). But in the Nav.Bottom composition the
// buttons live in Nav.Top while the menu lives in Nav.Bottom, so move the buttons
// into the Nav.Bottom row here. No-op unless the composition is the expected
// Top + Bottom shape with buttons in the top — desktop never calls this.
const moveButtonsIntoBottom = (children: ReactNode): ReactNode => {
  const items = Children.toArray(children);
  const topIndex = items.findIndex((c) => isValidElement(c) && c.type === NavTop);
  const bottomIndex = items.findIndex((c) => isValidElement(c) && c.type === NavBottom);
  if (topIndex === -1 || bottomIndex === -1) return children;

  const top = items[topIndex] as ReactElement<{ children?: ReactNode }>;
  const bottom = items[bottomIndex] as ReactElement<{ children?: ReactNode }>;
  const topChildren = Children.toArray(top.props.children);
  const buttonsIndex = topChildren.findIndex((c) => isValidElement(c) && c.type === NavButtons);
  if (buttonsIndex === -1) return children;

  const buttons = topChildren[buttonsIndex];
  items[topIndex] = cloneElement(top, undefined, ...topChildren.filter((_, i) => i !== buttonsIndex));
  items[bottomIndex] = cloneElement(bottom, undefined, ...Children.toArray(bottom.props.children), buttons);
  return items;
};

const NavWrapper = ({ children }: NavProps) => {
  const [scrolledDown, setScrolledDown] = useState(false);
  // Below the sm breakpoint, relocate the CTA buttons into the bottom bar.
  const isMobile = useIsMobile();

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY && currentY > 80) {
        setScrolledDown(true);
      } else if (currentY < lastY) {
        setScrolledDown(false);
      }
      lastY = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = isMobile ? moveButtonsIntoBottom(children) : children;

  return (
    <header className={`cu-nav${scrolledDown ? ' cu-nav--hidden' : ''}`}>
      <nav className="cu-nav__inner" aria-label="Site navigation">
        {content}
      </nav>
    </header>
  );
};

NavWrapper.displayName = 'Nav';

export const Nav = Object.assign(NavWrapper, {
  Top: NavTop,
  Bottom: NavBottom,
  Logo: NavLogo,
  Menu: NavMenu,
  Buttons: NavButtons,
});
