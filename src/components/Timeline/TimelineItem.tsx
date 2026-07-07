import { PageHeader } from '../PageHeader/PageHeader';

export interface TimelineItemProps {
    title: string;
    as?: 'h2' | 'h3';
    children?: React.ReactNode;
    date: string;
}

export const TimelineItem = ({ title, as = 'h2', children, date }: TimelineItemProps) => (
    <div className="cu-timeline__item">
        <div className="cu-timeline__date">
            <p>{date}</p>
        </div>
        <div className="cu-timeline__content">
            <PageHeader as={as} header={title} size="sm" noUnderline />
            {children}
        </div>
    </div>
);
