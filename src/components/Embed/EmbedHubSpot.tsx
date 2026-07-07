import { useEffect, useRef } from 'react';

export interface EmbedHubSpotProps {
  formId: string;
  portalId: string;
}

interface HubSpotForms {
  create: (options: { portalId: string; formId: string; target: string }) => void;
}

declare global {
  interface Window {
    hbspt?: {
      forms: HubSpotForms;
    };
  }
}

export const EmbedHubSpot = ({ formId, portalId }: EmbedHubSpotProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://js.hsforms.net/forms/embed/v2.js"]',
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId,
            formId,
            target: `#hs-form-container-${formId}`,
          });
        }
      };

      script.onerror = () => {
        console.error('Failed to load HubSpot forms script.');
      };

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    } else if (window.hbspt) {
      window.hbspt.forms.create({
        portalId,
        formId,
        target: `#hs-form-container-${formId}`,
      });
    }
  }, [formId, portalId]);

  return <div id={`hs-form-container-${formId}`} ref={formContainerRef} />;
};

EmbedHubSpot.displayName = 'EmbedHubSpot';
