import { default as React } from 'react';
import { defaultStatusTypes, StatusType, StatusVariant } from './types';
export type { StatusType, StatusVariant };
export { defaultStatusTypes };
export interface StatusProps {
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
export declare const Status: {
    ({ children, variant, type, label, context, }: StatusProps): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=Status.d.ts.map