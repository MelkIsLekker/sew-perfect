// src/components/sections/Lookbook.tsx
import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { lookbookData } from "@/config/lookbook";

export function Lookbook() {
  return (
    <section id="lookbook" className="py-24 border-b border-borderline">
      <Container>
        <SectionTitle
          number="02"
          tagline="Portfolio"
          title="Selected Works & Fit Studies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lookbookData.map((item) => (
            <div
              key={item.id}
              className="group border border-borderline bg-surface p-4 transition-all duration-300 hover:border-primary shadow-xs"
            >
              {/* Image Container with 4:5 Aspect Ratio */}
              <div className="aspect-[4/5] bg-surface-alt border border-borderline mb-4 relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              {/* Caption & Category */}
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent block mb-1">
                {item.category}
              </span>
              <h4 className="font-serif text-base text-primary font-normal leading-snug">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}