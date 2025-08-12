import { useCallback } from 'react';

export const useFocusableElements = () => {
  const getFocusableElements = useCallback((container: HTMLElement | null): HTMLElement[] => {
    if (!container) return [];

    return Array.from(
      container.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute('disabled'));
  }, []);

  return { getFocusableElements };
};
