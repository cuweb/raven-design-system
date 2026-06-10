import * as react from 'react';

interface FooterProps {
    logoSrc?: string;
    logoAlt?: string;
    privacyHref?: string;
    accessibilityHref?: string;
    copyrightHref?: string;
}
declare const Footer: ({ logoSrc, logoAlt, privacyHref, accessibilityHref, copyrightHref, }: FooterProps) => react.JSX.Element;

export { Footer };
export type { FooterProps };
