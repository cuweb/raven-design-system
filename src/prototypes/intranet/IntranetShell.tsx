import type { ReactNode } from 'react';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { Nav } from '../../components/Nav/Nav';
import { FooterStandard } from '../../components/FooterStandard';
import { CookieBanner } from '../../components/CookieBanner';
import { PageHeader } from '../../components/PageHeader';
import { intranetNavData } from '../../data/NavigationData';

interface IntranetShellProps {
    title: string;
    children: ReactNode;
}

export const IntranetShell = ({ title, children }: IntranetShellProps) => (
    <>
        <Nav>
            <Nav.Top>
                <Nav.Logo title="Intranet" link="/science" />
                <Nav.Menu menu={intranetNavData} />
                <Nav.Buttons
                    isSearch
                    buttons={[
                        {
                            title: 'Apply',
                            href: '/apply',
                        },
                        {
                            title: 'Donate',
                            href: '/donate',
                            variant: 'dark',
                        },
                    ]}
                />
            </Nav.Top>
        </Nav>

        <Main>
            <Section maxWidth="alignfull" bgType="light-gradient" isHero>
                <PageHeader as="h1" header={title} size="primary" noUnderline />
            </Section>
            {children}
        </Main>

        <FooterStandard type="standard" />
        <CookieBanner cookieName="storybook-preview-consent" />
    </>
);
