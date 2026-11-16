import type { Meta, StoryObj } from '@storybook/react-vite';
import { intranetProfile } from '../../data/IntranetData';
import { IntranetShell } from './IntranetShell';
import { Avatar } from '../../components/Avatar';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';
import { Column } from '../../components/Column';
import { Description } from '../../components/Description';
import { Details } from '../../components/Details';
import { PageHeader } from '../../components/PageHeader';
import { Section } from '../../components/Section';
import './profile.scss';

const meta: Meta = {
    title: 'Overview/Prototypes/Intranet',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

export const Profile: Story = {
    render: () => (
        <IntranetShell title="Profile">
            <Section maxWidth="alignwide" contentWidth="alignwide">
                <Column cols="1/3" maxWidth="alignwide">
                    <Column.Content>
                        <Card noHover revealOnScroll={false}>
                            <Card.Body>
                                <Avatar
                                    firstName={intranetProfile.firstName}
                                    lastName={intranetProfile.lastName}
                                    size="lg"
                                    isCircle
                                />
                                <Card.Header
                                    title={intranetProfile.displayName}
                                    extraText={intranetProfile.pronouns}
                                />
                                <Card.PeopleMeta jobTitle={intranetProfile.jobTitle}>
                                    {intranetProfile.department}
                                </Card.PeopleMeta>
                                <Badge text={intranetProfile.employeeType} color="grey" />
                            </Card.Body>
                        </Card>
                    </Column.Content>

                    <Column.Content>
                        <PageHeader as="h2" header="Contact information" size="sm" />
                        <Description>
                            <Description.Meta term="Display name" useColumns>
                                {intranetProfile.displayName}
                            </Description.Meta>
                            <Description.Meta term="Email" useColumns>
                                {intranetProfile.email}
                            </Description.Meta>
                            <Description.Meta term="Phone" useColumns>
                                {intranetProfile.phone ?? 'Not provided'}
                            </Description.Meta>
                            <Description.Meta term="Office" useColumns>
                                {intranetProfile.office}
                            </Description.Meta>
                            <Description.Meta term="Department" useColumns>
                                {intranetProfile.department}
                            </Description.Meta>
                        </Description>

                        <PageHeader as="h2" header="About me" size="sm" />
                        <p>{intranetProfile.bio}</p>
                    </Column.Content>
                </Column>
            </Section>

            <Section
                maxWidth="alignwide"
                contentWidth="alignwide"
                className="cu-intranet-profile__account"
            >
                <Column cols="2" maxWidth="alignwide">
                    <Column.Content>
                        <PageHeader as="h2" header="Account details" size="sm" />
                        <Description>
                            <Description.Meta term="Username" useColumns>
                                {intranetProfile.username}
                            </Description.Meta>
                            <Description.Meta term="Account status" useColumns>
                                {intranetProfile.accountStatus}
                            </Description.Meta>
                            <Description.Meta term="Sign-in verification" useColumns>
                                {intranetProfile.signInVerification}
                            </Description.Meta>
                        </Description>
                    </Column.Content>
                    <Column.Content>
                        <PageHeader as="h2" header="Campus connections" size="sm" />
                        <Description>
                            <Description.Meta term="Teams">
                                <Details hasDividers>
                                    {intranetProfile.teams.map((team) => (
                                        <Details.Item key={team}>{team}</Details.Item>
                                    ))}
                                </Details>
                            </Description.Meta>
                            <Description.Accordion term="Profile visibility — proposed option">
                                <p>
                                    Explore letting staff choose which contact details appear in the
                                    internal directory. Visibility rules and available settings need
                                    product review.
                                </p>
                            </Description.Accordion>
                        </Description>
                    </Column.Content>
                </Column>
            </Section>
        </IntranetShell>
    ),
};
