import React from 'react';
import './styles.scss';

export interface ImageCoverProps {
  children?: React.ReactNode;
  as?: 'section' | 'div';
  isGrey?: boolean;
  maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
  contentWidth?: boolean;
  image?: string;
  opacity?: number;
}

export const ImageCover = ({
  children,
  as = 'section',
  isGrey,
  maxWidth = 'aligncontent',
  contentWidth,
  image,
  opacity = 85,
}: ImageCoverProps) => {
  const ImageCoverWrapper = as;
  const imagecoverBackground = isGrey ? 'grey has-global-padding' : 'white';

  const rootStyle = {
    ...(image && { '--cu-imagecover-bg': `url(${image})` }),
    '--cu-imagecover-overlay': `rgba(255, 255, 255, ${opacity / 100})`,
  } as React.CSSProperties;

  return (
    <ImageCoverWrapper
      className={`cu-imagecover cu-imagecover--${imagecoverBackground} ${maxWidth} is-layout-constrained`}
      style={rootStyle}
    >
      <div className="cu-imagecover__wave alignfull" aria-hidden="true" />
      <div className="cu-imagecover__overlay alignfull" aria-hidden="true" />
      {contentWidth !== undefined ? (
        <div className={`has-global-padding ${contentWidth ? 'alignwide' : 'aligncontent'}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </ImageCoverWrapper>
  );
};
