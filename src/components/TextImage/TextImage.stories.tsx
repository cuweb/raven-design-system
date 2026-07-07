import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextImage } from './TextImage';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { SingleParagraph } from '../../data/storyContent';

const meta: Meta<typeof TextImage> = {
  title: 'Components/Content/Text & Image',
  component: TextImage,
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
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['alignsmall', 'aligncontent', 'alignwide', 'alignfull'],
    },
    flexRow: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    flipX: {
      control: 'boolean',
    },
    flipMobile: {
      control: 'boolean',
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
type Story = StoryObj<typeof TextImage>;

export const Primary: Story = {
  args: {
    maxWidth: 'aligncontent',
    flexRow: 'lg',
    flipX: false,
    flipMobile: false,
  },
  render: (args) => (
    <TextImage {...args}>
      <TextImage.Content
        title="Website and Application Development"
        imageUrl="https://picsum.photos/800/600"
      >
        <SingleParagraph />
        <ButtonGroup>
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </ButtonGroup>
      </TextImage.Content>
    </TextImage>
  ),
};

export const HeaderOne: Story = {
  args: {
    maxWidth: 'alignwide',
    flexRow: 'lg',
  },
  render: (args) => (
    <TextImage {...args}>
      <TextImage.Content
        title="Website and Application Development"
        headerType="h1"
        imageUrl="https://picsum.photos/800/600"
      >
        <SingleParagraph />
        <ButtonGroup>
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </ButtonGroup>
      </TextImage.Content>
    </TextImage>
  ),
};

export const ImageLeft: Story = {
  args: {
    maxWidth: 'alignwide',
    flexRow: 'lg',
    flipX: true,
  },
  render: (args) => (
    <TextImage {...args}>
      <TextImage.Content
        title="Website and Application Development"
        imageUrl="https://picsum.photos/800/600"
        showOnMobile
      >
        <SingleParagraph />
        <ButtonGroup>
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </ButtonGroup>
      </TextImage.Content>
    </TextImage>
  ),
};

export const AspectRatio: Story = {
  args: {
    maxWidth: 'aligncontent',
    flexRow: 'lg',
  },
  render: (args) => (
    <TextImage {...args}>
      <TextImage.Content
        title="Website and Application Development"
        imageUrl="https://picsum.photos/800/600"
        imageMode="16/9"
      >
        <SingleParagraph />
        <ButtonGroup>
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </ButtonGroup>
      </TextImage.Content>
    </TextImage>
  ),
};

export const NoUnderline: Story = {
  args: {
    maxWidth: 'aligncontent',
    flexRow: 'lg',
  },
  render: (args) => (
    <TextImage {...args}>
      <TextImage.Content
        title="Website and Application Development"
        noUnderline
        imageUrl="https://picsum.photos/800/600"
      >
        <SingleParagraph />
        <ButtonGroup>
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </ButtonGroup>
      </TextImage.Content>
    </TextImage>
  ),
};

export const WithPreHeader: Story = {
  args: {
    maxWidth: 'aligncontent',
    flexRow: 'lg',
  },
  render: (args) => (
    <TextImage {...args}>
      <TextImage.Content
        title="Website and Application Development"
        preHeader="Information Technology Services"
        imageUrl="https://picsum.photos/800/600"
      >
        <SingleParagraph />
      </TextImage.Content>
    </TextImage>
  ),
};

export const NoImage: Story = {
  args: {
    maxWidth: 'aligncontent',
    flexRow: 'lg',
  },
  render: (args) => (
    <TextImage {...args}>
      <TextImage.Content title="Website and Application Development">
        <SingleParagraph />
        <ButtonGroup>
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </ButtonGroup>
      </TextImage.Content>
    </TextImage>
  ),
};
