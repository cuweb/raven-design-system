import { PageHeader } from '../PageHeader/PageHeader';
import { FullBannerVideo } from './FullBannerVideo';
import { maxWidthClasses, justifyClasses } from '../../utils/propClasses';
import './styles.scss';

type MaxWidthKeys = keyof typeof maxWidthClasses;
type JustifyKeys = keyof typeof justifyClasses;

const contentBoxClasses = {
    sm: 'cu-fullbanner__box--sm',
    md: 'cu-fullbanner__box--md',
} as const;

type ContentBoxKeys = keyof typeof contentBoxClasses;

export interface FullBannerProps {
    children?: React.ReactNode;
    title: string;
    content?: string;
    headerType?: 'h1' | 'h2';
    image?: string;
    imageAlt?: string;
    media?: React.ReactNode;
    opacity?: number;
    focalPointX?: number;
    focalPointY?: number;
    maxWidth?: MaxWidthKeys;
    contentBox?: ContentBoxKeys;
    justify?: JustifyKeys;
}

const FullBannerWrapper = ({
    children,
    title,
    content,
    headerType = 'h2',
    image,
    imageAlt = '',
    media,
    opacity = 70,
    focalPointX = 50,
    focalPointY = 50,
    maxWidth = 'alignwide',
    contentBox = 'sm',
    justify = 'start',
}: FullBannerProps) => {
    const rootClasses = ['cu-layout cu-fullbanner', maxWidthClasses[maxWidth]]
        .filter(Boolean)
        .join(' ');

    const overlayStyle = {
        '--cu-fullbanner-overlay': `rgba(0, 0, 0, ${opacity / 100})`,
    } as React.CSSProperties;

    const imgStyle: React.CSSProperties = {
        objectPosition: `${focalPointX}% ${focalPointY}%`,
    };

    const hasMedia = !!(image || media);

    return (
        <div className={rootClasses}>
            {hasMedia && (
                <div className="cu-fullbanner__media">
                    {image && (
                        <img
                            src={image}
                            alt={imageAlt}
                            className="cu-fullbanner__img"
                            style={imgStyle}
                        />
                    )}
                    {media}
                    <div
                        className="cu-fullbanner__overlay"
                        style={overlayStyle}
                        aria-hidden="true"
                    />
                </div>
            )}
            <div className="cu-fullbanner__wrap">
                <div
                    className={`cu-fullbanner__inner cu-fullbanner__inner--${justifyClasses[justify]}`}
                >
                    <div className={`cu-fullbanner__box ${contentBoxClasses[contentBox]}`}>
                        <PageHeader
                            header={title}
                            as={headerType}
                            size="lg"
                            content={content}
                            isWhite
                            noUnderline
                        />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

FullBannerWrapper.displayName = 'FullBanner';

export const FullBanner = Object.assign(FullBannerWrapper, {
    Video: FullBannerVideo,
});
