import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Main } from '../Main/Main';
import { WideImage } from './WideImage';

const meta: Meta<typeof WideImage> = {
  title: 'Components/Media & Banners/Wide Image',
  component: WideImage,
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <Main>
        <Story />
      </Main>
    ),
  ],
  argTypes: {
    isType: {
      control: 'inline-radio',
      options: ['light', 'dark', 'image'],
    },
    headerType: {
      control: 'inline-radio',
      options: ['h1', 'h2'],
    },
    maxWidth: {
      control: 'select',
      options: ['aligncontent', 'alignwide', 'alignfull'],
    },
    opacity: {
      control: { type: 'range', min: 60, max: 80, step: 1 },
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
    controls: {
      sort: 'requiredFirst',
    },
  },
};

export default meta;
type Story = StoryObj<typeof WideImage>;

export const Default: Story = {
  args: {
    title: 'Wide Image Light',
    headerType: 'h2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.',
    isType: 'light',
    maxWidth: 'aligncontent',
  },
};

export const Dark: Story = {
  args: {
    title: 'Wide Image Dark',
    headerType: 'h2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.',
    isType: 'dark',
    maxWidth: 'aligncontent',
  },
};

export const WithImage: Story = {
  render: (args) => (
    <WideImage {...args}>
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" color="dark-grey" />
      </ButtonGroup>
    </WideImage>
  ),
  args: {
    title: 'Wide Image with Photo',
    headerType: 'h1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.',
    isType: 'image',
    image: 'https://picsum.photos/id/381/1200/600',
    opacity: 70,
    focalPointX: 50,
    focalPointY: 50,
    maxWidth: 'alignwide',
  },
};

export const WithSignup: Story = {
  render: (args) => (
    <WideImage {...args}>
      <WideImage.Signup />
    </WideImage>
  ),
  args: {
    title: 'Stay Connected',
    headerType: 'h2',
    isType: 'dark',
    maxWidth: 'aligncontent',
  },
};
