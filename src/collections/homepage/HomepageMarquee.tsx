import { CollectionConfig } from "payload/types";

const HomepageMarquee: CollectionConfig = {
  slug: "homepage-marquee",
  admin: {
    useAsTitle: "marqueetitle",
    group: "Global",
  },
  fields: [
    {
      name: "marqueetitle",
      label: "Marquee Title",
      type: "text",
      required: true,
    },
    {
      name: "marqueetext",
      label: "Marquee Text",
      type: "richText",
      required: true,
    },
  ],
};

export default HomepageMarquee;
