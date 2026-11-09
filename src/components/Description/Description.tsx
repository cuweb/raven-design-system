import { DescriptionAccordion } from './DescriptionAccordion';
import { DescriptionMeta } from './DescriptionMeta';
import './styles.scss';

export interface DescriptionProps {
    children: React.ReactNode;
}

export const DescriptionWrapper = ({ children }: DescriptionProps) => {
    return <div className="cu-description">{children}</div>;
};

export const Description = Object.assign(DescriptionWrapper, {
    Accordion: DescriptionAccordion,
    Meta: DescriptionMeta,
});

DescriptionWrapper.displayName = 'Description';
