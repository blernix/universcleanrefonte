'use client';

import { useEffect } from 'react';

export default function DispooWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.dispoo.fr/js/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existing = document.querySelector('script[src="https://app.dispoo.fr/js/widget.js"]');
      if (existing) existing.remove();
    };
  }, []);

  return <div data-dispoo-slug="univers-clean77" />;
}
