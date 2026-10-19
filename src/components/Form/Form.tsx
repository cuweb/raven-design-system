import type { FormHTMLAttributes, HTMLAttributes, HTMLInputTypeAttribute, ReactNode } from 'react';
import { useId } from 'react';
import {
    FormProvider,
    useFormContext,
    useFormState,
    type FieldPath,
    type FieldValues,
    type RegisterOptions,
    type SubmitHandler,
    type UseFormReturn,
} from 'react-hook-form';
import './styles.scss';

export interface FormFieldOption {
    label: string;
    value: string;
}

export interface FormFieldProps {
    name: FieldPath<FieldValues>;
    label: string;
    control?: 'input' | 'textarea' | 'select' | 'radio' | 'checkbox';
    type?: HTMLInputTypeAttribute;
    options?: FormFieldOption[];
    rows?: number;
    required?: boolean;
    hiddenLabel?: boolean;
    helper?: string;
    helperpostop?: boolean;
    displayError?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    isInline?: boolean;
    isError?: string;
    placeholder?: string;
    min?: string | number;
    max?: string | number;
    step?: string | number;
    maxLength?: number;
    autoComplete?: string;
    rules?: RegisterOptions;
}

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
    cols?: 1 | 2 | 3 | 4;
    children: ReactNode;
}

export interface FormProps<
    TFieldValues extends FieldValues,
    TContext = unknown,
    TTransformedValues = TFieldValues,
> extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    methods: UseFormReturn<TFieldValues, TContext, TTransformedValues>;
    onSubmit: SubmitHandler<TTransformedValues>;
    children: ReactNode;
}

const FormField = ({
    name,
    label,
    control = 'input',
    type = 'text',
    options = [],
    rows = 4,
    required = false,
    hiddenLabel = false,
    helper,
    helperpostop = false,
    displayError = true,
    disabled = false,
    isLoading = false,
    isInline = false,
    isError,
    placeholder,
    min,
    max,
    step,
    maxLength,
    autoComplete,
    rules,
}: FormFieldProps) => {
    const generatedId = useId();
    const { register, getFieldState } = useFormContext();
    const fieldState = useFormState({ name, exact: true });
    const errorMessage = isError || getFieldState(name, fieldState).error?.message;
    const fieldId = `cu-form-${generatedId}-${name.replace(/[^a-zA-Z0-9_-]/g, '-')}`;
    const errorId = `${fieldId}-error`;
    const helperId = `${fieldId}-helper`;
    const labelClass = `cu-form__label${hiddenLabel ? ' cu-form__label--hidden' : ''}`;
    const describedBy = [
        helper ? helperId : undefined,
        displayError && errorMessage ? errorId : undefined,
    ]
        .filter(Boolean)
        .join(' ');

    const renderControl = () => {
        if (isLoading) {
            return <div className="cu-form__loading">Loading</div>;
        }

        const controlClass = `cu-form__control${errorMessage ? ' cu-form__control--error' : ''}`;

        if (control === 'textarea') {
            return (
                <textarea
                    id={fieldId}
                    className={controlClass}
                    rows={rows}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    disabled={disabled}
                    aria-invalid={Boolean(errorMessage)}
                    aria-required={required}
                    aria-describedby={describedBy || undefined}
                    {...register(name, rules)}
                />
            );
        }

        if (control === 'select') {
            return (
                <select
                    id={fieldId}
                    className={controlClass}
                    disabled={disabled}
                    aria-invalid={Boolean(errorMessage)}
                    aria-required={required}
                    aria-describedby={describedBy || undefined}
                    {...register(name, rules)}
                >
                    {placeholder && <option value="">{placeholder}</option>}
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            );
        }

        if (control === 'radio' || (control === 'checkbox' && options.length > 0)) {
            const optionType = control === 'radio' ? 'radio' : 'checkbox';

            return (
                <fieldset
                    className="cu-form__option-group"
                    aria-describedby={describedBy || undefined}
                    aria-invalid={Boolean(errorMessage)}
                >
                    <legend className={labelClass}>
                        {label}{' '}
                        {required && (
                            <span className="cu-form__required" aria-hidden="true">
                                *
                            </span>
                        )}
                    </legend>
                    <div
                        className={`cu-form__options${isInline ? ' cu-form__options--inline' : ''}`}
                    >
                        {options.map((option) => (
                            <label key={option.value} className="cu-form__option">
                                <input
                                    type={optionType}
                                    className="cu-form__choice"
                                    value={option.value}
                                    disabled={disabled}
                                    aria-invalid={Boolean(errorMessage)}
                                    aria-required={optionType === 'radio' ? required : undefined}
                                    {...register(name, rules)}
                                />
                                <span>{option.label}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
            );
        }

        if (control === 'checkbox') {
            return (
                <input
                    id={fieldId}
                    className="cu-form__choice"
                    type="checkbox"
                    disabled={disabled}
                    aria-invalid={Boolean(errorMessage)}
                    aria-required={required}
                    aria-describedby={describedBy || undefined}
                    {...register(name, rules)}
                />
            );
        }

        return (
            <input
                id={fieldId}
                className={controlClass}
                type={type}
                min={min}
                max={max}
                step={step}
                maxLength={maxLength}
                autoComplete={autoComplete}
                placeholder={placeholder}
                disabled={disabled}
                aria-invalid={Boolean(errorMessage)}
                aria-required={required}
                aria-describedby={describedBy || undefined}
                {...register(name, rules)}
            />
        );
    };

    const renderHelper = () =>
        helper ? (
            <div id={helperId} className="cu-form__helper">
                {helper}
            </div>
        ) : null;

    return (
        <div className="cu-form__field">
            {control !== 'radio' && !(control === 'checkbox' && options.length > 0) && (
                <label htmlFor={fieldId} className={labelClass}>
                    {label}{' '}
                    {required && (
                        <span className="cu-form__required" aria-hidden="true">
                            *
                        </span>
                    )}
                </label>
            )}
            {helperpostop && renderHelper()}
            {renderControl()}
            {!helperpostop && renderHelper()}
            {displayError && errorMessage && !isLoading && (
                <div id={errorId} className="cu-form__error" role="alert">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

const FormGroup = ({ cols = 1, className, children, ...rest }: FormGroupProps) => (
    <div
        className={`cu-form__group cu-form__group--cols-${cols}${className ? ` ${className}` : ''}`}
        {...rest}
    >
        {children}
    </div>
);

const FormWrapper = <
    TFieldValues extends FieldValues,
    TContext = unknown,
    TTransformedValues = TFieldValues,
>({
    methods,
    onSubmit,
    children,
    className,
    noValidate = true,
    ...rest
}: FormProps<TFieldValues, TContext, TTransformedValues>) => (
    <FormProvider {...methods}>
        <form
            className={`cu-form${className ? ` ${className}` : ''}`}
            onSubmit={methods.handleSubmit(onSubmit)}
            noValidate={noValidate}
            {...rest}
        >
            {children}
        </form>
    </FormProvider>
);

export const Form = Object.assign(FormWrapper, {
    Field: FormField,
    Group: FormGroup,
});

FormWrapper.displayName = 'Form';
