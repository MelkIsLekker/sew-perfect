// src/components/layout/Footer.tsx
import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-borderline py-16 transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-borderline">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-serif text-2xl text-primary">{siteConfig.name}</h3>
            <p className="text-xs uppercase tracking-widest text-accent">
              {siteConfig.subtitle}
            </p>
            <p className="text-xs text-muted max-w-sm leading-relaxed font-light">
              Bespoke bridal wear, matric farewell couture, and fine garment alterations in Hutton Gate, Midstream.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2 text-xs uppercase tracking-widest text-muted">
            <span className="text-[10px] text-primary font-semibold block mb-3">Sections</span>
            <div><Link href="#services" className="hover:text-primary transition-colors">Services & Alterations</Link></div>
            <div><Link href="#lookbook" className="hover:text-primary transition-colors">Portfolio Lookbook</Link></div>
            <div><Link href="#studio" className="hover:text-primary transition-colors">Studio & Fittings</Link></div>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-primary font-semibold block">
              Follow Behind The Seams
            </span>
            <p className="text-xs text-muted leading-relaxed font-light">
              See recent fitting transformations, wedding dress construction, and daily studio work on social media:
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-borderline bg-canvas text-primary text-xs uppercase tracking-widest px-4 py-2 hover:border-primary transition-colors"
              >
                <Facebook className="w-3.5 h-3.5 text-accent" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted tracking-wide gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="text-right">{siteConfig.address.full}</p>
        </div>
      </Container>
    </footer>
  );
}