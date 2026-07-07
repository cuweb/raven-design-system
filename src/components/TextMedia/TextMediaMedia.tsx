export interface TextMediaMediaProps {
  children: React.ReactNode;
  align?: 'top' | 'center' | 'bottom';
}

export const TextMediaMedia = ({ children, align = 'top' }: TextMediaMediaProps) => {
  const rootClasses = [
    'cu-textmedia__media',
    align !== 'top' ? `cu-textmedia__media--${align}` : undefined,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={rootClasses}>{children}</div>;
};

TextMediaMedia.displayName = 'TextMedia.Media';
