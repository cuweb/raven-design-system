import { TimelineItem } from './TimelineItem';
import './styles.scss';

export interface TimelineProps {
  children: React.ReactNode;
}

export const TimelineWrapper = ({ children }: TimelineProps) => (
  <div className="cu-timeline">{children}</div>
);

export const Timeline = Object.assign(TimelineWrapper, {
  Item: TimelineItem,
});

TimelineWrapper.displayName = 'Timeline';
