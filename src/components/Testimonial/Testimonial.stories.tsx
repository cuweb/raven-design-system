import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { Testimonial } from './Testimonial';

const meta: Meta<typeof Testimonial> = {
    title: 'Components/Content/Testimonial',
    component: Testimonial,
    tags: ['!autodocs'],
    decorators: [
        (Story) => (
            <Main>
                <Story />
            </Main>
        ),
    ],
    argTypes: {
        reverse: {
            control: 'inline-radio',
            options: [false, true],
        },
        imageZoom: {
            control: { type: 'range', min: 0, max: 9, step: 1 },
        },
        focalPointX: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
        },
        focalPointY: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
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
type Story = StoryObj<typeof Testimonial>;

export const Default: Story = {
    args: {
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam mollis feugiat nisl, sit amet tempor ante scelerisque vitae.',
        cite: 'Jane Doe',
        imageUrl: 'https://picsum.photos/id/342/600/400',
        imageZoom: 0,
        focalPointX: 50,
        focalPointY: 50,
        reverse: false,
    },
};

export const Reversed: Story = {
    args: {
        quote: 'Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non.',
        cite: 'John Smith',
        imageUrl: 'https://picsum.photos/id/342/600/400',
        imageZoom: 0,
        focalPointX: 50,
        focalPointY: 50,
        reverse: true,
    },
};
