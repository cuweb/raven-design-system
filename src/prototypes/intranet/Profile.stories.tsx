import { IntranetShell } from './IntranetShell';
import type { Meta, StoryObj } from '@storybook/react-vite';
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
    title: 'Overview/Prototypes/Intranet/Profile',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Profile layout exploration for Carleton Intranet. Confirmed scope: organize profile and related account information using the design system. This prototype assumes an employee viewing their own profile; all names and account details are fictional. Fields, team memberships, and profile visibility settings are proposals for review, not confirmed product requirements. Avatar and Description organize identity and account information. Stat Cards were explored and omitted because no meaningful profile metrics have been confirmed. The shared sidebar, title bar, campus banner, and content panels follow the supplied intranet reference. Editing, authentication, and live account integrations are outside this prototype.',
            },
        },
    },
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
                                <Avatar firstName="Alex" lastName="Morgan" size="lg" isCircle />
                                <Card.Header title="Alex Morgan" extraText="They / them" />
                                <Card.PeopleMeta jobTitle="Communications Officer">
                                    University Communications
                                </Card.PeopleMeta>
                                <Badge text="Staff" color="grey" />
                            </Card.Body>
                        </Card>
                    </Column.Content>

                    <Column.Content>
                        <PageHeader as="h2" header="Contact information" size="sm" />
                        <Description>
                            <Description.Meta term="Display name" useColumns>
                                Alex Morgan
                            </Description.Meta>
                            <Description.Meta term="Email" useColumns>
                                alex.morgan@example.com
                            </Description.Meta>
                            <Description.Meta term="Phone" useColumns>
                                Not provided
                            </Description.Meta>
                            <Description.Meta term="Office" useColumns>
                                Robertson Hall
                            </Description.Meta>
                            <Description.Meta term="Department" useColumns>
                                University Communications
                            </Description.Meta>
                        </Description>

                        <PageHeader as="h2" header="About me" size="sm" />
                        <p>
                            I help campus teams share their stories through clear, accessible
                            communications. Connect with me about web content, campus news, or
                            collaborating on a department announcement.
                        </p>
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
                                alexmorgan
                            </Description.Meta>
                            <Description.Meta term="Account status" useColumns>
                                Active
                            </Description.Meta>
                            <Description.Meta term="Sign-in verification" useColumns>
                                Multi-factor authentication enabled
                            </Description.Meta>
                        </Description>
                    </Column.Content>
                    <Column.Content>
                        <PageHeader as="h2" header="Campus connections" size="sm" />
                        <Description>
                            <Description.Meta term="Teams">
                                <Details hasDividers>
                                    <Details.Item>Web Content Working Group</Details.Item>
                                    <Details.Item>Campus Communicators Network</Details.Item>
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
