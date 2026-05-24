import {
  useEffect,
  useRef,
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
  // Below the sm breakpoint, relocate the CTA buttons into the bottom bar.
  const isMobile = useIsMobile();
  const headerRef = useRef<HTMLElement>(null);

  // On scroll down, slide the white top row (logo + site title) fully up out of
  // view so the secondary Nav.Bottom strip pins flush to the top (the fixed red
  // accent line stays put above it). The header stays sticky; we shift its `top`
  // by the strip's offset so the top row slides off with no gap. With no bottom
  // strip, the whole header slides up instead. Shifting `top` (not display) keeps
  // the header's footprint, so page content below never jumps. Scrolling up
  // restores the top row.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let lastY = window.scrollY;
    let hidden = false;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY && !hidden) {
        const bottom = header.querySelector<HTMLElement>('.cu-nav__bottom');
        const shift = bottom
          ? bottom.getBoundingClientRect().top - header.getBoundingClientRect().top
          : header.offsetHeight;
        if (currentY > shift) {
          hidden = true;
          header.style.top = `-${shift}px`;
        }
      } else if (currentY < lastY && hidden) {
        hidden = false;
        header.style.top = '0px';
      }
      lastY = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = isMobile ? moveButtonsIntoBottom(children) : children;

  return (
    <header ref={headerRef} className="cu-nav">
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
