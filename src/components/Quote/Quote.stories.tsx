import type { Meta, StoryObj } from '@storybook/react-vite';
import { Section } from '../Section/Section';
import { SingleParagraph } from '../../data/storyContent';
import { Quote } from './Quote';

const meta: Meta<typeof Quote> = {
    title: 'Components/Content/Quote',
    component: Quote,
    tags: ['!autodocs'],
    argTypes: {
        graphic: {
            control: 'inline-radio',
            options: ['border', 'quote'],
        },
    },
    parameters: {
        controls: {
            sort: 'requiredFirst',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const Default: Story = {
    args: {
        cite: 'John Doe',
        graphic: 'border',
        children: <SingleParagraph />,
    },
};

export const QuoteGraphic: Story = {
    args: {
        cite: 'Jane Smith',
        graphic: 'quote',
        children: <SingleParagraph index={1} />,
    },
};

export const Centered: Story = {
    args: {
        cite: 'John Doe',
        graphic: 'border',
        isCenter: true,
        children: <SingleParagraph />,
    },
};

export const WithinSection: Story = {
    render: (args) => (
        <Section>
            <SingleParagraph />
            <SingleParagraph />
            <Quote {...args} />
            <SingleParagraph index={1} />
            <SingleParagraph />
        </Section>
    ),
    args: {
        cite: 'John Doe',
        graphic: 'border',
        children: <SingleParagraph index={2} />,
    },
};
