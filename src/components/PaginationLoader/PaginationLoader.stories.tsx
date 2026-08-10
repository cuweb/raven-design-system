import type { Meta, StoryObj } from '@storybook/react-vite';
import { PaginationLoader } from './PaginationLoader';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';

const meta: Meta<typeof PaginationLoader> = {
    title: 'Components/Feedback/Loaders/Pagination Loader',
    component: PaginationLoader,
    tags: ['!autodocs'],
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
type Story = StoryObj<typeof PaginationLoader>;

export const Default: Story = {
    args: {
        pageCount: 5,
    },
};

export const WithBorder: Story = {
    args: {
        pageCount: 5,
        hasBorder: true,
    },
};
