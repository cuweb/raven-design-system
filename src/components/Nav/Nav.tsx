import { useState, useEffect, ReactNode } from 'react';
import './styles.scss';
import { NavTop } from './NavTop';
import { NavBottom } from './NavBottom';
import { NavLogo } from './NavLogo';
import { NavMenu } from './NavMenu';
import { NavButtons } from './NavButtons';

export interface NavItem {
  title: string;
  href?: string;
  submenu?: NavItem[];
}

export interface NavProps {
  children: ReactNode;
}

const NavWrapper = ({ children }: NavProps) => {
  const [scrolledDown, setScrolledDown] = useState(false);

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

  return (
    <header className={`cu-nav${scrolledDown ? ' cu-nav--hidden' : ''}`}>
      <nav className="cu-nav__inner" aria-label="Site navigation">
        {children}
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
