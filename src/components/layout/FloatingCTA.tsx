import React from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <a
      href={siteConfig.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-primary text-white px-5 py-3 rounded-full shadow-lg border border-neutral-700 hover:bg-neutral-800 transition-all hover:scale-105"
    >
      <MessageCircle className="w-5 h-5 text-whatsapp" />
      <span className="text-xs uppercase tracking-wider font-medium hidden sm:inline-block">
        WhatsApp Fitting
      </span>
    </a>
  );
}
