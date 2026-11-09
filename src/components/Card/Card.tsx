import React from 'react';
import { CardBody } from './CardBody';
import { CardContent } from './CardContent';
import { CardDateThumb } from './CardDateThumb';
import { CardExcerpt } from './CardExcerpt';
import { CardEventMeta } from './CardEventMeta';
import { CardFigure } from './CardFigure';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import { CardImageThumb } from './CardImageThumb';
import { CardInitials } from './CardInitials';
import { CardPeopleMeta } from './CardPeopleMeta';
import { CardStats } from './CardStats';
import { CardStatus } from './CardStatus';
import { CardTimeThumb } from './CardTimeThumb';
import { CardVideoFigure } from './CardVideoFigure';
import { useScrollReveal } from '../../utils/motion/useScrollReveal';
import './styles.scss';

export interface CardProps {
    children: React.ReactNode;
    isCenter?: boolean;
    isCenterDesktop?: boolean;
    noHover?: boolean;
    noImage?: boolean;
    leftBorder?: boolean;
    revealOnScroll?: boolean;
    className?: string;
}

export const CardWrapper = ({
    children,
    isCenter,
    isCenterDesktop,
    noHover,
    noImage,
    leftBorder,
    revealOnScroll = true,
    className,
}: CardProps) => {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ disabled: !revealOnScroll });

    const classes = [
        'cu-card',
        isCenter && 'cu-card--center',
        isCenterDesktop && 'cu-card--center-desktop',
        noHover && 'cu-card--no-hover',
        noImage && 'cu-card--no-image',
        leftBorder && 'cu-card--border-left',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div
            ref={ref}
            className={`${classes} ${className || ''}`}
            data-cu-reveal={revealOnScroll ? '' : undefined}
            data-revealed={isVisible ? 'true' : 'false'}
        >
            {children}
        </div>
    );
};

export const Card = Object.assign(CardWrapper, {
    Figure: CardFigure,
    VideoFigure: CardVideoFigure,
    DateThumb: CardDateThumb,
    TimeThumb: CardTimeThumb,
    ImageThumb: CardImageThumb,
    Initials: CardInitials,
    Header: CardHeader,
    Body: CardBody,
    Content: CardContent,
    Footer: CardFooter,
    Excerpt: CardExcerpt,
    EventMeta: CardEventMeta,
    PeopleMeta: CardPeopleMeta,
    Stats: CardStats,
    Status: CardStatus,
});

CardWrapper.displayName = 'Card';
