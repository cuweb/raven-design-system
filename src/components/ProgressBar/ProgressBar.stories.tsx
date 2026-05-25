import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Elements/Progress Bar',
  component: ProgressBar,
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: { control: { type: 'number', min: 0 } },
    max: { control: { type: 'number', min: 1 } },
  },
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Empty: Story = {
  args: {
    value: 0,
    max: 100,
    label: 'Fundraising progress',
  },
};

export const Default: Story = {
  args: {
    value: 65,
    max: 100,
    label: 'Fundraising progress',
  },
};

export const Quarter: Story = {
  args: {
    value: 25,
    max: 100,
    label: 'Fundraising progress',
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    max: 100,
    label: 'Fundraising progress',
  },
};

export const RawValues: Story = {
  args: {
    value: 34500,
    max: 50000,
    label: 'Fundraising progress',
  },
};
