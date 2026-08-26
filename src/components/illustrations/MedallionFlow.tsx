"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/components/animations/gsap-setup";

export default function MedallionFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);

  const layers = [
    {
      tier: "S3 Bucket",
      name: "AWS S3 Raw",
      desc: "Parent/Child Ingestion",
      color: "bg-sky-50 text-sky-950 border-sky-400",
      badge: "Source",
    },
    {
      tier: "Bronze",
      name: "Raw Delta",
      desc: "Append-only Parquet",
      color: "bg-amber-50 text-amber-950 border-amber-500",
      badge: "Ingest",
    },
    {
      tier: "Silver",
      name: "Clean & Merge",
      desc: "SCD Type 1 & 2 Upsert",
      color: "bg-slate-100 text-slate-900 border-slate-400",
      badge: "Enrich",
    },
    {
      tier: "Gold",
      name: "Aggregated KPIs",
      desc: "Star/Snowflake Models",
      color: "bg-yellow-50 text-yellow-950 border-yellow-500",
      badge: "Analytics",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (layersRef.current) {
        gsap.fromTo(
          layersRef.current.children,
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
      <div className="flex items-center justify-between text-xs text-amber-300 pb-2 border-b border-slate-800 font-bold">
        <span>MEDALLION ARCHITECTURE (LAKEHOUSE)</span>
        <span className="text-[11px] text-sky-400">AWS S3 + Delta Lake</span>
      </div>

      <div ref={layersRef} className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
        {layers.map((layer, idx) => (
          <div
            key={layer.name}
            className="relative flex flex-col p-2.5 rounded-lg bg-slate-800/90 border border-slate-700 hover:border-amber-400 hover:bg-slate-800 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase text-amber-400 bg-slate-900 px-1.5 py-0.5 rounded">
                {layer.tier}
              </span>
              <span className="text-[9px] uppercase text-slate-400">{layer.badge}</span>
            </div>
            <div className="text-xs font-bold text-slate-100 mt-1.5">{layer.name}</div>
            <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{layer.desc}</div>

            {idx < layers.length - 1 && (
              <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-amber-400 font-black text-xs animate-pulse">
                ➜
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
