import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    intranetApplications,
    intranetSites,
    intranetApplicationResources,
} from '../../data/IntranetData';
import { Card } from '../../components/Card';
import { Column } from '../../components/Column';
import { Icon } from '../../components/Icon';
import { Listing } from '../../components/Listing';
import { PageHeader } from '../../components/PageHeader';
import { Section } from '../../components/Section';
import { StackedList } from '../../components/StackedList';
import { Table, type ColumnDefinitionType } from '../../components/Table';
import { IntranetShell } from './IntranetShell';

const meta: Meta = {
    title: 'Overview/Prototypes/Intranet',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Application discovery prototype using cards for application entry points, compact listings for internal sites and support, and a sortable directory for larger site collections. Application cards link to service information pages. Internal site addresses follow the supplied reference and need confirmation; entries do not indicate the current user has access. Authentication, permissions, and personal link management are outside this prototype.',
            },
        },
    },
    tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

const siteDirectory = intranetSites.map(({ title, category, access, url }) => ({
    title,
    category,
    access,
    link: <a href={url}>Visit {title}</a>,
}));

const columns: ColumnDefinitionType[] = [
    { key: 'title', header: 'Site', sort: { sortable: true }, default: true, order: 'ascending' },
    { key: 'category', header: 'Type', sort: { sortable: true } },
    { key: 'access', header: 'Access information', sort: { sortable: true } },
    { key: 'link', header: 'Open site' },
];

export const Application: Story = {
    render: () => (
        <IntranetShell title="Applications & site access">
            <Section maxWidth="alignwide" contentWidth="alignwide">
                <PageHeader
                    as="h2"
                    header="Applications"
                    size="sm"
                    content="Find everyday tools and the services that support your work. These links open service information pages."
                />
                <Column cols="3" maxWidth="alignwide">
                    {intranetApplications.map(({ title, icon, link, text }) => (
                        <Card key={title} revealOnScroll={false}>
                            <Card.Figure isIcon>
                                <Icon name={icon} size={40} color="var(--rds--color-primary)" />
                            </Card.Figure>
                            <Card.Header as="h3" title={title} link={link} />
                            <Card.Body>
                                <Card.Excerpt text={text} />
                            </Card.Body>
                        </Card>
                    ))}
                </Column>
            </Section>

            <Section maxWidth="alignfull" contentWidth="alignwide" bgType="grey">
                <Column cols="2" maxWidth="alignwide">
                    <Column.Content>
                        <PageHeader
                            as="h2"
                            header="Internal sites"
                            size="sm"
                            content="Team spaces and knowledge bases in one place."
                        />
                        <p>
                            Sample destinations from the intranet reference. Addresses and access
                            requirements need confirmation; this list does not reflect your
                            permissions.
                        </p>
                        <StackedList cols="1">
                            {intranetSites.map(({ title, category, url }) => (
                                <Listing key={title} revealOnScroll={false}>
                                    <Listing.IconThumb icon="users" />
                                    <Listing.Body>
                                        <Listing.Header as="h3" title={title} link={url} />
                                        <Listing.Excerpt
                                            text={`${category} · Sign-in may be required`}
                                        />
                                    </Listing.Body>
                                </Listing>
                            ))}
                        </StackedList>
                        <p>
                            <a href="#site-directory">Browse all sample internal sites</a>
                        </p>
                    </Column.Content>
                    <Column.Content>
                        <PageHeader
                            as="h2"
                            header="Tools & support"
                            size="sm"
                            content="Get help finding a service or accessing the tools you need."
                        />
                        <StackedList cols="1">
                            {intranetApplicationResources.map(({ title, link, text }) => (
                                <Listing key={title} revealOnScroll={false}>
                                    <Listing.IconThumb icon="circle-question" />
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

            <Section maxWidth="alignwide" contentWidth="alignwide">
                <h2 id="site-directory">Site access directory</h2>
                <p>
                    Browse the complete sample collection. Select a column heading to sort by site
                    name, type, or access information. Contact IT support for help confirming
                    access.
                </p>
                <Table
                    data={siteDirectory}
                    columns={columns}
                    maxWidth="alignwide"
                    hasStripes
                    enableRowHeader
                />
            </Section>
        </IntranetShell>
    ),
};
