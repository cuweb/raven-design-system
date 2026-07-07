import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calendar } from './Calendar';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';

const sampleEvents = [
  {
    id: 1,
    name: 'Open House',
    imageUrl: '',
    startDatetime: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      5,
      10,
      0,
    ).toISOString(),
    endDatetime: new Date(new Date().getFullYear(), new Date().getMonth(), 5, 12, 0).toISOString(),
  },
  {
    id: 2,
    name: 'Convocation Week',
    imageUrl: '',
    startDatetime: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      12,
      9,
      0,
    ).toISOString(),
    endDatetime: new Date(new Date().getFullYear(), new Date().getMonth(), 16, 17, 0).toISOString(),
  },
  {
    id: 3,
    name: 'Research Symposium',
    imageUrl: '',
    startDatetime: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      20,
      13,
      0,
    ).toISOString(),
    endDatetime: new Date(new Date().getFullYear(), new Date().getMonth(), 20, 17, 0).toISOString(),
  },
];

const meta: Meta<typeof Calendar> = {
  title: 'Components/Content/Calendar',
  component: Calendar,
  tags: ['!autodocs'],
  argTypes: {
    mode: {
      control: 'inline-radio',
      options: ['single', 'range'],
    },
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Main>
        <Section>
          <Story />
        </Section>
      </Main>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    mode: 'single',
    events: sampleEvents,
  },
};

export const RangeSelection: Story = {
  args: {
    mode: 'range',
    events: sampleEvents,
  },
};

export const NoEvents: Story = {
  args: {
    mode: 'single',
  },
};
