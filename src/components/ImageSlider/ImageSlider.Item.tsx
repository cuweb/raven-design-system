/* eslint-disable react-hooks/static-components -- LinkComponent is injected via context, stable across renders */
import { useLinkContext } from '../LinkProvider/useLinkContext';

type AspectRatioType = 'landscape' | 'portrait' | 'square' | 'wide';

export interface ImageSliderItemProps {
  imageUrl: string;
  focalPointX?: number;
  focalPointY?: number;
  aspectRatio?: AspectRatioType;
  title?: string;
  content?: string;
  link?: string;
}

export const ImageSliderItem = ({
  imageUrl,
  focalPointX = 50,
  focalPointY = 50,
  aspectRatio = 'landscape',
  title,
  content,
  link,
}: ImageSliderItemProps) => {
  const LinkComponent = useLinkContext();

  const itemClasses = ['cu-slider__item', `cu-slider__item--${aspectRatio}`].join(' ');

  const inlineStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
  };

  const hasOverlay = title || content;

  return (
    <div className="cu-slider__slide">
      <div
        className={itemClasses}
        style={inlineStyle}
        aria-hidden={hasOverlay ? undefined : 'true'}
      >
        {hasOverlay && (
          <div className={`cu-slider__overlay${link ? ' cu-slider__overlay--linked' : ''}`}>
            {link ? (
              <LinkComponent href={link} className="cu-slider__overlay-link">
                {title && <p className="cu-slider__overlay-title">{title}</p>}
                {content && <p className="cu-slider__overlay-content">{content}</p>}
              </LinkComponent>
            ) : (
              <>
                {title && <p className="cu-slider__overlay-title">{title}</p>}
                {content && <p className="cu-slider__overlay-content">{content}</p>}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

ImageSliderItem.displayName = 'ImageSlider.Item';
