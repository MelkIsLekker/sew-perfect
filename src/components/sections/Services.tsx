import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { servicesData } from "@/config/services";

export function Services() {
  return (
    <section id="services" className="py-24 border-b border-borderline bg-white">
      <Container>
        <SectionTitle number="01" tagline="Capabilities" title="Services & Craftsmanship" />
        
        <div className="divide-y divide-borderline border-y border-borderline">
          {servicesData.map((service) => (
            <div key={service.id} className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-1 text-xs tracking-widest text-muted uppercase">
                {service.number}
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl text-primary">{service.title}</h3>
              </div>
              <div className="lg:col-span-4 text-sm text-muted leading-relaxed">
                {service.description}
              </div>
              <div className="lg:col-span-3">
                <ul className="space-y-2 text-xs uppercase tracking-wider text-primary">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
