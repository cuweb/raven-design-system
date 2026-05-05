export interface CardFigureProps {
  children: React.ReactNode;
  isRound?: boolean;
  isSmall?: boolean;
  isSquare?: boolean;
}

export const CardFigure = ({ children, isRound, isSmall, isSquare }: CardFigureProps) => {
    const className = [
    'cu-card__figure',
        isRound && 'cu-card__figure--round',
        isSmall && 'cu-card__figure--small',
        isSquare && 'cu-card__figure--square'
    ].filter(Boolean).join(' ');

    return <figure className={className}>{children}</figure>;
};

CardFigure.displayName = 'Card.Figure';
