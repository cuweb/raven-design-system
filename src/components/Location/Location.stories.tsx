import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoadScript } from '@react-google-maps/api';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { Location } from './Location';

const meta: Meta<typeof Location> = {
  title: 'Components/Content/Location',
  component: Location,
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Story />
      </LoadScript>
    ),
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
type Story = StoryObj<typeof Location>;

export const Default: Story = {
  args: {
    lat: '45.3875812',
    lng: '-75.6982089',
    location: "Carleton University Raven's Nest",
    zoom: 15,
    isRounded: true,
  },
};

export const MultipleMarkers: Story = {
  args: {
    center: { lat: '45.3850225', lng: '-75.6946679' },
    markers: [
      {
        id: '1',
        name: 'Carleton University',
        position: { lat: 45.3850225, lng: -75.6946679 },
      },
      {
        id: '2',
        name: "Raven's Nest",
        position: { lat: 45.3875812, lng: -75.6982089 },
      },
      {
        id: '3',
        name: 'University Centre',
        position: { lat: 45.3839, lng: -75.6958 },
      },
    ],
    isRounded: true,
  },
};
