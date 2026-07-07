import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { StackedList } from '../StackedList/StackedList';
import { Listing } from './Listing';

import { NewsData } from '../../data/NewsData';
import { EventData } from '../../data/EventData';
import { PeopleData } from '../../data/PeopleData';
import { IconData } from '../../data/IconData';

const meta: Meta<typeof Listing> = {
  title: 'Components/Content/Listing',
  component: Listing,
  tags: ['!autodocs'],
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
    controls: { sort: 'requiredFirst' },
  },
};

export default meta;
type Story = StoryObj<typeof Listing>;

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: (args) => (
    <StackedList cols="1">
      <Listing {...args}>
        <Listing.Body>
          <Listing.Header title="How to Write for the Web" link="https://carleton.ca/webservices" />
          <Listing.Excerpt text="Readers skim first, so lead with purpose, trim filler, and make every heading earn its click." />
        </Listing.Body>
      </Listing>
    </StackedList>
  ),
};

// ─── News ─────────────────────────────────────────────────────────────────────

export const NewsListingSingle: Story = {
  render: (args) => (
    <StackedList cols="1">
      {NewsData.slice(0, 3).map(({ id, link, title, image, alt, date, excerpt }) => (
        <Listing key={id} {...args}>
          <Listing.Figure>
            <img src={image} alt={alt} width="400" height="300" />
          </Listing.Figure>
          <Listing.Body>
            <Listing.Header title={title} link={link} date={date} datePrefix="Published on" />
            <Listing.Excerpt text={excerpt} />
          </Listing.Body>
        </Listing>
      ))}
    </StackedList>
  ),
};

export const NewsListingMultiple: Story = {
  render: (args) => (
    <StackedList cols="2">
      {NewsData.slice(0, 8).map(({ id, link, title, image, alt, date, excerpt }) => (
        <Listing key={id} {...args}>
          <Listing.Figure>
            <img src={image} alt={alt} width="400" height="300" />
          </Listing.Figure>
          <Listing.Body>
            <Listing.Header title={title} link={link} date={date} datePrefix="Published on" />
            <Listing.Excerpt text={excerpt} />
          </Listing.Body>
        </Listing>
      ))}
    </StackedList>
  ),
};

// ─── Events ───────────────────────────────────────────────────────────────────

export const EventListingSingle: Story = {
  render: (args) => (
    <StackedList cols="1">
      {EventData.slice(0, 3).map(
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
          <Listing key={id} {...args}>
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
  ),
};

export const EventListingMultiple: Story = {
  render: (args) => (
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
          <Listing key={id} {...args}>
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
  ),
};

// ─── People ───────────────────────────────────────────────────────────────────

export const PeopleListingSingle: Story = {
  render: (args) => (
    <StackedList cols="1">
      {PeopleData.slice(0, 3).map(
        ({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
          <Listing key={id} {...args}>
            <Listing.Figure isSquare>
              <img src={image} alt={alt} width="280" height="280" />
            </Listing.Figure>
            <Listing.Body>
              <Listing.Header title={`${firstName} ${lastName}`} link={link} />
              <Listing.PeopleMeta jobTitle={jobTitle} phone={phone}>
                <a href={`mailto:${email}`}>{email}</a>
              </Listing.PeopleMeta>
            </Listing.Body>
          </Listing>
        ),
      )}
    </StackedList>
  ),
};

export const PeopleListingMultiple: Story = {
  render: (args) => (
    <StackedList cols="2">
      {PeopleData.slice(0, 8).map(
        ({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
          <Listing key={id} {...args}>
            <Listing.Figure isSquare>
              <img src={image} alt={alt} width="280" height="280" />
            </Listing.Figure>
            <Listing.Body>
              <Listing.Header title={`${firstName} ${lastName}`} link={link} />
              <Listing.PeopleMeta jobTitle={jobTitle} phone={phone}>
                <a href={`mailto:${email}`}>{email}</a>
              </Listing.PeopleMeta>
            </Listing.Body>
          </Listing>
        ),
      )}
    </StackedList>
  ),
};

// ─── Icon ─────────────────────────────────────────────────────────────────────

export const IconListingSingle: Story = {
  render: (args) => (
    <StackedList cols="1">
      {IconData.slice(0, 3).map(({ id, link, title, icon, excerpt }) => (
        <Listing key={id} {...args}>
          <Listing.IconThumb icon={icon} />
          <Listing.Body>
            <Listing.Header title={title} link={link} />
            <Listing.Excerpt text={excerpt} />
          </Listing.Body>
        </Listing>
      ))}
    </StackedList>
  ),
};

export const IconListingMultiple: Story = {
  render: (args) => (
    <StackedList cols="2">
      {IconData.slice(0, 8).map(({ id, link, title, icon, excerpt }) => (
        <Listing key={id} {...args}>
          <Listing.IconThumb icon={icon} />
          <Listing.Body>
            <Listing.Header title={title} link={link} />
            <Listing.Excerpt text={excerpt} />
          </Listing.Body>
        </Listing>
      ))}
    </StackedList>
  ),
};

// ─── Page (body only, no figure) ─────────────────────────────────────────────

export const PageListingSingle: Story = {
  render: (args) => (
    <StackedList cols="1">
      {NewsData.slice(0, 3).map(({ id, link, title, date, excerpt }) => (
        <Listing key={id} {...args}>
          <Listing.Body>
            <Listing.Header
              title={title}
              link={link}
              date={date}
              datePrefix="Modified on"
              position="bottom"
            />
            <Listing.Excerpt text={excerpt} />
          </Listing.Body>
        </Listing>
      ))}
    </StackedList>
  ),
};

export const PageListingMultiple: Story = {
  render: (args) => (
    <StackedList cols="2">
      {NewsData.slice(0, 8).map(({ id, link, title, date, excerpt }) => (
        <Listing key={id} {...args}>
          <Listing.Body>
            <Listing.Header
              title={title}
              link={link}
              date={date}
              datePrefix="Modified on"
              position="bottom"
            />
            <Listing.Excerpt text={excerpt} />
          </Listing.Body>
        </Listing>
      ))}
    </StackedList>
  ),
};
