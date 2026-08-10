import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardLoader } from './CardLoader';
import { Column } from '../Column/Column';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';

const meta: Meta<typeof CardLoader> = {
    title: 'Components/Feedback/Loaders/Card Loader',
    component: CardLoader,
    tags: ['!autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['news', 'event', 'icon', 'page', 'people', 'video'],
        },
    },
    decorators: [
        (Story) => (
            <Main>
                <Section>
                    <Column cols="3">
                        <Story />
                    </Column>
                </Section>
            </Main>
        ),
    ],
    parameters: {
        controls: { sort: 'requiredFirst' },
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof CardLoader>;

export const Default: Story = {};

export const News: Story = {
    args: {
        variant: 'news',
    },
};

export const Event: Story = {
    args: {
        variant: 'event',
    },
};

export const Icon: Story = {
    args: {
        variant: 'icon',
    },
};

export const Page: Story = {
    args: {
        variant: 'page',
    },
};

export const People: Story = {
    args: {
        variant: 'people',
    },
};

export const Video: Story = {
    args: {
        variant: 'video',
    },
};
