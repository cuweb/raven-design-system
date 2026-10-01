import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main';
import { CampaignHero } from './CampaignHero';

const meta: Meta<typeof CampaignHero> = {
    title: 'Components/Media & Banners/Campaign Hero',
    component: CampaignHero,
    tags: ['!autodocs'],
    argTypes: {
        currency: {
            control: 'text',
        },
        categories: {
            control: 'object',
        },
    },
    parameters: {
        layout: 'fullscreen',
        controls: {
            sort: 'requiredFirst',
        },
    },
    decorators: [
        (Story) => (
            <Main>
                <Story />
            </Main>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof CampaignHero>;

export const Default: Story = {
    args: {
        department: 'Faculty of Science',
        title: 'Help advance research that changes lives',
        description:
            'Support the people and discoveries shaping a healthier, more sustainable future for our communities.',
        imageUrl: 'https://picsum.photos/id/1018/1600/900',
        imageAlt: 'Aerial view of a forest and river',
        categories: ['Research', 'Student support', 'Community'],
        amountRaised: 42500,
        fundraisingGoal: 80000,
        timeRemaining: '24 days',
    },
};
