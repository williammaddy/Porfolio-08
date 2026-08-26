"use client";

import React, { useEffect, useRef } from "react";
import profile from "@/data/profile.json";
import { DoodleArrow, DoodleSparkle } from "@/components/common/DoodleDecorations";
import { gsap, useMagneticTilt } from "@/components/animations/gsap-setup";

export default function Education() {
  const edu = profile.education;
  const certs = profile.certifications;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const eduCardRef = useMagneticTilt<HTMLDivElement>({ maxRotation: 6, scale: 1.02 });
  const certsListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Reveal
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

      // 2. Education Card
      if (eduCardRef.current) {
        gsap.fromTo(
          eduCardRef.current,
          { y: 40, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: eduCardRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 3. Certifications list and stamp bounce
      if (certsListRef.current) {
        gsap.fromTo(
          certsListRef.current.children,
          { x: 40, opacity: 0, scale: 0.95 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: certsListRef.current,
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
      id="education"
      className="relative py-16 md:py-24 border-t-2 border-slate-900 bg-[#FAF7F2]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-300 border-2 border-slate-900 rounded-md font-mono text-xs font-black uppercase shadow-[2px_2px_0px_#0f172a]">
            <span>ACADEMICS &amp; CREDENTIALS // 06</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase">
              Education &amp; Certifications
            </h2>
            <DoodleSparkle className="w-6 h-6 animate-pulse" color="#F59E0B" />
          </div>
          <p className="font-mono text-xs sm:text-sm text-slate-600 font-bold uppercase tracking-wider">
            Academic degree foundation and industry-focused professional certifications
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Education Timeline Card with 3D Tilt */}
          <div className="lg:col-span-6 space-y-6">
            <div
              ref={eduCardRef}
              className="paper-card-interactive bg-white p-6 sm:p-8"
              data-cursor-text="DEGREE"
            >
              {/* Timeline Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-slate-900 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎓</span>
                  <span className="font-mono text-xs font-black uppercase tracking-wider bg-sky-200 border-2 border-slate-900 px-2.5 py-1 rounded-md shadow-[2px_2px_0px_#0f172a]">
                    HIGHER EDUCATION
                  </span>
                </div>
                <span className="font-mono text-xs font-black bg-amber-300 border border-slate-900 px-2.5 py-1 rounded-md">
                  {edu.timeline}
                </span>
              </div>

              {/* Degree Title & University */}
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-black text-slate-950 tracking-tight">
                  {edu.degree}
                </h3>
                <p className="font-display text-base font-bold text-sky-800">
                  {edu.institution}
                </p>
                <p className="font-mono text-xs font-medium text-slate-500 flex items-center gap-1.5">
                  <span>📍</span> {edu.location}
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-6 pt-4 border-t-2 border-dashed border-slate-300 space-y-2">
                <p className="font-mono text-xs font-black uppercase text-slate-500">
                  Key Academic Focus:
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold font-mono">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline Marker Footer */}
              <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-xs text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-ping" />
                  Currently Pursuing (2023 - 2026)
                </span>
                <span className="font-bold text-slate-800">B.Sc CS</span>
              </div>
            </div>

            {/* Hand-drawn arrow note below education */}
            <div className="flex items-center gap-3 px-2">
              <DoodleArrow className="w-12 h-6 text-sky-600 animate-wiggle" />
              <span className="font-hand text-xl font-bold text-slate-800 rotate-[-1deg]">
                Building deep foundation in Computer Science &amp; Distributed Data
              </span>
            </div>
          </div>

          {/* Right Column: Certifications Cards Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="font-display text-xl font-black text-slate-900 uppercase flex items-center gap-2">
                <span>📜</span> Verified Certifications
              </h3>
              <span className="font-mono text-xs font-bold text-slate-500">3 VERIFIED CREDENTIALS</span>
            </div>

            <div ref={certsListRef} className="space-y-4">
              {certs.map((cert, index) => (
                <div
                  key={index}
                  className="paper-box p-5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 group transition-all duration-300 hover:shadow-[6px_6px_0px_#0f172a]"
                  data-cursor-text="CERT"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-200 border border-slate-900">
                        {cert.issuer}
                      </span>
                      <span className="font-mono text-[10px] font-bold text-slate-500 uppercase bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
                        {cert.badge}
                      </span>
                    </div>

                    <h4 className="font-display text-base sm:text-lg font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                      {cert.name}
                    </h4>

                    {/* Topics Pill Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {cert.topics.map((topic) => (
                        <span
                          key={topic}
                          className="font-mono text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-semibold"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stamp / Seal Icon with hover rotate effect */}
                  <div className="flex sm:flex-col items-center justify-center h-12 w-12 rounded-full border-2 border-slate-900 bg-amber-100 shadow-[2px_2px_0px_#0f172a] shrink-0 self-end sm:self-center group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-base">★</span>
                    <span className="font-mono text-[8px] font-black text-slate-800">VERIFIED</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
