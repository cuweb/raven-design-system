import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
    title: 'Components/Navigation/Footer',
    component: Footer,
    tags: ['!autodocs'],
    parameters: {
        layout: 'fullscreen',
        controls: {
            sort: 'requiredFirst',
        },
    },
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    render: (args) => <Footer {...args} />,
};
