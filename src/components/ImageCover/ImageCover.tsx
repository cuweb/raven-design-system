import React from 'react';
import './styles.scss';

const BG_IMAGE_BASE_URL = 'https://cdn.carleton.ca/rds/assets/bg-images';

export interface ImageCoverProps {
  children?: React.ReactNode;
  maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
  contentWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
  image?: string;
  opacity?: number;
}

export const ImageCover = ({
  children,
  maxWidth = 'alignfull',
  contentWidth = 'alignfull',
  image,
  opacity = 90,
}: ImageCoverProps) => {
  const imageUrl = image ? `${BG_IMAGE_BASE_URL}/${image}.jpg` : undefined;

  const rootClasses = [
    'cu-layout cu-imagecover',
    imageUrl && 'cu-imagecover--image',
    'has-global-padding',
    maxWidth,
    'is-layout-constrained',
  ]
    .filter(Boolean)
    .join(' ');

  const bgImageStyles = {
    ...(imageUrl && { '--cu-imagecover-bg': `url(${imageUrl})` }),
    '--cu-imagecover-overlay': `rgba(255, 255, 255, ${opacity / 100})`,
  } as React.CSSProperties;

  return (
    <section className={rootClasses} style={bgImageStyles}>
      <div className={`has-global-padding ${contentWidth}`}>{children}</div>
      <div className="cu-imagecover__wave alignfull" />
    </section>
  );
};
