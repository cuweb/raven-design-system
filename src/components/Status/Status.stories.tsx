import type { Meta, StoryObj } from '@storybook/react-vite';
import { Status } from './Status';
import { formatHoursStatus } from './hoursStatus';

const meta: Meta<typeof Status> = {
  title: 'Components/Elements/Status',
  component: Status,
  tags: ['!autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['success', 'error', 'warning', 'info'],
    },
  },
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Status>;

// ---------------------------------------------------------------------------
// Base variants — freeform children text, no type registry
// ---------------------------------------------------------------------------

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Open today until 8:00 PM',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Closes in 30 minutes',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Closed until tomorrow',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Reduced hours this week',
  },
};

// ---------------------------------------------------------------------------
// Type registry — labels resolved from statusTypes.json
// ---------------------------------------------------------------------------

export const Hours: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Status type="hours" variant="success" />
      <Status type="hours" variant="warning" />
      <Status type="hours" variant="error" />
    </div>
  ),
};

export const Availability: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Status type="availability" variant="success" />
      <Status type="availability" variant="warning" />
      <Status type="availability" variant="error" />
    </div>
  ),
};

export const System: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Status type="system" variant="success" />
      <Status type="system" variant="warning" />
      <Status type="system" variant="error" />
      <Status type="system" variant="info" />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// formatHoursStatus utility — computes variant + label from open/close times
// ---------------------------------------------------------------------------

export const FormatHoursStatus: Story = {
  render: () => {
    const open = formatHoursStatus('07:00', '20:00', new Date('2024-01-15T14:00:00'));
    const closingSoon = formatHoursStatus('07:00', '20:00', new Date('2024-01-15T19:30:00'));
    const closed = formatHoursStatus('07:00', '20:00', new Date('2024-01-15T21:00:00'));
    const beforeOpen = formatHoursStatus('07:00', '20:00', new Date('2024-01-15T06:00:00'));

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <Status type="hours" variant={open.variant}>{open.label}</Status>
        <Status type="hours" variant={closingSoon.variant}>{closingSoon.label}</Status>
        <Status type="hours" variant={closed.variant}>{closed.label}</Status>
        <Status type="hours" variant={beforeOpen.variant}>{beforeOpen.label}</Status>
      </div>
    );
  },
};
