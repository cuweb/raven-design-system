import type { Meta, StoryObj } from '@storybook/react-vite';
import { EventLoader } from './EventLoader';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';

const meta: Meta<typeof EventLoader> = {
    title: 'Components/Feedback/Loaders/Event Loader',
    component: EventLoader,
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
type Story = StoryObj<typeof EventLoader>;

export const Default: Story = {};

export const WithClearButton: Story = {
    args: {
        showClearButton: true,
    },
};
