import React from 'react';
import './styles.scss';

export interface PageHeaderProps {
  children?: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  preHeader?: string;
  postHeader?: string;
  header: string;
  content?: string;
  metaData?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'primary';
  isWhite?: boolean;
  isCenter?: boolean;
  noUnderline?: boolean;
  pronoun?: string;
}

export const PageHeader = ({
  children,
  as: As = 'h1',
  preHeader,
  header,
  postHeader,
  content,
  metaData,
  size = 'lg',
  isWhite = false,
  isCenter = false,
  noUnderline = false,
  pronoun,
}: PageHeaderProps) => {
  const truncatedContent =
    content && content.length > 320 ? `${content.substring(0, 320)}...` : content;

  const rootClasses = [
    'cu-pageheader',
    `cu-pageheader--${size}`,
    isWhite ? 'cu-pageheader--white' : '',
    isCenter ? 'cu-pageheader--center' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const headingClasses = [
    'cu-pageheader__heading',
    !noUnderline ? 'cu-pageheader__heading--underline' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={rootClasses}>
      <As className={headingClasses}>
        {preHeader && <span className="cu-pageheader__pre">{preHeader}</span>}
        {header}
        {pronoun && <span className="cu-pageheader__pronoun">({pronoun})</span>}
        {postHeader && <span className="cu-pageheader__post">{postHeader}</span>}
      </As>
      {metaData && <div className="cu-pageheader__meta">{metaData}</div>}
      {truncatedContent && <p className="cu-pageheader__content">{truncatedContent}</p>}
      {children}
    </header>
  );
};