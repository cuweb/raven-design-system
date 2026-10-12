import { useState, useEffect } from 'react';
import { rdsTokens } from '../../styles/files/rds-tokens';

// The Nav's "mobile" breakpoint on the JS side, applied to both NavMenu and the
// Nav wrapper. At or below it, the menu collapses to a Browse trigger and the CTA
// buttons move into the bottom bar. Built from the same c2b viewport token as
// `$rds-media-query-sm`, it's the exact complement of the `(width > ...)` queries
// in styles.scss and matches WordPress's @mobile.
const MOBILE_QUERY = `(width <= ${rdsTokens.viewport.mobile})`;

export const useIsMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia(MOBILE_QUERY);
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    return isMobile;
};
