import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageHeader } from './PageHeader';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';

const sizeOptions = ['sm', 'md', 'lg', 'xl', 'primary'] as const;

const meta: Meta<typeof PageHeader> = {
    title: 'Components/Media & Banners/Page Header',
    component: PageHeader,
    tags: ['!autodocs'],
    argTypes: {
        as: {
            control: 'inline-radio',
            options: ['h1', 'h2', 'h3'],
        },
        size: {
            control: 'inline-radio',
            options: sizeOptions,
        },
    },
    parameters: {
        controls: {
            sort: 'requiredFirst',
        },
    },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
    args: {
        header: 'Page Header',
        as: 'h1',
        size: 'lg',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.',
        isWhite: false,
        isCenter: false,
        noUnderline: false,
    },
    render: (args) => (
        <Main>
            <Section>
                <PageHeader {...args} />
            </Section>
        </Main>
    ),
};

export const WithPreHeader: Story = {
    args: {
        as: 'h1',
        size: 'lg',
        preHeader: 'Faculty of Science',
        header: 'Department of Biology',
    },
    render: (args) => (
        <Main>
            <Section>
                <PageHeader {...args} />
            </Section>
        </Main>
    ),
};

export const WithPronoun: Story = {
    args: {
        as: 'h1',
        size: 'lg',
        header: 'Dr. Jane Smith',
        pronoun: 'she/her',
        content: 'Associate Professor, Department of Computer Science.',
    },
    render: (args) => (
        <Main>
            <Section>
                <PageHeader {...args} />
            </Section>
        </Main>
    ),
};

export const Centered: Story = {
    args: {
        as: 'h1',
        size: 'lg',
        header: 'Centered Page Header',
        content: 'This variant centers the heading, underline, and content text.',
        isCenter: true,
    },
    render: (args) => (
        <Main>
            <Section>
                <PageHeader {...args} />
            </Section>
        </Main>
    ),
};

export const NoUnderline: Story = {
    args: {
        as: 'h1',
        size: 'lg',
        header: 'No Underline Variant',
        content: 'The red accent underline is omitted.',
        noUnderline: true,
    },
    render: (args) => (
        <Main>
            <Section>
                <PageHeader {...args} />
            </Section>
        </Main>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <Main>
            <Section>
                {sizeOptions.map((size) => (
                    <PageHeader key={size} header={`Size: ${size}`} size={size} as="h2" />
                ))}
            </Section>
        </Main>
    ),
};
