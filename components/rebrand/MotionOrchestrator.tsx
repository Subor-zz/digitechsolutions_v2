"use client";

import { useEffect } from "react";

const revealSelector = "#hoofdinhoud [data-reveal]";

export function MotionOrchestrator() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    let observer: IntersectionObserver | null = null;

    const revealEverything = () => {
      observer?.disconnect();
      observer = null;
      elements.forEach((element) => {
        element.classList.remove("motion-reveal");
        element.classList.add("is-revealed");
      });
    };

    const enableMotion = () => {
      if (reducedMotion.matches) {
        revealEverything();
        return;
      }

      elements.forEach((element) => {
        element.classList.add("motion-reveal");
        element.classList.remove("is-revealed");
      });

      if (!("IntersectionObserver" in window)) {
        revealEverything();
        return;
      }

      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
      );

      elements.forEach((element) => observer?.observe(element));
    };

    const handleMotionPreference = () => {
      if (reducedMotion.matches) revealEverything();
      else enableMotion();
    };

    enableMotion();
    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      observer?.disconnect();
      reducedMotion.removeEventListener("change", handleMotionPreference);
      elements.forEach((element) => element.classList.remove("motion-reveal", "is-revealed"));
    };
  }, []);

  return null;
}
