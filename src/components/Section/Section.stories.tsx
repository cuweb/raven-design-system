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
    maxWidth: {
      control: 'select',
      options: ['aligncontent', 'alignwide', 'alignfull'],
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
      <Section isGrey>
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
      <Section maxWidth="alignfull" isGrey>
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
      <Section isGrey>
        <MultiParagraph count={2} />
      </Section>
      <Section>
        <MultiParagraph count={2} />
      </Section>
      <Section isGrey maxWidth="alignfull">
        <MultiParagraph count={2} />
      </Section>
    </Main>
  ),
};
