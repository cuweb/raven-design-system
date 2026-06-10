import * as react from 'react';

interface CookieBannerProps {
    cookieName?: string;
    message?: string;
    policyHref?: string;
    policyLabel?: string;
    buttonLabel?: string;
}
declare const CookieBanner: ({ cookieName, message, policyHref, policyLabel, buttonLabel, }: CookieBannerProps) => react.JSX.Element | null;

export { CookieBanner };
export type { CookieBannerProps };
