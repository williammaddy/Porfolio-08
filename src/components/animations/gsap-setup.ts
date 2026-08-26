"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Hook for adding 3D perspective magnetic tilt effect to any element on mouse hover
 */
export function useMagneticTilt<T extends HTMLElement = HTMLDivElement>(options?: {
  maxRotation?: number;
  perspective?: number;
  scale?: number;
}) {
  const elementRef = useRef<T | null>(null);
  const maxRot = options?.maxRotation ?? 10;
  const perspective = options?.perspective ?? 800;
  const targetScale = options?.scale ?? 1.02;

  useEffect(() => {
    const el = elementRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    gsap.set(el, { transformPerspective: perspective, transformStyle: "preserve-3d" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxRot;
      const rotateY = ((x - centerX) / centerX) * maxRot;

      gsap.to(el, {
        rotateX,
        rotateY,
        scale: targetScale,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
        overwrite: "auto",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxRot, perspective, targetScale]);

  return elementRef;
}

/**
 * Hook for magnetic button attraction effect
 */
export function useMagneticButton<T extends HTMLElement = HTMLAnchorElement | HTMLButtonElement>(
  strength = 0.3
) {
  const buttonRef = useRef<T | null>(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
      const y = (e.clientY - (rect.top + rect.height / 2)) * strength;

      gsap.to(el, {
        x,
        y,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return buttonRef;
}
