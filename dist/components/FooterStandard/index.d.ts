import * as react_jsx_runtime from 'react/jsx-runtime';
import { IconName } from '@cuweb/rds-icons';

interface FooterSocialLink {
    name: string;
    href: string;
    icon: IconName;
}
interface FooterContactInfo {
    phone: string;
    phoneHref?: string;
    contactHref?: string;
    address: string;
}
type FooterType = 'standard' | 'athletics' | 'futureFunder';

interface FooterStandardProps {
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
declare const FooterStandard: ({ type, acknowledgment, contact, social, logoSrc, logoAlt, privacyHref, accessibilityHref, copyrightHref, }: FooterStandardProps) => react_jsx_runtime.JSX.Element;

export { FooterStandard };
export type { FooterStandardProps };
