import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { siteConfig } from "@/config/site";
import { generateLocalBusinessSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.subtitle}`,
  description: siteConfig.description,
  keywords: ["Clothing Alterations", "Dressmaking", "Midstream", "Ekurhuleni", "Matric Farewell Dresses", "Tailor"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = generateLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-canvas text-primary">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
