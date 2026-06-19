import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { ImageCover } from './ImageCover';
import { MultiParagraph } from '../../data/storyContent';

const SAMPLE_IMAGE = 'https://picsum.photos/id/1074/1920/840';

const meta: Meta<typeof ImageCover> = {
  title: 'Components/Layout/Image Cover',
  component: ImageCover,
  tags: ['!autodocs'],
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['section', 'div'],
    },
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
      control: { type: 'range', min: 0, max: 100, step: 5 },
    },
  },
  parameters: {
    layout: 'fullscreen',
    controls: { sort: 'requiredFirst' },
  },
};

export default meta;
type Story = StoryObj<typeof ImageCover>;

export const Default: Story = {
  render: (args) => (
    <Main>
      <ImageCover {...args}>
        <MultiParagraph count={2} />
      </ImageCover>
    </Main>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Main>
      <ImageCover image={SAMPLE_IMAGE} isGrey>
        <MultiParagraph count={2} />
      </ImageCover>
    </Main>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Main>
      <ImageCover image={SAMPLE_IMAGE} isGrey maxWidth="alignfull">
        <MultiParagraph count={2} />
      </ImageCover>
    </Main>
  ),
};

export const FullWidthConstrained: Story = {
  render: () => (
    <Main>
      <ImageCover image={SAMPLE_IMAGE} isGrey maxWidth="alignfull" contentWidth={false}>
        <MultiParagraph count={2} />
      </ImageCover>
    </Main>
  ),
};

export const FullWidthConstrainedWide: Story = {
  render: () => (
    <Main>
      <ImageCover image={SAMPLE_IMAGE} isGrey maxWidth="alignfull" contentWidth>
        <MultiParagraph count={2} />
      </ImageCover>
    </Main>
  ),
};

export const CustomOpacity: Story = {
  render: () => (
    <Main>
      <ImageCover image={SAMPLE_IMAGE} isGrey opacity={60}>
        <MultiParagraph count={2} />
      </ImageCover>
    </Main>
  ),
};
