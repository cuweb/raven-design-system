import * as react from 'react';

interface TestimonialProps {
    quote: string;
    cite?: string;
    imageUrl: string;
    imageZoom?: number;
    focalPointX?: number;
    focalPointY?: number;
    reverse?: boolean;
}
declare const Testimonial: ({ quote, cite, imageUrl, imageZoom, focalPointX, focalPointY, reverse, }: TestimonialProps) => react.JSX.Element;

export { Testimonial };
export type { TestimonialProps };
