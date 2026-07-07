import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { ImageGrid } from './ImageGrid';
import { ImageData } from '../../data/ImageData';

const meta: Meta<typeof ImageGrid> = {
    title: 'Components/Media & Banners/ImageGrid',
    component: ImageGrid,
    tags: ['!autodocs'],
    argTypes: {
        cols: {
            control: 'select',
            options: ['2', '3', '4', '1/3', '2/3'],
        },
        maxWidth: {
            control: 'select',
            options: ['aligncontent', 'alignwide', 'alignfull'],
        },
        gap: {
            control: 'inline-radio',
            options: ['none', 'sm', 'md', 'lg'],
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
type Story = StoryObj<typeof ImageGrid>;

export const ThreeColumns: Story = {
    args: {
        cols: '3',
        gap: 'sm',
        maxWidth: 'aligncontent',
    },
    render: (args) => (
        <ImageGrid {...args}>
            {ImageData.slice(0, 3).map(({ id, image }) => (
                <ImageGrid.Image key={id} imageUrl={image} />
            ))}
        </ImageGrid>
    ),
};

export const FourColumns: Story = {
    render: () => (
        <ImageGrid cols="4" gap="sm">
            {ImageData.slice(0, 4).map(({ id, image }) => (
                <ImageGrid.Image key={id} imageUrl={image} />
            ))}
        </ImageGrid>
    ),
};

export const TwoColumns: Story = {
    render: () => (
        <ImageGrid cols="2" gap="sm">
            {ImageData.slice(0, 4).map(({ id, image }) => (
                <ImageGrid.Image key={id} imageUrl={image} />
            ))}
        </ImageGrid>
    ),
};

export const ColSpan2: Story = {
    render: () => (
        <ImageGrid cols="4" gap="sm">
            <ImageGrid.Image imageUrl={ImageData[0].image} />
            <ImageGrid.Image
                imageUrl={ImageData[1].image}
                colSpan="2"
                rowSpan="2"
                title="Overlay Image Title"
                content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
                link="https://carleton.ca"
            />
            {ImageData.slice(2, 9).map(({ id, image }) => (
                <ImageGrid.Image key={id} imageUrl={image} />
            ))}
        </ImageGrid>
    ),
};

export const ColSpan3: Story = {
    render: () => (
        <ImageGrid cols="4" gap="sm">
            <ImageGrid.Image imageUrl={ImageData[0].image} />
            <ImageGrid.Image
                imageUrl={ImageData[1].image}
                colSpan="3"
                rowSpan="2"
                title="Overlay Image Title"
                content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
            />
            {ImageData.slice(2, 7).map(({ id, image }) => (
                <ImageGrid.Image key={id} imageUrl={image} />
            ))}
        </ImageGrid>
    ),
};

export const StackedTwoFour: Story = {
    render: () => (
        <ImageGrid cols="4" gap="sm">
            <ImageGrid.Image
                imageUrl={ImageData[0].image}
                colSpan="2"
                rowSpan="2"
                title="Ottawa Bluefest"
                content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
                link="https://carleton.ca"
            />
            <ImageGrid.Image
                imageUrl={ImageData[1].image}
                colSpan="2"
                rowSpan="2"
                title="Ottawa Tulip Festival"
                content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
                link="https://carleton.ca"
            />
            {ImageData.slice(2, 6).map(({ id, image }) => (
                <ImageGrid.Image key={id} imageUrl={image} />
            ))}
        </ImageGrid>
    ),
};

export const WithCaptions: Story = {
    render: () => (
        <ImageGrid cols="3" gap="sm">
            {ImageData.slice(0, 3).map(({ id, image }) => (
                <ImageGrid.Image
                    key={id}
                    imageUrl={image}
                    title="Image caption title"
                    content="A short description of this image."
                />
            ))}
        </ImageGrid>
    ),
};

export const AlignWide: Story = {
    render: () => (
        <ImageGrid cols="3" gap="sm" maxWidth="alignwide">
            {ImageData.slice(0, 3).map(({ id, image }) => (
                <ImageGrid.Image key={id} imageUrl={image} />
            ))}
        </ImageGrid>
    ),
};

export const AlignFull: Story = {
    render: () => (
        <ImageGrid cols="4" gap="none" maxWidth="alignfull">
            {ImageData.slice(0, 4).map(({ id, image }) => (
                <ImageGrid.Image key={id} imageUrl={image} aspectRatio="wide" />
            ))}
        </ImageGrid>
    ),
};
