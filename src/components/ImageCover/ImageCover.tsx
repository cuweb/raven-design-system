import './styles.scss';

export interface ImageCoverProps {
  children?: React.ReactNode;
  image?: string;
  opacity?: number;
  focalPointX?: number;
  focalPointY?: number;
  maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
  contentWidth?: boolean;
}

export const ImageCover = ({
  children,
  image,
  opacity = 85,
  focalPointX = 50,
  focalPointY = 50,
  maxWidth = 'aligncontent',
  contentWidth,
}: ImageCoverProps) => {
  const rootClasses = ['cu-imagecover', maxWidth].filter(Boolean).join(' ');

  const rootStyle = {
    ...(image && { '--cu-imagecover-bg': `url(${image})` }),
    '--cu-imagecover-focal-x': `${focalPointX}%`,
    '--cu-imagecover-focal-y': `${focalPointY}%`,
    '--cu-imagecover-overlay': `rgba(255, 255, 255, ${opacity / 100})`,
  } as React.CSSProperties;

  return (
    <section className={rootClasses} style={rootStyle}>
      <div className="cu-imagecover__wave" aria-hidden="true" />
      <div className="cu-imagecover__overlay" aria-hidden="true" />
      <div className="cu-imagecover__content is-layout-constrained has-global-padding">
        {contentWidth !== undefined ? (
          <div className={`cu-imagecover__inner ${contentWidth ? 'alignwide' : 'aligncontent'}`}>
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </section>
  );
};
