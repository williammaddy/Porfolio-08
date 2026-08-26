"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/components/animations/gsap-setup";

export default function DataPipelineFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      name: "Kafka Ingestion",
      detail: "Live Order Events Producer",
      icon: "⚡",
      bg: "bg-rose-100",
      border: "border-rose-500",
      badge: "Producer",
    },
    {
      name: "Spark Streaming",
      detail: "Windowing & Watermarking",
      icon: "🔥",
      bg: "bg-amber-100",
      border: "border-amber-500",
      badge: "Processing",
    },
    {
      name: "Parquet Store",
      detail: "Checkpointed Sinks",
      icon: "📦",
      bg: "bg-sky-100",
      border: "border-sky-500",
      badge: "Storage",
    },
    {
      name: "Streamlit UI",
      detail: "Live Revenue Dashboard",
      icon: "📊",
      bg: "bg-emerald-100",
      border: "border-emerald-500",
      badge: "Analytics",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (stepsRef.current) {
        gsap.fromTo(
          stepsRef.current.children,
          { y: 20, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full my-4 p-3.5 bg-slate-900 text-white rounded-xl border-2 border-slate-950 font-mono shadow-md"
    >
      <div className="flex items-center justify-between text-xs text-sky-300 pb-2 border-b border-slate-800 font-bold">
        <span>PIPELINE DATA FLOW</span>
        <span className="flex items-center gap-1 text-[11px] text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
          Real-time Event Stream
        </span>
      </div>

      <div ref={stepsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
        {steps.map((step, idx) => (
          <div
            key={step.name}
            className="relative flex flex-col p-2.5 rounded-lg bg-slate-800/90 border border-slate-700 hover:border-sky-400 hover:bg-slate-800 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <span className="text-base animate-pulse">{step.icon}</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded">
                {step.badge}
              </span>
            </div>
            <div className="text-xs font-bold text-slate-100 mt-1.5">{step.name}</div>
            <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{step.detail}</div>

            {idx < steps.length - 1 && (
              <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-sky-400 font-black text-xs animate-pulse">
                ➜
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
