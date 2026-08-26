"use client";

import React from "react";
import profile from "@/data/profile.json";
import { PixelStar } from "@/components/common/PixelDecorations";
import { useMagneticButton } from "@/components/animations/gsap-setup";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const topBtnRef = useMagneticButton<HTMLAnchorElement>(0.4);

  return (
    <footer className="relative mt-20 border-t-3 border-slate-900 bg-slate-900 text-white overflow-hidden">
      {/* Decorative top airmail pattern ribbon */}
      <div
        className="h-3 w-full bg-repeating-linear-gradient flex"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #EF4444, #EF4444 15px, #FFFFFF 15px, #FFFFFF 30px, #3B82F6 30px, #3B82F6 45px, #FFFFFF 45px, #FFFFFF 60px)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          {/* Magazine Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-3 py-1 rounded-md border-2 border-white font-mono text-xs font-black shadow-[2px_2px_0px_#ffffff]">
              <span>MAGAZINE EDITION 2026</span>
              <PixelStar size={10} color="#0F172A" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white">
              {profile.name}
            </h3>

            <p className="max-w-md text-sm text-slate-300 leading-relaxed">
              Software Developer engineering modern full-stack web applications and robust distributed big data pipelines with React, Node.js, Python, Apache Spark, and AWS.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Available for full-time engineering roles &amp; select freelance projects</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <p className="font-bold text-amber-300 tracking-wider uppercase text-sm border-b border-slate-700 pb-1">
              Table of Contents
            </p>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>→</span> About Developer
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>→</span> Technical Skills
                </a>
              </li>
              <li>
                <a href="#freelance" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>→</span> Freelance Projects
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>→</span> Featured Systems
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>→</span> Education &amp; Certs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>→</span> Contact Dispatch
                </a>
              </li>
            </ul>
          </div>

          {/* Postcard Stamp / Dispatch */}
          <div className="md:col-span-3 space-y-4">
            <div className="p-4 rounded-xl bg-slate-800 border-2 border-slate-700 shadow-[3px_3px_0px_#38bdf8]">
              <div className="flex items-center justify-between text-[11px] font-mono text-sky-400 pb-2 border-b border-slate-700 font-bold">
                <span>POSTMARK</span>
                <span>TIRUPPUR, TN</span>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-snug">
                Let&apos;s build scalable systems and impactful data products together.
              </p>
              <div className="mt-3">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="inline-block w-full text-center py-1.5 px-3 bg-amber-400 text-slate-950 font-mono text-xs font-bold rounded-lg hover:bg-amber-300 transition-colors"
                  data-cursor-text="MAIL"
                >
                  manilg26krish@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {profile.name}. Hand-crafted with Next.js, GSAP &amp; Tailwind CSS.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-amber-300 transition-colors"
              data-cursor-text="GITHUB"
            >
              GitHub
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-amber-300 transition-colors"
              data-cursor-text="LINKEDIN"
            >
              LinkedIn
            </a>
            <a
              href={profile.contact.website}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-amber-300 transition-colors"
              data-cursor-text="WEB"
            >
              Live Portfolio
            </a>
            <a
              ref={topBtnRef}
              href="#hero"
              className="flex items-center gap-1 text-amber-300 hover:text-amber-200 transition-colors font-mono font-bold"
              aria-label="Back to top"
              data-cursor-text="TOP"
            >
              <span>TOP</span>
              <span>↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
