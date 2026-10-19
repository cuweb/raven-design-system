import { useForm, useWatch, type Control } from 'react-hook-form';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { Form } from './Form';
import { Button } from '../Button/Button';

interface ContactValues {
    name: string;
    email: string;
    contactMethod: string;
}

const meta: Meta<typeof Form> = {
    title: 'Components/Forms/Form',
    component: Form,
    tags: ['!autodocs'],
    parameters: {
        controls: { sort: 'requiredFirst' },
    },
};

export default meta;
type Story = StoryObj<typeof Form>;

const ContactFormExample = ({
    onSubmit = fn(),
}: {
    onSubmit?: (values: ContactValues) => void;
}) => {
    const methods = useForm<ContactValues>({
        defaultValues: {
            name: '',
            email: '',
            contactMethod: '',
        },
    });

    return (
        <Form methods={methods} onSubmit={onSubmit}>
            <Form.Group cols={2}>
                <Form.Field
                    name="name"
                    label="Name"
                    required
                    helper="Enter your full name"
                    rules={{ required: 'Name is required' }}
                />
                <Form.Field
                    name="email"
                    label="Email"
                    type="email"
                    required
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Enter a valid email address',
                        },
                    }}
                />
            </Form.Group>
            <Form.Field
                control="radio"
                name="contactMethod"
                label="Preferred contact method"
                isInline
                required
                options={[
                    { value: 'email', label: 'Email' },
                    { value: 'phone', label: 'Phone' },
                ]}
                rules={{ required: 'Select a contact method' }}
            />
            <Button
                type="submit"
                title={methods.formState.isSubmitting ? 'Submitting...' : 'Submit'}
            />
        </Form>
    );
};

export const BasicForm: Story = {
    render: () => <ContactFormExample />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
        await expect(canvas.getByText('Name is required')).toBeInTheDocument();
    },
};

interface ConditionalValues {
    action: string;
    comment: string;
    lastWorkDate: string;
}

const ConditionalDateField = ({ control }: { control: Control<ConditionalValues> }) => {
    const action = useWatch({ control, name: 'action' });
    if (action !== 'TM') return null;

    return (
        <Form.Field
            name="lastWorkDate"
            label="Last work date"
            type="date"
            required
            rules={{ required: 'Enter the last work date' }}
        />
    );
};

const ConditionalFormExample = () => {
    const methods = useForm<ConditionalValues>();

    return (
        <Form methods={methods} onSubmit={fn()}>
            <Form.Field
                control="radio"
                name="action"
                label="Action"
                options={[
                    { value: 'AP', label: 'Approve' },
                    { value: 'TM', label: 'Terminate' },
                ]}
            />
            <ConditionalDateField control={methods.control} />
            <Form.Field control="textarea" name="comment" label="Comment" rows={4} />
            <Button type="submit" title="Submit action" />
        </Form>
    );
};

export const ConditionalFields: Story = {
    render: () => <ConditionalFormExample />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByLabelText('Terminate'));
        await expect(canvas.getByLabelText(/Last work date/)).toBeInTheDocument();
    },
};

interface FieldExamplesValues {
    name: string;
    email: string;
    startDate: string;
    department: string;
    biography: string;
    contactMethod: string;
    interests: string[];
    updates: boolean;
}

const FieldExamples = () => {
    const methods = useForm<FieldExamplesValues>({
        defaultValues: {
            name: '',
            email: '',
            startDate: '',
            department: '',
            biography: '',
            contactMethod: '',
            interests: [],
            updates: false,
        },
    });

    return (
        <Form methods={methods} onSubmit={fn()}>
            <Form.Group cols={2}>
                <Form.Field name="name" label="Name" placeholder="Your name" />
                <Form.Field name="email" label="Email" type="email" autoComplete="email" />
                <Form.Field name="startDate" label="Start date" type="date" />
                <Form.Field
                    control="select"
                    name="department"
                    label="Department"
                    placeholder="Choose a department"
                    options={[
                        { value: 'arts', label: 'Arts and Social Sciences' },
                        { value: 'science', label: 'Science' },
                        { value: 'business', label: 'Business' },
                    ]}
                />
            </Form.Group>
            <Form.Field
                control="textarea"
                name="biography"
                label="Short biography"
                rows={4}
                maxLength={300}
                helper="Share a few details about yourself."
            />
            <Form.Field
                control="radio"
                name="contactMethod"
                label="Preferred contact method"
                isInline
                options={[
                    { value: 'email', label: 'Email' },
                    { value: 'phone', label: 'Phone' },
                ]}
            />
            <Form.Field
                control="checkbox"
                name="interests"
                label="Areas of interest"
                options={[
                    { value: 'research', label: 'Research' },
                    { value: 'events', label: 'Events' },
                    { value: 'news', label: 'News' },
                ]}
            />
            <Form.Field control="checkbox" name="updates" label="Send me occasional updates" />
            <Button type="submit" title="Save preferences" />
        </Form>
    );
};

export const FieldTypes: Story = {
    render: () => <FieldExamples />,
};

interface LayoutValues {
    field1: string;
    field2: string;
    field3: string;
    field4: string;
}

const GroupLayoutExample = () => {
    const methods = useForm<LayoutValues>();

    return (
        <Form methods={methods} onSubmit={fn()}>
            <Form.Group>
                <Form.Field name="field1" label="One column" />
            </Form.Group>
            <Form.Group cols={2}>
                <Form.Field name="field2" label="Two columns, first field" />
                <Form.Field name="field3" label="Two columns, second field" />
            </Form.Group>
            <Form.Group cols={3}>
                <Form.Field name="field1" label="Three columns, first field" />
                <Form.Field name="field2" label="Three columns, second field" />
                <Form.Field name="field3" label="Three columns, third field" />
            </Form.Group>
            <Form.Group cols={4}>
                <Form.Field name="field1" label="Four columns, first field" />
                <Form.Field name="field2" label="Four columns, second field" />
                <Form.Field name="field3" label="Four columns, third field" />
                <Form.Field name="field4" label="Four columns, fourth field" />
            </Form.Group>
        </Form>
    );
};

export const GroupLayouts: Story = {
    render: () => <GroupLayoutExample />,
};

interface FieldStatesValues {
    required: string;
    invalid: string;
    disabled: string;
    loading: string;
    hiddenLabel: string;
}

const FieldStatesExample = () => {
    const methods = useForm<FieldStatesValues>();

    return (
        <Form methods={methods} onSubmit={fn()}>
            <Form.Field
                name="required"
                label="Required field"
                required
                helper="This field demonstrates required validation."
                rules={{ required: 'This field is required' }}
            />
            <Form.Field
                name="invalid"
                label="Field with an error"
                isError="This value could not be saved."
            />
            <Form.Field name="disabled" label="Disabled field" disabled />
            <Form.Field name="loading" label="Loading field" isLoading />
            <Form.Field name="hiddenLabel" label="Search" hiddenLabel placeholder="Search" />
            <Button type="submit" title="Validate fields" />
        </Form>
    );
};

export const FieldStates: Story = {
    render: () => <FieldStatesExample />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button', { name: 'Validate fields' }));
        await expect(canvas.getByText('This field is required')).toBeInTheDocument();
        await expect(canvas.getByText('This value could not be saved.')).toBeInTheDocument();
    },
};
