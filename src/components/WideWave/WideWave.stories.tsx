import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { WideWave } from './WideWave';
import { MultiParagraph } from '../../data/storyContent';

const meta: Meta<typeof WideWave> = {
  title: 'Components/Layout/WideWave',
  component: WideWave,
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <Main>
          <Story />
      </Main>
    ),
  ],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['aligncontent', 'alignwide', 'alignfull'],
    },
    contentWidth: {
      control: 'inline-radio',
      options: [false, true],
      description: 'false = 1024px (content), true = 1280px (wide)',
    },
    color: {
      control: 'inline-radio',
      options: ['black', 'red'],
      description: 'Container color',
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
type Story = StoryObj<typeof WideWave>;

export const Default: Story = {
  render: (args) => (
      <WideWave {...args}>
        <MultiParagraph count={2} />
      </WideWave>
  ),
};

export const Wide: Story = {
  render: () => (
      <WideWave maxWidth="alignwide" color="red">
        <MultiParagraph count={2} />
      </WideWave>
  ),
};

export const FullWidth: Story = {
  render: () => (
      <WideWave maxWidth="alignfull">
        <MultiParagraph count={6} />
      </WideWave>
  ),
};

export const FullWidthConstrained: Story = {
  render: () => (
      <WideWave maxWidth="alignfull" contentWidth={false}>
        <MultiParagraph count={2} />
      </WideWave>
  ),
};

export const FullWidthConstrainedWide: Story = {
  render: () => (
      <WideWave maxWidth="alignfull" contentWidth>
        <MultiParagraph count={2} />
      </WideWave>
  ),
};
