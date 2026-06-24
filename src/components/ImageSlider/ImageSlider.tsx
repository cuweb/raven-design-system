import { useRef } from 'react';
import { Icon } from '../Icon/Icon';
import { ImageSliderItem } from './ImageSlider.Item';
import { useImageSlider } from './useImageSlider';
import './styles.scss';

const SLIDES_PER_VIEW = {
  aligncontent: { desktop: 2, tablet: 2, mobile: 1 },
  alignwide:    { desktop: 3, tablet: 2, mobile: 1 },
  alignfull:    { desktop: 4, tablet: 2, mobile: 1 },
} as const;

export interface ImageSliderProps {
  children: React.ReactNode;
  maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
}

export const ImageSliderWrapper = ({
  children,
  maxWidth = 'aligncontent',
}: ImageSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { desktop, tablet, mobile } = SLIDES_PER_VIEW[maxWidth];

  const { nextSlide, prevSlide, isPrevDisabled, isNextDisabled } = useImageSlider(containerRef, trackRef, {
    slidesPerViewDesktop: desktop,
    slidesPerViewTablet: tablet,
    slidesPerViewMobile: mobile,
  });

  const rootClasses = ['cu-slider', maxWidth].filter(Boolean).join(' ');

  return (
    <div className={rootClasses} ref={containerRef}>
      <div className="cu-slider__track" ref={trackRef}>
        {children}
      </div>

      <div className="cu-slider__controls">
        <button className="cu-slider__arrow cu-slider__arrow--prev" onClick={prevSlide} disabled={isPrevDisabled} type="button">
          <span className="sr-only">Go to Previous Slide</span>
          <Icon name="chevron-left" size={20} aria-hidden="true" />
        </button>

        <button className="cu-slider__arrow cu-slider__arrow--next" onClick={nextSlide} disabled={isNextDisabled} type="button">
          <span className="sr-only">Go to Next Slide</span>
          <Icon name="chevron-right" size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export const ImageSlider = Object.assign(ImageSliderWrapper, {
  Item: ImageSliderItem,
});

ImageSliderWrapper.displayName = 'ImageSlider';
