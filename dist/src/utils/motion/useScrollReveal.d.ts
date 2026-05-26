export interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
    disabled?: boolean;
}
export declare const useScrollReveal: <T extends HTMLElement = HTMLDivElement>(options?: ScrollRevealOptions) => {
    ref: import('react').RefObject<T>;
    isVisible: boolean;
};
//# sourceMappingURL=useScrollReveal.d.ts.map