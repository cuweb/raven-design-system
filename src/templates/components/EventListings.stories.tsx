import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { Nav } from '../../components/Nav/Nav';
import { FooterStandard } from '../../components/FooterStandard';
import { CookieBanner } from '../../components/CookieBanner';
import { PageHeader } from '../../components/PageHeader';
import { StackedList } from '../../components/StackedList/StackedList';
import { Listing } from '../../components/Listing/Listing';
import { largeNavData } from '../../data/NavigationData';
import { MultiParagraph } from '../../data/storyContent';
import { EventData } from '../../data/EventData';

const meta: Meta = {
  title: 'Overview/Templates/Components/Listings',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

export const EventListingsComponent: Story = {
  name: 'Event Listings',
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
            header="Event Listings Component"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            size="primary"
          />
        </Section>

        <MultiParagraph count={2} />

        <Section>
          <StackedList cols="1">
            {EventData.slice(0, 6).map(
              ({
                id,
                link,
                title,
                startDate,
                endDate,
                on_campus,
                on_campus_building,
                on_campus_room_number,
                event_address,
              }) => (
                <Listing key={id}>
                  <Listing.DateThumb startDate={startDate} endDate={endDate} />
                  <Listing.Body>
                    <Listing.Header title={title} link={link} />
                    <Listing.EventMeta
                      startDateTime={startDate}
                      endDateTime={endDate}
                      onCampus={on_campus}
                      onCampusBuilding={on_campus_building}
                      onCampusRoomNumber={on_campus_room_number}
                      eventAddress={event_address}
                    />
                  </Listing.Body>
                </Listing>
              ),
            )}
          </StackedList>
        </Section>

        <MultiParagraph count={2} />

        <Section as="section" maxWidth="alignwide" bgType="grey">
          <PageHeader
            as="h2"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Grey Background"
            size="lg"
          />
          <StackedList cols="1">
            {EventData.slice(0, 6).map(
              ({
                id,
                link,
                title,
                startDate,
                endDate,
                on_campus,
                on_campus_building,
                on_campus_room_number,
                event_address,
              }) => (
                <Listing key={id}>
                  <Listing.DateThumb startDate={startDate} endDate={endDate} />
                  <Listing.Body>
                    <Listing.Header title={title} link={link} />
                    <Listing.EventMeta
                      startDateTime={startDate}
                      endDateTime={endDate}
                      onCampus={on_campus}
                      onCampusBuilding={on_campus_building}
                      onCampusRoomNumber={on_campus_room_number}
                      eventAddress={event_address}
                    />
                  </Listing.Body>
                </Listing>
              ),
            )}
          </StackedList>
        </Section>

        <MultiParagraph count={2} />

        <Section>
          <StackedList cols="2">
            {EventData.slice(0, 8).map(
              ({
                id,
                link,
                title,
                startDate,
                endDate,
                on_campus,
                on_campus_building,
                on_campus_room_number,
                event_address,
              }) => (
                <Listing key={id}>
                  <Listing.DateThumb startDate={startDate} endDate={endDate} />
                  <Listing.Body>
                    <Listing.Header title={title} link={link} />
                    <Listing.EventMeta
                      startDateTime={startDate}
                      endDateTime={endDate}
                      onCampus={on_campus}
                      onCampusBuilding={on_campus_building}
                      onCampusRoomNumber={on_campus_room_number}
                      eventAddress={event_address}
                    />
                  </Listing.Body>
                </Listing>
              ),
            )}
          </StackedList>
        </Section>

        <MultiParagraph count={2} />

        <Section as="section" maxWidth="alignwide" bgType="grey">
          <PageHeader
            as="h2"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Grey Background"
            size="lg"
            isCenter
          />
          <StackedList cols="2">
            {EventData.slice(0, 8).map(
              ({
                id,
                link,
                title,
                startDate,
                endDate,
                on_campus,
                on_campus_building,
                on_campus_room_number,
                event_address,
              }) => (
                <Listing key={id}>
                  <Listing.DateThumb startDate={startDate} endDate={endDate} />
                  <Listing.Body>
                    <Listing.Header title={title} link={link} />
                    <Listing.EventMeta
                      startDateTime={startDate}
                      endDateTime={endDate}
                      onCampus={on_campus}
                      onCampusBuilding={on_campus_building}
                      onCampusRoomNumber={on_campus_room_number}
                      eventAddress={event_address}
                    />
                  </Listing.Body>
                </Listing>
              ),
            )}
          </StackedList>
        </Section>

        <MultiParagraph count={2} />
      </Main>

      <FooterStandard type="standard" />
      <CookieBanner cookieName="storybook-preview-consent" />
    </>
  ),
};
