"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className: string;
  visibleClassName: string;
  threshold?: number;
  once?: boolean;
};

export default function RevealOnScroll({
  children,
  className,
  visibleClassName,
  threshold = 0.35,
  once = true,
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [once, threshold]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? visibleClassName : ""}`}
    >
      {children}
    </div>
  );
}