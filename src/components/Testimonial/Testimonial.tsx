import { Quote } from '../Quote/Quote';
import { maxWidthClasses } from '../../utils/propClasses';
import './styles.scss';

type MaxWidthKeys = keyof typeof maxWidthClasses;

export interface TestimonialProps {
    quote: string;
    cite?: string;
    imageUrl: string;
    imageZoom?: number;
    focalPointX?: number;
    focalPointY?: number;
    reverse?: boolean;
    maxWidth?: MaxWidthKeys;
}

export const Testimonial = ({
    quote,
    cite,
    imageUrl,
    imageZoom = 0,
    focalPointX = 50,
    focalPointY = 50,
    reverse = false,
    maxWidth = 'aligncontent',
}: TestimonialProps) => {
    const rootClasses = [
        'cu-testimonial',
        maxWidth ? maxWidthClasses[maxWidth] : '',
        reverse ? 'cu-testimonial--reverse' : undefined,
    ]
        .filter(Boolean)
        .join(' ');

    const imageStyles = {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `${focalPointX}% ${focalPointY}%`,
        transform: `scale(${1 + imageZoom * 0.1})`,
    };

    return (
        <div className={rootClasses}>
            <div className="cu-testimonial__image" style={imageStyles} aria-hidden="true" />
            <div className="cu-testimonial__content">
                <Quote cite={cite}>
                    <p>{quote}</p>
                </Quote>
            </div>
        </div>
    );
};
