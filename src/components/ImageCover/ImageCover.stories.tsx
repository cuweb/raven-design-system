import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { ImageCover } from './ImageCover';
import { MultiParagraph } from '../../data/storyContent';

const meta: Meta<typeof ImageCover> = {
  title: 'Components/Layout/Image Cover',
  component: ImageCover,
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
    opacity: {
      control: { type: 'range', min: 50, max: 100, step: 5 },
    },
    focalPointX: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    focalPointY: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
  parameters: {
    layout: 'fullscreen',
    controls: { sort: 'requiredFirst' },
  },
};

export default meta;
type Story = StoryObj<typeof ImageCover>;

export const Primary: Story = {
  args: {
    image: 'https://picsum.photos/id/1074/1920/840',
    opacity: 85,
    focalPointX: 50,
    focalPointY: 50,
    maxWidth: 'aligncontent',
  },
  render: (args) => (
    <ImageCover {...args}>
      <MultiParagraph count={5} />
    </ImageCover>
  ),
};

export const AlignFull: Story = {
  args: {
    image: 'https://picsum.photos/id/338/1920/840',
    opacity: 85,
    focalPointX: 50,
    focalPointY: 50,
    maxWidth: 'alignfull',
  },
  render: (args) => (
    <ImageCover {...args}>
      <MultiParagraph count={5} />
    </ImageCover>
  ),
};

export const AlignFullConstrainedContent: Story = {
  args: {
    image: 'https://picsum.photos/id/338/1920/840',
    opacity: 85,
    focalPointX: 50,
    focalPointY: 50,
    maxWidth: 'alignfull',
    contentWidth: false,
  },
  render: (args) => (
    <ImageCover {...args}>
      <MultiParagraph count={5} />
    </ImageCover>
  ),
};

export const AlignFullWideContent: Story = {
  args: {
    image: 'https://picsum.photos/id/338/1920/840',
    opacity: 85,
    focalPointX: 50,
    focalPointY: 50,
    maxWidth: 'alignfull',
    contentWidth: true,
  },
  render: (args) => (
    <ImageCover {...args}>
      <MultiParagraph count={5} />
    </ImageCover>
  ),
};

export const WithFocalPoint: Story = {
  args: {
    image: 'https://picsum.photos/id/1015/1920/840',
    opacity: 85,
    focalPointX: 80,
    focalPointY: 20,
    maxWidth: 'alignwide',
  },
  render: (args) => (
    <ImageCover {...args}>
      <MultiParagraph count={5} />
    </ImageCover>
  ),
};

export const CustomOpacity: Story = {
  args: {
    image: 'https://picsum.photos/id/20/1920/840',
    opacity: 65,
    focalPointX: 50,
    focalPointY: 50,
    maxWidth: 'aligncontent',
  },
  render: (args) => (
    <ImageCover {...args}>
      <MultiParagraph count={5} />
    </ImageCover>
  ),
};
