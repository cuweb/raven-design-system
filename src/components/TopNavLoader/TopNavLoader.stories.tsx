import type { Meta, StoryObj } from '@storybook/react-vite';
import { TopNavLoader } from './TopNavLoader';
import { Main } from '../Main/Main';

const meta: Meta<typeof TopNavLoader> = {
    title: 'Components/Feedback/Loaders/Top Nav Loader',
    component: TopNavLoader,
    tags: ['!autodocs'],
    decorators: [
        (Story) => (
            <Main>
                <Story />
            </Main>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
        controls: {
            sort: 'requiredFirst',
        },
    },
};

export default meta;
type Story = StoryObj<typeof TopNavLoader>;

export const Default: Story = {};

export const CustomLabel: Story = {
    args: {
        label: 'Loading navigation',
    },
};
