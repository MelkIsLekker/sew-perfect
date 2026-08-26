// src/lib/keystatic.ts
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

export const reader = createReader(process.cwd(), keystaticConfig);

export interface LookbookEntry {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  description?: string;
}

export async function getLookbookEntries(): Promise<LookbookEntry[]> {
  const items = await reader.collections.lookbook.all();

  if (!items || items.length === 0) {
    return [
      {
        id: "bridal-gown",
        title: "Bespoke Bridal Gown Fitting",
        category: "Bespoke Bridal",
        src: "/images/lookbook/wedding-dress.jpg",
        alt: "Bespoke wedding gown fitting and alteration in Midstream",
      },
      {
        id: "matric-farewell",
        title: "Matric Farewell Satin Bodice",
        category: "Matric Farewell",
        src: "/images/lookbook/matric-gown.jpg",
        alt: "Custom matric dance evening dress tailoring",
      },
      {
        id: "evening-restyling",
        title: "Eveningwear Silhouette Restyling",
        category: "Eveningwear & Restyling",
        src: "/images/lookbook/evening-restyling.jpg",
        alt: "Silk evening gown silhouette reshaping and alteration",
      },
      {
        id: "blind-hemming",
        title: "Invisible Trouser Blind Hemming",
        category: "Fine Alterations",
        src: "/images/lookbook/hem-finish.jpg",
        alt: "Precision garment repair and tailored blind hemming",
      },
    ];
  }

  return items.map((entry) => ({
    id: entry.slug,
    title: entry.entry.title,
    category: entry.entry.category,
    src: entry.entry.image || "/images/lookbook/wedding-dress.jpg",
    alt: entry.entry.alt || entry.entry.title,
    description: entry.entry.description,
  }));
}