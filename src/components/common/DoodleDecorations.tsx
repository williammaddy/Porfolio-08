import React from "react";

export function DoodleArrow({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${flip ? "-scale-x-100" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M5 38C25 15 65 8 92 18M92 18L80 8M92 18L78 28"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleCurvedArrow({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 80 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <path
        d="M10 60 C 25 10, 60 10, 70 45 M 70 45 L 58 40 M 70 45 L 75 32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleUnderline({
  className = "",
  color = "#F59E0B",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block w-full ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3 14C50 4 120 18 197 6"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M25 17C75 10 140 16 185 11"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleCircle({
  className = "",
  color = "#38BDF8",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M10 25 C 10 5, 110 5, 112 25 C 114 45, 15 47, 8 28"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="180"
        strokeDashoffset="0"
      />
    </svg>
  );
}

export function DoodleSparkle({
  className = "",
  color = "#FBBF24",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}

export function DoodleStar({
  className = "",
  color = "#F472B6",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <path
        d="M15 2L18.5 10.5L28 11.5L20.5 18L23 27L15 22L7 27L9.5 18L2 11.5L11.5 10.5L15 2Z"
        fill={color}
        stroke="#0F172A"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleTape({
  className = "",
  color = "bg-amber-200/80",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={`h-4 w-20 ${color} border-x-2 border-dashed border-slate-700/60 rotate-[-2deg] shadow-xs ${className}`}
      aria-hidden="true"
    />
  );
}

export function MagazineIssueStamp({
  text = "DEV MAG // ISSUE 2026",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-300 text-slate-950 border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] rounded-md rotate-[-1deg] ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse inline-block" />
      {text}
    </div>
  );
}
