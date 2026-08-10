import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageHeaderLoader } from './PageHeaderLoader';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';

const meta: Meta<typeof PageHeaderLoader> = {
    title: 'Components/Feedback/Loaders/Page Header Loader',
    component: PageHeaderLoader,
    tags: ['!autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'event', 'people'],
        },
        content: {
            control: 'select',
            options: [undefined, 'small', 'large'],
        },
    },
    decorators: [
        (Story) => (
            <Main>
                <Section>
                    <Story />
                </Section>
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
type Story = StoryObj<typeof PageHeaderLoader>;

export const Default: Story = {};

export const WithContent: Story = {
    args: {
        content: 'small',
    },
};

export const WithLargeContent: Story = {
    args: {
        content: 'large',
    },
};

export const Center: Story = {
    args: {
        isCenter: true,
    },
};

export const Event: Story = {
    args: {
        variant: 'event',
    },
};

export const People: Story = {
    args: {
        variant: 'people',
    },
};
