"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Timeline as AceternityTimeline } from "@/components/ui/timeline";
import { cn } from "@/utils/cn";

export interface TimelineEntryData {
  id: string;
  title: string;
  date?: string;
  description: string;
  seeMoreHref?: string;
}

const journeyData: TimelineEntryData[] = [
  {
    id: "extended-project",
    title: "Extended Project (Internship)",
    date: "2024 – 2025",
    description:
      "After my last internship ended with the 2023 internship at Codegen Pvt Ltd, I got this project to continue and was offered the job as well.",
    seeMoreHref: "/journey/extended-project",
  },
  {
    id: "startup-team",
    title: "Joined with the startup team",
    date: "2024",
    description:
      "First time forming a team and started working on product development — industrial-ready software solutions.",
    seeMoreHref: "#",
  },
  {
    id: "bachelors",
    title: "Bachelor's of Engineering",
    date: "Jun 2025",
    description:
      "Successfully completed the degree in Electrical and Electronic Engineering from the University of Peradeniya.",
    seeMoreHref: "#",
  },
  {
    id: "product-dev-continuation",
    title: "Continuation of product development role",
    date: "Jul 2025 – present",
    description:
      "Continued with the product development role after graduation — building industrial-ready software solutions with the startup team.",
    seeMoreHref: "#",
  },
];

function buildTimelineEntries(): {
  title: string;
  date?: string;
  content: React.ReactNode;
}[] {
  return journeyData.map((entry) => ({
    title: entry.title,
    date: entry.date,
    content: (
      <div className="rounded-xl border border-white/10 bg-neutral-900/80 backdrop-blur-sm p-4 md:p-5 shadow-lg">
        {entry.date && (
          <p className="text-sm font-medium text-violet-400/90 mb-2">{entry.date}</p>
        )}
        <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
          {entry.description}
        </p>
        <Link
          href={entry.seeMoreHref || "#"}
          className={cn(
            "inline-block px-4 py-2 rounded-lg text-sm font-medium",
            "bg-neutral-700/80 text-white hover:bg-neutral-600 transition-colors"
          )}
        >
          See More
        </Link>
      </div>
    ),
  }));
}

export default function Timeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timelineEntries = buildTimelineEntries();

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8" id="journey">
      <div className="max-w-7xl mx-auto">
        {/* Scrollable container so only this section scrolls; beam follows this scroll */}
        <div
          ref={scrollContainerRef}
          className={cn(
            "relative max-h-[90vh] overflow-y-auto overflow-x-hidden",
            "rounded-lg border border-white/10"
          )}
          style={{ scrollBehavior: "smooth" }}
        >
          <AceternityTimeline
            data={timelineEntries}
            containerRef={scrollContainerRef}
          />
        </div>
      </div>
    </section>
  );
}
