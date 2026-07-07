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
        title: 'Notification',
        content: 'Your changes have been saved successfully.',
    },
    render: (args) => (
        <Toast.Toaster>
            <Toast {...args} />
        </Toast.Toaster>
    ),
};

export const AllTypes: Story = {
    render: () => (
        <Toast.Toaster>
            <Toast type="success" title="Success" content="Your changes have been saved." />
            <Toast type="error" title="Error" content="Unable to complete the request." />
            <Toast type="warning" title="Warning" content="This action cannot be undone." />
            <Toast
                type="info"
                title="Information"
                content="Your session will expire in 10 minutes."
            />
        </Toast.Toaster>
    ),
};
