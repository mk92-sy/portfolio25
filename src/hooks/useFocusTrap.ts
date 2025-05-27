import { useEffect } from "react";

export const useFocusTrap = (
  active?: boolean,
  ref?: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const container = ref?.current;
    if (!active || !container) return;

    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    if (firstElement) {
      setTimeout(() => {
        firstElement.focus();
      }, 0);
    }

    container.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]); // ref를 의존성 배열에서 제거하고 내부에서 직접 참조

  return ref;
};
