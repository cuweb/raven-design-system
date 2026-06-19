import React from 'react';
import './styles.scss';

export interface ImageCoverProps {
  children?: React.ReactNode;
  maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
  contentWidth?: boolean;
}

export const ImageCover = ({
  children,
  maxWidth = 'aligncontent',
  contentWidth,
}: ImageCoverProps) => {

  return (
    <section
      className={`cu-imagecover has-global-padding ${maxWidth} is-layout-constrained`}
    >
        <div className={`has-global-padding ${contentWidth ? 'alignwide' : 'aligncontent'}`}>
          {children}
        </div>
    </section>
  );
};
