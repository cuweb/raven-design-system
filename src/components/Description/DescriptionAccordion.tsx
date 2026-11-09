import { Icon } from '../Icon/Icon';

export interface DescriptionAccordionProps {
    term: string;
    children: React.ReactNode;
}

export const DescriptionAccordion = ({ term, children }: DescriptionAccordionProps) => (
    <details className="cu-description__item cu-description__item--accordion">
        <summary className="cu-description__term cu-description__trigger">
            {term}
            <Icon name="chevron-right" size={20} className="cu-description__accordion-icon" />
        </summary>
        <div className="cu-description__content">{children}</div>
    </details>
);

DescriptionAccordion.displayName = 'Description.Accordion';
