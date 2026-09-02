"use client";

import { useLayoutEffect } from "react";

export default function DisableScrollSnap() {
  useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const previousHtmlSnap = html.style.scrollSnapType;
    const previousBodySnap = body.style.scrollSnapType;
    const previousScrollBehavior = html.style.scrollBehavior;
    const previousScrollRestoration = window.history.scrollRestoration;

    html.style.scrollSnapType = "none";
    body.style.scrollSnapType = "none";
    html.style.scrollBehavior = "auto";
    window.history.scrollRestoration = "manual";

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      html.scrollTop = 0;
      body.scrollTop = 0;
    };

    scrollToTop();

    const animationFrameOne = window.requestAnimationFrame(scrollToTop);

    const animationFrameTwo = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scrollToTop);
    });

    const timeoutOne = window.setTimeout(scrollToTop, 50);
    const timeoutTwo = window.setTimeout(scrollToTop, 150);
    const timeoutThree = window.setTimeout(scrollToTop, 350);
    const timeoutFour = window.setTimeout(scrollToTop, 700);

    return () => {
      window.cancelAnimationFrame(animationFrameOne);
      window.cancelAnimationFrame(animationFrameTwo);

      window.clearTimeout(timeoutOne);
      window.clearTimeout(timeoutTwo);
      window.clearTimeout(timeoutThree);
      window.clearTimeout(timeoutFour);

      html.style.scrollSnapType = previousHtmlSnap;
      body.style.scrollSnapType = previousBodySnap;
      html.style.scrollBehavior = previousScrollBehavior;
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return null;
}