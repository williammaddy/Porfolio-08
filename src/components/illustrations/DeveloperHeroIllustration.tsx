"use client";

import React, { useEffect, useRef } from "react";
import { DoodleSparkle, DoodleStar } from "@/components/common/DoodleDecorations";
import { PixelStar } from "@/components/common/PixelDecorations";
import { gsap, useMagneticTilt } from "@/components/animations/gsap-setup";

export default function DeveloperHeroIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useMagneticTilt<HTMLDivElement>({ maxRotation: 6, scale: 1.01 });

  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);
  const badge3Ref = useRef<HTMLDivElement>(null);
  const badge4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.matchMedia("(pointer: coarse)").matches) return;

    // Mouse parallax tracking on floating badges
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const xNorm = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const yNorm = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

      if (badge1Ref.current) {
        gsap.to(badge1Ref.current, { x: xNorm * -15, y: yNorm * -12, duration: 0.4, ease: "power2.out" });
      }
      if (badge2Ref.current) {
        gsap.to(badge2Ref.current, { x: xNorm * 18, y: yNorm * -14, duration: 0.4, ease: "power2.out" });
      }
      if (badge3Ref.current) {
        gsap.to(badge3Ref.current, { x: xNorm * -12, y: yNorm * 16, duration: 0.4, ease: "power2.out" });
      }
      if (badge4Ref.current) {
        gsap.to(badge4Ref.current, { x: xNorm * 15, y: yNorm * 12, duration: 0.4, ease: "power2.out" });
      }
    };

    const handleMouseLeave = () => {
      const badges = [badge1Ref.current, badge2Ref.current, badge3Ref.current, badge4Ref.current];
      badges.forEach((b) => {
        if (b) gsap.to(b, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-[520px] mx-auto select-none perspective-1000">
      {/* Decorative background ambient blobs */}
      <div
        className="absolute -top-6 -left-6 w-72 h-72 rounded-full bg-sky-200/60 blur-2xl -z-10 animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full bg-amber-200/50 blur-2xl -z-10 animate-float-reverse"
        aria-hidden="true"
      />

      {/* Floating Badge 1: Full Stack Web */}
      <div
        ref={badge1Ref}
        className="absolute -top-4 -left-2 z-20 bg-white border-2 border-slate-900 px-3.5 py-1.5 rounded-xl shadow-[3px_3px_0px_#0f172a] rotate-[-4deg] animate-float transition-shadow hover:shadow-[5px_5px_0px_#38bdf8]"
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-sky-500" />
          <span className="font-mono text-xs font-bold text-slate-900">
            &lt;React / Node.js&gt;
          </span>
        </div>
      </div>

      {/* Floating Badge 2: Kafka + Spark Data Stream */}
      <div
        ref={badge2Ref}
        className="absolute -top-2 -right-2 z-20 bg-amber-300 border-2 border-slate-900 px-3.5 py-1.5 rounded-xl shadow-[3px_3px_0px_#0f172a] rotate-[3deg] animate-float-reverse transition-shadow hover:shadow-[5px_5px_0px_#0f172a]"
      >
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-xs font-bold text-slate-950">
            ⚡ Spark + Kafka Stream
          </span>
        </div>
      </div>

      {/* Floating Badge 3: AWS Medallion */}
      <div
        ref={badge3Ref}
        className="absolute -bottom-4 -left-3 z-20 bg-emerald-300 border-2 border-slate-900 px-3.5 py-1.5 rounded-xl shadow-[3px_3px_0px_#0f172a] rotate-[2deg] animate-float-slow transition-shadow hover:shadow-[5px_5px_0px_#0f172a]"
      >
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-xs font-bold text-slate-950">
            🗄️ Medallion Architecture
          </span>
        </div>
      </div>

      {/* Floating Badge 4: Production Ready */}
      <div
        ref={badge4Ref}
        className="absolute -bottom-3 -right-2 z-20 bg-white border-2 border-slate-900 px-3.5 py-1.5 rounded-xl shadow-[3px_3px_0px_#0f172a] rotate-[-3deg] animate-float transition-shadow hover:shadow-[5px_5px_0px_#10b981]"
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-mono text-xs font-bold text-slate-900">
            Docker &amp; Cloud Ready
          </span>
        </div>
      </div>

      {/* Main Illustration Canvas with Magnetic 3D Tilt */}
      <div
        ref={cardRef}
        className="relative bg-white border-3 border-slate-900 rounded-3xl p-4 sm:p-6 shadow-[8px_8px_0px_#0f172a] overflow-hidden"
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3 mb-4 bg-slate-100/70 -mx-4 -mt-4 px-5 pt-3 sm:-mx-6 sm:-mt-6">
          <div className="flex items-center gap-1.5">
            <span className="h-3.5 w-3.5 rounded-full border-1.5 border-slate-900 bg-rose-400" />
            <span className="h-3.5 w-3.5 rounded-full border-1.5 border-slate-900 bg-amber-400" />
            <span className="h-3.5 w-3.5 rounded-full border-1.5 border-slate-900 bg-emerald-400" />
          </div>
          <div className="font-mono text-[11px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-300">
            mani-workspace.exe
          </div>
          <div className="flex gap-1 text-slate-400 font-mono text-xs font-bold">
            _ ▢ ✕
          </div>
        </div>

        {/* Illustrated SVG Scene */}
        <svg
          viewBox="0 0 460 330"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-sm"
        >
          {/* Background Grid Accent */}
          <defs>
            <pattern id="grid-pattern" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#f1f5f9" strokeWidth="1" />
            </pattern>
            <linearGradient id="stream-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="460" height="330" fill="url(#grid-pattern)" rx="16" />

          {/* Cloud Platform Symbol (AWS) */}
          <g className="animate-float-slow" transform="translate(20, 25)">
            <path
              d="M30 40 C20 40, 10 32, 10 22 C10 12, 22 8, 30 12 C35 2, 55 2, 60 12 C68 8, 80 12, 80 22 C80 32, 70 40, 60 40 Z"
              fill="#E0F2FE"
              stroke="#0F172A"
              strokeWidth="2.5"
            />
            <text x="45" y="27" textAnchor="middle" fill="#0284C7" fontSize="10" fontFamily="monospace" fontWeight="bold">AWS S3</text>
          </g>

          {/* Database Cylinder Stack */}
          <g transform="translate(370, 30)" className="animate-float-reverse">
            <path d="M5 45 C5 38 65 38 65 45 L65 60 C65 67 5 67 5 60 Z" fill="#DDD6FE" stroke="#0F172A" strokeWidth="2.5" />
            <path d="M5 25 C5 18 65 18 65 25 L65 40 C65 47 5 47 5 40 Z" fill="#C4B5FD" stroke="#0F172A" strokeWidth="2.5" />
            <path d="M5 5 C5 -2 65 -2 65 5 L65 20 C65 27 5 27 5 20 Z" fill="#A78BFA" stroke="#0F172A" strokeWidth="2.5" />
            <ellipse cx="35" cy="5" rx="30" ry="7" fill="#DDD6FE" stroke="#0F172A" strokeWidth="2.5" />
            <text x="35" y="42" textAnchor="middle" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold">DELTA</text>
          </g>

          {/* Kafka / Spark Data Stream Wave */}
          <path
            d="M 50 110 C 130 70, 200 130, 280 85 C 340 50, 390 100, 420 70"
            stroke="url(#stream-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            className="animate-stream-flow"
          />

          {/* Flowing Data Packets (Circles) */}
          <circle cx="100" cy="98" r="5" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" className="animate-pulse" />
          <circle cx="210" cy="108" r="5" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" className="animate-pulse" />
          <circle cx="330" cy="72" r="5" fill="#10B981" stroke="#0F172A" strokeWidth="2" className="animate-pulse" />

          {/* Desk Surface */}
          <rect x="30" y="245" width="400" height="12" rx="6" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.5" />
          <rect x="70" y="257" width="16" height="50" rx="3" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.5" />
          <rect x="374" y="257" width="16" height="50" rx="3" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.5" />

          {/* Developer Character */}
          <g transform="translate(170, 100)">
            {/* Body / Hoodie */}
            <path
              d="M 25 105 C 25 80, 95 80, 95 105 L 105 145 C 105 148, 15 148, 15 145 Z"
              fill="#0284C7"
              stroke="#0F172A"
              strokeWidth="3"
            />
            {/* Hoodie Collar / Drawstring */}
            <path d="M 50 86 L 60 105 L 70 86" fill="#0369A1" stroke="#0F172A" strokeWidth="2" />
            <circle cx="56" cy="115" r="2" fill="#FFFFFF" />
            <circle cx="64" cy="115" r="2" fill="#FFFFFF" />

            {/* Neck */}
            <rect x="52" y="70" width="16" height="18" fill="#FCD34D" stroke="#0F172A" strokeWidth="2" rx="4" />

            {/* Head */}
            <ellipse cx="60" cy="52" rx="26" ry="28" fill="#FDE68A" stroke="#0F172A" strokeWidth="3" />

            {/* Hair */}
            <path
              d="M 34 50 C 30 30, 42 16, 60 16 C 78 16, 90 28, 86 48 C 84 32, 78 26, 60 26 C 45 26, 38 36, 34 50 Z"
              fill="#0F172A"
              stroke="#0F172A"
              strokeWidth="2.5"
            />
            <path d="M 40 24 C 45 14, 58 12, 65 14 C 75 16, 82 22, 85 28" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

            {/* Glasses */}
            <rect x="42" y="44" width="15" height="13" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
            <rect x="63" y="44" width="15" height="13" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
            <line x1="57" y1="50" x2="63" y2="50" stroke="#0F172A" strokeWidth="2.5" />

            {/* Eyes */}
            <circle cx="50" cy="50" r="2.5" fill="#0F172A" />
            <circle cx="70" cy="50" r="2.5" fill="#0F172A" />
            <circle cx="51" cy="48.5" r="0.8" fill="#FFFFFF" />
            <circle cx="71" cy="48.5" r="0.8" fill="#FFFFFF" />

            {/* Cheerful Smile */}
            <path d="M 54 62 Q 60 67 66 62" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Blush */}
            <ellipse cx="42" cy="58" rx="3.5" ry="2" fill="#FCA5A5" />
            <ellipse cx="78" cy="58" rx="3.5" ry="2" fill="#FCA5A5" />

            {/* Arms typing on laptop */}
            <path d="M 22 105 Q 10 120 30 135 L 42 135" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
            <path d="M 22 105 Q 10 120 30 135 L 42 135" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />

            <path d="M 98 105 Q 110 120 90 135 L 78 135" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
            <path d="M 98 105 Q 110 120 90 135 L 78 135" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
          </g>

          {/* Laptop on Desk */}
          <g transform="translate(180, 205)">
            <rect x="15" y="-35" width="90" height="58" rx="6" fill="#0F172A" stroke="#0F172A" strokeWidth="2.5" />
            <rect x="20" y="-30" width="80" height="48" rx="3" fill="#1E293B" />
            
            {/* Screen Content */}
            <text x="25" y="-20" fill="#38BDF8" fontSize="6.5" fontFamily="monospace" fontWeight="bold">const app = () =&gt; &#123;</text>
            <text x="30" y="-12" fill="#F472B6" fontSize="6.5" fontFamily="monospace">  spark.readStream()</text>
            <text x="30" y="-4" fill="#FDE047" fontSize="6.5" fontFamily="monospace">  .format(&quot;kafka&quot;)</text>
            <text x="25" y="4" fill="#34D399" fontSize="6.5" fontFamily="monospace">&#125;; return &lt;Vibe /&gt;;</text>

            {/* Laptop Keyboard Base */}
            <path d="M 5 24 L 115 24 L 125 38 L -5 38 Z" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2.5" />
            <rect x="42" y="30" width="36" height="5" rx="2" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1" />
          </g>

          {/* Coffee Mug on Desk */}
          <g transform="translate(325, 218)">
            <rect x="0" y="8" width="22" height="26" rx="4" fill="#F43F5E" stroke="#0F172A" strokeWidth="2" />
            <path d="M 22 13 C 28 13 28 23 22 23" fill="none" stroke="#0F172A" strokeWidth="2" />
            <path d="M 6 4 Q 8 0 6 -4" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" fill="none" className="animate-float" />
            <path d="M 14 4 Q 16 0 14 -4" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" fill="none" className="animate-float-slow" />
          </g>

          {/* Plant on Desk */}
          <g transform="translate(100, 205)">
            <path d="M 6 22 L 20 22 L 18 38 L 8 38 Z" fill="#FB923C" stroke="#0F172A" strokeWidth="2" />
            <ellipse cx="13" cy="14" rx="7" ry="12" fill="#22C55E" stroke="#0F172A" strokeWidth="2" />
            <ellipse cx="6" cy="16" rx="5" ry="9" fill="#16A34A" stroke="#0F172A" strokeWidth="2" transform="rotate(-30 6 16)" />
            <ellipse cx="20" cy="16" rx="5" ry="9" fill="#16A34A" stroke="#0F172A" strokeWidth="2" transform="rotate(30 20 16)" />
          </g>

          {/* Floating Code Icons & Symbols */}
          <g transform="translate(60, 150)" className="animate-float">
            <rect width="36" height="24" rx="5" fill="#FEF08A" stroke="#0F172A" strokeWidth="2" />
            <text x="18" y="16" textAnchor="middle" fill="#0F172A" fontSize="12" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
          </g>

          <g transform="translate(355, 140)" className="animate-float-slow">
            <rect width="40" height="24" rx="5" fill="#BAE6FD" stroke="#0F172A" strokeWidth="2" />
            <text x="20" y="16" textAnchor="middle" fill="#0F172A" fontSize="11" fontFamily="monospace" fontWeight="bold">&#123;SQL&#125;</text>
          </g>
        </svg>

        {/* Footer status line inside window */}
        <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-200 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <PixelStar size={12} color="#F59E0B" />
            <span>Full-Stack &amp; Data Pipeline Architecture</span>
          </div>
          <span className="font-bold text-slate-800">100% Scalable</span>
        </div>
      </div>

      {/* Decorative Doodles */}
      <DoodleSparkle className="absolute -bottom-6 left-12 w-6 h-6 animate-pulse" color="#F59E0B" />
      <DoodleStar className="absolute top-12 -left-8 w-7 h-7 rotate-12 animate-wiggle" color="#F472B6" />
      <PixelStar className="absolute top-6 right-10 animate-float" size={16} color="#38BDF8" />
    </div>
  );
}
