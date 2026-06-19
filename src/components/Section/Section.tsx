import React from 'react';
import './styles.scss';

export interface SectionProps {
  children?: React.ReactNode;
  as?: 'section' | 'div';
  isGrey?: boolean;
  maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
  contentWidth?: boolean;
}

export const Section = ({
  children,
  as = 'section',
  isGrey,
  maxWidth = 'aligncontent',
  contentWidth,
}: SectionProps) => {
  const SectionWrapper = as;
  const sectionBackground = isGrey ? 'grey has-global-padding' : 'white';

  return (
    <SectionWrapper
      className={`cu-section cu-section--${sectionBackground} ${maxWidth} is-layout-constrained`}
    >
      {contentWidth !== undefined ? (
        <div className={`has-global-padding ${contentWidth ? 'alignwide' : 'aligncontent'}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </SectionWrapper>
  );
};
