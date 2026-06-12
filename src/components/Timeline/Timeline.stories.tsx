import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { Timeline } from './Timeline';
import { SingleParagraph, SampleList } from '../../data/storyContent';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Content/Timeline',
  component: Timeline,
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <Main>
        <Story />
      </Main>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    controls: { sort: 'requiredFirst' },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Primary: Story = {
  render: () => (
    <Timeline>
      <Timeline.Item date="2022 — Present" title="Senior Developer">
        <SingleParagraph />
        <SampleList />
      </Timeline.Item>
      <Timeline.Item date="2019 — 2022" title="Developer">
        <SingleParagraph index={1} />
        <SampleList />
      </Timeline.Item>
      <Timeline.Item date="2016 — 2019" title="Junior Developer">
        <SingleParagraph index={2} />
      </Timeline.Item>
    </Timeline>
  ),
};

export const WithH3Headings: Story = {
  render: () => (
    <Timeline>
      <Timeline.Item as="h3" date="2022 — Present" title="Senior Developer">
        <SingleParagraph />
      </Timeline.Item>
      <Timeline.Item as="h3" date="2019 — 2022" title="Developer">
        <SingleParagraph index={1} />
      </Timeline.Item>
      <Timeline.Item as="h3" date="2016 — 2019" title="Junior Developer">
        <SingleParagraph index={2} />
      </Timeline.Item>
    </Timeline>
  ),
};
