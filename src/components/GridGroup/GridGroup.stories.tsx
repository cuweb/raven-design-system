import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { GridGroup } from './GridGroup';
import { SingleParagraph } from '../../data/storyContent';

const meta: Meta<typeof GridGroup> = {
    title: 'Components/Layout/Grid Group',
    component: GridGroup,
    tags: ['!autodocs'],
    argTypes: {
        cols: {
            control: 'inline-radio',
            options: ['1', '2', '3'],
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
type Story = StoryObj<typeof GridGroup>;

export const ThreeColumns: Story = {
    render: (args) => (
        <Main>
            <GridGroup {...args}>
                <SingleParagraph index={0} />
                <SingleParagraph index={1} />
                <SingleParagraph index={2} />
            </GridGroup>
        </Main>
    ),
};

export const TwoColumns: Story = {
    render: () => (
        <Main>
            <GridGroup cols="2">
                <SingleParagraph index={0} />
                <SingleParagraph index={1} />
                <SingleParagraph index={2} />
                <SingleParagraph index={3} />
            </GridGroup>
        </Main>
    ),
};
