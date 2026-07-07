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
        title: 'Overview/Templates/Layouts',
        parameters: {
            layout: 'fullscreen',
        },
        tags: ['!autodocs'],
    };

    export default meta;
    type Story = StoryObj;

    export const BasicContent: Story = {
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
                        header="Basic Content"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        size="primary"
                    />
                </Section>

                <MultiParagraph count={1} />

                <p>Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, <a href="https://carleton.ca">lectus dui egestas augue</a>, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus in egestas sapien ac libero.</p>

                <h2>Header Two Basic</h2>
                <MultiParagraph count={2} />

                <h3>Header Three Basic</h3>
                <MultiParagraph count={2} />

                <h4>Header Four Basic</h4>
                <MultiParagraph count={2} />

                <h5>Header Five Basic</h5>
                <MultiParagraph count={2} />

                <h6>Header Six Basic</h6>
                <MultiParagraph count={2} />

                <h2>Unordered List</h2>
                <ul>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor
                    pellentesque, posuere tellus vitae, sagittis justo.
                </li>
                <li>
                    Suspendisse <a href="https://carleton.ca">velit eget suscipit tincidunt</a> vel orci
                    vulputate, eget vulputate neque porttitor.
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <ul>
                    <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
                    <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                    <li>
                        Nested deeper
                        <ul>
                        <li>Third level item one.</li>
                        <li>Third level item two.</li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                </ul>

                <MultiParagraph count={2} />

                <h2>Ordered List</h2>
                <ol>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor
                    pellentesque.
                </li>
                <li>Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor.</li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <ol>
                    <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
                    <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                    </ol>
                </li>
                <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                </ol>

                <MultiParagraph count={2} />
            </Main>

            <FooterStandard type="standard" />
            <CookieBanner cookieName="storybook-preview-consent" />
        </>
    ),
};
