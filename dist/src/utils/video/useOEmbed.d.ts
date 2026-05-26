import { UseOEmbedResult } from './types';
export interface UseOEmbedOptions {
    /** Skip network calls; only resolve via deterministic fast paths (e.g. YouTube). */
    skipNetwork?: boolean;
}
export declare const useOEmbed: (url: string | undefined, options?: UseOEmbedOptions) => UseOEmbedResult;
/** Test-only: clear the in-memory oEmbed cache. */
export declare const __clearOEmbedCache: () => void;
//# sourceMappingURL=useOEmbed.d.ts.map