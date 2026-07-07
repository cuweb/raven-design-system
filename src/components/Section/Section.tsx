import './styles.scss';

export interface SectionProps {
  children?: React.ReactNode;
  as?: 'section' | 'div';
  bgType?: 'grey' | 'black' | 'light-gradient';
  maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
  contentWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
  isHero?: boolean;
}

export const Section = ({
  children,
  as = 'section',
  bgType,
  maxWidth = 'aligncontent',
  contentWidth = 'aligncontent',
  isHero,
}: SectionProps) => {
  const SectionWrapper = as;

  const rootClasses = [
    'cu-layout cu-section',
    isHero && 'cu-section--hero',
    bgType && `cu-section--${bgType}`,
    bgType && 'has-global-padding',
    maxWidth,
    'is-layout-constrained',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <SectionWrapper
      className={rootClasses}
      data-color-scheme={bgType === 'black' ? 'dark' : undefined}
    >
      <div className={`has-global-padding ${contentWidth}`}>{children}</div>
    </SectionWrapper>
  );
};
