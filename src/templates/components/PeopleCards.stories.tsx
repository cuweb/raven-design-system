import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { Nav } from '../../components/Nav/Nav';
import { FooterStandard } from '../../components/FooterStandard';
import { CookieBanner } from '../../components/CookieBanner';
import { PageHeader } from '../../components/PageHeader';
import { Column } from '../../components/Column';
import { Card } from '../../components/Card';
import { largeNavData } from '../../data/NavigationData';
import { MultiParagraph } from '../../data/storyContent';
import { PeopleData } from '../../data/PeopleData';

const meta: Meta = {
    title: 'Overview/Templates/Components/Cards',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

export const PeopleCardComponent: Story = {
    name: 'People Cards',
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
                <Nav.Bottom>
                    <Nav.Menu menu={largeNavData} />
                </Nav.Bottom>
            </Nav>

            <Main>
                <Section maxWidth="alignfull" bgType="light-gradient" isHero>
                    <PageHeader
                        as="h1"
                        header="People Card Component"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        size="primary"
                    />
                </Section>

                <MultiParagraph count={2} />

                <Column cols="3">
                    {PeopleData.slice(0, 6).map((item) => (
                        <Card key={`people-${item.id}`} isCenter>
                            <Card.Figure isRound>
                                <img src={item.image} alt={item.alt} width={280} height={280} />
                            </Card.Figure>
                            <Card.Header
                                title={`${item.firstName} ${item.lastName}`}
                                link={item.link}
                            />
                            <Card.Body>
                                <Card.PeopleMeta jobTitle={item.jobTitle} phone={item.phone}>
                                    <a href={`mailto:${item.email}`}>{item.email}</a>
                                </Card.PeopleMeta>
                            </Card.Body>
                        </Card>
                    ))}
                </Column>

                <MultiParagraph count={2} />

                <Section as="section" maxWidth="alignwide" bgType="grey">
                    <PageHeader
                        as="h2"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        header="Grey Background"
                        size="lg"
                    />
                    <Column cols="3">
                        {PeopleData.slice(0, 6).map((item) => (
                            <Card key={`people-${item.id}`} isCenter>
                                <Card.Figure isRound>
                                    <img src={item.image} alt={item.alt} width={280} height={280} />
                                </Card.Figure>
                                <Card.Header
                                    title={`${item.firstName} ${item.lastName}`}
                                    link={item.link}
                                />
                                <Card.Body>
                                    <Card.PeopleMeta jobTitle={item.jobTitle} phone={item.phone}>
                                        <a href={`mailto:${item.email}`}>{item.email}</a>
                                    </Card.PeopleMeta>
                                </Card.Body>
                            </Card>
                        ))}
                    </Column>
                </Section>

                <MultiParagraph count={2} />

                <Column cols="4" maxWidth="alignwide">
                    {PeopleData.slice(0, 8).map((item) => (
                        <Card key={`people-${item.id}`} isCenter>
                            <Card.Figure isRound>
                                <img src={item.image} alt={item.alt} width={280} height={280} />
                            </Card.Figure>
                            <Card.Header
                                title={`${item.firstName} ${item.lastName}`}
                                link={item.link}
                            />
                            <Card.Body>
                                <Card.PeopleMeta jobTitle={item.jobTitle} phone={item.phone}>
                                    <a href={`mailto:${item.email}`}>{item.email}</a>
                                </Card.PeopleMeta>
                            </Card.Body>
                        </Card>
                    ))}
                </Column>

                <MultiParagraph count={2} />

                <Section as="section" maxWidth="alignwide" bgType="grey">
                    <PageHeader
                        as="h2"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        header="Grey Background"
                        size="lg"
                        isCenter
                    />
                    <Column cols="4" maxWidth="alignwide">
                        {PeopleData.slice(0, 8).map((item) => (
                            <Card key={`people-${item.id}`} isCenter>
                                <Card.Figure isRound>
                                    <img src={item.image} alt={item.alt} width={280} height={280} />
                                </Card.Figure>
                                <Card.Header
                                    title={`${item.firstName} ${item.lastName}`}
                                    link={item.link}
                                />
                                <Card.Body>
                                    <Card.PeopleMeta jobTitle={item.jobTitle} phone={item.phone}>
                                        <a href={`mailto:${item.email}`}>{item.email}</a>
                                    </Card.PeopleMeta>
                                </Card.Body>
                            </Card>
                        ))}
                    </Column>
                </Section>

                <MultiParagraph count={2} />
            </Main>

            <FooterStandard type="standard" />
            <CookieBanner cookieName="storybook-preview-consent" />
        </>
    ),
};
