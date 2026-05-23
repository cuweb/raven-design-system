import { default as statusTypes } from './statusTypes.json';
export type StatusVariant = 'success' | 'error' | 'warning' | 'info';
/** Built-in registry, exported for inspection / merging with project-level types. */
export declare const defaultStatusTypes: StatusTypeRegistry;
/**
 * Built-in type names. The string literal type comes from the JSON keys, but
 * `Status`'s `type` prop is intentionally a wider `string` so consumers can
 * inject project-specific types (eventually via a Provider) without this
 * package needing to know about them.
 */
export type StatusType = keyof typeof statusTypes;
export interface StatusTypeDefinition {
    /** Used as a prefix in the rendered aria-label, e.g. "Hours: Open until 8:00 PM". */
    ariaPrefix: string;
    /** Default visible text per variant. Variants may be omitted; an unresolved (type, variant) pair renders nothing. */
    labels: Partial<Record<StatusVariant, string>>;
}
export type StatusTypeRegistry = Record<string, StatusTypeDefinition>;
//# sourceMappingURL=types.d.ts.map