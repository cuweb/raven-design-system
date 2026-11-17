import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    intranetDashboardResources,
    intranetNews,
    intranetApplications,
    intranetMarketplaceItems,
    intranetPhonebook,
} from '../../data/IntranetData';
import { IntranetShell } from './IntranetShell';
import { Card } from '../../components/Card';
import { Column } from '../../components/Column';
import { Listing } from '../../components/Listing';
import { PageHeader } from '../../components/PageHeader';
import { Section } from '../../components/Section';
import { StackedList } from '../../components/StackedList';

const meta: Meta = {
    title: 'Overview/Prototypes/Intranet',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

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
                    {intranetDashboardResources.map(({ title, link, text }) => (
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
                <PageHeader as="h2" header="My applications" size="sm" />
                <StackedList cols="2">
                    {intranetApplications.map(({ title, link, text }) => (
                        <Listing key={title} revealOnScroll={false}>
                            <Listing.Body>
                                <Listing.Header as="h3" title={title} link={link} />
                                <Listing.Excerpt text={text} />
                            </Listing.Body>
                        </Listing>
                    ))}
                </StackedList>
            </Section>

            <Section maxWidth="alignfull" contentWidth="alignwide" bgType="grey">
                <PageHeader
                    as="h2"
                    header="Marketplace — recent items"
                    size="sm"
                    content="Fictional listings for this prototype; purchases and messaging are not available."
                />
                <Column cols="3" maxWidth="alignwide">
                    {intranetMarketplaceItems.map(({ title, price, text, seller, category }) => (
                        <Card key={title} noHover revealOnScroll={false}>
                            <Card.Body>
                                <Card.Header as="h3" title={title} extraText={price} />
                                <Card.Excerpt text={text} />
                                <p>
                                    {category} · Listed by {seller}
                                </p>
                            </Card.Body>
                        </Card>
                    ))}
                </Column>
            </Section>

            <Section maxWidth="alignwide" contentWidth="alignwide">
                <PageHeader
                    as="h2"
                    header="Campus phonebook"
                    size="sm"
                    content="Sample people, contact details, and extensions are fictional."
                />
                <Column cols="3" maxWidth="alignwide">
                    {intranetPhonebook.map(({ name, role, department, email, extension }) => (
                        <Card key={email} noHover revealOnScroll={false}>
                            <Card.Body>
                                <Card.Header as="h3" title={name} />
                                <Card.PeopleMeta jobTitle={role}>{department}</Card.PeopleMeta>
                                <p>
                                    {email}
                                    <br />
                                    Extension {extension}
                                </p>
                            </Card.Body>
                        </Card>
                    ))}
                </Column>
                <p>
                    <a href="https://carleton.ca/directory/">Search the Carleton directory</a>
                </p>
            </Section>

            <Section maxWidth="alignfull" contentWidth="alignwide" bgType="grey">
                <PageHeader
                    as="h2"
                    header="Across Carleton"
                    size="sm"
                    content="An exploration of selected news and stories from the Carleton Newsroom."
                />
                <StackedList cols="2">
                    {intranetNews.map(({ title, text }) => (
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
