import { useState } from 'react';
import { useLinkContext } from '../LinkProvider/useLinkContext';
import type { NavItem } from './Nav';

export interface NavSubMenuProps {
    items: NavItem[];
    isOpen: boolean;
    variant?: 'desktop' | 'mobile';
}

export const NavSubMenu = ({ items, isOpen, variant = 'desktop' }: NavSubMenuProps) => {
    const [openChild, setOpenChild] = useState<string | null>(null);
    const LinkComponent = useLinkContext();

    if (!isOpen) return null;

    return (
        <ul className={`cu-nav__submenu${variant === 'mobile' ? ' cu-nav__submenu--mobile' : ''}`}>
            {items.map((item) => (
                <li key={item.title} className="cu-nav__submenu-item">
                    {item.submenu?.length ? (
                        <>
                            <div className="cu-nav__submenu-row">
                                <LinkComponent
                                    href={item.href ?? '#'}
                                    className="cu-nav__submenu-link"
                                >
                                    {item.title}
                                </LinkComponent>
                                <button
                                    className="cu-nav__submenu-expand"
                                    onClick={() =>
                                        setOpenChild((prev) =>
                                            prev === item.title ? null : item.title,
                                        )
                                    }
                                    aria-expanded={openChild === item.title}
                                    aria-label={`${openChild === item.title ? 'Collapse' : 'Expand'} ${item.title}`}
                                >
                                    <span
                                        className={`cu-nav__arrow${openChild === item.title ? ' cu-nav__arrow--open' : ''}`}
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                            {openChild === item.title && (
                                <ul className="cu-nav__submenu cu-nav__submenu--nested">
                                    {item.submenu.map((child) => (
                                        <li key={child.title} className="cu-nav__submenu-item">
                                            <LinkComponent
                                                href={child.href ?? '#'}
                                                className="cu-nav__submenu-link"
                                            >
                                                {child.title}
                                            </LinkComponent>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    ) : (
                        <LinkComponent href={item.href ?? '#'} className="cu-nav__submenu-link">
                            {item.title}
                        </LinkComponent>
                    )}
                </li>
            ))}
        </ul>
    );
};
