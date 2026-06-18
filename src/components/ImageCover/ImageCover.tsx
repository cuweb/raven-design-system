import { maxWidthClasses } from '../../utils/propClasses';
import './styles.scss';

type MaxWidthKeys = keyof typeof maxWidthClasses;

export interface ImageCoverProps {
  children?: React.ReactNode;
  image?: string;
  opacity?: number;
  focalPointX?: number;
  focalPointY?: number;
  maxWidth?: MaxWidthKeys;
}

export const ImageCover = ({
  children,
  image,
  opacity = 85,
  focalPointX = 50,
  focalPointY = 50,
  maxWidth = 'aligncontent',
}: ImageCoverProps) => {
  const rootClasses = ['cu-imagecover', maxWidthClasses[maxWidth]].filter(Boolean).join(' ');

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
      <div className="cu-imagecover__content">{children}</div>
    </section>
  );
};
