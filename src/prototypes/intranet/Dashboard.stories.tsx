import { IntranetShell } from './IntranetShell';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../../components/Card';
import { Column } from '../../components/Column';
import { Listing } from '../../components/Listing';
import { PageHeader } from '../../components/PageHeader';
import { Section } from '../../components/Section';
import { StackedList } from '../../components/StackedList';

const meta: Meta = {
    title: 'Overview/Prototypes/Intranet/Dashboard',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        controls: { sort: 'requiredFirst' },
        docs: {
            description: {
                component:
                    'Carleton Intranet dashboard layout exploration for employees. Everyday tools lead, followed by campus updates, resources, and a possible Newsroom feed. All announcements and news headlines are illustrative sample content. Resource links open public Carleton service pages; authentication, personalization, and live feeds are outside this prototype. DUC could tag key Newsroom news or stories for dashboard inclusion, but the tagging model, editorial workflow, and feed integration remain to be determined. The shared sidebar, title bar, campus banner, and content panels follow the supplied intranet reference.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

const tools = [
    {
        title: 'My HR',
        link: 'https://carleton.ca/hr/',
        text: 'Pay, benefits, leave, and employee information.',
    },
    {
        title: 'Travel & expenses',
        link: 'https://carleton.ca/financialservices/',
        text: 'Find expense guidance and financial services.',
    },
    {
        title: 'Campus card',
        link: 'https://carleton.ca/campuscard/',
        text: 'Manage your card and explore campus services.',
    },
];

const resources = [
    {
        title: 'Staff & faculty directory',
        link: 'https://carleton.ca/directory/',
        text: 'Find a colleague or department.',
    },
    {
        title: 'IT support',
        link: 'https://carleton.ca/its/',
        text: 'Get help with accounts, access, and technology.',
    },
    {
        title: 'Employee wellbeing',
        link: 'https://carleton.ca/healthy-workplace/',
        text: 'Discover resources for a healthy workplace.',
    },
];

const updates = [
    {
        title: 'Plan ahead for scheduled system maintenance',
        text: 'Sample notice · IT services — Check service availability before working this weekend.',
    },
    {
        title: 'Make time for your professional development',
        text: 'Sample reminder · Human Resources — Explore learning opportunities and discuss your goals with your manager.',
    },
];

const news = [
    {
        title: 'Celebrating the people behind our campus community',
        text: 'Sample story · A spotlight on staff contributions across Carleton.',
    },
    {
        title: 'Connecting research with community impact',
        text: 'Sample story · Discover how university partnerships could be highlighted for employees.',
    },
];

export const Dashboard: Story = {
    render: () => (
        <IntranetShell title="Dashboard">
            <Section maxWidth="alignwide" contentWidth="alignwide">
                <PageHeader
                    as="h2"
                    header="Your everyday tools"
                    size="sm"
                    content="Keep frequently used services within reach."
                />
                <Column cols="3" maxWidth="alignwide">
                    {tools.map(({ title, link, text }) => (
                        <Card key={title} revealOnScroll={false}>
                            <Card.Body>
                                <Card.Header as="h3" title={title} link={link} />
                                <Card.Excerpt text={text} />
                            </Card.Body>
                        </Card>
                    ))}
                </Column>
            </Section>

            <Section maxWidth="alignwide" contentWidth="alignwide">
                <Column cols="2/3" maxWidth="alignwide">
                    <Column.Content>
                        <PageHeader
                            as="h2"
                            header="On your radar"
                            size="sm"
                            content="Campus notices and reminders at a glance."
                        />
                        <StackedList cols="1">
                            {updates.map(({ title, text }) => (
                                <Listing key={title} noHover revealOnScroll={false}>
                                    <Listing.Body>
                                        <Listing.Header as="h3" title={title} />
                                        <Listing.Excerpt text={text} />
                                    </Listing.Body>
                                </Listing>
                            ))}
                        </StackedList>
                    </Column.Content>
                    <Column.Content>
                        <PageHeader as="h2" header="Find what you need" size="sm" />
                        <StackedList cols="1">
                            {resources.map(({ title, link, text }) => (
                                <Listing key={title} revealOnScroll={false}>
                                    <Listing.Body>
                                        <Listing.Header as="h3" title={title} link={link} />
                                        <Listing.Excerpt text={text} />
                                    </Listing.Body>
                                </Listing>
                            ))}
                        </StackedList>
                    </Column.Content>
                </Column>
            </Section>

            <Section maxWidth="alignfull" contentWidth="alignwide" bgType="grey">
                <PageHeader
                    as="h2"
                    header="Across Carleton"
                    size="sm"
                    content="An exploration of selected news and stories from the Carleton Newsroom."
                />
                <StackedList cols="2">
                    {news.map(({ title, text }) => (
                        <Listing key={title} noHover revealOnScroll={false}>
                            <Listing.Body>
                                <Listing.Header as="h3" title={title} />
                                <Listing.Excerpt text={text} />
                            </Listing.Body>
                        </Listing>
                    ))}
                </StackedList>
                <p>
                    Feed concept for review: DUC could tag key Newsroom news or stories for
                    inclusion here. Tagging, editorial selection, and feed integration are still to
                    be determined. These sample stories are not a live feed.
                </p>
                <p>
                    <a href="https://newsroom.carleton.ca/">Visit the Carleton Newsroom</a>
                </p>
            </Section>
        </IntranetShell>
    ),
};
