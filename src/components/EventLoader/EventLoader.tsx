import { Column } from '../Column/Column';
import { StackedList } from '../StackedList/StackedList';
import { Aside } from '../Aside/Aside';
import { ListingLoader } from '../ListingLoader/ListingLoader';
import { PaginationLoader } from '../PaginationLoader/PaginationLoader';
import { CalendarLoader } from '../CalendarLoader/CalendarLoader';
import './styles.scss';

export interface EventLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    pageCount?: number;
    showClearButton?: boolean;
}

export const EventLoader = ({
    pageCount = 5,
    showClearButton = false,
    ...rest
}: EventLoaderProps) => {
    return (
        <div className="cu-loader cu-loader--event" {...rest}>
            <Column cols="2/3">
                <Column.Content>
                    <StackedList cols="2">
                        {Array.from({ length: 6 }, (_, index) => (
                            <ListingLoader key={index} variant="event" />
                        ))}
                    </StackedList>
                    <PaginationLoader pageCount={pageCount} />
                </Column.Content>

                <Aside isSticky topSpace={105}>
                    <CalendarLoader showClearButton={showClearButton} />
                </Aside>
            </Column>
        </div>
    );
};
