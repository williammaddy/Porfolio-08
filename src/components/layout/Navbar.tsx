"use client";

import { useState, useEffect } from "react";
import profile from "@/data/profile.json";
import { PixelStar } from "@/components/common/PixelDecorations";
import { useMagneticButton } from "@/components/animations/gsap-setup";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#freelance", label: "Freelance" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education & Certs" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const ctaButtonRef = useMagneticButton<HTMLAnchorElement>(0.3);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b-2 border-slate-900 transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand / Masthead Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 text-slate-950 font-black tracking-tight"
          data-cursor-text="HOME"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-300 border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] group-hover:rotate-6 group-hover:scale-105 transition-transform duration-200">
            <span className="font-mono text-base font-black">M</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-lg font-black tracking-wider leading-none">
              MANIKANDAN L
            </span>
            <span className="font-mono text-[10px] font-bold text-slate-600 tracking-widest flex items-center gap-1.5 mt-0.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              DEV MAG // 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-[2px_2px_0px_#38bdf8] -translate-y-0.5"
                    : "text-slate-700 hover:text-slate-950 hover:bg-amber-100 hover:-translate-y-0.5"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {isActive && <PixelStar size={10} color="#FDE047" />}
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* CTA / Resume & Status */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="paper-tag hover:bg-amber-200 transition-colors hidden md:inline-flex items-center gap-1.5"
            aria-label="GitHub Profile"
            data-cursor-text="GITHUB"
          >
            <span>GitHub</span>
            <span className="text-[10px]">↗</span>
          </a>
          <a
            ref={ctaButtonRef}
            href="#contact"
            className="paper-btn-primary text-xs py-1.5 px-3.5"
            data-cursor-text="TALK"
          >
            Let&apos;s Talk ✉️
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-900 bg-white p-2 text-slate-900 shadow-[2px_2px_0px_#0f172a] hover:bg-amber-100 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span
              className={`block h-0.5 w-full bg-slate-900 transition-transform ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-slate-900 transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-slate-900 transition-transform ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="border-t-2 border-slate-900 bg-[#FAF7F2] p-4 lg:hidden shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-xl border-2 border-slate-900 bg-white px-4 py-2.5 text-sm font-bold text-slate-900 shadow-[2px_2px_0px_#0f172a] hover:bg-amber-100"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-slate-500">➜</span>
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-slate-300 flex items-center justify-between gap-3">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noreferrer"
                className="paper-btn-secondary flex-1 text-center text-xs py-2"
              >
                GitHub Profile
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="paper-btn-primary flex-1 text-center text-xs py-2"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
