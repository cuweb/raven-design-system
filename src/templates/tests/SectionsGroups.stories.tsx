    import type { Meta, StoryObj } from '@storybook/react-vite';
    import { Main } from '../../components/Main/Main';
    import { Section } from '../../components/Section/Section';
    import { Nav } from '../../components/Nav/Nav';
    import { FooterStandard } from '../../components/FooterStandard';
    import { CookieBanner } from '../../components/CookieBanner';
    import { PageHeader } from '../../components/PageHeader';
    import { largeNavData } from '../../data/NavigationData';
    import { MultiParagraph } from '../../data/storyContent';

    const meta: Meta = {
        title: 'Overview/Templates/Tests/Sections & Groups',
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
                    <Nav.Logo title="Information Technology Services" link="#" />
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

                <MultiParagraph />

                <Section as="section" maxWidth="alignfull" bgType="grey">
                    <PageHeader
                        as="h2"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        header="Grey Background"
                        size="lg"
                    />
                    <MultiParagraph count={2} />
                </Section>
            </Main>

            <FooterStandard type="standard" />
            <CookieBanner cookieName="storybook-preview-consent" />
        </>
    ),
};
