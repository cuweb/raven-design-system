import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Elements/Avatar',
    component: Avatar,
    tags: ['!autodocs'],
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['sm', 'md', 'lg'],
        },
    },
    parameters: {
        controls: {
            sort: 'requiredFirst',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithPhoto: Story = {
    args: {
        firstName: 'Carleton',
        lastName: 'University',
        src: 'https://picsum.photos/seed/person3/120/120',
    },
};

export const Initials: Story = {
    args: {
        firstName: 'Carleton',
        lastName: 'University',
    },
};

export const Circle: Story = {
    args: {
        firstName: 'Carleton',
        lastName: 'University',
        src: 'https://picsum.photos/seed/person3/120/120',
        isCircle: true,
    },
};

export const Interactive: Story = {
    argTypes: {
        onClick: { action: 'clicked' },
    },
    args: {
        firstName: 'Carleton',
        lastName: 'University',
        src: 'https://picsum.photos/seed/person3/120/120',
        isCircle: true,
        onClick: () => {},
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Avatar firstName="Carleton" lastName="University" size="sm" />
            <Avatar firstName="Carleton" lastName="University" size="md" />
            <Avatar firstName="Carleton" lastName="University" size="lg" />
        </div>
    ),
};
