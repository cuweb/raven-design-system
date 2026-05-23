import './styles.scss';
import { SocialIconsItem } from './SocialIconsItem';

export interface SocialIconsProps {
  children: React.ReactNode;
  prefix?: string;
}

const SocialIconsWrapper = ({ children, prefix }: SocialIconsProps) => {
  return (
    <div className="cu-social">
      {prefix && <p className="cu-social__prefix">{prefix}</p>}
      <ul className="cu-social__list">{children}</ul>
    </div>
  );
};

SocialIconsWrapper.displayName = 'SocialIcons';

export const SocialIcons = Object.assign(SocialIconsWrapper, {
  Item: SocialIconsItem,
});
