import { PageHeader } from '../PageHeader/PageHeader';

export type ImageMode = 'stretch' | '16/9' | '4/3' | '3/2' | '2/3' | '1/1';

export interface TextImageContentProps {
  children?: React.ReactNode;
  title?: string;
  headerType?: 'h1' | 'h2';
  preHeader?: string;
  postHeader?: string;
  content?: string;
  metaData?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'primary';
  isCenter?: boolean;
  align?: 'top' | 'center';
  isWhite?: boolean;
  noUnderline?: boolean;
  pronoun?: string;
  imageUrl?: string;
  imageMode?: ImageMode;
  contentWidth?: number;
  imageZoom?: number;
  focalPointX?: number;
  focalPointY?: number;
  showOnMobile?: boolean;
}

export const TextImageContent = ({
  children,
  title,
  headerType = 'h2',
  preHeader,
  postHeader,
  content,
  metaData,
  size,
  isCenter,
  align = 'center',
  isWhite,
  noUnderline,
  pronoun,
  imageUrl,
  imageMode = 'stretch',
  contentWidth = 50,
  imageZoom = 0,
  focalPointX = 50,
  focalPointY = 50,
  showOnMobile,
}: TextImageContentProps) => {
  const defaultSize = size ?? (headerType === 'h1' ? 'primary' : 'lg');
  const isAspect = imageMode !== 'stretch';

  const effectiveAlign = isCenter ? 'center' : align;

  const contentClasses = [
    'cu-textimage__content',
    effectiveAlign === 'top' ? 'cu-textimage__content--top' : undefined,
  ]
    .filter(Boolean)
    .join(' ');

  const mediaWrapClasses = [
    'cu-textimage__media-wrap',
    isAspect ? 'cu-textimage__media-wrap--aspect' : undefined,
    imageUrl && !showOnMobile ? 'cu-textimage__media-wrap--hide-mobile' : undefined,
  ]
    .filter(Boolean)
    .join(' ');

  const contentStyle = imageUrl ? { flex: `0 0 ${contentWidth}%` } : undefined;

  const mediaWrapStyle = isAspect
    ? ({ '--cu-textimage-aspect': imageMode } as React.CSSProperties)
    : undefined;

  const mediaStyle = imageUrl
    ? {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `${focalPointX}% ${focalPointY}%`,
        transform: imageZoom ? `scale(1.${imageZoom})` : undefined,
      }
    : undefined;

  return (
    <>
      <div className={contentClasses} style={contentStyle}>
        {title && (
          <PageHeader
            as={headerType}
            header={title}
            preHeader={preHeader}
            postHeader={postHeader}
            content={content}
            metaData={metaData}
            size={defaultSize}
            isWhite={isWhite}
            noUnderline={noUnderline}
            pronoun={pronoun}
          >
            {children}
          </PageHeader>
        )}
        {!title && children}
      </div>

      {imageUrl && (
        <div className={mediaWrapClasses} style={mediaWrapStyle}>
          <div className="cu-textimage__media" style={mediaStyle} />
        </div>
      )}
    </>
  );
};

TextImageContent.displayName = 'TextImage.Content';
