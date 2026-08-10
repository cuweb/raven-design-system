import { RowLoader } from './RowLoader';
import './styles.scss';

export interface FormLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    noMargin?: boolean;
}

export const FormLoaderWrapper = ({ children, noMargin, ...rest }: FormLoaderProps) => {
    const wrapperClasses = [
        'cu-loader',
        'cu-loader--form',
        noMargin ? 'cu-loader--form-nomargin' : undefined,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={wrapperClasses} role="status" aria-label="Loading content" {...rest}>
            {children}
        </div>
    );
};

export const FormLoader = Object.assign(FormLoaderWrapper, {
    RowLoader,
});

FormLoaderWrapper.displayName = 'FormLoader';
