import * as react_jsx_runtime from 'react/jsx-runtime';

interface CookieBannerProps {
    cookieName?: string;
    message?: string;
    policyHref?: string;
    policyLabel?: string;
    buttonLabel?: string;
}
declare const CookieBanner: ({ cookieName, message, policyHref, policyLabel, buttonLabel, }: CookieBannerProps) => react_jsx_runtime.JSX.Element | null;

export { CookieBanner };
export type { CookieBannerProps };
