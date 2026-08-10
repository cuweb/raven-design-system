import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonLoader } from './ButtonLoader';

const meta: Meta<typeof ButtonLoader> = {
    title: 'Components/Feedback/Loaders/Button Loader',
    component: ButtonLoader,
    tags: ['!autodocs'],
    parameters: {
        controls: {
            sort: 'requiredFirst',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ButtonLoader>;

export const Default: Story = {};

export const Multiple: Story = {
    args: {
        count: 3,
    },
};

export const Small: Story = {
    args: {
        count: 2,
        isSmall: true,
    },
};
