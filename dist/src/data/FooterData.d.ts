import { IconName } from '@cuweb/rds-icons';
export interface FooterLink {
    name: string;
    href: string;
}
export interface FooterLinkMedia {
    src: string;
    alt: string;
    href?: string;
    width?: number;
}
export interface FooterLinkGroup {
    heading: string;
    links: FooterLink[];
    media?: FooterLinkMedia;
}
export type FooterLinkColumn = FooterLinkGroup[];
export interface FooterSocialLink {
    name: string;
    href: string;
    icon: IconName;
}
export interface FooterContactInfo {
    phone: string;
    phoneHref?: string;
    contactHref?: string;
    address: string;
}
export interface FooterButton {
    id: number;
    title: string;
    url: string;
}
export declare const defaultAcknowledgment = "Carleton University acknowledges the location of its campus on the traditional, unceded territories of the Algonquin Anishin\u00E0beg nation";
export declare const defaultFooterContact: FooterContactInfo;
export declare const defaultFooterSocial: FooterSocialLink[];
export declare const standardFooterLinks: FooterLinkColumn[];
export declare const athleticsFooterLinks: FooterLinkColumn[];
export declare const futureFunderFooterLinks: FooterLinkColumn[];
export type FooterType = 'standard' | 'athletics' | 'futureFunder';
export declare const footerLinksByType: Record<FooterType, FooterLinkColumn[]>;
export declare const defaultFooterButtons: FooterButton[];
//# sourceMappingURL=FooterData.d.ts.map