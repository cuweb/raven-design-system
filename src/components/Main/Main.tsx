import React from 'react';
import './styles.scss';

export interface MainProps {
  children: React.ReactNode;
  as?: 'main' | 'div';
  hasPadding?: boolean;
  className?: string;
}

export const Main = ({ children, as = 'main', hasPadding = true, className = '' }: MainProps) => {
    const MainWrapper = as;

    return (
        <MainWrapper className={`${hasPadding ? 'cu-main cu-main--padding' : 'cu-main'} ${className}`}>
            <div className="alignfull has-global-padding is-layout-constrained entry-content">{children}</div>
        </MainWrapper>
    );
};
