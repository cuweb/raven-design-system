import * as react from 'react';
import { ComponentType, ComponentProps, FC, ReactNode } from 'react';

type LinkComponent = ComponentType<ComponentProps<'a'>>;
declare const LinkContext: react.Context<LinkComponent>;

declare const useLinkContext: () => LinkComponent;

interface LinkProviderProps {
    component: LinkComponent;
    children: ReactNode;
}
declare const LinkProvider: FC<LinkProviderProps>;

export { LinkContext, LinkProvider, useLinkContext };
export type { LinkComponent, LinkProviderProps };
