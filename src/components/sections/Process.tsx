// src/components/sections/Process.tsx
import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Scissors, Sparkles, CheckCircle2 } from "lucide-react";

export function Process() {
  const steps = [
    {
      number: "01",
      icon: Scissors,
      title: "Pinning & Silhouette Fit",
      description:
        "We pin the garment directly on your frame to test natural posture, movement, and drape—never guessing or making arbitrary cuts.",
    },
    {
      number: "02",
      icon: Sparkles,
      title: "Precision Stitching",
      description:
        "Exact thread-color matching, interior seam allowance retention, and specialized blind hemming or structural reconstruction.",
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Steam Press & Final Check",
      description:
        "Every garment is professionally pressed, shape-set, and inspected under studio light so it is ready for your event immediately.",
    },
  ];

  return (
    <section className="py-24 border-b border-borderline bg-canvas">
      <Container>
        <SectionTitle
          number="02"
          tagline="The Craftsmanship Method"
          title="How We Perfect Your Fit"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white border border-borderline p-8 flex flex-col justify-between hover:border-primary transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-borderline">
                    <span className="font-serif text-2xl text-primary">
                      {step.number}
                    </span>
                    <Icon className="w-5 h-5 text-muted" />
                  </div>
                  <h3 className="font-serif text-xl text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-dashed border-borderline text-[10px] uppercase tracking-widest text-muted">
                  Studio Standard
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}