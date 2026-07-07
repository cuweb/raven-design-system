import { PropsWithChildren } from 'react';

export const NavTop = ({ children }: PropsWithChildren) => (
    <div className="cu-nav__top">{children}</div>
);

NavTop.displayName = 'Nav.Top';
