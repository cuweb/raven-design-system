import './styles/main.scss';

// Template Parts
export { Article } from './components/Article/Article';
export { Aside } from './components/Aside/Aside';
export { Body } from './components/Body/Body';
export { Main } from './components/Main/Main';

// Layout
export { Column } from './components/Column/Column';
export { Section } from './components/Section/Section';

// Elements
export { Avatar, type AvatarProps } from './components/Avatar/Avatar';
export { Badge, type BadgeProps } from './components/Badge/Badge';
export { BadgeGroup } from './components/BadgeGroup/BadgeGroup';
export { Button } from './components/Button/Button';
export { ButtonGroup } from './components/ButtonGroup/ButtonGroup';
export { Icon } from './components/Icon/Icon';
export type { IconProps } from './components/Icon';
export type { IconName } from '@cuweb/rds-icons';

// Content
export { Calendar, type CalendarProps, type CalendarEvent } from './components/Calendar/Calendar';
export { CallOut, type CallOutProps } from './components/CallOut/CallOut';
export { Card, type CardProps } from './components/Card/Card';
export { Listing, type ListingProps } from './components/Listing';
export type { CardStatusProps } from './components/Card/CardStatus';
export type { CardVideoFigureProps } from './components/Card/CardVideoFigure';
export { Figure, type FigureProps } from './components/Figure/Figure';
export { Quote, type QuoteProps } from './components/Quote/Quote';
export { StackedList, type StackedListProps } from './components/StackedList';
export { Testimonial, type TestimonialProps } from './components/Testimonial/Testimonial';
export { Table, type TableProps, type ColumnDefinitionType } from './components/Table/Table';
export { TextImage, type TextImageProps } from './components/TextImage/TextImage';
export type { TextImageContentProps, ImageMode } from './components/TextImage/TextImageContent';
export { TextMedia, type TextMediaProps } from './components/TextMedia/TextMedia';
export type { TextMediaContentProps } from './components/TextMedia/TextMediaContent';
export type { TextMediaMediaProps } from './components/TextMedia/TextMediaMedia';
export { Timeline, type TimelineProps } from './components/Timeline/Timeline';
export type { TimelineItemProps } from './components/Timeline/TimelineItem';

// Media
export { Embed, EmbedWrapper, type EmbedProps } from './components/Embed/Embed';
export { EmbedHubSpot, type EmbedHubSpotProps } from './components/Embed/EmbedHubSpot';
export { FullBanner, type FullBannerProps } from './components/FullBanner/FullBanner';
export type { FullBannerVideoProps } from './components/FullBanner/FullBannerVideo';
export { ImageCover } from './components/ImageCover';
export { ImageGrid, ImageGridWrapper, type ImageGridProps } from './components/ImageGrid/ImageGrid';
export { ImageGridImage, type ImageGridImageProps } from './components/ImageGrid/ImageGrid.Image';
export { WideImage, type WideImageProps } from './components/WideImage/WideImage';
export type { WideImageSignupProps } from './components/WideImage/WideImageSignup';
export { WideWave } from './components/WideWave/WideWave';

// Navigation
export { DepartmentBar, type DepartmentBarProps } from './components/DepartmentBar/DepartmentBar';
export { Footer, type FooterProps } from './components/Footer/Footer';
export { FooterStandard, type FooterStandardProps } from './components/FooterStandard/FooterStandard';
export type { FooterType } from './data/FooterData';
export { Nav, type NavProps, type NavItem } from './components/Nav/Nav';
export type { NavButtonsProps, NavButton } from './components/Nav/NavButtons';
export type { NavLogoProps } from './components/Nav/NavLogo';
export type { NavMenuProps } from './components/Nav/NavMenu';
export { PageHeader, type PageHeaderProps } from './components/PageHeader/PageHeader';

// Feedback
export { ProgressBar, type ProgressBarProps } from './components/ProgressBar/ProgressBar';
export { Status, defaultStatusTypes, type StatusProps, type StatusVariant, type StatusType } from './components/Status/Status';
export type { StatusTypeDefinition, StatusTypeRegistry } from './components/Status/types';
export { formatHoursStatus, type HoursStatus } from './components/Status/hoursStatus';

// Utilities
export { CookieBanner, type CookieBannerProps } from './components/CookieBanner/CookieBanner';
export { LinkProvider } from './components/LinkProvider/index';
export { SocialIcons, type SocialIconsProps } from './components/SocialIcons/SocialIcons';
export type { SocialIconsItemProps } from './components/SocialIcons/SocialIconsItem';

// Hooks
export { useOEmbed, type UseOEmbedOptions } from './utils/video/useOEmbed';
export { detectProvider, getProvider, PROVIDER_NAMES } from './utils/video/providers';
export type { OEmbedData, ProviderDefinition, ProviderName, UseOEmbedResult } from './utils/video/types';
export { useReducedMotion } from './utils/motion/useReducedMotion';
export { useScrollReveal, type ScrollRevealOptions } from './utils/motion/useScrollReveal';
