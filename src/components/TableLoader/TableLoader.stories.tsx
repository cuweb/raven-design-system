import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableLoader } from './TableLoader';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';

const meta: Meta<typeof TableLoader> = {
    title: 'Components/Feedback/Loaders/Table Loader',
    component: TableLoader,
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
type Story = StoryObj<typeof TableLoader>;

export const Default: Story = {
    args: {
        numRow: 5,
        numCol: 5,
    },
};

export const SmallTable: Story = {
    args: {
        numRow: 3,
        numCol: 3,
    },
};
