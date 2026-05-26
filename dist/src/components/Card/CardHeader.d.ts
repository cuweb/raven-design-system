export interface CardHeaderProps {
    title: string;
    link?: string;
    extraText?: string;
    as?: 'h2' | 'h3';
    date?: string | Date;
    datePrefix?: string;
    readTime?: string;
    position?: 'top' | 'bottom';
}
export declare const CardHeader: {
    ({ title, link, extraText, as, date, datePrefix, readTime, position, }: CardHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=CardHeader.d.ts.map