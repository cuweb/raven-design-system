import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { SingleParagraph } from '../../data/storyContent';

const meta: Meta<typeof Modal> = {
    title: 'Components/Feedback/Modal',
    component: Modal,
    tags: ['!autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl', 'full'],
        },
    },
    parameters: {
        controls: { sort: 'requiredFirst' },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDemo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button title="Open modal" onClick={() => setIsOpen(true)} />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} ariaLabel="Example modal">
                <h2>Modal title</h2>
                <SingleParagraph />
            </Modal>
        </>
    );
};

const SizeDemo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button title="Open large modal" onClick={() => setIsOpen(true)} />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} ariaLabel="Large modal" size="lg">
                <h2>Large modal</h2>
                <SingleParagraph />
            </Modal>
        </>
    );
};

const NonDismissibleDemo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button title="Open modal" onClick={() => setIsOpen(true)} />
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                ariaLabel="Non-dismissible modal"
                preventOutsideClick
            >
                <h2>Non-dismissible modal</h2>
                <p>
                    This modal only closes via its close button — Esc and backdrop clicks are
                    disabled.
                </p>
                <Button title="Close" onClick={() => setIsOpen(false)} />
            </Modal>
        </>
    );
};

export const Default: Story = {
    render: () => <ModalDemo />,
};

export const LargeSize: Story = {
    render: () => <SizeDemo />,
};

export const NonDismissible: Story = {
    render: () => <NonDismissibleDemo />,
};
