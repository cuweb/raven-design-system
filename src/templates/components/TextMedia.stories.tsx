import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { Nav } from '../../components/Nav/Nav';
import { FooterStandard } from '../../components/FooterStandard';
import { CookieBanner } from '../../components/CookieBanner';
import { TextMedia } from '../../components/TextMedia';
import { ButtonGroup } from '../../components/ButtonGroup';
import { Button } from '../../components/Button';
import { Embed } from '../../components/Embed/Embed';
import { largeNavData } from '../../data/NavigationData';
import { MultiParagraph, SingleParagraph } from '../../data/storyContent';

const meta: Meta = {
    title: 'Overview/Templates/Components',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

export const TextMediaComponent: Story = {
    name: 'Text & Media',
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
                {/* Hero — h1, text left, image right */}
                <Section maxWidth="alignfull" contentWidth="alignwide" bgType="light-gradient" isHero>
                    <TextMedia flexRow="lg" maxWidth="alignwide">
                        <TextMedia.Content
                            title="Website and Application Development"
                            headerType="h1"
                            width={55}
                        >
                            <SingleParagraph />
                            <ButtonGroup>
                                <Button title="Primary" />
                                <Button color="dark-grey" title="Secondary" />
                            </ButtonGroup>
                        </TextMedia.Content>
                        <TextMedia.Media>
                            <img src="https://picsum.photos/800/600" alt="" />
                        </TextMedia.Media>
                    </TextMedia>
                </Section>

                <MultiParagraph count={2} />

                {/* Image left, text right */}
                <TextMedia flexRow="lg" maxWidth="alignwide" flipX>
                    <TextMedia.Content
                        title="Research and Innovation"
                        preHeader="Faculty of Engineering"
                        width={55}
                    >
                        <SingleParagraph index={1} />
                        <ButtonGroup>
                            <Button title="Primary" />
                            <Button color="grey" title="Secondary" />
                        </ButtonGroup>
                    </TextMedia.Content>
                    <TextMedia.Media>
                        <img src="https://picsum.photos/801/600" alt="" />
                    </TextMedia.Media>
                </TextMedia>

                <MultiParagraph count={2} />

                {/* Video embed */}
                <TextMedia flexRow="lg" maxWidth="alignwide">
                    <TextMedia.Content title="Our Research in Action" width={45}>
                        <SingleParagraph index={2} />
                        <ButtonGroup>
                            <Button title="Learn more" />
                        </ButtonGroup>
                    </TextMedia.Content>
                    <TextMedia.Media>
                        <Embed.YouTube title="Carleton University" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                    </TextMedia.Media>
                </TextMedia>

                <MultiParagraph count={2} />

                {/* Grey section — equal columns */}
                <Section as="section" maxWidth="alignwide" bgType="grey">
                    <TextMedia flexRow="lg" maxWidth="alignwide">
                        <TextMedia.Content title="Student Success Stories">
                            <SingleParagraph index={3} />
                            <ButtonGroup>
                                <Button title="Read stories" />
                            </ButtonGroup>
                        </TextMedia.Content>
                        <TextMedia.Media>
                            <img src="https://picsum.photos/802/600" alt="" />
                        </TextMedia.Media>
                    </TextMedia>
                </Section>

                <MultiParagraph count={2} />

                {/* Video reversed */}
                <Section as="section" maxWidth="alignwide" bgType="grey" contentWidth="alignwide">
                    <TextMedia flexRow="lg" maxWidth="alignwide" flipX>
                        <TextMedia.Content title="Explore Our Campus" width={45}>
                            <SingleParagraph />
                            <ButtonGroup>
                                <Button title="Virtual tour" />
                            </ButtonGroup>
                        </TextMedia.Content>
                        <TextMedia.Media>
                            <Embed.YouTube title="Campus tour" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                        </TextMedia.Media>
                    </TextMedia>
                </Section>

                <MultiParagraph count={2} />
            </Main>

            <FooterStandard type="standard" />
            <CookieBanner cookieName="storybook-preview-consent" />
        </>

    ),
};
