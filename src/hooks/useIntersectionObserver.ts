import { useEffect, useState } from "react";

type ElementRefType = {
  current: HTMLElement | null;
};

export function useIntersectionObserver(elementRef: ElementRefType): string {
  const [currentPage, setCurrentPage] = useState("hero");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  useEffect(() => {
    const wrapperElement = elementRef.current;
    if (!wrapperElement) return;

    const observedChildren = Array.from(wrapperElement.children);

    const intersectionCallback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.id);
          setCurrentPage(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
          intersectionCallback,
          observerOptions
    );

    observedChildren.forEach((child) => observer.observe(child));

    return () => {
        observer.disconnect();
    }
  }, []);

  return currentPage;
}
