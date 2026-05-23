import { StatusProps } from '../Status/Status';
export type CardStatusProps = StatusProps;
/**
 * Thin Card-context wrapper around <Status>. Adds a wrapping div with
 * card-aware spacing so the indicator sits cleanly above sibling content
 * (typically a Card.Excerpt). When Status resolves to null, the wrapper
 * collapses via CSS `:empty`.
 */
export declare const CardStatus: {
    (props: CardStatusProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=CardStatus.d.ts.map