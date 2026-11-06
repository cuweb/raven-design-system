import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Description } from './Description';
import { Main } from '../Main/Main';
import { SingleParagraph, MultiParagraph, UnorderedList } from '../../data/storyContent';

const meta: Meta<typeof Description> = {
    title: 'Components/Content/Description',
    component: Description,
    tags: ['!autodocs'],
    decorators: [
        (Story) => (
            <Main>
                <Story />
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
type Story = StoryObj<typeof Description>;

export const Default: Story = {
    render: (args) => (
        <Description {...args}>
            <Description.Meta term="Programme">Bachelor of Computer Science</Description.Meta>
        </Description>
    ),
};

export const WithColumns: Story = {
    render: (args) => (
        <Description {...args}>
            <Description.Meta term="Programme" useColumns>
                Bachelor of Computer Science
            </Description.Meta>
        </Description>
    ),
};

export const WithAccordion: Story = {
    render: (args) => (
        <Description {...args}>
            <Description.Accordion term="Programme details">
                <SingleParagraph />
            </Description.Accordion>
        </Description>
    ),
};

export const MultipleItems: Story = {
    render: (args) => (
        <Description {...args}>
            <Description.Meta term="Programme">Bachelor of Computer Science</Description.Meta>
            <Description.Meta term="Faculty">Faculty of Engineering and Design</Description.Meta>
            <Description.Meta term="Duration">4 years (120 credits)</Description.Meta>
            <Description.Meta term="Delivery">In-person, Ottawa campus</Description.Meta>
        </Description>
    ),
};

export const MultipleColumns: Story = {
    render: (args) => (
        <Description {...args}>
            <Description.Meta term="Programme" useColumns>
                Bachelor of Computer Science
            </Description.Meta>
            <Description.Meta term="Faculty" useColumns>
                <MultiParagraph count={2} />
            </Description.Meta>
            <Description.Meta term="Duration" useColumns>
                4 years (120 credits)
            </Description.Meta>
            <Description.Meta term="Delivery" useColumns>
                In-person, Ottawa campus
            </Description.Meta>
        </Description>
    ),
};

export const MultipleAccordions: Story = {
    render: (args) => (
        <Description {...args}>
            <Description.Accordion term="Programme overview">
                <SingleParagraph />
            </Description.Accordion>
            <Description.Accordion term="Admission requirements">
                <SingleParagraph index={1} />
                <UnorderedList />
            </Description.Accordion>
            <Description.Accordion term="Career outcomes">
                <MultiParagraph count={2} />
            </Description.Accordion>
        </Description>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const firstSummary = canvas.getByText('Programme overview');
        const secondSummary = canvas.getByText('Admission requirements');
        const firstDetails = firstSummary.parentElement;
        const secondDetails = secondSummary.parentElement;

        expect(firstDetails).not.toHaveAttribute('open');
        expect(secondDetails).not.toHaveAttribute('open');

        firstSummary.focus();
        expect(firstSummary).toHaveFocus();
        await userEvent.click(firstSummary);
        expect(firstDetails).toHaveAttribute('open');

        secondSummary.focus();
        expect(secondSummary).toHaveFocus();
        await userEvent.click(secondSummary);
        expect(secondDetails).toHaveAttribute('open');
        expect(firstDetails).toHaveAttribute('open');

        firstSummary.focus();
        await userEvent.click(firstSummary);
        expect(firstDetails).not.toHaveAttribute('open');
        expect(secondDetails).toHaveAttribute('open');
    },
};
