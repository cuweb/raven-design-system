import { PageHeader } from '../PageHeader/PageHeader';

export interface TextMediaContentProps {
    children?: React.ReactNode;
    title?: string;
    headerType?: 'h1' | 'h2';
    preHeader?: string;
    postHeader?: string;
    content?: string;
    metaData?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'primary';
    isWhite?: boolean;
    noUnderline?: boolean;
    pronoun?: string;
    width?: number;
    align?: 'top' | 'center';
}

export const TextMediaContent = ({
    children,
    title,
    headerType = 'h2',
    preHeader,
    postHeader,
    content,
    metaData,
    size,
    isWhite,
    noUnderline,
    pronoun,
    width,
    align = 'top',
}: TextMediaContentProps) => {
    const defaultSize = size ?? (headerType === 'h1' ? 'primary' : 'lg');

    const rootClasses = [
        'cu-textmedia__content',
        align === 'center' ? 'cu-textmedia__content--center' : undefined,
    ]
        .filter(Boolean)
        .join(' ');

    const style = width ? { flex: `0 0 ${width}%` } : undefined;

    return (
        <div className={rootClasses} style={style}>
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
    );
};

TextMediaContent.displayName = 'TextMedia.Content';
