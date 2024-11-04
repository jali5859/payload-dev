import { CollectionConfig } from "payload/types";

const Categories: CollectionConfig = {
  slug: "product-categories",
  admin: {
    useAsTitle: "category",
    group: "Global",
  },
  fields: [
    {
      name: "category",
      label: "Product Category",
      type: "text",
      required: true,
    },
  ],
};

export default Categories;
