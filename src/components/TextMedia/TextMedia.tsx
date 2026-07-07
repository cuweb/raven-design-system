import { TextMediaContent } from './TextMediaContent';
import { TextMediaMedia } from './TextMediaMedia';
import { maxWidthClasses } from '../../utils/propClasses';
import './styles.scss';

type maxWidthKeys = keyof typeof maxWidthClasses;

export type FlexRowOption = 'sm' | 'md' | 'lg';

export interface TextMediaProps {
    children: React.ReactNode;
    maxWidth?: maxWidthKeys;
    flexRow?: FlexRowOption;
    flipX?: boolean;
    flipMobile?: boolean;
}

export const TextMediaWrapper = ({
    children,
    maxWidth = 'aligncontent',
    flexRow = 'lg',
    flipX,
    flipMobile,
}: TextMediaProps) => {
    const rootClasses = [
        'cu-textmedia',
        maxWidth,
        `cu-textmedia--row-${flexRow}`,
        flipX ? 'cu-textmedia--reversed' : undefined,
        flipMobile ? 'cu-textmedia--flip-mobile' : undefined,
    ]
        .filter(Boolean)
        .join(' ');

    return <div className={rootClasses}>{children}</div>;
};

export const TextMedia = Object.assign(TextMediaWrapper, {
    Content: TextMediaContent,
    Media: TextMediaMedia,
});

TextMediaWrapper.displayName = 'TextMedia';
