import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Calendar } from './Calendar';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';

const sampleEvents = [
    {
        id: 1,
        name: 'Open House',
        imageUrl: '',
        startDatetime: new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            5,
            10,
            0,
        ).toISOString(),
        endDatetime: new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            5,
            12,
            0,
        ).toISOString(),
    },
    {
        id: 2,
        name: 'Convocation Week',
        imageUrl: '',
        startDatetime: new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            12,
            9,
            0,
        ).toISOString(),
        endDatetime: new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            16,
            17,
            0,
        ).toISOString(),
    },
    {
        id: 3,
        name: 'Research Symposium',
        imageUrl: '',
        startDatetime: new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            20,
            13,
            0,
        ).toISOString(),
        endDatetime: new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            20,
            17,
            0,
        ).toISOString(),
    },
];

const meta: Meta<typeof Calendar> = {
    title: 'Components/Content/Calendar',
    component: Calendar,
    tags: ['!autodocs'],
    argTypes: {
        mode: {
            control: 'inline-radio',
            options: ['single', 'range'],
        },
    },
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
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
    args: {
        mode: 'single',
        events: sampleEvents,
    },
};

export const RangeSelection: Story = {
    args: {
        mode: 'range',
        events: sampleEvents,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button', { name: 'Next month' }));
        const start = canvas.getByRole('button', { name: '5' });
        const end = canvas.getByRole('button', { name: '10' });
        await userEvent.click(start);
        await userEvent.click(end);
        expect(start).toHaveAttribute('aria-pressed', 'true');
        expect(end).toHaveAttribute('aria-pressed', 'true');
        expect(canvas.getByRole('button', { name: '7' })).toHaveClass(
            'cu-calendar__day-btn--in-range',
        );
        await userEvent.click(canvas.getByRole('button', { name: 'Clear selection' }));
        expect(start).toHaveAttribute('aria-pressed', 'false');
        expect(end).toHaveAttribute('aria-pressed', 'false');
    },
};

export const NoEvents: Story = {
    args: {
        mode: 'single',
    },
};

export const PastDates: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button', { name: 'Previous month' }));

        const dates = canvas
            .getAllByRole('button')
            .filter((button) => button.querySelector('time'));

        for (const date of dates) {
            expect(date).toBeDisabled();
            expect(date).toHaveStyle({
                backgroundColor: 'rgba(0, 0, 0, 0)',
                color: 'rgb(118, 118, 118)',
            });
            expect(date.parentElement).toHaveStyle({ backgroundColor: 'rgb(255, 255, 255)' });
            expect(date).toHaveAttribute('aria-pressed', 'false');
        }

        await userEvent.click(canvas.getByRole('button', { name: 'Next month' }));
        await userEvent.click(canvas.getByRole('button', { name: 'Next month' }));
        const availableDate = canvas.getByRole('button', { name: '5' });
        expect(availableDate).toBeEnabled();
        await userEvent.click(availableDate);
        expect(availableDate).toHaveAttribute('aria-pressed', 'true');
        await userEvent.click(canvas.getByRole('button', { name: 'Clear selection' }));
        await userEvent.click(canvas.getByRole('button', { name: 'Previous month' }));
        await userEvent.click(canvas.getByRole('button', { name: 'Previous month' }));
    },
};
