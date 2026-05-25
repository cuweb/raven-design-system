import { PropsWithChildren } from 'react';

export const NavBottom = ({ children }: PropsWithChildren) => (
  <div className="cu-nav__bottom">
    <div className="cu-nav__bottom-inner">{children}</div>
  </div>
);

NavBottom.displayName = 'Nav.Bottom';
