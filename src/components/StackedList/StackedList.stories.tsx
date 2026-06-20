import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { StackedList } from './StackedList';

const meta: Meta<typeof StackedList> = {
  title: 'Components/Layout/Stacked List',
  component: StackedList,
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
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['ul', 'div'],
    },
    cols: {
      control: 'inline-radio',
      options: ['1', '2'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StackedList>;

export const Primary: Story = {
  args: {
    cols: '2',
  },
  render: (args) => (
    <StackedList {...args}>
      <li style={{ padding: '1.5rem' }}>List item one</li>
      <li style={{ padding: '1.5rem' }}>List item two</li>
      <li style={{ padding: '1.5rem' }}>List item three</li>
      <li style={{ padding: '1.5rem' }}>List item four</li>
    </StackedList>
  ),
};

export const SingleColumn: Story = {
  args: {
    cols: '1',
  },
  render: (args) => (
    <StackedList {...args}>
      <li style={{ padding: '1.5rem' }}>List item one</li>
      <li style={{ padding: '1.5rem' }}>List item two</li>
      <li style={{ padding: '1.5rem' }}>List item three</li>
    </StackedList>
  ),
};

export const WithHeader: Story = {
  args: {
    cols: '2',
    header: 'Latest News',
  },
  render: (args) => (
    <StackedList {...args}>
      <li style={{ padding: '1.5rem' }}>List item one</li>
      <li style={{ padding: '1.5rem' }}>List item two</li>
      <li style={{ padding: '1.5rem' }}>List item three</li>
      <li style={{ padding: '1.5rem' }}>List item four</li>
    </StackedList>
  ),
};

export const NoShadow: Story = {
  args: {
    cols: '2',
    noShadow: true,
  },
  render: (args) => (
    <StackedList {...args}>
      <li style={{ padding: '1.5rem' }}>List item one</li>
      <li style={{ padding: '1.5rem' }}>List item two</li>
      <li style={{ padding: '1.5rem' }}>List item three</li>
      <li style={{ padding: '1.5rem' }}>List item four</li>
    </StackedList>
  ),
};
