import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListingLoader } from './ListingLoader';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { StackedList } from '../StackedList/StackedList';

const meta: Meta<typeof ListingLoader> = {
    title: 'Components/Feedback/Loaders/Listing Loader',
    component: ListingLoader,
    tags: ['!autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['news', 'event', 'icon', 'page', 'people', 'description'],
        },
    },
    decorators: [
        (Story) => (
            <Main>
                <Section>
                    <StackedList cols="1">
                        <Story />
                    </StackedList>
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
type Story = StoryObj<typeof ListingLoader>;

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

export const Description: Story = {
    args: {
        variant: 'description',
    },
};
