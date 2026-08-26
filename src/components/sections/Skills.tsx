"use client";

import React, { useEffect, useRef } from "react";
import profile from "@/data/profile.json";
import { PixelCategoryIcon, PixelStar } from "@/components/common/PixelDecorations";
import { DoodleSparkle } from "@/components/common/DoodleDecorations";
import { gsap } from "@/components/animations/gsap-setup";

const categoryStyles: Record<
  string,
  {
    bg: string;
    badgeBg: string;
    border: string;
    tagBg: string;
    tagBorder: string;
  }
> = {
  programming: {
    bg: "bg-amber-50/60",
    badgeBg: "bg-amber-300 text-slate-950",
    border: "border-slate-900",
    tagBg: "bg-white hover:bg-amber-100",
    tagBorder: "border-slate-800",
  },
  fullstack: {
    bg: "bg-sky-50/60",
    badgeBg: "bg-sky-300 text-slate-950",
    border: "border-slate-900",
    tagBg: "bg-white hover:bg-sky-100",
    tagBorder: "border-slate-800",
  },
  bigdata: {
    bg: "bg-indigo-50/60",
    badgeBg: "bg-indigo-300 text-slate-950",
    border: "border-slate-900",
    tagBg: "bg-white hover:bg-indigo-100",
    tagBorder: "border-slate-800",
  },
  streaming: {
    bg: "bg-rose-50/60",
    badgeBg: "bg-rose-300 text-slate-950",
    border: "border-slate-900",
    tagBg: "bg-white hover:bg-rose-100",
    tagBorder: "border-slate-800",
  },
  cloud: {
    bg: "bg-emerald-50/60",
    badgeBg: "bg-emerald-300 text-slate-950",
    border: "border-slate-900",
    tagBg: "bg-white hover:bg-emerald-100",
    tagBorder: "border-slate-800",
  },
  datawarehousing: {
    bg: "bg-purple-50/60",
    badgeBg: "bg-purple-300 text-slate-950",
    border: "border-slate-900",
    tagBg: "bg-white hover:bg-purple-100",
    tagBorder: "border-slate-800",
  },
  orchestration: {
    bg: "bg-orange-50/60",
    badgeBg: "bg-orange-300 text-slate-950",
    border: "border-slate-900",
    tagBg: "bg-white hover:bg-orange-100",
    tagBorder: "border-slate-800",
  },
  tools: {
    bg: "bg-teal-50/60",
    badgeBg: "bg-teal-300 text-slate-950",
    border: "border-slate-900",
    tagBg: "bg-white hover:bg-teal-100",
    tagBorder: "border-slate-800",
  },
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      // 2. Staggered Skill Cards Grid
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 40, opacity: 0, scale: 0.92, rotate: -2 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: gridRef.current,
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
      id="skills"
      className="relative py-16 md:py-24 border-t-2 border-slate-900 bg-[#FAF7F2]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-200 border-2 border-slate-900 rounded-md font-mono text-xs font-black uppercase shadow-[2px_2px_0px_#0f172a]">
            <span>TOOLBOX &amp; STACK // 03</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase">
              Technical Skill Matrix
            </h2>
            <DoodleSparkle className="w-6 h-6 animate-spin" color="#38BDF8" />
          </div>
          <p className="font-mono text-xs sm:text-sm text-slate-600 font-bold uppercase tracking-wider">
            Categorized capabilities across software development, streaming, and cloud platforms
          </p>
        </div>

        {/* 8 Illustrated Category Cards Grid */}
        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profile.skillCategories.map((category) => {
            const style = categoryStyles[category.id] || categoryStyles.programming;

            return (
              <div
                key={category.id}
                className={`paper-box p-5 ${style.bg} flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#0f172a]`}
                data-cursor-text={category.title.toUpperCase()}
              >
                <div>
                  {/* Category Header with Pixel Icon & Title */}
                  <div className="flex items-center justify-between pb-3 border-b-2 border-slate-900/40 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border-2 border-slate-900 ${style.badgeBg} shadow-[2px_2px_0px_#0f172a] group-hover:scale-115 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <PixelCategoryIcon name={category.icon} className="h-4 w-4" />
                      </div>
                      <h3 className="font-display text-base font-extrabold text-slate-900">
                        {category.title}
                      </h3>
                    </div>
                    <PixelStar size={10} color="#0F172A" />
                  </div>

                  {/* Skills Pill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border-1.5 ${style.tagBorder} ${style.tagBg} font-mono text-xs font-bold text-slate-800 shadow-[1.5px_1.5px_0px_#0f172a] transition-all hover:-translate-y-1 hover:shadow-[3px_3px_0px_#0f172a]`}
                      >
                        <span className="h-1 w-1 rounded-full bg-slate-700" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Micro Category Tag */}
                <div className="mt-4 pt-3 border-t border-dashed border-slate-400/60 flex items-center justify-between text-[10px] font-mono font-bold text-slate-500">
                  <span>{category.skills.length} TECHNOLOGIES</span>
                  <span className="text-slate-800">READY</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
