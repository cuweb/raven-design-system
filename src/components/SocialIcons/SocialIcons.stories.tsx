import type { Meta, StoryObj } from '@storybook/react-vite';
import { SocialIcons } from './SocialIcons';

const meta: Meta<typeof SocialIcons> = {
    title: 'Components/Elements/Social Icons',
    component: SocialIcons,
    tags: ['!autodocs'],
    argTypes: {
        iconColor: {
            control: 'inline-radio',
            options: ['brand', 'black', 'white'],
        },
    },
    parameters: {
        controls: {
            sort: 'requiredFirst',
        },
    },
};

export default meta;
type Story = StoryObj<typeof SocialIcons>;

const AllIcons = () => (
    <>
        <SocialIcons.Item icon="linkedin" href="#" label="Connect on LinkedIn" />
        <SocialIcons.Item icon="facebook" href="#" label="View on Facebook" />
        <SocialIcons.Item icon="bluesky" href="#" label="Follow on Bluesky" />
        <SocialIcons.Item icon="x-twitter" href="#" label="Follow on X" />
        <SocialIcons.Item icon="instagram" href="#" label="Follow on Instagram" />
        <SocialIcons.Item icon="youtube" href="#" label="Watch on YouTube" />
        <SocialIcons.Item icon="orcid" href="#" label="View on ORCID" />
    </>
);

export const Default: Story = {
    render: (args) => (
        <SocialIcons {...args}>
            <AllIcons />
        </SocialIcons>
    ),
};

export const WithPrefix: Story = {
    render: (args) => (
        <SocialIcons {...args} prefix="Follow us on socials">
            <AllIcons />
        </SocialIcons>
    ),
};

export const Black: Story = {
    render: (args) => (
        <SocialIcons {...args} iconColor="black">
            <AllIcons />
        </SocialIcons>
    ),
};

export const White: Story = {
    render: (args) => (
        <SocialIcons {...args} iconColor="white">
            <AllIcons />
        </SocialIcons>
    ),
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

export const Brand: Story = {
    render: (args) => (
        <SocialIcons {...args} iconColor="brand">
            <AllIcons />
        </SocialIcons>
    ),
};
