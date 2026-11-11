import { useId, useState, type ReactNode } from 'react';
import type { IconName } from '@cuweb/rds-icons';
import { Avatar } from '../../components/Avatar';
import { Icon } from '../../components/Icon';
import { Main } from '../../components/Main/Main';
import { assets } from '../../config/assets';
import './intranet.scss';

const navigation: { title: string; icon: IconName; href: string }[] = [
    {
        title: 'Dashboard',
        icon: 'house',
        href: '?id=overview-prototypes-intranet-dashboard--dashboard&viewMode=story',
    },
    { title: 'Links', icon: 'external-link', href: 'https://carleton.ca/faculty-staff/' },
    { title: 'My HR', icon: 'briefcase', href: 'https://carleton.ca/hr/' },
    { title: 'Marketplace', icon: 'building', href: 'https://carleton.ca/marketplace/' },
    {
        title: 'Profile',
        icon: 'user',
        href: '?id=overview-prototypes-intranet-profile--profile&viewMode=story',
    },
];

export const IntranetShell = ({
    title,
    children,
}: {
    title: 'Dashboard' | 'Profile';
    children: ReactNode;
}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuId = useId();
    return (
        <div className="cu-intranet-frame">
            <div className="cu-intranet">
                <aside className="cu-intranet__sidebar" aria-label="Intranet sidebar">
                    <a
                        className="cu-intranet__brand"
                        href="?id=overview-prototypes-intranet-dashboard--dashboard&viewMode=story"
                        target="_top"
                    >
                        <img src={assets.cuShieldColor} alt="Carleton University" />
                        <span>INTRANET</span>
                    </a>
                    <div className="cu-intranet__identity">
                        <Avatar firstName="Alex" lastName="Morgan" size="lg" isCircle />
                        <strong>Alex Morgan</strong>
                        <p>
                            Communications Officer
                            <br />
                            University Communications
                        </p>
                    </div>
                    <button
                        className="cu-intranet__menu-toggle"
                        type="button"
                        aria-expanded={menuOpen}
                        aria-controls={menuId}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <Icon name="chevron-down" /> Menu
                    </button>
                    <nav
                        id={menuId}
                        className={`cu-intranet__menu${menuOpen ? ' cu-intranet__menu--open' : ''}`}
                        aria-label="Intranet"
                    >
                        <ul className="cu-intranet__navigation">
                            {navigation.map((item) => (
                                <li key={item.title}>
                                    <a
                                        href={item.href}
                                        target={
                                            item.title === 'Dashboard' || item.title === 'Profile'
                                                ? '_top'
                                                : undefined
                                        }
                                        aria-current={title === item.title ? 'page' : undefined}
                                    >
                                        <Icon name={item.icon} />
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <div className="cu-intranet__workspace">
                    <header className="cu-intranet__header">
                        <h1>{title}</h1>
                        <nav aria-label="Support">
                            <a href="https://carleton.ca/directory/" aria-label="Phone directory">
                                <Icon name="phone" />
                            </a>
                            <a href="https://carleton.ca/its/" aria-label="Help and IT support">
                                <Icon name="circle-question" />
                            </a>
                            <a
                                href="?id=overview-prototypes-intranet-profile--profile&viewMode=story"
                                target="_top"
                                aria-label="Account settings"
                            >
                                <Icon name="gears" />
                            </a>
                        </nav>
                    </header>
                    <div
                        className="cu-intranet__banner"
                        role="img"
                        aria-label="Carleton University campus beside the Rideau River"
                    />
                    <Main className="cu-intranet__content" hasPadding={false}>
                        {children}
                    </Main>
                </div>
            </div>
        </div>
    );
};
