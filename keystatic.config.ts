// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "cloud",
  },
  cloud: {
    project: "melk/sew-perfect",
  },
  collections: {
    lookbook: collection({
      label: "Lookbook Items",
      slugField: "title",
      path: "src/content/lookbook/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({
          name: { label: "Garment Title" },
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Bespoke Bridal", value: "Bespoke Bridal" },
            { label: "Matric Farewell", value: "Matric Farewell" },
            { label: "Eveningwear & Restyling", value: "Eveningwear & Restyling" },
            { label: "Fine Alterations", value: "Fine Alterations" },
          ],
          defaultValue: "Bespoke Bridal",
        }),
        image: fields.image({
          label: "Garment Photo",
          directory: "public/images/lookbook",
          publicPath: "/images/lookbook/",
        }),
        alt: fields.text({
          label: "Alt Text (SEO)",
          defaultValue: "Handcrafted garment by Sew Perfect",
        }),
        description: fields.text({
          label: "Fabric & Fitting Details",
          multiline: true,
        }),
      },
    }),
  },
});