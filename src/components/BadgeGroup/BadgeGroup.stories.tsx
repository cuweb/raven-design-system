import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../Badge/Badge';
import { BadgeGroup } from './BadgeGroup';

const meta: Meta<typeof BadgeGroup> = {
  title: 'Components/Elements/Badge Group',
  component: BadgeGroup,
  tags: ['autodocs'],
  argTypes: {
    top: { control: { type: 'number', min: 0 } },
    right: { control: { type: 'number', min: 0 } },
    bottom: { control: { type: 'number', min: 0 } },
    left: { control: { type: 'number', min: 0 } },
  },
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BadgeGroup>;

const badges = (
  <>
    <Badge text="Grey Badge" color="grey" />
    <Badge text="Green Badge" color="green" />
    <Badge text="Red Badge" color="red" />
    <Badge text="Yellow Badge" color="yellow" />
    <Badge text="Blue Badge" color="blue" />
    <Badge text="Purple Badge" color="purple" />
    <Badge text="Teal Badge" color="teal" />
  </>
);

export const Default: Story = {
  render: (args) => <BadgeGroup {...args}>{badges}</BadgeGroup>,
};

export const AbsolutePositioning: Story = {
  args: {
    isAbsolute: true,
    top: 16,
    right: 16,
  },
  render: (args) => (
    <div
      style={{
        position: 'relative',
        height: 265,
      }}
    >
      <BadgeGroup {...args}>{badges}</BadgeGroup>
    </div>
  ),
};
