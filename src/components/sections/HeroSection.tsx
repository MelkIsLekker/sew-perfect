// src/components/sections/HeroSection.tsx
import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-borderline">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Information (60%) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 border border-borderline px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted bg-surface">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>{siteConfig.address.suburb}, {siteConfig.address.city}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-primary font-normal leading-[1.1] tracking-tight">
              {siteConfig.tagline}
            </h1>

            <p className="text-muted text-base sm:text-lg max-w-xl font-light leading-relaxed">
              {siteConfig.description}
            </p>

            {/* Turnaround & Guarantee Bar */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-8 text-xs text-muted tracking-wide">
              <div className="flex items-center gap-2 text-primary font-medium">
                <span className="text-accent font-serif text-sm">✦</span>
                <span>{siteConfig.trust.turnaround}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent font-serif text-sm">✦</span>
                <span>Private fittings by appointment</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white text-xs uppercase tracking-[0.2em] px-8 py-4 text-center hover:bg-accent-dark transition-colors duration-200"
              >
                Inquire via WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneInt}`}
                className="border border-borderline bg-surface text-primary text-xs uppercase tracking-[0.2em] px-8 py-4 text-center hover:border-primary transition-colors duration-200"
              >
                Call {siteConfig.contact.phoneDisplay}
              </a>
            </div>

            {/* Operational Meta */}
            <div className="pt-6 border-t border-borderline grid grid-cols-2 gap-4 text-xs text-muted tracking-wide">
              <div>
                <span className="block font-medium text-primary uppercase text-[10px] tracking-widest mb-0.5">
                  Fitting Hours
                </span>
                {siteConfig.hours.display}
              </div>
              <div>
                <span className="block font-medium text-primary uppercase text-[10px] tracking-widest mb-0.5">
                  Studio Location
                </span>
                {siteConfig.address.street}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Card with 200x200 Photo (40%) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-surface border border-borderline p-8 shadow-xs">
              
              {/* Monograph Top Folio */}
              <div className="flex items-center justify-between pb-6 border-b border-borderline text-[9px] uppercase tracking-[0.25em] text-muted">
                <span>Atelier Study</span>
                <span>No. 01 / Midstream</span>
              </div>

              {/* 200x200 px Centered Photo Plate */}
              <div className="my-8 flex justify-center">
                <div className="w-[200px] h-[200px] relative bg-surface-alt border border-borderline overflow-hidden group shadow-xs">
                  <Image
                    src="/images/hero/hero-atelier.jpeg"
                    alt="Sew Perfect bespoke tailoring and atelier work"
                    width={200}
                    height={200}
                    priority
                    className="w-[200px] h-[200px] object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Monograph Typography */}
              <div className="space-y-3 pt-2 text-center">
                <div>
                  <h3 className="font-serif text-xl text-primary tracking-wide">
                    Sew Perfect
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent block mt-0.5">
                    Bespoke & Alteration
                  </span>
                </div>

                <p className="font-serif italic text-xs text-muted leading-relaxed max-w-[240px] mx-auto">
                  “Precision in every cut, contour, and seam.”
                </p>

                <div className="pt-4 border-t border-borderline flex items-center justify-between text-[8px] uppercase tracking-[0.25em] text-muted">
                  <span>Sew Perfect Studio</span>
                  <span>Gauteng, ZA</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}