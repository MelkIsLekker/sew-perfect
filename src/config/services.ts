export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "alterations",
    number: "01",
    title: "Precision Alterations",
    description: "Expert garment adjustments tailored to your exact body measurements for everyday and formal clothing.",
    features: ["Pants, jeans, and skirt hemming", "Suit jacket & trouser tapering", "Zip replacements & slider repairs", "Waist taking in & letting out"],
  },
  {
    id: "dressmaking",
    number: "02",
    title: "Bespoke Dressmaking",
    description: "Custom-designed garments and made-to-measure eveningwear crafted with meticulous attention to line and drape.",
    features: ["Matric farewell dresses", "Evening gowns & cocktail wear", "Bridal party & bridesmaid garments", "Bespoke pattern drafting"],
  },
  {
    id: "restyling",
    number: "03",
    title: "Repairs & Restyling",
    description: "Breathing new life into favorite wardrobe pieces with modern silhouettes and structural mending.",
    features: ["Vintage garment remodeling", "Lining replacement & pocket mending", "Tear repairs & seam reinforcement", "Neckline and sleeve alterations"],
  },
];
