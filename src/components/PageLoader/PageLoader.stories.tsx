import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLoader } from './PageLoader';
import { Main } from '../Main/Main';

const meta: Meta<typeof PageLoader> = {
    title: 'Components/Feedback/Loaders/Page Loader',
    component: PageLoader,
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
type Story = StoryObj<typeof PageLoader>;

export const Default: Story = {};

export const CustomLabel: Story = {
    args: {
        label: 'Loading page content',
    },
};
