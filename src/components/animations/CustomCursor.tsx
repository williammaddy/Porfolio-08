"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "./gsap-setup";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop/pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Use GSAP quickTo for smooth performance
    const xDot = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yDot = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

    const xRing = gsap.quickTo(follower, "x", { duration: 0.35, ease: "power3.out" });
    const yRing = gsap.quickTo(follower, "y", { duration: 0.35, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Target hoverable elements
    const handleElementOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, .paper-card-interactive, .paper-box"
      );

      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute("data-cursor-text");
        if (customText) {
          setCursorText(customText);
        } else if (interactive.tagName.toLowerCase() === "a" || interactive.tagName.toLowerCase() === "button") {
          setCursorText("");
        }
      }
    };

    const handleElementOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, .paper-card-interactive, .paper-box"
      );

      if (interactive) {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleElementOver);
    document.addEventListener("mouseout", handleElementOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleElementOver);
      document.removeEventListener("mouseout", handleElementOut);
    };
  }, [isVisible]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } hidden md:block`}
    >
      {/* Central Cursor Dot */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 pointer-events-none transition-transform duration-200 ${
          isHovered ? "w-2 h-2 opacity-30" : "w-2.5 h-2.5 opacity-100"
        }`}
      />

      {/* Outer Follower Ring */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-slate-900 pointer-events-none flex items-center justify-center transition-all duration-300 ${
          cursorText
            ? "w-14 h-14 bg-amber-300/90 text-slate-950 font-mono text-[9px] font-black tracking-wider border-slate-900 shadow-[2px_2px_0px_#0f172a]"
            : isHovered
            ? "w-10 h-10 bg-sky-300/30 border-sky-600 scale-110"
            : "w-7 h-7 border-slate-900/40"
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </div>
  );
}
