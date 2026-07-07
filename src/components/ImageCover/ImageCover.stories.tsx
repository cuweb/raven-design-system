import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { ImageCover } from './ImageCover';
import { MultiParagraph } from '../../data/storyContent';
import bgImages from '../../data/BgImagesData.json';

const imageOptions = bgImages.map((img) => img.value);

const meta: Meta<typeof ImageCover> = {
    title: 'Components/Layout/Image Cover',
    component: ImageCover,
    tags: ['!autodocs'],
    decorators: [
        (Story) => (
            <Main>
                <Story />
            </Main>
        ),
    ],
    argTypes: {
        maxWidth: {
            control: 'select',
            options: ['aligncontent', 'alignwide', 'alignfull'],
        },
        contentWidth: {
            control: 'select',
            options: ['aligncontent', 'alignwide', 'alignfull'],
        },
        image: {
            control: 'select',
            options: [undefined, ...imageOptions],
        },
        opacity: {
            control: { type: 'range', min: 0, max: 100, step: 5 },
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
type Story = StoryObj<typeof ImageCover>;

export const Default: Story = {
    render: (args) => (
        <ImageCover {...args}>
            <MultiParagraph count={2} />
        </ImageCover>
    ),
};

export const Wide: Story = {
    render: () => (
        <ImageCover maxWidth="alignwide">
            <MultiParagraph count={2} />
        </ImageCover>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <ImageCover maxWidth="alignfull" image="tory">
            <MultiParagraph count={6} />
        </ImageCover>
    ),
};

export const FullWidthConstrained: Story = {
    render: () => (
        <ImageCover maxWidth="alignfull" contentWidth="aligncontent">
            <MultiParagraph count={2} />
        </ImageCover>
    ),
};

export const FullWidthConstrainedWide: Story = {
    render: () => (
        <ImageCover maxWidth="alignfull" contentWidth="alignwide">
            <MultiParagraph count={2} />
        </ImageCover>
    ),
};
