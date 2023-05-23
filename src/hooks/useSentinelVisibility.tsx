import { useEffect, useState, useRef, MutableRefObject } from "react";

type SentinelVisibilityResult = [boolean, MutableRefObject<HTMLDivElement | null>];

export const useSentinelVisibility = (offset: number): SentinelVisibilityResult => {
  const [isVisible, setIsVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      rootMargin: `-${offset}px 0px -${offset}px 0px`,
      threshold: 0.5,
    });

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [offset]);

  return [isVisible, sentinelRef];
};
