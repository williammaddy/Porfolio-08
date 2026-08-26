"use client";

import React, { useState, useEffect, useRef } from "react";
import profile from "@/data/profile.json";
import { DoodleSparkle } from "@/components/common/DoodleDecorations";
import { PixelStar } from "@/components/common/PixelDecorations";
import { gsap, useMagneticTilt } from "@/components/animations/gsap-setup";

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const postcardRef = useMagneticTilt<HTMLDivElement>({ maxRotation: 5, scale: 1.01 });
  const channelsListRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

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

      // 2. Postcard Landing
      if (postcardRef.current) {
        gsap.fromTo(
          postcardRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: postcardRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 3. Channels Stagger
      if (channelsListRef.current) {
        gsap.fromTo(
          channelsListRef.current.children,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: channelsListRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 4. Socials Box Stagger
      if (socialsRef.current) {
        gsap.fromTo(
          socialsRef.current.children,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: socialsRef.current,
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
      id="contact"
      className="relative py-16 md:py-24 border-t-2 border-slate-900 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-300 border-2 border-slate-900 rounded-md font-mono text-xs font-black uppercase shadow-[2px_2px_0px_#0f172a]">
            <span>GET IN TOUCH // 07</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase">
              Editorial Mailbox &amp; Dispatch
            </h2>
            <DoodleSparkle className="w-6 h-6 animate-pulse" color="#F59E0B" />
          </div>
          <p className="font-mono text-xs sm:text-sm text-slate-600 font-bold uppercase tracking-wider">
            Let&apos;s connect about engineering roles, distributed systems, or freelance projects
          </p>
        </div>

        {/* Postcard Layout Box with 3D Tilt */}
        <div
          ref={postcardRef}
          className="paper-card-interactive bg-[#FFFDF9] p-6 sm:p-10 relative overflow-hidden"
          data-cursor-text="DISPATCH"
        >
          {/* Postcard top stamp & cancellation mark */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-slate-900">
            <div className="flex items-center gap-2">
              <span className="text-2xl animate-wiggle inline-block">📬</span>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-black text-slate-950">
                  Send a Dispatch to {profile.name}
                </h3>
                <p className="font-mono text-xs text-slate-500 font-bold">
                  DIRECT LINE • QUICK RESPONSE GUARANTEED
                </p>
              </div>
            </div>

            {/* Illustrated Postmark Stamp */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-lg border-2 border-dashed border-rose-500 bg-rose-50 text-rose-700 font-mono text-xs font-black rotate-[-2deg] shadow-xs hover:rotate-0 transition-transform">
                <span>POSTAGE PAID // TN 641</span>
              </div>
              <div className="h-10 w-10 rounded-full border-2 border-slate-900 bg-amber-200 flex items-center justify-center font-mono text-xs font-bold rotate-6 shadow-[2px_2px_0px_#0f172a] hover:rotate-12 transition-transform">
                <span>2026</span>
              </div>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center mt-8">
            {/* Left: Contact Direct Channels */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                Whether you&apos;re looking to recruit a versatile Software Developer with full-stack and big data capabilities, collaborate on a distributed data pipeline, or discuss freelance work, feel free to reach out directly!
              </p>

              {/* Direct Action Cards */}
              <div ref={channelsListRef} className="space-y-3 pt-2">
                {/* Email 1 */}
                <div className="paper-box p-4 bg-sky-50/70 border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-transform duration-200 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400 border-2 border-slate-900 text-slate-950 font-bold shadow-[2px_2px_0px_#0f172a]">
                      ✉
                    </div>
                    <div>
                      <div className="font-mono text-[10px] font-bold text-sky-800 uppercase">
                        Primary Email
                      </div>
                      <a
                        href={`mailto:${profile.contact.email}`}
                        className="font-mono text-xs sm:text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors"
                      >
                        {profile.contact.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(profile.contact.email, "email1")}
                    className="paper-btn-secondary text-xs py-1 px-3 self-start sm:self-auto hover:scale-105 active:scale-95 transition-transform"
                  >
                    {copiedType === "email1" ? "Copied! ✓" : "Copy Email"}
                  </button>
                </div>

                {/* Phone */}
                <div className="paper-box p-4 bg-amber-50/70 border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-transform duration-200 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400 border-2 border-slate-900 text-slate-950 font-bold shadow-[2px_2px_0px_#0f172a]">
                      📞
                    </div>
                    <div>
                      <div className="font-mono text-[10px] font-bold text-amber-800 uppercase">
                        Phone &amp; WhatsApp
                      </div>
                      <a
                        href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}
                        className="font-mono text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors"
                      >
                        {profile.contact.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(profile.contact.phone, "phone")}
                    className="paper-btn-secondary text-xs py-1 px-3 self-start sm:self-auto hover:scale-105 active:scale-95 transition-transform"
                  >
                    {copiedType === "phone" ? "Copied! ✓" : "Copy Phone"}
                  </button>
                </div>

                {/* Location */}
                <div className="paper-box p-4 bg-emerald-50/70 border-slate-900 flex items-center gap-3 transition-transform duration-200 hover:-translate-y-1">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400 border-2 border-slate-900 text-slate-950 font-bold shadow-[2px_2px_0px_#0f172a]">
                    📍
                  </div>
                  <div>
                    <div className="font-mono text-[10px] font-bold text-emerald-800 uppercase">
                      Current Location
                    </div>
                    <div className="font-mono text-xs sm:text-sm font-bold text-slate-900">
                      {profile.contact.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Social Portals & Fast Connect Box */}
            <div className="lg:col-span-5 space-y-4">
              <div className="paper-box p-6 bg-slate-900 text-white space-y-4 shadow-[6px_6px_0px_#0f172a]">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <h4 className="font-display text-base font-bold text-amber-300">
                    Online Profiles &amp; Repositories
                  </h4>
                  <PixelStar size={12} color="#FDE047" />
                </div>

                <div ref={socialsRef} className="space-y-3">
                  {/* GitHub */}
                  <a
                    href={profile.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-800 border-2 border-slate-700 hover:border-sky-400 hover:scale-[1.02] transition-all group"
                    data-cursor-text="GITHUB"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="h-5 w-5 fill-current text-white group-hover:text-sky-300 transition-colors" viewBox="0 0 24 24">
                        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.37 1.08 2.95.83a2.2 2.2 0 0 1 .65-1.38c-2.22-.25-4.56-1.11-4.56-4.93A3.86 3.86 0 0 1 6.8 7.1a3.6 3.6 0 0 1 .1-2.66s.84-.27 2.75 1.02a9.38 9.38 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.37.84.4 1.8.1 2.66a3.86 3.86 0 0 1 1.03 2.68c0 3.83-2.34 4.67-4.57 4.92a2.47 2.47 0 0 1 .7 1.92v2.85c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                      </svg>
                      <div>
                        <div className="font-mono text-xs font-bold text-white">GitHub</div>
                        <div className="font-mono text-[10px] text-slate-400">@williammaddy</div>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-sky-400 group-hover:translate-x-1 transition-transform">➜</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={profile.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-800 border-2 border-slate-700 hover:border-sky-400 hover:scale-[1.02] transition-all group"
                    data-cursor-text="LINKEDIN"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="h-5 w-5 fill-current text-sky-400 group-hover:text-sky-300 transition-colors" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <div>
                        <div className="font-mono text-xs font-bold text-white">LinkedIn</div>
                        <div className="font-mono text-[10px] text-slate-400">Professional Network</div>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-sky-400 group-hover:translate-x-1 transition-transform">➜</span>
                  </a>

                  {/* Portfolio Website */}
                  <a
                    href={profile.contact.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-800 border-2 border-slate-700 hover:border-sky-400 hover:scale-[1.02] transition-all group"
                    data-cursor-text="WEB"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl animate-float">🌐</span>
                      <div>
                        <div className="font-mono text-xs font-bold text-white">Live Vercel Site</div>
                        <div className="font-mono text-[10px] text-slate-400">mani-kandan-portfolio</div>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Fast Response Time</span>
                  <span className="text-emerald-400 font-bold">● Active Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
