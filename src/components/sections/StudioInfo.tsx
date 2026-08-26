// src/components/sections/StudioInfo.tsx
import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site";
import { ShieldCheck, HeartHandshake, MapPin, Facebook } from "lucide-react";

export function StudioInfo() {
  return (
    <section id="studio" className="py-24 bg-white">
      <Container>
        <SectionTitle number="04" tagline="Visit & Contact" title="Studio & Private Fittings" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact & Comfort Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-muted block">Direct Inquiry</span>
              <h3 className="font-serif text-3xl text-primary">Nadine Manikas</h3>
              
              {/* Psychological Safety Callout */}
              <div className="p-4 bg-neutral-50 border border-borderline my-4 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-primary">
                  <HeartHandshake className="w-4 h-4 text-primary" />
                  <span>Personal, Relaxed Fitting</span>
                </div>
                <p className="text-xs text-muted leading-relaxed font-light">
                  Clothes should be tailored to fit your body—never the other way around. Private, unhurried appointments in a warm home studio atmosphere.
                </p>
              </div>

              <p className="text-sm text-muted leading-relaxed">
                Contact directly to schedule your private fitting, send a photo for a quick estimate, or arrange easy drop-offs inside Hutton Gate.
              </p>
            </div>

            <div className="space-y-4 text-sm border-t border-borderline pt-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted block mb-1">Address</span>
                <p className="text-primary font-medium">{siteConfig.address.full}</p>
                <span className="text-xs text-muted">Hutton Gate, Midstream (Secure Estate Access)</span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-muted block mb-1">Hours</span>
                <p className="text-primary font-medium">{siteConfig.hours.display}</p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-muted block mb-1">Direct Lines</span>
                <a href={`tel:${siteConfig.contact.phoneInt}`} className="block text-primary hover:underline">
                  {siteConfig.contact.phoneDisplay} / {siteConfig.contact.phoneInt}
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="block text-primary hover:underline">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-white text-xs uppercase tracking-[0.2em] px-6 py-3.5 text-center hover:bg-accent-dark transition-colors"
                >
                  Message on WhatsApp
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-borderline bg-surface text-primary text-xs uppercase tracking-[0.2em] px-5 py-3.5 hover:border-primary transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 text-accent" />
                  <span>Facebook Page</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white text-xs uppercase tracking-widest px-7 py-4 hover:bg-neutral-800 transition-colors"
              >
                Message Nadine on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7">
            <div className="border border-borderline bg-neutral-50 overflow-hidden relative group">
              <iframe
                title="Sew Perfect Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3106.048191002263!2d28.187770409318954!3d-25.916137730014253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956fe512342dfd%3A0xbde03af467ad7d84!2sSew%20Perfect!5e0!3m2!1sen!2sza!4v1787743590369!5m2!1sen!2sza"
                className="w-full h-[450px] border-0 filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-muted">
              <span>📍 Hutton Gate, Midstream</span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                Open directly in Google Maps
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}