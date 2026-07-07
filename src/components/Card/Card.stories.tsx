import type { Meta, StoryObj } from '@storybook/react-vite';
import { Column } from '../Column/Column';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { Card } from './Card';
import { Icon } from '../Icon/Icon';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { formatHoursStatus } from '../Status/hoursStatus';

import { NewsData } from '../../data/NewsData';
import { EventData } from '../../data/EventData';
import { PeopleData } from '../../data/PeopleData';
import { PageData } from '../../data/PageData';
import { VideoData } from '../../data/VideoData';
import { IconData } from '../../data/IconData';
import { StatData } from '../../data/StatData';
import { HoursData } from '../../data/HoursData';
import { AvailabilityData } from '../../data/AvailabilityData';
import { SystemData } from '../../data/SystemData';
import { LanguageData } from '../../data/LanguageData';

const meta: Meta<typeof Card> = {
    title: 'Components/Content/Card',
    component: Card,
    decorators: [
        (Story) => (
            <Main>
                <Section>
                    <Story />
                </Section>
            </Main>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const NewsCards: Story = {
    render: () => (
        <Column cols="3">
            {NewsData.slice(0, 6).map((item) => (
                <Card key={`news-${item.id}`}>
                    <Card.Figure>
                        <img src={item.image} alt={item.alt} width="600" height="400" />
                    </Card.Figure>
                    <Card.Header
                        title={item.title}
                        link={item.link}
                        date={item.date}
                        readTime="7"
                    />
                    <Card.Body>
                        <Card.Excerpt text={item.excerpt} />
                    </Card.Body>
                </Card>
            ))}
        </Column>
    ),
};

export const EventCards: Story = {
    render: () => (
        <Column cols="3">
            {EventData.slice(0, 6).map((item) => (
                <Card key={`event-${item.id}`} noImage={!item.image}>
                    {item.image && (
                        <Card.Figure>
                            <img src={item.image} alt={item.alt} width="600" height="400" />
                        </Card.Figure>
                    )}
                    <Card.DateThumb startDate={item.startDate} endDate={item.endDate} />
                    <Card.Header title={item.title} link={item.link} />
                    <Card.Body>
                        <Card.EventMeta
                            startDateTime={item.startDate}
                            endDateTime={item.endDate}
                            onCampus={item.on_campus}
                            onCampusBuilding={item.on_campus_building}
                            onCampusRoomNumber={item.on_campus_room_number}
                            eventAddress={item.event_address}
                        />
                    </Card.Body>
                </Card>
            ))}
        </Column>
    ),
};

export const PeopleCards: Story = {
    render: () => (
        <Column cols="3">
            {PeopleData.slice(0, 6).map((item) => (
                <Card key={`people-${item.id}`} isCenter>
                    <Card.Figure isRound>
                        <img src={item.image} alt={item.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Header title={`${item.firstName} ${item.lastName}`} link={item.link} />
                    <Card.Body>
                        <Card.PeopleMeta jobTitle={item.jobTitle} phone={item.phone}>
                            <a href={`mailto:${item.email}`}>{item.email}</a>
                        </Card.PeopleMeta>
                    </Card.Body>
                </Card>
            ))}
        </Column>
    ),
};

export const PageCards: Story = {
    render: () => (
        <Column cols="3">
            {PageData.slice(0, 6).map((item) => (
                <Card key={`page-${item.id}`}>
                    <Card.Header
                        title={item.title}
                        link={item.link}
                        date={item.date}
                        datePrefix="Modified on "
                        position="bottom"
                    />
                    <Card.Body>
                        <Card.Excerpt text={item.excerpt} />
                    </Card.Body>
                </Card>
            ))}
        </Column>
    ),
};

export const VideoCards: Story = {
    render: () => (
        <Column cols="3">
            {VideoData.slice(0, 6).map((item) => (
                <Card key={`video-${item.id}`}>
                    <Card.VideoFigure url={item.source} title={item.title} />
                    <Card.Header title={item.title} />
                </Card>
            ))}
        </Column>
    ),
};

export const FeaturedCards: Story = {
    render: () => (
        <Column cols="3">
            {NewsData.slice(0, 6).map((item) => (
                <Card key={`news-${item.id}`}>
                    <Card.Figure isSmall>
                        <img src={item.image} alt={item.alt} width="600" height="400" />
                    </Card.Figure>
                    <Card.Header title={item.title} link={item.link} />
                    <Card.Body>
                        <Card.Excerpt text={item.excerpt} />
                    </Card.Body>
                </Card>
            ))}
        </Column>
    ),
};

export const IconCards: Story = {
    render: () => (
        <Column cols="3">
            {IconData.slice(0, 6).map((item) => (
                <Card key={`icon-${item.id}`}>
                    <Card.Figure isIcon>
                        <Icon name={item.icon} size={40} color="var(--rds--color-primary)" />
                    </Card.Figure>
                    <Card.Header title={item.title} link={item.link} />
                    <Card.Body>
                        <Card.Excerpt text={item.excerpt} />
                    </Card.Body>
                </Card>
            ))}
        </Column>
    ),
};

export const StatCards: Story = {
    render: () => (
        <Column cols="3">
            {StatData.slice(0, 6).map((item) => (
                <Card key={`stat-${item.id}`} leftBorder>
                    <Card.Stats stat={item.stat} desc={item.desc} />
                </Card>
            ))}
        </Column>
    ),
};

export const ProgressCards: Story = {
    render: () => (
        <Column cols="3">
            {NewsData.slice(0, 6).map((item) => (
                <Card key={`news-${item.id}`}>
                    <Card.Figure>
                        <img src={item.image} alt={item.alt} width="600" height="400" />
                    </Card.Figure>
                    <Card.Header title={item.title} link={item.link} />
                    <Card.Body>
                        <Card.Excerpt text={item.excerpt} />
                        <ProgressBar label="Fundraising progress" max={100} value={65} />
                    </Card.Body>
                </Card>
            ))}
        </Column>
    ),
};

export const HoursCards: Story = {
    render: () => (
        <Column cols="3">
            {HoursData.map((item) => {
                const { variant, label } = formatHoursStatus(item.openTime, item.closeTime);
                return (
                    <Card key={`hours-${item.id}`}>
                        <Card.Figure>
                            <img src={item.image} alt={item.alt} width="600" height="400" />
                        </Card.Figure>
                        <Card.Header title={item.title} link={item.link} />
                        <Card.Body>
                            <Card.Content>
                                <Card.Status type="hours" variant={variant}>
                                    {label}
                                </Card.Status>
                                <Card.Excerpt text={item.excerpt} />
                            </Card.Content>
                        </Card.Body>
                    </Card>
                );
            })}
        </Column>
    ),
};

export const AvailabilityCards: Story = {
    render: () => (
        <Column cols="3">
            {AvailabilityData.map((item) => (
                <Card key={`availability-${item.id}`}>
                    <Card.Header title={item.title} link={item.link} />
                    <Card.Body>
                        <Card.Content>
                            <Card.Status type="availability" variant={item.state} />
                            <Card.Excerpt text={item.excerpt} />
                        </Card.Content>
                    </Card.Body>
                </Card>
            ))}
        </Column>
    ),
};

export const SystemCards: Story = {
    render: () => (
        <Column cols="3">
            {SystemData.map((item) => (
                <Card key={`system-${item.id}`}>
                    <Card.Header title={item.title} link={item.link} />
                    <Card.Body>
                        <Card.Content>
                            <Card.Status type="system" variant={item.state} />
                            <Card.Excerpt text={item.excerpt} />
                        </Card.Content>
                    </Card.Body>
                </Card>
            ))}
        </Column>
    ),
};

export const WaveCards: Story = {
    render: () => (
        <Column cols="3">
            {LanguageData.map((item) => (
                <Card key={`language-${item.id}`} isGrey hasWave>
                    <Card.Header
                        title={item.title}
                        link={item.link}
                        date={item.date}
                        datePrefix="Released on "
                        position="bottom"
                    />
                    <Card.Body>
                        <Card.Excerpt text={item.excerpt} />
                    </Card.Body>
                </Card>
            ))}
        </Column>
    ),
};
