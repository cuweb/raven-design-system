import type { Meta, StoryObj } from '@storybook/react-vite';
import { FooterStandard } from './FooterStandard';

const meta: Meta<typeof FooterStandard> = {
    title: 'Components/Navigation/Footer Standard',
    component: FooterStandard,
    tags: ['!autodocs'],
    argTypes: {
        type: {
            control: 'inline-radio',
            options: ['standard', 'athletics', 'futureFunder'],
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
type Story = StoryObj<typeof FooterStandard>;

export const Standard: Story = {
    args: { type: 'standard' },
    render: (args) => <FooterStandard {...args} />,
};

export const Athletics: Story = {
    args: { type: 'athletics' },
    render: (args) => <FooterStandard {...args} />,
};

export const FutureFunder: Story = {
    args: { type: 'futureFunder' },
    render: (args) => <FooterStandard {...args} />,
};
