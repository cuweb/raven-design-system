import './styles.scss';

export interface QuoteProps {
    children?: React.ReactNode;
    cite?: string;
    graphic?: 'border' | 'quote';
    isCenter?: boolean;
}

export const Quote = ({ children, cite, graphic = 'border', isCenter }: QuoteProps) => {
    const classes = ['cu-quote', `cu-quote--${graphic}`, isCenter ? 'cu-quote--center' : undefined]
        .filter(Boolean)
        .join(' ');

    return (
        <blockquote className={classes}>
            {children}
            {cite && <cite className="cu-quote__cite">{cite}</cite>}
        </blockquote>
    );
};
