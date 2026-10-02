import './styles.scss';

export interface ProgressBarProps {
    value: number;
    max?: number;
    variant?: 'white';
    hasBorder?: boolean;
    label: string;
}

export const ProgressBar = ({ value, max = 100, variant, hasBorder, label }: ProgressBarProps) => {
    const percentage = max > 0 ? Math.min(Math.round((value / max) * 100), 100) : 0;

    return (
        <div
            className={`cu-progressbar${variant ? ` cu-progressbar--${variant}` : ''}${hasBorder ? ' cu-progressbar--has-border' : ''}`}
            role="progressbar"
            aria-label={label}
            aria-valuenow={percentage}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <div className="cu-progressbar__fill" style={{ width: `${percentage}%` }} />
        </div>
    );
};
