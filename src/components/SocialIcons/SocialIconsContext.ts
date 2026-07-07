import { createContext, useContext } from 'react';

export type SocialIconsColor = 'black' | 'white' | 'brand';

interface SocialIconsContextValue {
    iconColor?: SocialIconsColor;
}

export const SocialIconsContext = createContext<SocialIconsContextValue>({});

export const useSocialIconsContext = () => useContext(SocialIconsContext);
