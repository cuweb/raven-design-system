import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';

const typeOptions = ['success', 'error', 'warning', 'info'] as const;

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,
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
    type: {
      control: 'inline-radio',
      options: typeOptions,
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
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: 'Alert title',
    type: 'info',
    content: 'This is an informational alert message with additional detail.',
  },
};

export const WithoutContent: Story = {
  args: {
    title: 'Operation completed successfully.',
    type: 'success',
  },
};

export const AllTypes: Story = {
  render: () => (
    <>
      <Alert type="success" title="Success" content="Your changes have been saved." />
      <Alert
        type="error"
        title="Error"
        content="Unable to complete the request. Please try again."
      />
      <Alert type="warning" title="Warning" content="This action cannot be undone." />
      <Alert type="info" title="Information" content="Your session will expire in 10 minutes." />
    </>
  ),
};
