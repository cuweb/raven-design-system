import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './Dialog';
import { Button } from '../Button/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Feedback/Dialog',
  component: Dialog,
  tags: ['!autodocs'],
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const DialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button title="Delete item" onClick={() => setIsOpen(true)} />
      <Dialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Delete this item?"
        description="This action cannot be undone."
      >
        <Button title="Delete" onClick={() => setIsOpen(false)} isSmall />
      </Dialog>
    </>
  );
};

const TitleOnlyDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button title="Show notice" onClick={() => setIsOpen(true)} />
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} title="Your changes have been saved." />
    </>
  );
};

export const Default: Story = {
  render: () => <DialogDemo />,
};

export const TitleOnly: Story = {
  render: () => <TitleOnlyDemo />,
};
