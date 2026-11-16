import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    intranetDocumentCategories,
    intranetDocumentShortcuts,
    intranetDocuments,
    intranetHrNotices,
    intranetJobs,
    intranetManagerTools,
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
                    'Documents and HR resource discovery prototype. Icon cards group resources, icon listings offer compact shortcuts, and a sortable table explores browsing a document collection. Document names and metadata are illustrative, not downloadable files. HR updates are sample editorial concepts; an internal source, ownership, and feed integration remain unconfirmed.',
            },
        },
    },
    tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

const columns: ColumnDefinitionType[] = [
    {
        key: 'title',
        header: 'Document',
        sort: { sortable: true },
        default: true,
        order: 'ascending',
    },
    { key: 'category', header: 'Category', sort: { sortable: true } },
    { key: 'format', header: 'Format', sort: { sortable: true } },
    { key: 'owner', header: 'Owner', sort: { sortable: true } },
];

export const Documents: Story = {
    render: () => (
        <IntranetShell title="Documents & HR resources">
            <Section maxWidth="alignwide" contentWidth="alignwide">
                <PageHeader
                    as="h2"
                    header="Find what you need"
                    size="sm"
                    content="Explore forms, employee information, and guidance in one place."
                />
                <Column cols="3" maxWidth="alignwide">
                    {intranetDocumentCategories.map(({ title, icon, link, text }) => (
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
                        <PageHeader as="h2" header="Frequently used resources" size="sm" />
                        <StackedList cols="1">
                            {intranetDocumentShortcuts.map(({ title, icon, link, text }) => (
                                <Listing key={title} revealOnScroll={false}>
                                    <Listing.IconThumb icon={icon} />
                                    <Listing.Body>
                                        <Listing.Header as="h3" title={title} link={link} />
                                        <Listing.Excerpt text={text} />
                                    </Listing.Body>
                                </Listing>
                            ))}
                        </StackedList>
                    </Column.Content>
                    <Column.Content>
                        <PageHeader
                            as="h2"
                            header="HR updates"
                            size="sm"
                            content="Fictional notices and dates for layout review; not a live HR feed."
                        />
                        <StackedList cols="1">
                            {intranetHrNotices.map(({ title, text }) => (
                                <Listing key={title} noHover revealOnScroll={false}>
                                    <Listing.IconThumb icon="calendar-days" />
                                    <Listing.Body>
                                        <Listing.Header as="h3" title={title} />
                                        <Listing.Excerpt text={text} />
                                    </Listing.Body>
                                </Listing>
                            ))}
                        </StackedList>
                        <p>
                            Confirm with HR whether an internal source already publishes paydays,
                            holidays, and employee updates. Source access, editorial ownership, and
                            feed integration need review before this becomes a live service.
                        </p>
                    </Column.Content>
                </Column>
            </Section>

            <Section maxWidth="alignwide" contentWidth="alignwide">
                <Column cols="2" maxWidth="alignwide">
                    <Column.Content>
                        <PageHeader as="h2" header="Manager tools" size="sm" />
                        <StackedList cols="1">
                            {intranetManagerTools.map(({ title, text }) => (
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
                        <PageHeader
                            as="h2"
                            header="Staff opportunities"
                            size="sm"
                            content="Fictional vacancies and closing dates for prototype review."
                        />
                        <StackedList cols="1">
                            {intranetJobs.map(({ title, department, type, closes }) => (
                                <Listing key={title} noHover revealOnScroll={false}>
                                    <Listing.Body>
                                        <Listing.Header as="h3" title={title} />
                                        <Listing.Excerpt
                                            text={`${department} · ${type} · Closes ${closes}`}
                                        />
                                    </Listing.Body>
                                </Listing>
                            ))}
                        </StackedList>
                    </Column.Content>
                </Column>
            </Section>

            <Section maxWidth="alignwide" contentWidth="alignwide">
                <h2 id="document-collection">Document collection</h2>
                <p>
                    Select a column heading to sort. These sample titles and metadata illustrate the
                    collection; downloadable files and current versions need confirmation.
                </p>
                <Table
                    data={intranetDocuments}
                    columns={columns}
                    maxWidth="alignwide"
                    hasStripes
                    enableRowHeader
                />
            </Section>

            <Section maxWidth="alignwide" contentWidth="alignwide">
                <PageHeader as="h2" header="Explore by topic" size="sm" />
                <Column cols="3" maxWidth="alignwide">
                    <Column.Content>
                        <h3 id="pay-resources">Pay & personal information</h3>
                        <p>
                            Banking change requests, hourly pay submissions, overtime reports, and
                            name changes.
                        </p>
                        <a href="#document-collection">Browse sample pay forms</a>
                    </Column.Content>
                    <Column.Content>
                        <h3 id="leave-resources">Leave & benefits</h3>
                        <p>
                            Monthly leave reporting, benefits information, and support for employee
                            wellbeing.
                        </p>
                        <a href="#document-collection">
                            Browse sample leave and benefits documents
                        </a>
                    </Column.Content>
                    <Column.Content>
                        <h3 id="manager-resources">Policies & manager resources</h3>
                        <p>
                            Employee policies, onboarding guidance, and tools for supporting your
                            team.
                        </p>
                        <a href="https://carleton.ca/hr/">Explore the HR website</a>
                    </Column.Content>
                </Column>
            </Section>
        </IntranetShell>
    ),
};
