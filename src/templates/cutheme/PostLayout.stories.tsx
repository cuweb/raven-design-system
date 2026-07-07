import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { Nav } from '../../components/Nav/Nav';
import { FooterStandard } from '../../components/FooterStandard';
import { CookieBanner } from '../../components/CookieBanner';
import { PageHeader } from '../../components/PageHeader';
import { Quote } from '../../components/Quote';
import { WideWave } from '../../components/WideWave';
import { largeNavData } from '../../data/NavigationData';
import { MultiParagraph } from '../../data/storyContent';

const meta: Meta = {
    title: 'Overview/Templates/cutheme',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

export const PostLayout: Story = {
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
                    <Nav.Logo
                        title="Max and Tessie Zelikovitz Centre for Jewish Studies"
                        link="/science"
                    />
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
                        header="Post Template"
                        postHeader="Published on January 1, 2024 by John Doe"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        size="primary"
                        // noUnderline
                    />
                </Section>

                <p>
                    This is an example page. It is different from a blog post because it will stay
                    in one place and will show up in your site navigation (in most themes). Most
                    people start with an About page that introduces them to potential site visitors.
                    It might say something like this:
                </p>
                <MultiParagraph count={1} />

                <h2>Heading Two</h2>
                <MultiParagraph count={2} />
                <Quote cite="John Doe" graphic="border">
                    <MultiParagraph count={1} />
                </Quote>
                <MultiParagraph count={2} />

                <WideWave>
                    <MultiParagraph count={2} />
                </WideWave>

                <MultiParagraph count={2} />

                <Section as="section" maxWidth="alignwide" bgType="grey">
                    <h2>Heading Two</h2>
                    <MultiParagraph count={2} />
                    <Quote cite="John Doe" graphic="border">
                        <MultiParagraph count={1} />
                    </Quote>
                    <MultiParagraph count={2} />
                </Section>

                <h3>Heading Three</h3>
                <MultiParagraph count={1} />

                <h4>Heading Four</h4>
                <MultiParagraph count={1} />

                <h5>Heading Five</h5>
                <MultiParagraph count={1} />

                <h6>Heading Six</h6>
                <MultiParagraph count={1} />

                <h2>Unordered List</h2>
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet
                        tortor pellentesque, posuere tellus vitae, sagittis justo.
                    </li>
                    <li>
                        Suspendisse <a href="https://carleton.ca">velit eget suscipit tincidunt</a>{' '}
                        vel orci vulputate, eget vulputate neque porttitor.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <ul>
                            <li>
                                Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis
                                justo.
                            </li>
                            <li>
                                Vivamus imperdiet turpis nec elit ultricies, sed tempus diam
                                dignissim.
                            </li>
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

                <MultiParagraph count={1} />

                <h2>Ordered List</h2>
                <ol>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet
                        tortor pellentesque.
                    </li>
                    <li>
                        Suspendisse condimentum magna vel orci vulputate, eget vulputate neque
                        porttitor.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <ol>
                            <li>
                                Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis
                                justo.
                            </li>
                            <li>
                                Vivamus imperdiet turpis nec elit ultricies, sed tempus diam
                                dignissim.
                            </li>
                        </ol>
                    </li>
                    <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                </ol>

                <MultiParagraph count={1} />

                <p>
                    Hi there! I am a bike messenger by day, aspiring actor by night, and this is my
                    website. I live in Los Angeles, have a great dog named Jack, and I like piña
                    coladas. (And getting caught in the rain.)
                </p>

                <MultiParagraph count={1} />

                <Section as="section" maxWidth="alignwide" bgType="grey">
                    <PageHeader
                        as="h2"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        header="Grey Background"
                        size="lg"
                    />
                    <p>
                        A paragraph can contain <strong>bold text</strong>, <em>italic text</em>,{' '}
                        <code>inline code</code>, <a href="https://carleton.ca">a link</a>, and{' '}
                        <mark>highlighted text</mark>. Keyboard shortcuts look like <kbd>Cmd</kbd> +{' '}
                        <kbd>K</kbd>, and abbreviations like{' '}
                        <abbr title="Raven Design System">RDS</abbr> should render with dotted
                        underlines.
                    </p>
                </Section>

                <MultiParagraph count={1} />

                <Section as="section">
                    <PageHeader
                        as="h2"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        header="White Background"
                        size="lg"
                    />
                    <p>
                        A paragraph can contain <strong>bold text</strong>, <em>italic text</em>,{' '}
                        <code>inline code</code>, <a href="https://carleton.ca">a link</a>, and{' '}
                        <mark>highlighted text</mark>. Keyboard shortcuts look like <kbd>Cmd</kbd> +{' '}
                        <kbd>K</kbd>, and abbreviations like{' '}
                        <abbr title="Raven Design System">RDS</abbr> should render with dotted
                        underlines.
                    </p>
                </Section>

                <MultiParagraph count={1} />

                <Section as="section" maxWidth="alignfull" bgType="grey">
                    <PageHeader
                        as="h2"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                        header="Grey Background"
                        size="lg"
                    />
                    <p>
                        A paragraph can contain <strong>bold text</strong>, <em>italic text</em>,{' '}
                        <code>inline code</code>, <a href="https://carleton.ca">a link</a>, and{' '}
                        <mark>highlighted text</mark>. Keyboard shortcuts look like <kbd>Cmd</kbd> +{' '}
                        <kbd>K</kbd>, and abbreviations like{' '}
                        <abbr title="Raven Design System">RDS</abbr> should render with dotted
                        underlines.
                    </p>
                </Section>
            </Main>

            <FooterStandard type="standard" />
            <CookieBanner cookieName="storybook-preview-consent" />
        </>
    ),
};
