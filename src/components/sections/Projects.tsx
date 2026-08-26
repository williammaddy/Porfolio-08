"use client";

import React, { useEffect, useRef } from "react";
import profile from "@/data/profile.json";
import DataPipelineFlow from "@/components/illustrations/DataPipelineFlow";
import MedallionFlow from "@/components/illustrations/MedallionFlow";
import { DoodleStar } from "@/components/common/DoodleDecorations";
import { PixelStar } from "@/components/common/PixelDecorations";
import { gsap } from "@/components/animations/gsap-setup";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header reveal
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

      // 2. Project Cards Stagger
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.18,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
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
      id="projects"
      className="relative py-16 md:py-24 border-t-2 border-slate-900 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-300 border-2 border-slate-900 rounded-md font-mono text-xs font-black uppercase shadow-[2px_2px_0px_#0f172a]">
            <span>ENGINEERED SYSTEMS // 05</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase">
              Featured Projects
            </h2>
            <DoodleStar className="w-7 h-7 animate-wiggle" color="#F472B6" />
          </div>
          <p className="font-mono text-xs sm:text-sm text-slate-600 font-bold uppercase tracking-wider">
            Production-grade full stack applications &amp; enterprise distributed data platforms
          </p>
        </div>

        {/* 4 Illustrated Project Cards Grid */}
        <div ref={gridRef} className="grid gap-10 md:grid-cols-2">
          {profile.projects.map((project, index) => {
            const isStreaming = project.type === "streaming";
            const isMedallion = project.type === "medallion";

            return (
              <article
                key={project.id}
                className="paper-card-interactive bg-[#FFFDF9] p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:shadow-[10px_10px_0px_#0f172a]"
                data-cursor-text={`0${index + 1}`}
              >
                {/* Project Number / Category Badge */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b-2 border-slate-900 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black bg-slate-900 text-white px-2.5 py-1 rounded-md shadow-[2px_2px_0px_#38bdf8]">
                        PROJECT 0{index + 1}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-600 uppercase">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <PixelStar size={12} color="#0F172A" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-xl sm:text-2xl font-black text-slate-950 tracking-tight group-hover:text-sky-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-1 font-mono text-xs font-bold text-slate-500">
                    {project.subtitle}
                  </p>

                  {/* Main Description */}
                  <p className="mt-4 text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                    {project.description}
                  </p>

                  {/* Embedded Visual Architecture Flows */}
                  {isStreaming && <DataPipelineFlow />}
                  {isMedallion && <MedallionFlow />}

                  {/* Feature Bullets List */}
                  <div className="mt-4 space-y-2">
                    <p className="font-mono text-xs font-black uppercase tracking-wider text-slate-500">
                      Key Architectural Highlights:
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-sky-600 font-bold font-mono">✦</span>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack & Action Links */}
                <div className="mt-6 pt-4 border-t-2 border-slate-900 space-y-4">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="paper-tag bg-slate-100 text-slate-900 text-[11px] group-hover:bg-amber-100 hover:scale-105 transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="paper-btn-secondary text-xs py-1.5 px-3.5 gap-1.5 hover:scale-105 transition-transform"
                          aria-label={`View ${project.title} on GitHub`}
                          data-cursor-text="CODE"
                        >
                          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.37 1.08 2.95.83a2.2 2.2 0 0 1 .65-1.38c-2.22-.25-4.56-1.11-4.56-4.93A3.86 3.86 0 0 1 6.8 7.1a3.6 3.6 0 0 1 .1-2.66s.84-.27 2.75 1.02a9.38 9.38 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.37.84.4 1.8.1 2.66a3.86 3.86 0 0 1 1.03 2.68c0 3.83-2.34 4.67-4.57 4.92a2.47 2.47 0 0 1 .7 1.92v2.85c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                          </svg>
                          <span>GitHub Repository</span>
                          <span>↗</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="paper-btn-primary text-xs py-1.5 px-3.5 gap-1.5 hover:scale-105 transition-transform"
                          data-cursor-text="DEMO"
                        >
                          <span>Live Demo</span>
                          <span>↗</span>
                        </a>
                      )}
                    </div>

                    <span className="font-mono text-[11px] font-bold text-slate-500">
                      VERIFIED CODE
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
