import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import statusTypes from './statusTypes.json';

type StatusVariant = 'success' | 'error' | 'warning' | 'info';
/** Built-in registry, exported for inspection / merging with project-level types. */
declare const defaultStatusTypes: StatusTypeRegistry;
/**
 * Built-in type names. The string literal type comes from the JSON keys, but
 * `Status`'s `type` prop is intentionally a wider `string` so consumers can
 * inject project-specific types (eventually via a Provider) without this
 * package needing to know about them.
 */
type StatusType = keyof typeof statusTypes;
interface StatusTypeDefinition {
    /** Used as a prefix in the rendered aria-label, e.g. "Hours: Open until 8:00 PM". */
    ariaPrefix: string;
    /** Default visible text per variant. Variants may be omitted; an unresolved (type, variant) pair renders nothing. */
    labels: Partial<Record<StatusVariant, string>>;
}
type StatusTypeRegistry = Record<string, StatusTypeDefinition>;

interface StatusProps {
    children?: React.ReactNode;
    variant?: StatusVariant;
    /**
     * Opt into the registry: when set, the component looks up a default label and
     * aria-prefix for the (type, variant) pair. Built-in types are `'hours'`,
     * `'availability'`, `'system'`. Consumers may pass other strings — they'll
     * resolve to no label unless a future Provider supplies a matching entry.
     */
    type?: StatusType | (string & {});
    /** Explicit text override. Used when no `children` are provided. Wins over the registry default. */
    label?: string;
    /**
     * @internal
     * Selects the context modifier class. `Card.Status` passes `'in-card'` so
     * the inner span gets `cu-status--in-card`; standalone use defaults to
     * `'standalone'` (`cu-status--standalone`). This lets each context have
     * fully independent styles without descendant-selector specificity battles.
     */
    context?: 'standalone' | 'in-card';
}
declare const Status: {
    ({ children, variant, type, label, context, }: StatusProps): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};

interface HoursStatus {
    variant: 'success' | 'warning' | 'error';
    label: string;
}
/**
 * Compute a Status-ready `{ variant, label }` from operating hours.
 *
 * Variant rules:
 *   - error   — current time is before open or after close
 *   - warning — within 60 minutes of close
 *   - success — open with more than 60 minutes remaining
 *
 * `open` and `close` are 24h strings like `'07:00'` and `'20:00'`. Assumes
 * close is later than open on the same day; venues that wrap past midnight
 * aren't modelled here yet.
 */
declare const formatHoursStatus: (open: string, close: string, now?: Date) => HoursStatus;

export { Status, defaultStatusTypes, formatHoursStatus };
export type { HoursStatus, StatusProps, StatusType, StatusTypeDefinition, StatusTypeRegistry, StatusVariant };
