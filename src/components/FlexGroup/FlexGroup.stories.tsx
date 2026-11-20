import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { Badge } from '../Badge/Badge';
import { FlexGroup } from './FlexGroup';

const meta: Meta<typeof FlexGroup> = {
    title: 'Components/Layout/Flex Group',
    component: FlexGroup,
    tags: ['!autodocs'],
    argTypes: {
        direction: {
            control: 'inline-radio',
            options: ['row', 'column'],
        },
        wrap: {
            control: 'inline-radio',
            options: ['wrap', 'nowrap'],
        },
        justify: {
            control: 'inline-radio',
            options: ['start', 'center', 'end', 'space-between'],
        },
        align: {
            control: 'inline-radio',
            options: ['start', 'center', 'end', 'stretch'],
        },
        maxWidth: {
            control: 'inline-radio',
            options: ['aligncontent', 'alignwide', 'alignfull'],
        },
    },
    parameters: {
        layout: 'fullscreen',
        controls: {
            sort: 'requiredFirst',
        },
    },
};

export default meta;
type Story = StoryObj<typeof FlexGroup>;

export const Row: Story = {
    render: (args) => (
        <Main>
            <FlexGroup {...args}>
                <Badge text="First" />
                <Badge text="Second" />
                <Badge text="Third" />
            </FlexGroup>
        </Main>
    ),
};

export const Column: Story = {
    render: () => (
        <Main>
            <FlexGroup direction="column">
                <Badge text="First" />
                <Badge text="Second" />
                <Badge text="Third" />
            </FlexGroup>
        </Main>
    ),
};

export const SpaceBetween: Story = {
    name: 'Justify space-between',
    render: () => (
        <Main>
            <FlexGroup justify="space-between" align="center">
                <Badge text="Left" />
                <Badge text="Right" />
            </FlexGroup>
        </Main>
    ),
};
