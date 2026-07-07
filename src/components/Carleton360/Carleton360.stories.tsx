import type { Meta, StoryObj } from '@storybook/react-vite';
import { Carleton360 } from './Carleton360';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Button } from '../Button/Button';

const meta: Meta<typeof Carleton360> = {
    title: 'Components/Content/Carleton 360',
    component: Carleton360,
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
type Story = StoryObj<typeof Carleton360>;

export const Default: Story = {
    render: (args) => (
        <Carleton360 {...args}>
            <ButtonGroup>
                <Button title="Sign up for 360" />
                <Button title="Login to 360" color="dark-grey" />
            </ButtonGroup>
        </Carleton360>
    ),
};

export const CustomDescription: Story = {
    args: {
        description:
            'Connect with Carleton University and discover programs, events, and resources tailored for you.',
    },
    render: (args) => (
        <Carleton360 {...args}>
            <ButtonGroup>
                <Button title="Sign up for 360" />
                <Button title="Login to 360" color="dark-grey" />
            </ButtonGroup>
        </Carleton360>
    ),
};

export const NoButtons: Story = {};
