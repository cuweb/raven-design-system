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

const meta: Meta = {
    title: 'Overview/Templates/Layouts',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

export const SectionsGroups: Story = {
    name: 'Sections & Groups',
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
                        header="Sections & Groups"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        size="primary"
                    />
                </Section>

                <MultiParagraph count={2} />

                <Section as="section" bgType="grey">
                    <PageHeader
                        as="h2"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        header="Grey Background"
                        size="lg"
                    />
                    <MultiParagraph count={2} />
                </Section>

                <MultiParagraph count={2} />

                <Section as="section" maxWidth="alignwide" bgType="grey">
                    <PageHeader
                        as="h2"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        header="Grey Background"
                        size="lg"
                    />
                    <MultiParagraph count={2} />
                </Section>

                <MultiParagraph />

                <Section as="section">
                    <PageHeader
                        as="h2"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        header="White Background"
                        size="lg"
                    />
                    <MultiParagraph count={2} />
                </Section>

                <MultiParagraph count={2} />

                <Section as="section" maxWidth="alignfull" bgType="grey">
                    <PageHeader
                        as="h2"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        header="Grey Background"
                        size="lg"
                    />
                    <MultiParagraph count={2} />
                </Section>

                <MultiParagraph count={2} />

                <Section bgType="light-gradient" maxWidth="alignwide" contentWidth="alignwide">
                    <PageHeader
                        as="h2"
                        header="Grey Background, Consecutive Columns"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        size="lg"
                        isCenter
                    />
                    <Column cols="3" maxWidth="aligncontent">
                        <Card leftBorder>
                            <Card.Stats stat="30,600+" desc="Student Population " />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="170+" desc="Clubs & Societies" />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="$87 M" desc="Scholarships & Bursaries" />
                        </Card>
                    </Column>

                    <Column cols="4" maxWidth="alignwide">
                        <Card leftBorder>
                            <Card.Stats stat="30,600+" desc="Student Population " />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="170+" desc="Clubs & Societies" />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="$87 M" desc="Scholarships & Bursaries" />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="$155.4 M" desc="Research Funding" />
                        </Card>
                    </Column>
                </Section>

                <MultiParagraph count={2} />

                <Section bgType="light-gradient" maxWidth="alignwide">
                    <PageHeader
                        as="h2"
                        header="Consecutive Grey Backgrounds with Inner Columns"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        size="lg"
                        isCenter
                    />
                    <Column cols="3">
                        <Card leftBorder>
                            <Card.Stats stat="30,600+" desc="Student Population " />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="170+" desc="Clubs & Societies" />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="$87 M" desc="Scholarships & Bursaries" />
                        </Card>
                    </Column>
                </Section>

                <Section bgType="light-gradient" maxWidth="alignwide" contentWidth="alignwide">
                    <Column cols="4" maxWidth="alignwide">
                        <Card leftBorder>
                            <Card.Stats stat="30,600+" desc="Student Population " />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="170+" desc="Clubs & Societies" />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="$87 M" desc="Scholarships & Bursaries" />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="$155.4 M" desc="Research Funding" />
                        </Card>
                    </Column>
                </Section>

                <MultiParagraph count={2} />

                <Section bgType="light-gradient" maxWidth="alignfull" contentWidth="alignwide">
                    <PageHeader
                        as="h2"
                        header="Grey Background, Consecutive Columns"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        size="lg"
                        isCenter
                    />
                    <Column cols="3" maxWidth="aligncontent">
                        <Card leftBorder>
                            <Card.Stats stat="30,600+" desc="Student Population " />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="170+" desc="Clubs & Societies" />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="$87 M" desc="Scholarships & Bursaries" />
                        </Card>
                    </Column>

                    <Column cols="4" maxWidth="alignwide">
                        <Card leftBorder>
                            <Card.Stats stat="30,600+" desc="Student Population " />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="170+" desc="Clubs & Societies" />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="$87 M" desc="Scholarships & Bursaries" />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="$155.4 M" desc="Research Funding" />
                        </Card>
                    </Column>
                </Section>

                <MultiParagraph count={2} />

                <Section bgType="light-gradient" maxWidth="alignfull">
                    <PageHeader
                        as="h2"
                        header="Consecutive Grey Backgrounds with Inner Columns"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        size="lg"
                        isCenter
                    />
                    <Column cols="3">
                        <Card leftBorder>
                            <Card.Stats stat="30,600+" desc="Student Population " />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="170+" desc="Clubs & Societies" />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="$87 M" desc="Scholarships & Bursaries" />
                        </Card>
                    </Column>
                </Section>

                <Section bgType="light-gradient" maxWidth="alignfull" contentWidth="alignwide">
                    <Column cols="4" maxWidth="alignwide">
                        <Card leftBorder>
                            <Card.Stats stat="30,600+" desc="Student Population " />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="170+" desc="Clubs & Societies" />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="$87 M" desc="Scholarships & Bursaries" />
                        </Card>
                        <Card leftBorder>
                            <Card.Stats stat="$155.4 M" desc="Research Funding" />
                        </Card>
                    </Column>
                </Section>
            </Main>

            <FooterStandard type="standard" />
            <CookieBanner cookieName="storybook-preview-consent" />
        </>
    ),
};
