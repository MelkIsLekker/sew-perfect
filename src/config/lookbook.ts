// src/config/lookbook.ts
export interface LookbookItem {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  description?: string;
}

export const lookbookData: LookbookItem[] = [
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
    src: "/images/lookbook/evening-dress.jpg",
    alt: "Silk evening gown silhouette reshaping and alteration",
  },
  {
    id: "blind-hemming",
    title: "Invisible Trouser Blind Hemming",
    category: "Fine Alterations",
    src: "/images/lookbook/hem-making.jpg",
    alt: "Precision garment repair and tailored blind hemming",
  },
];