import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { Section } from './Section';
import { MultiParagraph } from '../../data/storyContent';

const meta: Meta<typeof Section> = {
  title: 'Components/Layout/Section',
  component: Section,
  tags: ['!autodocs'],
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['section', 'div'],
    },
    bgType: {
      control: 'select',
      options: ['grey', 'black', 'light-gradient'],
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
  },
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  render: (args) => (
    <Main>
      <Section {...args}>
        <MultiParagraph count={2} />
      </Section>
    </Main>
  ),
};

export const Grey: Story = {
  render: () => (
    <Main>
      <Section bgType="grey">
        <MultiParagraph count={2} />
      </Section>
    </Main>
  ),
};

export const Black: Story = {
  render: () => (
    <Main>
      <Section bgType="black">
        <MultiParagraph count={2} />
      </Section>
    </Main>
  ),
};

export const LightGradient: Story = {
  render: () => (
    <Main>
      <Section bgType="light-gradient">
        <MultiParagraph count={2} />
      </Section>
    </Main>
  ),
};

export const Wide: Story = {
  render: () => (
    <Main>
      <Section maxWidth="alignwide">
        <MultiParagraph count={2} />
      </Section>
    </Main>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Main>
      <Section maxWidth="alignfull" bgType="grey">
        <MultiParagraph count={2} />
      </Section>
    </Main>
  ),
};

export const FullWidthConstrained: Story = {
  render: () => (
    <Main>
      <Section maxWidth="alignfull" bgType="grey" contentWidth={false}>
        <MultiParagraph count={2} />
      </Section>
    </Main>
  ),
};

export const FullWidthConstrainedWide: Story = {
  render: () => (
    <Main>
      <Section maxWidth="alignfull" bgType="grey" contentWidth>
        <MultiParagraph count={2} />
      </Section>
    </Main>
  ),
};

export const AlternatingGreySections: Story = {
  render: () => (
    <Main>
      <Section>
        <MultiParagraph count={2} />
      </Section>
      <Section bgType="grey">
        <MultiParagraph count={2} />
      </Section>
      <Section>
        <MultiParagraph count={2} />
      </Section>
      <Section bgType="grey" maxWidth="alignfull">
        <MultiParagraph count={2} />
      </Section>
    </Main>
  ),
};
