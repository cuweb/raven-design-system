import type { Meta, StoryObj } from '@storybook/react-vite';
import { CalendarLoader } from './CalendarLoader';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';

const meta: Meta<typeof CalendarLoader> = {
    title: 'Components/Feedback/Loaders/Calendar Loader',
    component: CalendarLoader,
    tags: ['!autodocs'],
    parameters: {
        controls: { sort: 'requiredFirst' },
        layout: 'fullscreen',
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
};

export default meta;
type Story = StoryObj<typeof CalendarLoader>;

export const Default: Story = {};

export const WithClearButton: Story = {
    args: {
        showClearButton: true,
    },
};
