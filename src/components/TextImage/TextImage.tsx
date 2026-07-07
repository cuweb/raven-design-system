import { TextImageContent } from './TextImageContent';
import { maxWidthClasses } from '../../utils/propClasses';
import './styles.scss';

type maxWidthKeys = keyof typeof maxWidthClasses;

export type flexRowOptions = 'sm' | 'md' | 'lg';

export interface TextImageProps {
    children: React.ReactNode;
    maxWidth?: maxWidthKeys;
    flexRow?: flexRowOptions;
    flipX?: boolean;
    flipMobile?: boolean;
}

export const TextImageWrapper = ({
    children,
    maxWidth = 'aligncontent',
    flexRow = 'lg',
    flipX,
    flipMobile,
}: TextImageProps) => {
    const rootClasses = [
        'cu-textimage',
        maxWidth,
        `cu-textimage--row-${flexRow}`,
        flipX ? 'cu-textimage--reversed' : undefined,
        flipMobile ? 'cu-textimage--flip-mobile' : undefined,
    ]
        .filter(Boolean)
        .join(' ');

    return <div className={rootClasses}>{children}</div>;
};

export const TextImage = Object.assign(TextImageWrapper, {
    Content: TextImageContent,
});

TextImageWrapper.displayName = 'TextImage';
