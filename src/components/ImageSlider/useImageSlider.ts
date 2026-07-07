import { useCallback, useEffect, useRef, useState } from 'react';

interface UseImageSliderOptions {
  slidesPerViewDesktop: number;
  slidesPerViewTablet: number;
  slidesPerViewMobile: number;
}

export const useImageSlider = (
  containerRef: React.RefObject<HTMLElement | null>,
  trackRef: React.RefObject<HTMLElement | null>,
  { slidesPerViewDesktop, slidesPerViewTablet, slidesPerViewMobile }: UseImageSliderOptions,
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(slidesPerViewDesktop);
  const [totalSlides, setTotalSlides] = useState(0);
  const slideWidthRef = useRef(0);
  const stepWidthRef = useRef(0);

  const computeSlidesPerView = useCallback(() => {
    const width = containerRef.current?.offsetWidth ?? window.innerWidth;
    if (width < 768) return slidesPerViewMobile;
    if (width < 1024) return slidesPerViewTablet;
    return slidesPerViewDesktop;
  }, [slidesPerViewDesktop, slidesPerViewTablet, slidesPerViewMobile, containerRef]);

  const adjust = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const perView = computeSlidesPerView();
    const gapPx = parseFloat(getComputedStyle(track).columnGap) || 0;
    const sw = (container.offsetWidth - (perView - 1) * gapPx) / perView;
    slideWidthRef.current = sw;
    stepWidthRef.current = sw + gapPx;

    const slides = track.querySelectorAll<HTMLElement>('.cu-slider__slide');
    slides.forEach((slide) => {
      slide.style.flex = `0 0 ${sw}px`;
      slide.style.maxWidth = `${sw}px`;
    });

    const total = slides.length;
    setSlidesPerView(perView);
    setTotalSlides(total);
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, total - perView)));
  }, [containerRef, trackRef, computeSlidesPerView]);

  // Apply transform whenever index changes
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translateX(-${currentIndex * stepWidthRef.current}px)`;
  }, [currentIndex, trackRef]);

  useEffect(() => {
    adjust();
    const observer = new ResizeObserver(adjust);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [adjust, containerRef]);

  const maxIndex = Math.max(0, totalSlides - slidesPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, Math.max(0, totalSlides - slidesPerView)));
  }, [totalSlides, slidesPerView]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  return {
    nextSlide,
    prevSlide,
    isPrevDisabled: currentIndex === 0,
    isNextDisabled: currentIndex >= maxIndex,
  };
};
