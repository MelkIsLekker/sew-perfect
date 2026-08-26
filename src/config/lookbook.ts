export interface LookbookItem {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
}

export const lookbookData: LookbookItem[] = [
  {
    id: "wedding-dress",
    title: "Bespoke Bridal Gown",
    category: "Bridal Couture",
    src: "/images/lookbook/wedding-dress.jpg",
    alt: "Custom hand-crafted bridal wedding gown with intricate seam detail and train",
  },
  {
    id: "matric-gown",
    title: "Custom Matric Farewell Gown",
    category: "Bespoke Dressmaking",
    src: "/images/lookbook/matric-gown.jpg",
    alt: "Made-to-measure matric dance evening dress with tailored bodice",
  },
  {
    id: "evening-restyling",
    title: "Evening & Cocktail Wear",
    category: "Custom Dressmaking",
    src: "/images/lookbook/evening-dress.jpg",
    alt: "Bespoke cocktail dress tailored to exact body measurements",
  },
  {
    id: "hem-finish",
    title: "Precision Alterations & Seamwork",
    category: "Craftsmanship Detail",
    src: "/images/lookbook/hem-making.jpg",
    alt: "Macro shot of fine hem finishing, zip repairs, and delicate garment adjustments",
  },
];