"use client";

import React, { useEffect, useRef } from "react";
import profile from "@/data/profile.json";
import { DoodleCurvedArrow, DoodleSparkle, DoodleTape } from "@/components/common/DoodleDecorations";
import { PixelStar } from "@/components/common/PixelDecorations";
import { gsap, useMagneticTilt } from "@/components/animations/gsap-setup";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const profileCardRef = useMagneticTilt<HTMLDivElement>({ maxRotation: 8, scale: 1.02 });
  const bioBoxRef = useRef<HTMLDivElement>(null);
  const focusGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header scroll trigger
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 2. Left column (Profile Card & Stickers)
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 3. Right column (Editorial bio box)
      if (bioBoxRef.current) {
        gsap.fromTo(
          bioBoxRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bioBoxRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 4. Two Focus Cards
      if (focusGridRef.current) {
        gsap.fromTo(
          focusGridRef.current.children,
          { y: 35, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: focusGridRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-16 md:py-24 border-t-2 border-slate-900 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-200 border-2 border-slate-900 rounded-md font-mono text-xs font-black uppercase shadow-[2px_2px_0px_#0f172a]">
            <span>FEATURE STORY // 02</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase">
              About The Developer
            </h2>
            <DoodleSparkle className="w-6 h-6 animate-spin" color="#F59E0B" />
          </div>
          <p className="font-mono text-xs sm:text-sm text-slate-600 font-bold uppercase tracking-wider">
            Blending Full Stack Architecture with Big Data Engineering
          </p>
        </div>

        {/* Magazine 2-Column Grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Illustrated Profile Badge & Stickers */}
          <div ref={leftColRef} className="lg:col-span-5 relative perspective-1000">
            {/* Top Tape Sticker */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
              <DoodleTape color="bg-amber-300" />
            </div>

            {/* Profile Illustrated Card with 3D Tilt */}
            <div
              ref={profileCardRef}
              className="paper-card-interactive p-6 sm:p-8 bg-[#FFFDF9] text-center relative overflow-hidden"
              data-cursor-text="MANI"
            >
              {/* Decorative background watermark */}
              <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none font-display font-black text-9xl">
                MANI
              </div>

              {/* Character Avatar Container */}
              <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 rounded-full border-3 border-slate-900 bg-sky-100 p-2 shadow-[4px_4px_0px_#0f172a] mb-6 overflow-hidden transition-transform duration-300 hover:scale-105">
                {/* Illustrated Avatar Graphic */}
                <svg
                  viewBox="0 0 160 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle cx="80" cy="80" r="75" fill="#E0F2FE" />
                  
                  {/* Shoulders & Jacket */}
                  <path
                    d="M 25 155 C 25 115, 135 115, 135 155 Z"
                    fill="#0284C7"
                    stroke="#0F172A"
                    strokeWidth="3"
                  />
                  {/* Inner Shirt */}
                  <path d="M 65 125 L 80 150 L 95 125" fill="#FDE047" stroke="#0F172A" strokeWidth="2.5" />
                  
                  {/* Neck */}
                  <rect x="70" y="95" width="20" height="22" rx="4" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.5" />
                  
                  {/* Head */}
                  <ellipse cx="80" cy="72" rx="32" ry="34" fill="#FDE68A" stroke="#0F172A" strokeWidth="3" />
                  
                  {/* Stylized Hair */}
                  <path
                    d="M 46 68 C 42 42, 58 24, 80 24 C 102 24, 118 40, 114 65 C 110 46, 100 36, 80 36 C 62 36, 52 48, 46 68 Z"
                    fill="#0F172A"
                    stroke="#0F172A"
                    strokeWidth="3"
                  />
                  
                  {/* Glasses */}
                  <rect x="58" y="62" width="18" height="15" rx="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
                  <rect x="84" y="62" width="18" height="15" rx="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
                  <line x1="76" y1="70" x2="84" y2="70" stroke="#0F172A" strokeWidth="3" />
                  
                  {/* Eyes */}
                  <circle cx="67" cy="69" r="3" fill="#0F172A" />
                  <circle cx="93" cy="69" r="3" fill="#0F172A" />
                  
                  {/* Smile */}
                  <path d="M 72 84 Q 80 91 88 84" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" fill="none" />
                  
                  {/* Cheeks */}
                  <ellipse cx="58" cy="79" rx="4" ry="2.5" fill="#FCA5A5" />
                  <ellipse cx="102" cy="79" rx="4" ry="2.5" fill="#FCA5A5" />
                </svg>
              </div>

              {/* Developer Credentials Stamp */}
              <div className="space-y-1">
                <h3 className="font-display text-xl font-black text-slate-900">
                  {profile.name}
                </h3>
                <p className="font-mono text-xs font-bold text-sky-700">
                  {profile.role} &amp; Data Engineer
                </p>
                <p className="font-mono text-xs text-slate-500">
                  Bharathidasan University • 2023 - 2026
                </p>
              </div>

              {/* Skill Stickers on Card */}
              <div className="mt-6 pt-4 border-t-2 border-dashed border-slate-300 flex flex-wrap justify-center gap-2">
                <span className="paper-tag bg-sky-100 text-[11px] hover:scale-110 transition-transform">⚡ Full Stack</span>
                <span className="paper-tag bg-amber-100 text-[11px] hover:scale-110 transition-transform">🔥 Spark Streaming</span>
                <span className="paper-tag bg-emerald-100 text-[11px] hover:scale-110 transition-transform">☁️ AWS Medallion</span>
              </div>
            </div>

            {/* Doodle Arrow pointing to bio */}
            <div className="hidden lg:block absolute -right-6 top-1/3 z-20 animate-wiggle">
              <DoodleCurvedArrow className="w-16 h-14 text-slate-800 rotate-12" />
            </div>
          </div>

          {/* Right Column: Editorial Bio & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Bio Box (Editorial Magazine Style) */}
            <div ref={bioBoxRef} className="paper-box p-6 sm:p-8 bg-[#FAF7F2]">
              <div className="flex items-center gap-2 font-mono text-xs font-black text-slate-500 uppercase tracking-widest pb-3 border-b border-slate-300">
                <PixelStar size={12} color="#0F172A" />
                <span>PROFILE EDITORIAL BRIEF</span>
              </div>

              <p className="mt-4 text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                I’m a Software Developer focused on building scalable web applications and data-driven solutions. I work across full-stack development and data engineering, combining modern web technologies with cloud, big data, and distributed processing tools.
              </p>

              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether creating seamless, responsive user interfaces with React and Node.js or engineering resilient streaming pipelines with Apache Spark, Kafka, and Delta Lake, I approach engineering with a deep commitment to scalable architecture, clean code, and practical real-world impact.
              </p>
            </div>

            {/* Two Editorial Focus Feature Cards */}
            <div ref={focusGridRef} className="grid gap-4 sm:grid-cols-2">
              {/* Focus 1: Full-Stack Web */}
              <div
                className="paper-box p-5 bg-sky-50/70 border-sky-900 hover:scale-[1.02] transition-transform duration-200"
                data-cursor-text="WEB"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">💻</span>
                  <h4 className="font-display text-base font-bold text-slate-900">
                    Full Stack Engineering
                  </h4>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Building responsive, secure single-page web applications, REST APIs, JWT authentication, and MongoDB/SQL persistence layers.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[11px] font-bold text-sky-800">
                  <span>#React</span> <span>#Node.js</span> <span>#Express</span> <span>#MongoDB</span>
                </div>
              </div>

              {/* Focus 2: Data Engineering */}
              <div
                className="paper-box p-5 bg-amber-50/70 border-amber-900 hover:scale-[1.02] transition-transform duration-200"
                data-cursor-text="DATA"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚡</span>
                  <h4 className="font-display text-base font-bold text-slate-900">
                    Data &amp; Cloud Pipelines
                  </h4>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Designing event-driven streaming with Kafka, distributed processing with PySpark on Databricks, and AWS S3 Medallion storage.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[11px] font-bold text-amber-800">
                  <span>#ApacheSpark</span> <span>#Kafka</span> <span>#DeltaLake</span> <span>#AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
