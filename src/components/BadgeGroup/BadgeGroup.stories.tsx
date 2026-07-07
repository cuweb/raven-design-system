import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../Badge/Badge';
import { BadgeGroup } from './BadgeGroup';
import { Card } from '../Card/Card';
import { NewsData } from '../../data/NewsData';

const meta: Meta<typeof BadgeGroup> = {
  title: 'Components/Elements/Badge Group',
  component: BadgeGroup,
  tags: ['!autodocs'],
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

export const Default: Story = {
  render: (args) => (
    <BadgeGroup {...args}>
      <Badge text="Grey" color="grey" />
      <Badge text="Green" color="green" />
      <Badge text="Red" color="red" />
      <Badge text="Yellow" color="yellow" />
      <Badge text="Blue" color="blue" />
      <Badge text="Purple" color="purple" />
      <Badge text="Teal" color="teal" />
    </BadgeGroup>
  ),
};

export const OnCard: Story = {
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <Card>
        <Card.Figure>
          <img src={NewsData[0].image} alt={NewsData[0].alt} width="600" height="400" />
        </Card.Figure>
        <BadgeGroup>
          <Badge text="Featured" color="black80" rounded="full" />
          <Badge text="New" color="teal" rounded="full" />
        </BadgeGroup>
        <Card.Header title={NewsData[0].title} link={NewsData[0].link} />
        <Card.Body>
          <Card.Excerpt text={NewsData[0].excerpt} />
        </Card.Body>
      </Card>
    </div>
  ),
};
