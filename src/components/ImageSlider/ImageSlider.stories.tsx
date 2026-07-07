import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { ImageSlider } from './ImageSlider';
import { ImageData } from '../../data/ImageData';

const meta: Meta<typeof ImageSlider> = {
    title: 'Components/Media & Banners/ImageSlider',
    component: ImageSlider,
    tags: ['!autodocs'],
    argTypes: {
        maxWidth: {
            control: 'inline-radio',
            options: ['aligncontent', 'alignwide', 'alignfull'],
        },
    },
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
type Story = StoryObj<typeof ImageSlider>;

export const Default: Story = {
    args: {
        maxWidth: 'aligncontent',
    },
    render: (args) => (
        <ImageSlider {...args}>
            {ImageData.map(({ id, image }) => (
                <ImageSlider.Item key={id} imageUrl={image} />
            ))}
        </ImageSlider>
    ),
};

export const AlignWide: Story = {
    render: () => (
        <ImageSlider maxWidth="alignwide">
            {ImageData.map(({ id, image }) => (
                <ImageSlider.Item key={id} imageUrl={image} />
            ))}
        </ImageSlider>
    ),
};

export const AlignFull: Story = {
    render: () => (
        <ImageSlider maxWidth="alignfull">
            {ImageData.map(({ id, image }) => (
                <ImageSlider.Item key={id} imageUrl={image} aspectRatio="wide" />
            ))}
        </ImageSlider>
    ),
};

export const WithCaptions: Story = {
    render: () => (
        <ImageSlider maxWidth="alignwide">
            {ImageData.map(({ id, image }) => (
                <ImageSlider.Item
                    key={id}
                    imageUrl={image}
                    title="Image caption title"
                    content="A short description of this image."
                    link="https://carleton.ca"
                />
            ))}
        </ImageSlider>
    ),
};
