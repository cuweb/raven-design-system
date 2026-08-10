import type { Meta, StoryObj } from '@storybook/react-vite';
import { DescriptionLoader } from './DescriptionLoader';
import { Main } from '../Main/Main';

const meta: Meta<typeof DescriptionLoader> = {
    title: 'Components/Feedback/Loaders/Description Loader',
    component: DescriptionLoader,
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
type Story = StoryObj<typeof DescriptionLoader>;

export const Default: Story = {
    render: (args) => (
        <DescriptionLoader {...args}>
            <DescriptionLoader.Meta rows={2} />
        </DescriptionLoader>
    ),
};

export const WithColumns: Story = {
    render: (args) => (
        <DescriptionLoader {...args}>
            <DescriptionLoader.Meta rows={2} useColumns />
        </DescriptionLoader>
    ),
};

export const Accordion: Story = {
    render: (args) => (
        <DescriptionLoader {...args}>
            <DescriptionLoader.Accordion rows={2} />
        </DescriptionLoader>
    ),
};
