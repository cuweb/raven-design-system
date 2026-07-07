import { PageHeader } from '../PageHeader/PageHeader';
import { WideImageSignup } from './WideImageSignup';
import { maxWidthClasses } from '../../utils/propClasses';
import './styles.scss';

type maxWidthKeys = keyof typeof maxWidthClasses;

export interface WideImageProps {
    children?: React.ReactNode;
    title: string;
    content?: string;
    image?: string;
    headerType?: 'h1' | 'h2';
    opacity?: number;
    focalPointX?: number;
    focalPointY?: number;
    isType?: 'light' | 'dark' | 'image';
    maxWidth?: maxWidthKeys;
}

const WideImageWrapper = ({
    children,
    title,
    content,
    image,
    headerType = 'h2',
    opacity = 70,
    focalPointX = 50,
    focalPointY = 50,
    isType = 'light',
    maxWidth = 'aligncontent',
}: WideImageProps) => {
    const rootClasses = ['cu-wideimage', `cu-wideimage--${isType}`, maxWidthClasses[maxWidth]]
        .filter(Boolean)
        .join(' ');

    const inlineStyles: React.CSSProperties =
        isType === 'image' && image
            ? {
                  backgroundImage: `url(${image})`,
                  backgroundPosition: `${focalPointX}% ${focalPointY}%`,
                  ['--cu-wideimage-overlay' as string]: `rgba(0, 0, 0, ${opacity / 100})`,
              }
            : {};

    return (
        <div className={rootClasses} style={inlineStyles}>
            <div className="cu-wideimage__content">
                <PageHeader
                    header={title}
                    as={headerType}
                    size={headerType === 'h1' ? 'lg' : 'md'}
                    content={content}
                    isWhite={isType !== 'light'}
                    isCenter
                    noUnderline
                />
                {children}
            </div>
        </div>
    );
};

WideImageWrapper.displayName = 'WideImage';

export const WideImage = Object.assign(WideImageWrapper, {
    Signup: WideImageSignup,
});
