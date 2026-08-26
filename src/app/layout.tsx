// src/app/layout.tsx
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Sew Perfect | Bespoke Atelier & Fine Alterations",
  description: "Master seamstress and bespoke tailoring studio in Midstream.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-background text-primary">
        {children}
      </body>
    </html>
  );
}