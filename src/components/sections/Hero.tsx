"use client";

import React, { useEffect, useRef } from "react";
import profile from "@/data/profile.json";
import DeveloperHeroIllustration from "@/components/illustrations/DeveloperHeroIllustration";
import { DoodleArrow, DoodleUnderline, MagazineIssueStamp } from "@/components/common/DoodleDecorations";
import { PixelStatusBadge, PixelStar } from "@/components/common/PixelDecorations";
import { gsap, useMagneticButton } from "@/components/animations/gsap-setup";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const badgeRowRef = useRef<HTMLDivElement>(null);
  const helloStickerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const specializationRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const microStatsRef = useRef<HTMLDivElement>(null);
  const illustrationColRef = useRef<HTMLDivElement>(null);

  // Magnetic button hooks
  const projectBtnRef = useMagneticButton<HTMLAnchorElement>(0.35);
  const resumeBtnRef = useMagneticButton<HTMLAnchorElement>(0.35);
  const githubBtnRef = useMagneticButton<HTMLAnchorElement>(0.25);
  const linkedinBtnRef = useMagneticButton<HTMLAnchorElement>(0.25);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create master intro timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Ticker entrance
      if (tickerRef.current) {
        tl.fromTo(
          tickerRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        );
      }

      // 2. Issue badge & status badge
      if (badgeRowRef.current) {
        tl.fromTo(
          badgeRowRef.current.children,
          { scale: 0.6, opacity: 0, rotation: -6 },
          { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.12, ease: "back.out(2)" },
          "-=0.3"
        );
      }

      // 3. Hello sticker
      if (helloStickerRef.current) {
        tl.fromTo(
          helloStickerRef.current,
          { scale: 0.8, opacity: 0, rotate: -15 },
          { scale: 1, opacity: 1, rotate: -3, duration: 0.5, ease: "back.out(2.5)" },
          "-=0.2"
        );
      }

      // 4. Main Name
      if (nameRef.current) {
        tl.fromTo(
          nameRef.current,
          { y: 40, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power4.out" },
          "-=0.3"
        );
      }

      // 5. Doodle Underline
      if (underlineRef.current) {
        tl.fromTo(
          underlineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }

      // 6. Specialization Pills
      if (specializationRef.current) {
        tl.fromTo(
          specializationRef.current.children,
          { y: 20, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.8)" },
          "-=0.3"
        );
      }

      // 7. Bio paragraph
      if (bioRef.current) {
        tl.fromTo(
          bioRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        );
      }

      // 8. Buttons
      if (buttonsRef.current) {
        tl.fromTo(
          buttonsRef.current.children,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.5)" },
          "-=0.3"
        );
      }

      // 9. Micro highlights
      if (microStatsRef.current) {
        tl.fromTo(
          microStatsRef.current.children,
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
          "-=0.2"
        );
      }

      // 10. Developer illustration column
      if (illustrationColRef.current) {
        tl.fromTo(
          illustrationColRef.current,
          { scale: 0.9, opacity: 0, x: 30 },
          { scale: 1, opacity: 1, x: 0, duration: 0.9, ease: "power3.out" },
          "-=0.8"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Decorative top ticker bar */}
      <div ref={tickerRef} className="mb-8 border-y-2 border-slate-900 bg-amber-300 py-1.5 overflow-hidden shadow-xs">
        <div className="animate-marquee whitespace-nowrap font-mono text-xs font-black uppercase tracking-widest text-slate-950 flex gap-8 items-center">
          <span>⚡ FULL STACK WEB DEVELOPMENT</span>
          <span>✦ APACHE SPARK &amp; PYSPARK</span>
          <span>⚡ REAL-TIME KAFKA STREAMING</span>
          <span>✦ AWS S3 &amp; MEDALLION ARCHITECTURE</span>
          <span>⚡ REACT.JS &amp; NODE.JS / EXPRESS</span>
          <span>✦ DELTA LAKE &amp; DATABRICKS</span>
          <span>⚡ DOCKER &amp; REST APIS</span>
          <span>✦ FULL STACK WEB DEVELOPMENT</span>
          <span>⚡ APACHE SPARK &amp; PYSPARK</span>
          <span>✦ REAL-TIME KAFKA STREAMING</span>
          <span>⚡ AWS S3 &amp; MEDALLION ARCHITECTURE</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Editorial Headline & Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Magazine Header Row */}
            <div ref={badgeRowRef} className="flex flex-wrap items-center gap-3">
              <MagazineIssueStamp text="ISSUE #01 // 2026 EDITION" />
              <PixelStatusBadge text="OPEN FOR ROLES" />
            </div>

            {/* Handwritten intro sticker */}
            <div ref={helloStickerRef} className="relative inline-block">
              <span className="font-hand text-2xl sm:text-3xl font-bold text-sky-700 rotate-[-3deg] inline-block">
                Hello world! I&apos;m
              </span>
              <DoodleArrow className="absolute -right-16 -top-2 w-12 h-6 text-sky-500 hidden sm:inline-block" />
            </div>

            {/* Main Bold Display Name */}
            <div className="space-y-1">
              <h1
                ref={nameRef}
                className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-950 uppercase leading-none"
              >
                {profile.name}
              </h1>
              <div ref={underlineRef} className="relative pt-1 max-w-md">
                <DoodleUnderline className="h-3 sm:h-4" color="#F59E0B" />
              </div>
            </div>

            {/* Dual Specialization Badges */}
            <div ref={specializationRef} className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-100 border-2 border-slate-900 font-mono text-xs sm:text-sm font-bold text-slate-900 shadow-[2px_2px_0px_#0f172a] hover:scale-105 transition-transform">
                <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
                <span>Full Stack Development</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-100 border-2 border-slate-900 font-mono text-xs sm:text-sm font-bold text-slate-900 shadow-[2px_2px_0px_#0f172a] hover:scale-105 transition-transform">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Data Engineering</span>
              </div>
            </div>

            {/* Bio summary description */}
            <p ref={bioRef} className="max-w-xl text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {profile.tagline}
            </p>

            {/* Action Buttons Group */}
            <div ref={buttonsRef} className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                ref={projectBtnRef}
                href="#projects"
                className="paper-btn-primary text-sm sm:text-base py-3 px-6 gap-2"
                data-cursor-text="EXPLORE"
              >
                <span>View Projects</span>
                <span className="font-mono text-sm">➜</span>
              </a>

              <a
                ref={resumeBtnRef}
                href="#contact"
                className="paper-btn-secondary text-sm sm:text-base py-3 px-6 gap-2"
                data-cursor-text="DISPATCH"
              >
                <span>Contact &amp; Resume</span>
                <span className="font-mono text-sm">📥</span>
              </a>

              <a
                ref={githubBtnRef}
                href={profile.contact.github}
                target="_blank"
                rel="noreferrer"
                className="paper-box inline-flex items-center gap-2 px-4 py-3 text-sm font-bold text-slate-900 hover:bg-amber-100 transition-colors"
                aria-label="GitHub Profile"
                data-cursor-text="GITHUB"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.37 1.08 2.95.83a2.2 2.2 0 0 1 .65-1.38c-2.22-.25-4.56-1.11-4.56-4.93A3.86 3.86 0 0 1 6.8 7.1a3.6 3.6 0 0 1 .1-2.66s.84-.27 2.75 1.02a9.38 9.38 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.37.84.4 1.8.1 2.66a3.86 3.86 0 0 1 1.03 2.68c0 3.83-2.34 4.67-4.57 4.92a2.47 2.47 0 0 1 .7 1.92v2.85c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                ref={linkedinBtnRef}
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="paper-box inline-flex items-center gap-2 px-4 py-3 text-sm font-bold text-slate-900 hover:bg-sky-100 transition-colors"
                aria-label="LinkedIn Profile"
                data-cursor-text="LINKEDIN"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Micro Highlights Pill Row */}
            <div ref={microStatsRef} className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5">
                <PixelStar size={12} color="#10B981" /> React, Node, Express &amp; MongoDB
              </span>
              <span className="flex items-center gap-1.5">
                <PixelStar size={12} color="#F59E0B" /> Apache Spark, Kafka &amp; AWS
              </span>
            </div>
          </div>

          {/* Right Column: Illustrated Developer Scene */}
          <div ref={illustrationColRef} className="lg:col-span-5 relative mt-6 lg:mt-0">
            <DeveloperHeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
