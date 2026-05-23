import { FooterContactInfo, FooterSocialLink, FooterType } from '../../data/FooterData';
export interface FooterStandardProps {
    type?: FooterType;
    acknowledgment?: string;
    contact?: FooterContactInfo;
    social?: FooterSocialLink[];
    logoSrc?: string;
    logoAlt?: string;
    privacyHref?: string;
    accessibilityHref?: string;
    copyrightHref?: string;
}
export declare const FooterStandard: ({ type, acknowledgment, contact, social, logoSrc, logoAlt, privacyHref, accessibilityHref, copyrightHref, }: FooterStandardProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FooterStandard.d.ts.map