import React from 'react';
import { useScrollReveal } from '../../utils/motion/useScrollReveal';
import { ListingBody } from './ListingBody';
import { ListingContent } from './ListingContent';
import { ListingDateThumb } from './ListingDateThumb';
import { ListingEventMeta } from './ListingEventMeta';
import { ListingExcerpt } from './ListingExcerpt';
import { ListingFigure } from './ListingFigure';
import { ListingFooter } from './ListingFooter';
import { ListingHeader } from './ListingHeader';
import { ListingIconThumb } from './ListingIconThumb';
import { ListingInitials } from './ListingInitials';
import { ListingPeopleMeta } from './ListingPeopleMeta';
import './styles.scss';

export interface ListingProps {
    children: React.ReactNode;
    noHover?: boolean;
    revealOnScroll?: boolean;
}

export const ListingWrapper = ({ children, noHover, revealOnScroll = true }: ListingProps) => {
    const { ref, isVisible } = useScrollReveal<HTMLLIElement>({ disabled: !revealOnScroll });

    const className = ['cu-listing', noHover && 'cu-listing--no-hover'].filter(Boolean).join(' ');

    return (
        <li
            ref={ref}
            className={className}
            data-cu-reveal={revealOnScroll ? '' : undefined}
            data-revealed={isVisible ? 'true' : 'false'}
        >
            {children}
        </li>
    );
};

export const Listing = Object.assign(ListingWrapper, {
    Figure: ListingFigure,
    DateThumb: ListingDateThumb,
    IconThumb: ListingIconThumb,
    Initials: ListingInitials,
    Header: ListingHeader,
    Body: ListingBody,
    Content: ListingContent,
    Excerpt: ListingExcerpt,
    EventMeta: ListingEventMeta,
    PeopleMeta: ListingPeopleMeta,
    Footer: ListingFooter,
});

ListingWrapper.displayName = 'Listing';
