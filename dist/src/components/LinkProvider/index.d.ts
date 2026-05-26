import { FC, ReactNode } from 'react';
import { LinkComponent } from './LinkContext';
export interface LinkProviderProps {
    component: LinkComponent;
    children: ReactNode;
}
export declare const LinkProvider: FC<LinkProviderProps>;
export { useLinkContext } from './useLinkContext';
export { LinkContext } from './LinkContext';
export type { LinkComponent } from './LinkContext';
//# sourceMappingURL=index.d.ts.map