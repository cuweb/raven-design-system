import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextMedia } from './TextMedia';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Embed } from '../Embed/Embed';
import { SingleParagraph } from '../../data/storyContent';

const meta: Meta<typeof TextMedia> = {
  title: 'Components/Content/Text & Media',
  component: TextMedia,
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
type Story = StoryObj<typeof TextMedia>;

export const Primary: Story = {
  args: {
    maxWidth: 'aligncontent',
    flexRow: 'lg',
    flipX: false,
    flipMobile: false,
  },
  render: (args) => (
    <TextMedia {...args}>
      <TextMedia.Content title="Website and Application Development" width={55}>
        <SingleParagraph />
        <ButtonGroup>
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </ButtonGroup>
      </TextMedia.Content>
      <TextMedia.Media>
        <img src="https://picsum.photos/800/600" alt="" />
      </TextMedia.Media>
    </TextMedia>
  ),
};

export const HeaderOne: Story = {
  args: {
    maxWidth: 'alignwide',
    flexRow: 'lg',
  },
  render: (args) => (
    <TextMedia {...args}>
      <TextMedia.Content title="Website and Application Development" headerType="h1" width={55}>
        <SingleParagraph />
        <ButtonGroup>
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </ButtonGroup>
      </TextMedia.Content>
      <TextMedia.Media>
        <img src="https://picsum.photos/800/600" alt="" />
      </TextMedia.Media>
    </TextMedia>
  ),
};

export const ImageLeft: Story = {
  args: {
    maxWidth: 'alignwide',
    flexRow: 'lg',
    flipX: true,
  },
  render: (args) => (
    <TextMedia {...args}>
      <TextMedia.Content title="Website and Application Development" width={55}>
        <SingleParagraph />
        <ButtonGroup>
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </ButtonGroup>
      </TextMedia.Content>
      <TextMedia.Media>
        <img src="https://picsum.photos/800/600" alt="" />
      </TextMedia.Media>
    </TextMedia>
  ),
};

export const WithVideo: Story = {
  args: {
    maxWidth: 'alignwide',
    flexRow: 'lg',
  },
  render: (args) => (
    <TextMedia {...args}>
      <TextMedia.Content title="Our Research in Action" width={45}>
        <SingleParagraph />
        <ButtonGroup>
          <Button title="Learn more" />
        </ButtonGroup>
      </TextMedia.Content>
      <TextMedia.Media>
        <Embed.YouTube
          title="Carleton University"
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        />
      </TextMedia.Media>
    </TextMedia>
  ),
};

export const MediaAligned: Story = {
  args: {
    maxWidth: 'aligncontent',
    flexRow: 'lg',
  },
  render: (args) => (
    <TextMedia {...args}>
      <TextMedia.Content title="Website and Application Development" width={55}>
        <SingleParagraph index={0} />
        <SingleParagraph index={1} />
        <ButtonGroup>
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </ButtonGroup>
      </TextMedia.Content>
      <TextMedia.Media align="center">
        <img src="https://picsum.photos/800/600" alt="" />
      </TextMedia.Media>
    </TextMedia>
  ),
};

export const EqualColumns: Story = {
  args: {
    maxWidth: 'alignwide',
    flexRow: 'lg',
  },
  render: (args) => (
    <TextMedia {...args}>
      <TextMedia.Content title="Website and Application Development">
        <SingleParagraph />
        <ButtonGroup>
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </ButtonGroup>
      </TextMedia.Content>
      <TextMedia.Media>
        <img src="https://picsum.photos/800/600" alt="" />
      </TextMedia.Media>
    </TextMedia>
  ),
};
