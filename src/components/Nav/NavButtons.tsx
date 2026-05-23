import { useLinkContext } from '../LinkProvider/useLinkContext';
import { Icon } from '../Icon/Icon';

export interface NavButton {
  title: string;
  href: string;
}

export interface NavButtonsProps {
  buttons?: NavButton[];
  isSearch?: boolean;
  onClickSearch?: () => void;
}

export const NavButtons = ({ buttons, isSearch, onClickSearch }: NavButtonsProps) => {
  const LinkComponent = useLinkContext();

  if (!isSearch && !buttons?.length) return null;

  return (
    <div className="cu-nav__buttons">
      {isSearch && (
        <button className="cu-nav__search-btn" onClick={onClickSearch} aria-label="Search">
          <Icon name="magnifying-glass" size={20} aria-hidden="true" />
        </button>
      )}
      {buttons?.map((btn) => (
        <LinkComponent key={btn.title} href={btn.href} className="cu-nav__cta-link">
          {btn.title}
        </LinkComponent>
      ))}
    </div>
  );
};

NavButtons.displayName = 'Nav.Buttons';
