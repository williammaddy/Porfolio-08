"use client";

import React, { useEffect, useRef } from "react";
import profile from "@/data/profile.json";
import {
  DoodleSparkle,
  DoodleArrow,
} from "@/components/common/DoodleDecorations";
import {
  gsap,
  useMagneticTilt,
} from "@/components/animations/gsap-setup";

export default function Freelance() {
  const project = profile.freelanceProject;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const clientCardRef = useMagneticTilt<HTMLDivElement>({
    maxRotation: 5,
    scale: 1.01,
  });
  const checklistRef = useRef<HTMLDivElement>(null);
  const mockDashboardRef = useRef<HTMLDivElement>(null);

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

      // 2. Client Card Entrance
      if (clientCardRef.current) {
        gsap.fromTo(
          clientCardRef.current,
          { y: 50, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: clientCardRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 3. Checklist Items
      if (checklistRef.current) {
        gsap.fromTo(
          checklistRef.current.children,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: checklistRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 4. Dashboard Items
      if (mockDashboardRef.current) {
        gsap.fromTo(
          mockDashboardRef.current.children,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: mockDashboardRef.current,
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
      id="freelance"
      className="relative py-16 md:py-24 border-t-2 border-slate-900 bg-amber-50/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col items-start gap-2 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-300 border-2 border-slate-900 rounded-md font-mono text-xs font-black uppercase shadow-[2px_2px_0px_#0f172a]">
            <span>FEATURED CLIENT WORK // 04</span>
          </div>

          <div className="flex items-center gap-3">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase">
              Client Project
            </h2>

            <DoodleSparkle
              className="w-6 h-6 animate-pulse"
              color="#F59E0B"
            />
          </div>

          <p className="font-mono text-xs sm:text-sm text-slate-600 font-bold uppercase tracking-wider">
            Real-world commercial platform successfully delivered for a business client
          </p>
        </div>

        {/* Featured Project Card */}
        <div
          ref={clientCardRef}
          className="paper-card-interactive bg-white p-6 sm:p-10 relative overflow-hidden"
          data-cursor-text="CLIENT"
        >

          {/* Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-slate-900">

            <div className="flex flex-wrap items-center gap-3">

              {/* Completed Status */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100 border-2 border-slate-900 rounded-full font-mono text-xs font-bold text-emerald-950 shadow-[2px_2px_0px_#0f172a]">

                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>

                <span>
                  STATUS: {project.status.toUpperCase()}
                </span>
              </div>

              <span className="font-mono text-xs font-bold text-slate-500 uppercase">
                {project.category}
              </span>
            </div>

            {/* Completed Badge */}
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold bg-emerald-200 border-2 border-slate-900 px-3 py-1 rounded-md shadow-[2px_2px_0px_#0f172a] rotate-1">
              <span>★ CLIENT PROJECT — COMPLETED</span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center mt-6">

            {/* Left: Project Details */}
            <div className="lg:col-span-7 space-y-5">

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  {project.title}
                </h3>

                <p className="font-mono text-xs font-bold text-sky-600 uppercase mt-1">
                  {project.badge}
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="space-y-2.5 pt-2">

                <p className="font-mono text-xs font-black uppercase tracking-wider text-slate-500">
                  Key Delivered Capabilities:
                </p>

                <div
                  ref={checklistRef}
                  className="grid gap-2 sm:grid-cols-2"
                >
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium bg-slate-50 p-2.5 rounded-lg border border-slate-300 transition-all hover:bg-emerald-50/60 hover:border-emerald-400"
                    >
                      <span className="text-emerald-600 font-bold font-mono">
                        ✓
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-3">

                <p className="font-mono text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                  Technology Stack:
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="paper-tag bg-sky-100 text-sky-950 text-xs font-bold hover:scale-105 transition-transform"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Website Button */}
              {project.live && (
                <div className="pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#dc2626] text-white border-2 border-slate-900 rounded-md font-mono text-xs font-black uppercase shadow-[3px_3px_0px_#0f172a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#0f172a] transition-all"
                  >
                    View Live Project
                    <span>↗</span>
                  </a>
                </div>
              )}
            </div>

            {/* Right: Project Preview */}
            <div className="lg:col-span-5 relative">

              <div className="paper-box bg-slate-900 text-white p-5 space-y-4 shadow-[6px_6px_0px_#0f172a]">

                {/* Store Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">

                  <div className="flex items-center gap-2">

                    <span className="text-xl animate-wiggle inline-block">
                      🛒
                    </span>

                    <div>
                      <div className="font-mono text-xs font-bold text-amber-300">
                        SURYA STORES
                      </div>

                      <div className="font-mono text-[10px] text-slate-400">
                        E-COMMERCE &amp; ORDER MANAGEMENT
                      </div>
                    </div>

                  </div>

                  {/* Live */}
                  <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-500 px-2 py-0.5 rounded">
                    LIVE
                  </span>

                </div>

                {/* Dashboard */}
                <div
                  ref={mockDashboardRef}
                  className="space-y-2 font-mono text-xs"
                >

                  <div className="p-2.5 rounded bg-slate-800 border border-slate-700 flex justify-between items-center hover:border-sky-400 transition-colors">
                    <span className="text-slate-300">
                      🛍️ Customer Catalog:
                    </span>

                    <span className="text-emerald-400 font-bold">
                      Live
                    </span>
                  </div>

                  <div className="p-2.5 rounded bg-slate-800 border border-slate-700 flex justify-between items-center hover:border-sky-400 transition-colors">
                    <span className="text-slate-300">
                      🛒 Shopping Cart:
                    </span>

                    <span className="text-sky-400 font-bold">
                      Enabled
                    </span>
                  </div>

                  <div className="p-2.5 rounded bg-slate-800 border border-slate-700 flex justify-between items-center hover:border-sky-400 transition-colors">
                    <span className="text-slate-300">
                      🔐 Auth &amp; Roles:
                    </span>

                    <span className="text-purple-400 font-bold">
                      JWT Protected
                    </span>
                  </div>

                  <div className="p-2.5 rounded bg-slate-800 border border-slate-700 flex justify-between items-center hover:border-sky-400 transition-colors">
                    <span className="text-slate-300">
                      📦 Admin Portal:
                    </span>

                    <span className="text-amber-400 font-bold">
                      Orders &amp; Products
                    </span>
                  </div>

                </div>

                {/* Footer */}
                <div className="pt-2 border-t border-slate-700 flex items-center justify-between text-[11px] font-mono text-slate-400">

                  <span>
                    Backend: Express / MongoDB
                  </span>

                  <span className="text-emerald-400 font-bold">
                    ● PRODUCTION
                  </span>

                </div>
              </div>

              {/* Note */}
              <div className="hidden sm:flex items-center gap-2 mt-3 text-slate-700">

                <DoodleArrow
                  className="w-10 h-5 text-amber-600 animate-wiggle"
                />

                <span className="font-hand text-lg font-bold text-amber-800">
                  Successfully delivered &amp; deployed! 🚀
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}