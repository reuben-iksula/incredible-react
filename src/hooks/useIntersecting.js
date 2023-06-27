import { useEffect, useState } from "react";

export function useIntersecting(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "-300px",
      }
    );

    observer.observe(ref.current);
  }, []);

  return isVisible;
}
