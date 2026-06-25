import type { Meta, StoryObj } from '@storybook/react-vite';
import { Login } from './Login';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';

const meta: Meta<typeof Login> = {
  title: 'Components/Utilities/Login',
  component: Login,
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <Main>
        <Section>
          <Story />
        </Section>
      </Main>
    ),
  ],
  argTypes: {
    align: {
      control: 'inline-radio',
      options: ['start', 'center', 'end'],
    },
    useSocial: {
      control: 'boolean',
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
type Story = StoryObj<typeof Login>;

export const Default: Story = {
  args: {
    align: 'center',
    useSocial: false,
  },
};

export const SocialLogins: Story = {
  args: {
    useSocial: true,
    onClickHandler: {
      default: () => {},
      google: () => {},
      linkedIn: () => {},
      twitter: () => {},
    },
  },
};

export const WithErrorTitle: Story = {
  args: {
    errorTitle: 'Error: Please Contact Site Administrator',
  },
};

export const WithErrorDescription: Story = {
  args: {
    errorTitle: 'Login Error',
    errorDesc: 'Please ensure you are connected to the VPN and try again.',
  },
};
