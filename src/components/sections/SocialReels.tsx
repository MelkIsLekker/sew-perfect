// src/components/sections/SocialReels.tsx
import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Play, Video } from "lucide-react";

export function SocialReels() {
  const reels = [
    {
      id: "wedding-reel",
      title: "Bridal Gown Final Fitting & Train Drape",
      category: "Reel · Bespoke Bridal",
      thumbnail: "/images/lookbook/wedding-dress.jpg",
      link: siteConfig.socials.facebook, // Or direct reel URL
    },
    {
      id: "matric-reel",
      title: "Matric Farewell Bodice Construction",
      category: "Reel · Process & Detail",
      thumbnail: "/images/lookbook/matric-gown.jpg",
      link: siteConfig.socials.facebook,
    },
    {
      id: "hemming-reel",
      title: "Hand-Finished Blind Hemming Technique",
      category: "Reel · Craftsmanship",
      thumbnail: "/images/lookbook/hem-finish.jpg",
      link: siteConfig.socials.facebook,
    },
  ];

  return (
    <section className="py-24 border-b border-borderline bg-surface">
      <Container>
        {/* Header with Direct Social Trigger */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-muted mb-2">
              <span className="text-accent font-semibold">03</span>
              <span className="text-borderline">/</span>
              <span>Behind the Seams</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal tracking-tight">
              Studio in Motion
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-borderline bg-surface-alt text-primary text-xs uppercase tracking-[0.2em] px-5 py-2.5 hover:border-primary transition-colors"
            >
              <Video className="w-3.5 h-3.5 text-accent" />
              <span>Watch on Facebook</span>
            </a>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-canvas border border-borderline p-4 transition-all duration-300 hover:border-primary shadow-xs"
            >
              {/* Thumbnail with 9:16 Reel Aspect Ratio and Play Overlay */}
              <div className="aspect-[9/14] relative bg-neutral-900 border border-borderline overflow-hidden mb-4">
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Central Play Badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all shadow-md group-hover:scale-110">
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] tracking-widest uppercase text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-1">
                  <span>Watch Reel</span>
                  <span>Facebook</span>
                </div>
              </div>

              {/* Text Meta */}
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent block mb-1">
                {reel.category}
              </span>
              <h3 className="font-serif text-base text-primary font-normal leading-snug group-hover:text-accent transition-colors">
                {reel.title}
              </h3>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}