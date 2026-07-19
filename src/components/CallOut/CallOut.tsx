import React from 'react';
import { PageHeader } from '../PageHeader/PageHeader';
import { justifyClasses, maxWidthClasses } from '../../utils/propClasses';
import './styles.scss';

type JustifyKeys = keyof typeof justifyClasses;
type MaxWidthKeys = keyof typeof maxWidthClasses;

export interface CallOutProps {
    children?: React.ReactNode;
    title: string;
    as?: 'h2' | 'h3';
    justify?: JustifyKeys;
    maxWidth?: MaxWidthKeys;
}

export const CallOut = ({
    children,
    title,
    as = 'h2',
    justify = 'center',
    maxWidth = 'aligncontent',
}: CallOutProps) => {
    const rootClasses = [
        'cu-callout',
        `cu-callout--${justify}`,
        maxWidth ? maxWidthClasses[maxWidth] : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={rootClasses}>
            <PageHeader
                as={as}
                header={title}
                size="lg"
                isCenter={justify === 'center'}
                noUnderline={false}
            />
            {children}
        </div>
    );
};
