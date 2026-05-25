import { useState, useEffect } from 'react';

// Single source of truth for the Nav's "mobile" breakpoint on the JS side.
// Below it, the menu collapses to a Browse trigger and the CTA buttons move into
// the bottom bar. JS can't read SCSS variables, so keep this in sync with the
// `$rds-media-query-sm` (600px) media queries in styles.scss — change it here and
// it applies to both NavMenu and the Nav wrapper.
const MOBILE_QUERY = '(max-width: 599.98px)';

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
