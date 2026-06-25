import type { Meta, StoryObj } from '@storybook/react-vite';
import { Details } from './Details';
import { Main } from '../Main/Main';

const meta: Meta<typeof Details> = {
  title: 'Components/Content/Details',
  component: Details,
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <Main>
        <Story />
      </Main>
    ),
  ],
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['ul', 'ol'],
    },
  },
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Details>;

export const Default: Story = {
  args: {
    as: 'ul',
  },
  render: (args) => (
    <Details {...args}>
      <Details.Item isBold>Hybrid Event</Details.Item>
      <Details.Item>Raven&apos;s Nest, 1125 Colonel By Drive</Details.Item>
      <Details.Item>
        <a href="/">Teams meeting link</a>
      </Details.Item>
      <Details.Item>
        <strong>Cost:</strong> $20 per adult, $15 for youth/senior
      </Details.Item>
    </Details>
  ),
};

export const WithDividers: Story = {
  args: {
    hasDividers: true,
  },
  render: (args) => (
    <Details {...args}>
      <Details.Item isBold>Hybrid Event</Details.Item>
      <Details.Item>Raven&apos;s Nest, 1125 Colonel By Drive</Details.Item>
      <Details.Item>
        <a href="/">Teams meeting link</a>
      </Details.Item>
      <Details.Item>
        <strong>Cost:</strong> $20 per adult, $15 for youth/senior
      </Details.Item>
    </Details>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Details>
      <Details.Item iconName="location-dot">Raven&apos;s Nest, 1125 Colonel By Drive</Details.Item>
      <Details.Item iconName="external-link">
        <a href="/">Teams meeting link</a>
      </Details.Item>
      <Details.Item iconName="money-bill-1-wave">
        <strong>Cost:</strong> $20 per adult, $15 for youth/senior
      </Details.Item>
      <Details.Item iconName="envelope">
        <a href="/">contact@example.com</a>
      </Details.Item>
    </Details>
  ),
};

export const GreyBackground: Story = {
  args: {
    isGrey: true,
  },
  render: (args) => (
    <Details {...args}>
      <Details.Item isBold>Hybrid Event</Details.Item>
      <Details.Item>Raven&apos;s Nest, 1125 Colonel By Drive</Details.Item>
      <Details.Item>
        <a href="/">Teams meeting link</a>
      </Details.Item>
      <Details.Item>
        <strong>Cost:</strong> $20 per adult, $15 for youth/senior
      </Details.Item>
    </Details>
  ),
};
