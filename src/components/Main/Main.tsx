import React from 'react';
import './styles.scss';

export interface MainProps {
  children: React.ReactNode;
  hasPadding?: boolean;
}

export const Main = ({ children, hasPadding = true }: MainProps) => {
  return (
    <main className={`${hasPadding ? 'cu-main cu-main--padding' : 'cu-main'}`}>
      <div className="alignfull has-global-padding is-layout-constrained entry-content">{children}</div>
    </main>
  );
};
