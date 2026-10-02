import './styles/main.scss';

// Template Parts
export { Article } from './components/Article';
export { Aside } from './components/Aside';
export { Body } from './components/Body';
export { Main } from './components/Main';

// Layout
export { Column } from './components/Column';
export { Section } from './components/Section';

// Elements
export { Avatar, type AvatarProps } from './components/Avatar';
export { Badge, type BadgeProps } from './components/Badge';
export { BadgeGroup } from './components/BadgeGroup';
export { Button } from './components/Button';
export { ButtonGroup } from './components/ButtonGroup';
export { Icon } from './components/Icon';
export type { IconProps } from './components/Icon';
export type { IconName } from '@cuweb/rds-icons';

// Content
export { Calendar, type CalendarProps, type CalendarEvent } from './components/Calendar';
export { CallOut, type CallOutProps } from './components/CallOut';
export { Description, DescriptionWrapper, type DescriptionProps } from './components/Description';
export { DescriptionMeta, type DescriptionMetaProps } from './components/Description';
export { DescriptionAccordion, type DescriptionAccordionProps } from './components/Description';
export { Details, type DetailsProps } from './components/Details';
export type { DetailsItemProps } from './components/Details';
export { Carleton360, type Carleton360Props } from './components/Carleton360';
export { Card, type CardProps } from './components/Card';
export { Listing, type ListingProps } from './components/Listing';
export { CampaignHero, type CampaignHeroProps } from './components/CampaignHero';
export type { CardStatusProps } from './components/Card';
export type { CardVideoFigureProps } from './components/Card';
export { FilterPanel, type FilterPanelProps } from './components/FilterPanel';
export type {
    SortOption,
    FilterGroup,
    FilterOption,
    ActiveFilters,
} from './components/FilterPanel';
export { Figure, type FigureProps } from './components/Figure';
export { Location, type LocationProps, type MarkerData } from './components/Location';
export { Quote, type QuoteProps } from './components/Quote';
export { StackedList, type StackedListProps } from './components/StackedList';
export { Testimonial, type TestimonialProps } from './components/Testimonial';
export { Table, type TableProps, type ColumnDefinitionType } from './components/Table';
export { TextImage, type TextImageProps } from './components/TextImage';
export type { TextImageContentProps, ImageMode } from './components/TextImage';
export { TextMedia, type TextMediaProps } from './components/TextMedia';
export type { TextMediaContentProps } from './components/TextMedia';
export type { TextMediaMediaProps } from './components/TextMedia';
export { Timeline, type TimelineProps } from './components/Timeline';
export type { TimelineItemProps } from './components/Timeline';

// Media
export { Embed, EmbedWrapper, type EmbedProps } from './components/Embed';
export { EmbedHubSpot, type EmbedHubSpotProps } from './components/Embed';
export { FullBanner, type FullBannerProps } from './components/FullBanner';
export type { FullBannerVideoProps } from './components/FullBanner';
export { ImageCover } from './components/ImageCover';
export { ImageGrid, ImageGridWrapper, type ImageGridProps } from './components/ImageGrid';
export { ImageGridImage, type ImageGridImageProps } from './components/ImageGrid';
export { ImageSlider, type ImageSliderProps } from './components/ImageSlider';
export type { ImageSliderItemProps } from './components/ImageSlider';
export { WideImage, type WideImageProps } from './components/WideImage';
export type { WideImageSignupProps } from './components/WideImage';
export { WideWave } from './components/WideWave';

// Navigation
export { DepartmentBar, type DepartmentBarProps } from './components/DepartmentBar';
export { Footer, type FooterProps } from './components/Footer';
export { FooterStandard, type FooterStandardProps } from './components/FooterStandard';
export type { FooterType } from './data/FooterData';
export { Nav, type NavProps, type NavItem } from './components/Nav';
export type { NavButtonsProps, NavButton } from './components/Nav';
export type { NavLogoProps } from './components/Nav';
export type { NavMenuProps } from './components/Nav';
export { PageHeader, type PageHeaderProps } from './components/PageHeader';
export { Pagination, type PaginationProps } from './components/Pagination';

// Feedback
export { Alert, type AlertProps } from './components/Alert';
export { Dialog, type DialogProps } from './components/Dialog';
export { Modal, type ModalProps, type ModalSize } from './components/Modal';
export { Toast, type ToastProps, type ToasterProps } from './components/Toast';
export { ProgressBar, type ProgressBarProps } from './components/ProgressBar';
export { BlockLoader, type BlockLoaderProps } from './components/BlockLoader';
export { ButtonLoader, type ButtonLoaderProps } from './components/ButtonLoader';
export { CalendarLoader, type CalendarLoaderProps } from './components/CalendarLoader';
export { CardLoader, type CardLoaderProps, type CardLoaderVariant } from './components/CardLoader';
export { DescriptionLoader, type DescriptionLoaderProps } from './components/DescriptionLoader';
export type { DescriptionLoaderAccordionProps } from './components/DescriptionLoader';
export type { DescriptionLoaderMetaProps } from './components/DescriptionLoader';
export { PaginationLoader, type PaginationLoaderProps } from './components/PaginationLoader';
export {
    ListingLoader,
    type ListingLoaderProps,
    type ListingLoaderVariant,
} from './components/ListingLoader';
export { EventLoader, type EventLoaderProps } from './components/EventLoader';
export { FormLoader, type FormLoaderProps } from './components/FormLoader';
export type { RowLoaderProps, RowLoaderCols } from './components/FormLoader';
export { PageLoader, type PageLoaderProps } from './components/PageLoader';
export { TableLoader, type TableLoaderProps } from './components/TableLoader';
export {
    PageHeaderLoader,
    type PageHeaderLoaderProps,
    type PageHeaderLoaderVariant,
} from './components/PageHeaderLoader';
export { TopNavLoader, type TopNavLoaderProps } from './components/TopNavLoader';
export {
    Status,
    defaultStatusTypes,
    type StatusProps,
    type StatusVariant,
    type StatusType,
} from './components/Status';
export type { StatusTypeDefinition, StatusTypeRegistry } from './components/Status';
export { formatHoursStatus, type HoursStatus } from './components/Status';

// Forms
export {
    LocationPicker,
    type LocationPickerProps,
    type SingleMarkerInterface,
} from './components/LocationPicker';
export { SearchInput, type SearchInputProps } from './components/SearchInput';
export type { SearchInputResultsProps, SearchResultItem } from './components/SearchInput';

// Utilities
export { CookieBanner, type CookieBannerProps } from './components/CookieBanner';
export { LinkProvider } from './components/LinkProvider';
export { Login, type LoginProps } from './components/Login';
export { SocialIcons, type SocialIconsProps } from './components/SocialIcons';
export type { SocialIconsItemProps } from './components/SocialIcons';

// Hooks
export { useOEmbed, type UseOEmbedOptions } from './utils/video/useOEmbed';
export { detectProvider, getProvider, PROVIDER_NAMES } from './utils/video/providers';
export type {
    OEmbedData,
    ProviderDefinition,
    ProviderName,
    UseOEmbedResult,
} from './utils/video/types';
export { useReducedMotion } from './utils/motion/useReducedMotion';
export { useScrollReveal, type ScrollRevealOptions } from './utils/motion/useScrollReveal';
