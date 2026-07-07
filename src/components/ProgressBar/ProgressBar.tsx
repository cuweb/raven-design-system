import './styles.scss';

export interface ProgressBarProps {
    value: number;
    max?: number;
    label: string;
}

export const ProgressBar = ({ value, max = 100, label }: ProgressBarProps) => {
    const percentage = max > 0 ? Math.min(Math.round((value / max) * 100), 100) : 0;

    return (
        <div
            className="cu-progressbar"
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
