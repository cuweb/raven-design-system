import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormLoader } from './FormLoader';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';

const meta: Meta<typeof FormLoader> = {
    title: 'Components/Feedback/Loaders/Form Loader',
    component: FormLoader,
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
type Story = StoryObj<typeof FormLoader>;

export const Default: Story = {
    render: (args) => (
        <FormLoader {...args}>
            <FormLoader.RowLoader fields={1} />
            <FormLoader.RowLoader cols="2" fields={2} />
            <FormLoader.RowLoader cols="3" fields={3} />
            <FormLoader.RowLoader cols="4" fields={4} />
        </FormLoader>
    ),
};

export const NoMargin: Story = {
    render: (args) => (
        <FormLoader {...args} noMargin>
            <FormLoader.RowLoader fields={1} />
            <FormLoader.RowLoader cols="2" fields={2} />
        </FormLoader>
    ),
};
