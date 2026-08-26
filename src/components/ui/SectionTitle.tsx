// src/components/ui/SectionTitle.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  number?: string;
  tagline?: string;
  title: string;
  className?: string;
}

export function SectionTitle({ number, tagline, title, className }: SectionTitleProps) {
  return (
    <div className={cn("space-y-2 mb-12", className)}>
      <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-muted">
        {number && <span className="text-accent font-semibold">{number}</span>}
        {number && tagline && <span className="text-borderline">/</span>}
        {tagline && <span>{tagline}</span>}
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal tracking-tight">
        {title}
      </h2>
    </div>
  );
}