export function determineRect(containerRef: React.RefObject<HTMLDivElement>) {
  if (containerRef.current) {
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop;

    if (rect) {
      return {
        top: rect.top + rect.height + scrollTop,
        right: window.innerWidth - rect.right,
      };
    }
  }
  return { top: 0, right: 0 };
}
