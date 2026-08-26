// src/components/layout/Navbar.tsx
import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Instagram, Facebook } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-surface/90 backdrop-blur-md border-b border-borderline transition-colors duration-300">
      <Container className="flex items-center justify-between h-20">
        {/* Brand Wordmark */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl tracking-wider text-primary uppercase">
            {siteConfig.name}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-muted">
            Midstream Atelier
          </span>
        </Link>

        {/* Center: Live Theme Switcher */}
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>

        {/* Right Navigation & Socials */}
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest text-muted">
            <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="#lookbook" className="hover:text-primary transition-colors">Lookbook</Link>
            <Link href="#studio" className="hover:text-primary transition-colors">Studio</Link>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-3 border-l border-borderline pl-5 text-muted">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sew Perfect on Facebook"
              className="p-1.5 hover:text-accent transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white text-xs uppercase tracking-[0.2em] px-5 py-2.5 hover:bg-accent-dark transition-colors"
          >
            Inquire
          </a>
        </div>
      </Container>
      
      {/* Mobile-only toggle row */}
      <div className="sm:hidden flex items-center justify-between px-4 py-2 border-t border-borderline bg-canvas">
        <ThemeToggle />
        <div className="flex items-center gap-4 text-muted">
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sew Perfect on Facebook"
            className="p-1 hover:text-primary"
          >
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}