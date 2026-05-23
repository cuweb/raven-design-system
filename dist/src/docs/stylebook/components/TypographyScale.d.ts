type SectionProps = {
    title?: string;
    description?: string;
};
type FontSizeFilter = 'heading' | 'body' | 'all';
type FontSizesProps = SectionProps & {
    /** Filter by token naming convention. Default `'all'`. */
    filter?: FontSizeFilter;
    /** Explicit list of token names to include. Overrides `filter`. */
    include?: string[];
    /** Explicit list of token names to exclude. Applied after filter/include. */
    exclude?: string[];
};
export declare function FontSizes({ filter, include, exclude, title, description, }: FontSizesProps): import("react/jsx-runtime").JSX.Element;
/**
 * Heading scale — shows font-size tokens whose names start with `heading-`.
 * Pass `include` or `exclude` to override the default naming filter.
 */
export declare function HeadingScale(props: Omit<FontSizesProps, 'filter'> & {
    filter?: FontSizeFilter;
}): import("react/jsx-runtime").JSX.Element;
/**
 * Body sizes — shows font-size tokens whose names don't start with `heading-`.
 * Pass `include` or `exclude` to override the default naming filter.
 */
export declare function BodySizes(props: Omit<FontSizesProps, 'filter'> & {
    filter?: FontSizeFilter;
}): import("react/jsx-runtime").JSX.Element;
export declare function FontFamilies({ title, description }: SectionProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TypographyScale.d.ts.map