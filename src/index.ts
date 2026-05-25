// Import base styles so Vite extracts them to dist/style.css
import './styles/main.scss';

// Layouts
export { Article } from './components/Article/Article';
export { Aside } from './components/Aside/Aside';
export { Body } from './components/Body/Body';
export { Column } from './components/Column/Column';
export { Main } from './components/Main/Main';
export { Section } from './components/Section/Section';

// Components
export { CallOut } from './components/CallOut/CallOut';
export type { CallOutProps } from './components/CallOut/CallOut';
export { Avatar } from './components/Avatar/Avatar';
export type { AvatarProps } from './components/Avatar/Avatar';
export { Badge } from './components/Badge/Badge';
export type { BadgeProps } from './components/Badge/Badge';
export { BadgeGroup } from './components/BadgeGroup/BadgeGroup';
export { Button } from './components/Button/Button';
export { ButtonGroup } from './components/ButtonGroup/ButtonGroup';
export { Card } from './components/Card/Card';
export type { CardProps } from './components/Card/Card';
export type { CardVideoFigureProps } from './components/Card/CardVideoFigure';
export type { CardStatusProps } from './components/Card/CardStatus';
export { CookieBanner } from './components/CookieBanner/CookieBanner';
export type { CookieBannerProps } from './components/CookieBanner/CookieBanner';
export { DepartmentBar } from './components/DepartmentBar/DepartmentBar';
export type { DepartmentBarProps } from './components/DepartmentBar/DepartmentBar';
export { Footer } from './components/Footer/Footer';
export type { FooterProps } from './components/Footer/Footer';
export { FooterStandard } from './components/FooterStandard/FooterStandard';
export type { FooterStandardProps } from './components/FooterStandard/FooterStandard';
export type { FooterType } from './data/FooterData';
export { PageHeader } from './components/PageHeader/PageHeader';
export type { PageHeaderProps } from './components/PageHeader/PageHeader';
export { Nav } from './components/Nav/Nav';
export type { NavProps, NavItem } from './components/Nav/Nav';
export type { NavLogoProps } from './components/Nav/NavLogo';
export type { NavMenuProps } from './components/Nav/NavMenu';
export type { NavButtonsProps, NavButton } from './components/Nav/NavButtons';

// Icon — the Icon component lives here; icon names, map, and list come from the
// private @cuweb/rds-icons peer dependency. Consumers import named
// icons directly from that package.
export { Icon } from './components/Icon/Icon';
export type { IconProps } from './components/Icon';
export type { IconName } from '@cuweb/rds-icons';

// LinkProvider
export { LinkProvider } from './components/LinkProvider/index';

// ProgressBar
export { ProgressBar } from './components/ProgressBar/ProgressBar';
export type { ProgressBarProps } from './components/ProgressBar/ProgressBar';

// SocialIcons
export { SocialIcons } from './components/SocialIcons/SocialIcons';
export type { SocialIconsProps } from './components/SocialIcons/SocialIcons';
export type { SocialIconsItemProps } from './components/SocialIcons/SocialIconsItem';

// Status
export { Status, defaultStatusTypes } from './components/Status/Status';
export type { StatusProps, StatusVariant, StatusType } from './components/Status/Status';
export type {
  StatusTypeDefinition,
  StatusTypeRegistry,
} from './components/Status/types';
export { formatHoursStatus } from './components/Status/hoursStatus';
export type { HoursStatus } from './components/Status/hoursStatus';

// Video utilities — used internally by Card.VideoFigure, re-exported for advanced consumers
// (e.g. building a custom video UI on top of the same provider registry / oEmbed cache).
export { useOEmbed } from './utils/video/useOEmbed';
export type { UseOEmbedOptions } from './utils/video/useOEmbed';
export { detectProvider, getProvider, PROVIDER_NAMES } from './utils/video/providers';
export type {
  ProviderName,
  ProviderDefinition,
  OEmbedData,
  UseOEmbedResult,
} from './utils/video/types';

// Motion utilities — hooks consumed by components that opt into scroll-reveal
// or need to branch on prefers-reduced-motion. Pairs with the vanilla
// dist/vanilla-js/cuMotion.js bundle for WordPress / non-React contexts.
export { useReducedMotion } from './utils/motion/useReducedMotion';
export { useScrollReveal } from './utils/motion/useScrollReveal';
export type { ScrollRevealOptions } from './utils/motion/useScrollReveal';
