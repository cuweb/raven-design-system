import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Main } from '../Main/Main';
import { FullBanner } from './FullBanner';

const meta: Meta<typeof FullBanner> = {
    title: 'Components/Media & Banners/Full Banner',
    component: FullBanner,
    tags: ['!autodocs'],
    decorators: [
        (Story) => (
            <Main>
                <Story />
            </Main>
        ),
    ],
    argTypes: {
        headerType: {
            control: 'inline-radio',
            options: ['h1', 'h2'],
        },
        maxWidth: {
            control: 'select',
            options: ['aligncontent', 'alignwide', 'alignfull'],
        },
        contentBox: {
            control: 'inline-radio',
            options: ['lg', 'xl'],
        },
        justify: {
            control: 'inline-radio',
            options: ['start', 'end', 'center'],
        },
        opacity: {
            control: { type: 'range', min: 50, max: 90, step: 5 },
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
        controls: { sort: 'requiredFirst' },
    },
};

export default meta;
type Story = StoryObj<typeof FullBanner>;

export const Default: Story = {
    render: (args) => (
        <FullBanner {...args}>
            <ButtonGroup>
                <Button title="Apply Now" />
                <Button title="Request Information" color="dark-grey" />
            </ButtonGroup>
        </FullBanner>
    ),
    args: {
        title: 'The nostalgia is real.',
        content:
            'The launch of the iPod revolutionized how the world consumes music on the move. Explore our programs and find your path.',
        headerType: 'h2',
        image: 'https://picsum.photos/id/20/1920/840',
        imageAlt: '',
        opacity: 70,
        focalPointX: 50,
        focalPointY: 50,
        maxWidth: 'alignwide',
        contentBox: 'xl',
        justify: 'start',
    },
};

export const AlignFull: Story = {
    render: (args) => (
        <FullBanner {...args}>
            <ButtonGroup>
                <Button title="Apply Now" />
                <Button title="Request Information" color="dark-grey" />
            </ButtonGroup>
        </FullBanner>
    ),
    args: {
        title: 'Full Width Banner',
        content: 'A full-bleed banner that spans the entire viewport width with no border radius.',
        headerType: 'h1',
        image: 'https://picsum.photos/id/381/1920/840',
        opacity: 65,
        maxWidth: 'alignfull',
        contentBox: 'xl',
        justify: 'start',
    },
};

export const WithVideo: Story = {
    render: (args) => (
        <FullBanner
            {...args}
            media={
                <FullBanner.Video src="https://cdn.carleton.ca/truth/videos/aerial-view-20260513134411.mp4" />
            }
        >
            <ButtonGroup>
                <Button title="Explore Programs" />
                <Button title="Learn More" color="dark-grey" />
            </ButtonGroup>
        </FullBanner>
    ),
    args: {
        title: 'Discover What Awaits',
        content: 'Join thousands of students shaping the future. Your journey starts here.',
        headerType: 'h1',
        opacity: 60,
        maxWidth: 'alignwide',
        contentBox: 'xl',
        justify: 'start',
    },
};

export const ContentBoxLg: Story = {
    render: (args) => (
        <FullBanner {...args}>
            <ButtonGroup>
                <Button title="Apply Now" />
                <Button title="Request Information" color="dark-grey" />
            </ButtonGroup>
        </FullBanner>
    ),
    args: {
        title: 'Content Box at 1024px',
        content:
            'The content box inner wrapper is constrained to 1024px (lg), suitable for narrower layouts.',
        headerType: 'h2',
        image: 'https://picsum.photos/id/20/1920/840',
        opacity: 70,
        maxWidth: 'alignwide',
        contentBox: 'lg',
        justify: 'start',
    },
};

export const JustifyCenter: Story = {
    render: (args) => (
        <FullBanner {...args}>
            <ButtonGroup>
                <Button title="Apply Now" />
                <Button title="Request Information" color="dark-grey" />
            </ButtonGroup>
        </FullBanner>
    ),
    args: {
        title: 'Centered Content Box',
        content: 'The content box is centered within the banner using the justify prop.',
        headerType: 'h2',
        image: 'https://picsum.photos/id/381/1920/840',
        opacity: 70,
        maxWidth: 'alignwide',
        contentBox: 'xl',
        justify: 'center',
    },
};

export const JustifyEnd: Story = {
    render: (args) => (
        <FullBanner {...args}>
            <ButtonGroup>
                <Button title="Apply Now" />
                <Button title="Request Information" color="dark-grey" />
            </ButtonGroup>
        </FullBanner>
    ),
    args: {
        title: 'Right-Aligned Content Box',
        content: 'The content box is aligned to the end (right) within the banner.',
        headerType: 'h2',
        image: 'https://picsum.photos/id/20/1920/840',
        opacity: 70,
        maxWidth: 'alignwide',
        contentBox: 'xl',
        justify: 'end',
    },
};
