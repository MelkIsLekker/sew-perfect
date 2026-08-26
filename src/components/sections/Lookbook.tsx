import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { lookbookData } from "@/config/lookbook";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
          {lookbookData.map((item: { id: React.Key | null | undefined; src: string | StaticImport; alt: string; category: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, idx: any) => (
            <div
              key={item.id}
              className="group border border-borderline bg-white p-4 transition-all duration-300 hover:border-primary"
            >
              {/* Image Container with 4:5 Aspect Ratio */}
              <div className="aspect-[4/5] bg-neutral-100 border border-neutral-200 mb-4 relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              {/* Caption & Category */}
              <span className="text-[10px] uppercase tracking-widest text-muted block mb-1">
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