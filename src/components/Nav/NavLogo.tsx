import { useLinkContext } from '../LinkProvider/useLinkContext';

const CU_LOGO_FULL =
  'https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg';
const CU_LOGO_SHIELD =
  'https://cdn.carleton.ca/rds/assets/cu-logos/cu-shield-color.svg';

export interface NavLogoProps {
  title?: string;
  link?: string;
}

export const NavLogo = ({ title, link }: NavLogoProps) => {
  const LinkComponent = useLinkContext();

  return (
    <div className="cu-nav__logo">
      <a href="https://carleton.ca" className="cu-nav__logomark">
        <img
          className={`cu-nav__logomark-full${title ? ' cu-nav__logomark-full--sm-hidden' : ''}`}
          src={CU_LOGO_FULL}
          width={148}
          height={40}
          alt="Carleton University"
        />
        {title && (
          <img
            className="cu-nav__logomark-shield"
            src={CU_LOGO_SHIELD}
            width={30}
            height={38}
            alt="Carleton University"
          />
        )}
      </a>
      {title && link && (
        // eslint-disable-next-line react-hooks/static-components -- LinkComponent is injected via context, stable across renders
        <LinkComponent href={link} className="cu-nav__site-title">
          {title}
        </LinkComponent>
      )}
    </div>
  );
};

NavLogo.displayName = 'Nav.Logo';
