import type { Meta, StoryObj } from '@storybook/react-vite';
import { CookieBanner } from './CookieBanner';

const meta: Meta<typeof CookieBanner> = {
    title: 'Components/Utilities/CookieBanner',
    component: CookieBanner,
    tags: ['!autodocs'],
    parameters: {
        layout: 'fullscreen',
        controls: {
            sort: 'requiredFirst',
        },
    },
};
export default meta;
type Story = StoryObj<typeof CookieBanner>;

export const Default: Story = {
    args: {
        cookieName: 'storybook-preview-consent',
    },
    render: (args) => <CookieBanner {...args} />,
};

export const CustomText: Story = {
    args: {
        cookieName: 'storybook-preview-consent-custom',
        message: 'We use cookies to improve your experience. Learn more about',
        policyHref: '/privacy',
        policyLabel: 'our privacy policy.',
        buttonLabel: 'Accept',
    },
    render: (args) => <CookieBanner {...args} />,
};
