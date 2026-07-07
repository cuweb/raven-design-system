import { useState } from 'react';
import { Icon } from '../Icon/Icon';

export interface DescriptionAccordionProps {
  term: string;
  children: React.ReactNode;
}

export const DescriptionAccordion = ({ term, children }: DescriptionAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const termId =
    term && typeof term === 'string'
      ? 'accordion-' + term.toLowerCase().replace(/ +/g, '-')
      : undefined;

  return (
    <div className="cu-description__item cu-description__item--accordion">
      <dt className="cu-description__term">
        <button
          type="button"
          className="cu-description__trigger"
          aria-expanded={isOpen}
          aria-controls={termId}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {term}
          <Icon
            name="chevron-right"
            size={20}
            className={[
              'cu-description__accordion-icon',
              isOpen ? 'cu-description__accordion-icon--open' : undefined,
            ]
              .filter(Boolean)
              .join(' ')}
          />
        </button>
      </dt>
      <dd className="cu-description__content" id={termId} hidden={!isOpen}>
        {children}
      </dd>
    </div>
  );
};

DescriptionAccordion.displayName = 'Description.Accordion';
