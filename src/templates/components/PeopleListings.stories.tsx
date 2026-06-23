import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { Nav } from '../../components/Nav/Nav';
import { FooterStandard } from '../../components/FooterStandard';
import { CookieBanner } from '../../components/CookieBanner';
import { PageHeader } from '../../components/PageHeader';
import { StackedList } from '../../components/StackedList/StackedList';
import { Listing } from '../../components/Listing/Listing';
import { largeNavData } from '../../data/NavigationData';
import { MultiParagraph } from '../../data/storyContent';
import { PeopleData } from '../../data/PeopleData';

const meta: Meta = {
    title: 'Overview/Templates/Components/Listings',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

export const PeopleListingsComponent: Story = {
    name: 'People Listings',
    parameters: {
        a11y: {
            config: {
                rules: [
                    { id: 'color-contrast', enabled: false },
                    { id: 'landmark-complementary-is-top-level', enabled: false },
                ],
            },
        },
    },
    render: () => (
        <>
            <Nav>
                <Nav.Top>
                    <Nav.Logo title="Raven Design System" link="#" />
                    <Nav.Buttons isSearch buttons={[{
                        title: 'Apply',
                        href: '/apply'
                    }, {
                        title: 'Donate',
                        href: '/donate',
                        variant: 'dark'
                    }]} />
                </Nav.Top>
                <Nav.Bottom>
                    <Nav.Menu menu={largeNavData} />
                </Nav.Bottom>
            </Nav>

            <Main>
                <Section maxWidth='alignfull' bgType="light-gradient" isHero>
                    <PageHeader
                        as="h1"
                        header="People Listings Component"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        size="primary"
                    />
                </Section>

                <MultiParagraph count={2} />

                <Section>
                    <StackedList cols="1">
                        {PeopleData.slice(0, 6).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                            <Listing key={id}>
                                <Listing.Figure isSquare>
                                    <img src={image} alt={alt} width="280" height="280" />
                                </Listing.Figure>
                                <Listing.Body>
                                    <Listing.Header title={`${firstName} ${lastName}`} link={link} />
                                    <Listing.PeopleMeta jobTitle={jobTitle} phone={phone}>
                                        <a href={`mailto:${email}`}>{email}</a>
                                    </Listing.PeopleMeta>
                                </Listing.Body>
                            </Listing>
                        ))}
                    </StackedList>
                </Section>

                <MultiParagraph count={2} />

                <Section as="section" maxWidth="alignwide" bgType="grey">
                    <PageHeader
                        as="h2"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        header="Grey Background"
                        size="lg"
                    />
                    <StackedList cols="1">
                        {PeopleData.slice(0, 6).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                            <Listing key={id}>
                                <Listing.Figure isSquare>
                                    <img src={image} alt={alt} width="280" height="280" />
                                </Listing.Figure>
                                <Listing.Body>
                                    <Listing.Header title={`${firstName} ${lastName}`} link={link} />
                                    <Listing.PeopleMeta jobTitle={jobTitle} phone={phone}>
                                        <a href={`mailto:${email}`}>{email}</a>
                                    </Listing.PeopleMeta>
                                </Listing.Body>
                            </Listing>
                        ))}
                    </StackedList>
                </Section>
                
                <MultiParagraph count={2} />

                <Section>
                    <StackedList cols="2">
                        {PeopleData.slice(0, 8).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                            <Listing key={id}>
                                <Listing.Figure isSquare>
                                    <img src={image} alt={alt} width="280" height="280" />
                                </Listing.Figure>
                                <Listing.Body>
                                    <Listing.Header title={`${firstName} ${lastName}`} link={link} />
                                    <Listing.PeopleMeta jobTitle={jobTitle} phone={phone}>
                                        <a href={`mailto:${email}`}>{email}</a>
                                    </Listing.PeopleMeta>
                                </Listing.Body>
                            </Listing>
                        ))}
                    </StackedList>
                </Section>

                <MultiParagraph count={2} />

                <Section as="section" maxWidth="alignwide" bgType="grey">
                    <PageHeader
                        as="h2"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        header="Grey Background"
                        size="lg"
                        isCenter
                    />
                    <StackedList cols="2">
                        {PeopleData.slice(0, 8).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                            <Listing key={id}>
                                <Listing.Figure isSquare>
                                    <img src={image} alt={alt} width="280" height="280" />
                                </Listing.Figure>
                                <Listing.Body>
                                    <Listing.Header title={`${firstName} ${lastName}`} link={link} />
                                    <Listing.PeopleMeta jobTitle={jobTitle} phone={phone}>
                                        <a href={`mailto:${email}`}>{email}</a>
                                    </Listing.PeopleMeta>
                                </Listing.Body>
                            </Listing>
                        ))}
                    </StackedList>
                </Section>
                
                <MultiParagraph count={2} />
            </Main>

            <FooterStandard type="standard" />
            <CookieBanner cookieName="storybook-preview-consent" />
        </>
    ),
};
