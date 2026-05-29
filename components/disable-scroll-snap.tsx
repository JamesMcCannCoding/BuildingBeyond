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

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    const timeout = window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }, 0);

    return () => {
      window.clearTimeout(timeout);

      html.style.scrollSnapType = previousHtmlSnap;
      body.style.scrollSnapType = previousBodySnap;
      html.style.scrollBehavior = previousScrollBehavior;
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return null;
}