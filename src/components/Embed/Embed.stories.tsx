import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { Embed } from './Embed';
import { EmbedHubSpot } from './EmbedHubSpot';

const meta: Meta<typeof Embed> = {
  title: 'Components/Media & Banners/Embed',
  component: Embed,
  tags: ['!autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['aligncontent', 'alignwide', 'alignfull'],
    },
  },
  decorators: [
    (Story) => (
      <Main>
        <Story />
      </Main>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Embed>;

export const YouTube: Story = {
  render: (args) => (
    <Embed {...args}>
      <Embed.YouTube title="YouTube embed demo" url="https://www.youtube.com/watch?v=Fbb1gdTcH-A" />
    </Embed>
  ),
};

export const Vimeo: Story = {
  render: (args) => (
    <Embed {...args}>
      <Embed.Vimeo title="Vimeo embed demo" url="https://vimeo.com/106595658" />
    </Embed>
  ),
};

export const Kaltura: Story = {
  render: (args) => (
    <Embed {...args}>
      <Embed.Kaltura
        title="Kaltura embed demo"
        url="https://mediaspace.carleton.ca/media/WorkshopA+5+Quick+Ways+to+Make+Your+Course+More+Accessible/1_oq0u8l23"
      />
    </Embed>
  ),
};

export const PowerBi: Story = {
  render: (args) => (
    <Embed {...args}>
      <Embed.PowerBi
        title="Power BI embed demo"
        url="https://app.powerbi.com/view?r=eyJrIjoiYTU2ZTBkZjgtZDZmZS00YjliLWIwMzktN2RjMTY3YjEzM2FkIiwidCI6IjZhZDkxODk1LWRlMDYtNDg1ZS1iYzUxLWZjZTEyNmNjODUzMCIsImMiOjN9&pageName=ReportMainc2accda99bdcb7ce79a1"
      />
    </Embed>
  ),
};

export const TED: Story = {
  render: (args) => (
    <Embed {...args}>
      <Embed.TED
        title="TED talk embed demo"
        url="https://www.ted.com/talks/jennifer_doudna_crispr_s_next_advance_is_bigger_than_you_think"
      />
    </Embed>
  ),
};

export const SoundCloud: Story = {
  render: (args) => (
    <Embed {...args}>
      <Embed.SoundCloud
        title="SoundCloud embed demo"
        url="https://soundcloud.com/user-361886339/agnus-dei?in=user-361886339/sets/requiem-for-piece-carleton-university-choir-chamber-singers"
      />
    </Embed>
  ),
};

export const Audioboom: Story = {
  render: (args) => (
    <Embed {...args}>
      <Embed.Audioboom title="Audioboom embed demo" url="https://audioboom.com/posts/7959102" />
    </Embed>
  ),
};

export const HubSpot: Story = {
  render: () => <EmbedHubSpot formId="b1c387fa-370c-4de8-a2a3-3f731340db45" portalId="342644269" />,
};

export const AlignWide: Story = {
  render: () => (
    <Embed maxWidth="alignwide">
      <Embed.YouTube
        title="YouTube embed — wide"
        url="https://www.youtube.com/watch?v=Fbb1gdTcH-A"
      />
    </Embed>
  ),
};

export const AlignFull: Story = {
  render: () => (
    <Embed maxWidth="alignfull">
      <Embed.YouTube
        title="YouTube embed — full width"
        url="https://www.youtube.com/watch?v=Fbb1gdTcH-A"
      />
    </Embed>
  ),
};
