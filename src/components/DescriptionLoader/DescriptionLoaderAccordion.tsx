export interface DescriptionLoaderAccordionProps {
    rows?: number;
}

export const DescriptionLoaderAccordion = ({ rows = 1 }: DescriptionLoaderAccordionProps) => {
    return (
        <div className="cu-loader__description-accordion">
            {Array.from({ length: rows }, (_, rowIndex) => (
                <span key={rowIndex} className="cu-loader__description-row" aria-hidden="true" />
            ))}
        </div>
    );
};

DescriptionLoaderAccordion.displayName = 'DescriptionLoader.Accordion';
