import { useState, useEffect } from 'react';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isBefore,
    isSameDay,
    isSameMonth,
    isToday,
    isWithinInterval,
    parse,
    parseISO,
    startOfToday,
} from 'date-fns';
import './styles.scss';

export interface CalendarEvent {
    id: number;
    name: string;
    imageUrl: string;
    startDatetime: string;
    endDatetime: string;
}

export interface CalendarProps {
    mode?: 'single' | 'range';
    events?: CalendarEvent[];
    defaultDate?: string;
    onSelect?: (value: Date | Date[]) => void;
}

const colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
];

export const Calendar = ({ mode = 'single', events, defaultDate, onSelect }: CalendarProps) => {
    const today = startOfToday();

    const [selectedDays, setSelectedDays] = useState<Date[]>(
        defaultDate ? [new Date(defaultDate)] : [],
    );
    const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
    const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

    const days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    });

    const previousMonth = () => {
        setCurrentMonth(format(add(firstDayCurrentMonth, { months: -1 }), 'MMM-yyyy'));
    };

    const nextMonth = () => {
        setCurrentMonth(format(add(firstDayCurrentMonth, { months: 1 }), 'MMM-yyyy'));
    };

    useEffect(() => {
        if (!onSelect) return;
        if (mode === 'single') {
            if (selectedDays[0]) onSelect(selectedDays[0]);
        } else {
            onSelect(selectedDays);
        }
    }, [selectedDays, mode, onSelect]);

    const handleDayClick = (day: Date) => {
        if (mode === 'single') {
            setSelectedDays([day]);
            return;
        }

        const alreadySelected = selectedDays.some((d) => isSameDay(d, day));

        if (alreadySelected) {
            setSelectedDays(selectedDays.filter((d) => !isSameDay(d, day)));
            return;
        }

        if (selectedDays.length >= 2) {
            const anchor = selectedDays[0];
            setSelectedDays(day.getTime() < anchor.getTime() ? [day, anchor] : [anchor, day]);
            return;
        }

        if (selectedDays.length === 0 || selectedDays[0].getTime() < day.getTime()) {
            setSelectedDays([...selectedDays, day]);
        } else {
            setSelectedDays([day, ...selectedDays]);
        }
    };

    const clearSelection = () => setSelectedDays([]);

    const hasSelection = selectedDays.length > 0;

    const getDayClasses = (day: Date): string => {
        const isSelected = selectedDays.some((d) => isSameDay(d, day));
        const isInRange =
            mode === 'range' &&
            selectedDays.length === 2 &&
            day.getTime() >= selectedDays[0].getTime() &&
            day.getTime() <= selectedDays[1].getTime();

        const classes = ['cu-calendar__day-btn'];

        if (isSelected) classes.push('cu-calendar__day-btn--selected');
        if (isInRange && !isSelected) classes.push('cu-calendar__day-btn--in-range');
        if (isToday(day) && !isSelected) classes.push('cu-calendar__day-btn--today');
        if (isBefore(day, today)) classes.push('cu-calendar__day-btn--disabled');
        if (!isSameMonth(day, firstDayCurrentMonth))
            classes.push('cu-calendar__day-btn--outside-month');

        return classes.join(' ');
    };

    const hasEventOnDay = (day: Date): boolean => {
        if (!events) return false;
        return events.some((event) => {
            const start = parseISO(event.startDatetime);
            const end = parseISO(event.endDatetime);
            return (
                isSameDay(start, day) ||
                isSameDay(end, day) ||
                isWithinInterval(day, { start, end })
            );
        });
    };

    const startDayOfWeek = getDay(firstDayCurrentMonth);
    const firstWeekSize = 7 - startDayOfWeek;
    const weeks: Date[][] = [days.slice(0, firstWeekSize)];
    for (let i = firstWeekSize; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
    }

    return (
        <div className="cu-calendar">
            <div className="cu-calendar__header">
                <button
                    type="button"
                    onClick={previousMonth}
                    className="cu-calendar__nav-btn"
                    aria-label="Previous month"
                >
                    <Icon name="chevron-left" size={12} />
                </button>
                <h2 className="cu-calendar__month">{format(firstDayCurrentMonth, 'MMMM yyyy')}</h2>
                <button
                    type="button"
                    onClick={nextMonth}
                    className="cu-calendar__nav-btn"
                    aria-label="Next month"
                >
                    <Icon name="chevron-right" size={12} />
                </button>
            </div>

            <div className="cu-calendar__weekdays" aria-hidden="true">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((label, i) => (
                    <div key={i} className="cu-calendar__weekday">
                        {label}
                    </div>
                ))}
            </div>

            <div
                className="cu-calendar__grid"
                role="grid"
                aria-label={format(firstDayCurrentMonth, 'MMMM yyyy')}
            >
                {weeks.map((week, weekIdx) => (
                    <div key={weekIdx} role="row" className="cu-calendar__row">
                        {week.map((day, dayIdx) => {
                            const colStartClass =
                                weekIdx === 0 && dayIdx === 0 && colStartClasses[startDayOfWeek]
                                    ? ` cu-calendar__day--${colStartClasses[startDayOfWeek]}`
                                    : '';
                            return (
                                <div
                                    key={day.toString()}
                                    className={`cu-calendar__day${colStartClass}`}
                                    role="gridcell"
                                >
                                    <button
                                        type="button"
                                        disabled={isBefore(day, today)}
                                        onClick={() => handleDayClick(day)}
                                        className={getDayClasses(day)}
                                        aria-pressed={selectedDays.some((d) => isSameDay(d, day))}
                                    >
                                        <time dateTime={format(day, 'yyyy-MM-dd')}>
                                            {format(day, 'd')}
                                        </time>
                                    </button>
                                    {hasEventOnDay(day) && (
                                        <div
                                            className="cu-calendar__event-dot"
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            {hasSelection && (
                <div className="cu-calendar__clear">
                    <Button title="Clear selection" isSmall onClick={clearSelection} />
                </div>
            )}
        </div>
    );
};
