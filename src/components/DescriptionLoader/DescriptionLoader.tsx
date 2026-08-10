import { DescriptionLoaderAccordion } from './DescriptionLoaderAccordion';
import { DescriptionLoaderMeta } from './DescriptionLoaderMeta';
import './styles.scss';

export interface DescriptionLoaderProps extends React.HTMLAttributes<HTMLDListElement> {
    children: React.ReactNode;
}

export const DescriptionLoaderWrapper = ({ children, ...rest }: DescriptionLoaderProps) => {
    return (
        <div
            className="cu-loader cu-loader--description"
            role="status"
            aria-label="Loading content"
        >
            <dl className="cu-loader__description-list" {...rest}>
                {children}
            </dl>
        </div>
    );
};

export const DescriptionLoader = Object.assign(DescriptionLoaderWrapper, {
    Accordion: DescriptionLoaderAccordion,
    Meta: DescriptionLoaderMeta,
});

DescriptionLoaderWrapper.displayName = 'DescriptionLoader';
