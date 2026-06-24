import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast } from './Toast';

const typeOptions = ['success', 'error', 'warning', 'info'] as const;

const meta: Meta<typeof Toast> = {
  title: 'Components/Feedback/Toast',
  component: Toast,
  tags: ['!autodocs'],
  argTypes: {
    type: {
      control: 'inline-radio',
      options: typeOptions,
    },
  },
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    layout: 'fullscreen',
    a11y: { test: 'off' },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    type: 'success',
  },
  render: (args) => (
    <Toast.Toaster>
      <Toast type={args.type}>
        <Toast.Title>Notification</Toast.Title>
        <Toast.Content>Your changes have been saved successfully.</Toast.Content>
      </Toast>
    </Toast.Toaster>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <Toast.Toaster>
      <Toast type="success">
        <Toast.Title>Success</Toast.Title>
        <Toast.Content>Your changes have been saved.</Toast.Content>
      </Toast>
      <Toast type="error">
        <Toast.Title>Error</Toast.Title>
        <Toast.Content>Unable to complete the request.</Toast.Content>
      </Toast>
      <Toast type="warning">
        <Toast.Title>Warning</Toast.Title>
        <Toast.Content>This action cannot be undone.</Toast.Content>
      </Toast>
      <Toast type="info">
        <Toast.Title>Information</Toast.Title>
        <Toast.Content>Your session will expire in 10 minutes.</Toast.Content>
      </Toast>
    </Toast.Toaster>
  ),
};
