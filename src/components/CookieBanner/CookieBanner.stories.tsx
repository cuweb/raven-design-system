import type { Meta, StoryObj } from '@storybook/react-vite';
import { CookieBanner } from './CookieBanner';

const meta: Meta<typeof CookieBanner> = {
  title: 'Components/Utilities/CookieBanner',
  component: CookieBanner,
  tags: ['autodocs'],
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
