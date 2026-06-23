import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../components/Main/Main';
import { Nav } from '../components/Nav/Nav';
import { FooterStandard } from '../components/FooterStandard';
import { CookieBanner } from '../components/CookieBanner';
import { Section } from '../components/Section';
import { PageHeader } from '../components/PageHeader';
import { FullBanner } from '../components/FullBanner';
import { WideWave } from '../components/WideWave';
import { ButtonGroup } from '../components/ButtonGroup';
import { Button } from '../components/Button';
import { Column } from '../components/Column';
import { Card } from '../components/Card';
import { BadgeGroup } from '../components/BadgeGroup';
import { Badge } from '../components/Badge';
import { Figure } from '../components/Figure';
import { ImageCover } from '../components/ImageCover';
import { Embed } from '../components/Embed';
import { Testimonial } from '../components/Testimonial';
import { ImageGrid } from '../components/ImageGrid';

import { largeNavData } from '../data/NavigationData';
import { NewsData } from '../data/NewsData';
import { EventData } from '../data/EventData';
import { ImageData } from '../data/ImageData';
import { MultiParagraph } from '../data/storyContent';

const meta: Meta = {
    title: 'Overview/Templates/Carleton Homepage',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

export const CarletonHomepage: Story = {
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
                    <Nav.Logo />
                    <Nav.Menu menu={largeNavData} />
                    <Nav.Buttons isSearch buttons={[{
                            title: 'Apply',
                            href: '/apply'
                        }, {
                            title: 'Donate',
                            href: '/donate',
                            variant: 'dark'
                        }]}
                    />
                </Nav.Top>
            </Nav>

            <Main>
                <FullBanner
                    title="Join a Smart, Caring Community"
                    content="Find your people and your purpose with our new programs and award-winning student support."
                    contentBox="xl"
                    headerType="h1"
                    justify="start"
                    maxWidth="alignfull"
                    media={<FullBanner.Video src="https://cdn.carleton.ca/truth/videos/discover-20260513140912.webm" />}
                    opacity={0}
                >
                    <ButtonGroup>
                        <Button title="Explore Our Programs" />
                        <Button
                        color="white"
                        title="Virtual Tour"
                        />
                    </ButtonGroup>
                </FullBanner>

                <Section bgType="light-gradient" maxWidth="alignfull" contentWidth>
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

                <Column cols="4" maxWidth="alignwide">
                    {NewsData.slice(0, 4).map(item => <Card key={`news-${item.id}`}>
                        <Card.Figure>
                            <img src={item.image} alt={item.alt} width="600" height="400" />
                        </Card.Figure>
                        <BadgeGroup>
                            <Badge text="Featured" color="black80" rounded="full" />
                            <Badge text="New" color="teal" rounded="full" />
                        </BadgeGroup>
                        <Card.Header title={item.title} link={item.link} date={item.date} readTime="7" />
                        <Card.Body>
                            <Card.Excerpt text={item.excerpt} />
                        </Card.Body>
                    </Card>)}
                </Column>

                <WideWave>
                    <PageHeader
                        as="h2"
                        header="Protecting Canadians from Mosquito-Borne Diseases"
                        size="lg"
                        isWhite
                        noUnderline
                    />
                    <Column cols="2" maxWidth="alignwide">
                        <Column.Content>
                            <MultiParagraph count={1} />
                            <ButtonGroup>
                                <Button
                                    color="red"
                                    title="Read more"
                                />
                            </ButtonGroup>
                        </Column.Content>
                        <Column.Content>
                            <Figure
                                align="none"
                                size="full"
                            >
                                <img
                                    alt="Landscape with trees and mountains"
                                    src="https://picsum.photos/id/15/600/300"
                                    width="600"
                                    height="300"
                                />
                            </Figure>
                        </Column.Content>
                    </Column>
                </WideWave>

                <ImageCover image="tory" contentWidth>
                    <PageHeader
                        as="h2"
                        header="Attend Carleton"
                        size="lg"
                    />
                    <Column cols="4" maxWidth="alignwide">
                        {NewsData.slice(4, 8).map(item => <Card key={`news-${item.id}`}>
                            <Card.Figure>
                                <img src={item.image} alt={item.alt} width="600" height="400" />
                            </Card.Figure>
                            <Card.Header title={item.title} link={item.link} />
                            <Card.Body>
                                <Card.Excerpt text={item.excerpt} />
                            </Card.Body>
                        </Card>)}
                    </Column>
                    <Embed maxWidth="alignwide">
                        <Embed.YouTube
                            title="YouTube embed demo"
                            url="https://www.youtube.com/watch?v=Fbb1gdTcH-A"
                        />
                    </Embed>
                </ImageCover>

                <Section maxWidth="alignfull" contentWidth>
                    <PageHeader
                        as="h2"
                        header="Campus Life"
                        size="lg"
                    />
                    <ImageGrid cols="3" gap="sm" maxWidth="alignwide">
                        <ImageGrid.Image imageUrl={ImageData[2].image} colSpan="2" rowSpan="2" title="Overlay Image Title" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!" link="https://carleton.ca" />
                        {ImageData.slice(3, 5).map(({
                            id,
                            image
                        }: {
                            id: number;
                            image: string;
                        }) => <ImageGrid.Image key={id} imageUrl={image} />)}
                    </ImageGrid>
                    <Testimonial
                        cite="Jane Doe"
                        focalPointX={50}
                        focalPointY={50}
                        imageUrl="https://picsum.photos/id/342/600/400"
                        imageZoom={0}
                        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam mollis feugiat nisl, sit amet tempor ante scelerisque vitae."
                    />
                </Section>

                <WideWave>
                    <PageHeader
                        as="h2"
                        header="Cheer on the Carleton Ravens "
                        size="lg"
                        isWhite
                        noUnderline
                    />
                    <Column cols="2" maxWidth="alignwide">
                        <Column.Content>
                            <Figure
                                align="none"
                                size="full"
                            >
                                <img
                                    alt="Landscape with trees and mountains"
                                    src="https://picsum.photos/id/15/600/400"
                                    width="600"
                                    height="400"
                                />
                            </Figure>
                        </Column.Content>
                        <Column.Content>
                            <MultiParagraph count={1} />
                            <ButtonGroup>
                                <Button
                                    color="red"
                                    title="Get Tickets"
                                />
                            </ButtonGroup>
                        </Column.Content>
                    </Column>
                </WideWave>

                <Section bgType="grey" maxWidth="alignfull" contentWidth>
                    <PageHeader
                        as="h2"
                        header="Upcoming Events"
                        size="lg"
                    />
                    <Column cols="4" maxWidth="alignwide">
                        {EventData.slice(0, 4).map(item => <Card key={`event-${item.id}`} noImage={!item.image}>
                            {item.image && <Card.Figure>
                                    <img src={item.image} alt={item.alt} width="600" height="400" />
                                </Card.Figure>}
                            <Card.DateThumb startDate={item.startDate} endDate={item.endDate} />
                            <Card.Header title={item.title} link={item.link} />
                            <Card.Body>
                                <Card.EventMeta startDateTime={item.startDate} endDateTime={item.endDate} onCampus={item.on_campus} onCampusBuilding={item.on_campus_building} onCampusRoomNumber={item.on_campus_room_number} eventAddress={item.event_address} />
                            </Card.Body>
                        </Card>)}
                    </Column>
                </Section>
            </Main>

            <FooterStandard type="standard" />
            <CookieBanner cookieName="storybook-preview-consent" />
        </>
    ),
};
