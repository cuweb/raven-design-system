import type { Meta, StoryObj } from '@storybook/react-vite';
import { BlockLoader } from './BlockLoader';

const meta: Meta<typeof BlockLoader> = {
    title: 'Components/Feedback/Loaders/Block Loader',
    component: BlockLoader,
    tags: ['!autodocs'],
    argTypes: {
        cols: {
            control: 'select',
            options: ['1', '2', '3', '4', '1/3', '2/3'],
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '640px' }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        controls: {
            sort: 'requiredFirst',
        },
    },
};

export default meta;
type Story = StoryObj<typeof BlockLoader>;

export const Default: Story = {};

export const TwoColumns: Story = {
    args: {
        cols: '2',
    },
};

export const ThreeColumns: Story = {
    args: {
        cols: '3',
    },
};

export const FourColumns: Story = {
    args: {
        cols: '4',
    },
};

export const AsymmetricSplit: Story = {
    args: {
        cols: '1/3',
        height: 200,
    },
};

export const TallBlock: Story = {
    args: {
        height: 300,
    },
};
