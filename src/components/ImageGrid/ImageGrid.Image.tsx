/* eslint-disable react-hooks/static-components -- LinkComponent is injected via context, stable across renders */
import { useLinkContext } from '../LinkProvider/useLinkContext';

type ColSpanType = '1' | '2' | '3' | '4';
type RowSpanType = '1' | '2' | '3' | '4';
type AspectRatioType = 'landscape' | 'portrait' | 'square' | 'wide';

export interface ImageGridImageProps {
    imageUrl: string;
    focalPointX?: number;
    focalPointY?: number;
    colSpan?: ColSpanType;
    rowSpan?: RowSpanType;
    aspectRatio?: AspectRatioType;
    title?: string;
    content?: string;
    link?: string;
}

export const ImageGridImage = ({
    imageUrl,
    focalPointX = 50,
    focalPointY = 50,
    colSpan = '1',
    rowSpan = '1',
    aspectRatio = 'landscape',
    title,
    content,
    link,
}: ImageGridImageProps) => {
    const LinkComponent = useLinkContext();

    const itemClasses = [
        'cu-imagegrid__item',
        `cu-imagegrid__item--${aspectRatio}`,
        colSpan !== '1' && `cu-imagegrid__item--col-${colSpan}`,
        rowSpan !== '1' && `cu-imagegrid__item--row-${rowSpan}`,
    ]
        .filter(Boolean)
        .join(' ');

    const inlineStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `${focalPointX}% ${focalPointY}%`,
    };

    const hasOverlay = title || content;

    return (
        <div
            className={itemClasses}
            style={inlineStyle}
            aria-hidden={hasOverlay ? undefined : 'true'}
        >
            {hasOverlay && (
                <div
                    className={`cu-imagegrid__overlay${link ? ' cu-imagegrid__overlay--linked' : ''}`}
                >
                    {link ? (
                        <LinkComponent href={link} className="cu-imagegrid__overlay-link">
                            {title && <p className="cu-imagegrid__overlay-title">{title}</p>}
                            {content && <p className="cu-imagegrid__overlay-content">{content}</p>}
                        </LinkComponent>
                    ) : (
                        <>
                            {title && <p className="cu-imagegrid__overlay-title">{title}</p>}
                            {content && <p className="cu-imagegrid__overlay-content">{content}</p>}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

ImageGridImage.displayName = 'ImageGrid.Image';
