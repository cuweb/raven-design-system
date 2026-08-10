import { eachDayOfInterval, endOfMonth, format, getDay, parse, startOfToday } from 'date-fns';
import { ButtonLoader } from '../ButtonLoader/ButtonLoader';
import './styles.scss';

const colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
];

export interface CalendarLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    showClearButton?: boolean;
}

export const CalendarLoader = ({ showClearButton, ...rest }: CalendarLoaderProps) => {
    const today = startOfToday();
    const currentMonth = format(today, 'MMM-yyyy');
    const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

    const days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    });

    const startDayOfWeek = getDay(firstDayCurrentMonth);
    const firstWeekSize = 7 - startDayOfWeek;
    const weeks: Date[][] = [days.slice(0, firstWeekSize)];
    for (let i = firstWeekSize; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
    }

    return (
        <div
            className="cu-loader cu-loader--calendar"
            role="status"
            aria-label="Loading calendar"
            {...rest}
        >
            <div className="cu-loader__calendar-header">
                <span className="cu-loader__calendar-nav-btn" aria-hidden="true" />
                <span className="cu-loader__calendar-month" aria-hidden="true" />
                <span className="cu-loader__calendar-nav-btn" aria-hidden="true" />
            </div>

            <div className="cu-loader__calendar-weekdays" aria-hidden="true">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((label, i) => (
                    <div key={i} className="cu-loader__calendar-weekday">
                        {label}
                    </div>
                ))}
            </div>

            <div className="cu-loader__calendar-grid" aria-hidden="true">
                {weeks.map((week, weekIdx) => (
                    <div key={weekIdx} className="cu-loader__calendar-row">
                        {week.map((day, dayIdx) => {
                            const colStartClass =
                                weekIdx === 0 && dayIdx === 0 && colStartClasses[startDayOfWeek]
                                    ? ` cu-loader__calendar-day--${colStartClasses[startDayOfWeek]}`
                                    : '';
                            return (
                                <div
                                    key={day.toString()}
                                    className={`cu-loader__calendar-day${colStartClass}`}
                                >
                                    <span className="cu-loader__calendar-day-btn" />
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            {showClearButton && (
                <div className="cu-loader__calendar-clear">
                    <ButtonLoader count={1} isSmall />
                </div>
            )}
        </div>
    );
};
