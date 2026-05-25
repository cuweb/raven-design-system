import type { Meta, StoryObj } from '@storybook/react-vite';
import { SocialIcons } from './SocialIcons';

const meta: Meta<typeof SocialIcons> = {
  title: 'Components/Elements/Social Icons',
  component: SocialIcons,
  tags: ['!autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SocialIcons>;

export const Default: Story = {
  render: (args) => (
    <SocialIcons {...args}>
      <SocialIcons.Item icon="linkedin" href="#" label="Connect on LinkedIn" />
      <SocialIcons.Item icon="facebook" href="#" label="View on Facebook" />
      <SocialIcons.Item icon="bluesky" href="#" label="Follow on Bluesky" />
      <SocialIcons.Item icon="x-twitter" href="#" label="Follow on X" />
      <SocialIcons.Item icon="instagram" href="#" label="Follow on Instagram" />
      <SocialIcons.Item icon="youtube" href="#" label="Watch on YouTube" />
      <SocialIcons.Item icon="orcid" href="#" label="View on ORCID" />
    </SocialIcons>
  ),
};

export const WithPrefix: Story = {
  render: (args) => (
    <SocialIcons {...args} prefix="Follow us:">
      <SocialIcons.Item icon="linkedin" href="#" label="Connect on LinkedIn" />
      <SocialIcons.Item icon="x-twitter" href="#" label="Follow on X" />
      <SocialIcons.Item icon="instagram" href="#" label="Follow on Instagram" />
    </SocialIcons>
  ),
};
