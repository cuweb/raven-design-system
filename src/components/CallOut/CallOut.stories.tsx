import type { Meta, StoryObj } from '@storybook/react-vite';
import { CallOut } from './CallOut';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Button } from '../Button/Button';

const meta: Meta<typeof CallOut> = {
  title: 'Components/Content/Call Out',
  component: CallOut,
  tags: ['!autodocs'],
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['h2', 'h3'],
    },
    justify: {
      control: 'inline-radio',
      options: ['start', 'center', 'end'],
    },
    maxWidth: {
      control: 'inline-radio',
      options: ['aligncontent', 'alignwide', 'alignfull'],
    },
  },
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CallOut>;

const BodyContent = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra
      mi. Etiam mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum
      dolor.
    </p>
    <ButtonGroup>
      <Button title="Apply Now" />
      <Button color="grey" title="Request Information" />
    </ButtonGroup>
  </>
);

export const Default: Story = {
  args: {
    title: 'Open House',
    as: 'h2',
    justify: 'center',
    maxWidth: 'aligncontent',
  },
  render: (args) => (
    <Main>
      <Section>
        <CallOut {...args}>
          <BodyContent />
        </CallOut>
      </Section>
    </Main>
  ),
};

export const JustifyStart: Story = {
  args: {
    title: 'Open House',
    justify: 'start',
    maxWidth: 'aligncontent',
  },
  render: (args) => (
    <Main>
      <Section>
        <CallOut {...args}>
          <BodyContent />
        </CallOut>
      </Section>
    </Main>
  ),
};

export const JustifyEnd: Story = {
  args: {
    title: 'Open House',
    justify: 'end',
    maxWidth: 'aligncontent',
  },
  render: (args) => (
    <Main>
      <Section>
        <CallOut {...args}>
          <BodyContent />
        </CallOut>
      </Section>
    </Main>
  ),
};

export const MaxWidthWide: Story = {
  args: {
    title: 'Open House',
    justify: 'center',
    maxWidth: 'alignwide',
  },
  render: (args) => (
    <Main>
      <Section maxWidth="alignwide">
        <CallOut {...args}>
          <BodyContent />
        </CallOut>
      </Section>
    </Main>
  ),
};

export const MaxWidthFull: Story = {
  args: {
    title: 'Open House',
    justify: 'center',
    maxWidth: 'alignfull',
  },
  render: (args) => (
    <Main>
      <Section maxWidth="alignfull">
        <CallOut {...args}>
          <BodyContent />
        </CallOut>
      </Section>
    </Main>
  ),
};
