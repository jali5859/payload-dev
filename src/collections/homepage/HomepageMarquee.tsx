import { CollectionConfig } from "payload/types";
import DateRange from "../../fields/DateRange";

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
    {
      name: "startDate", // New field
      type: "date",
      admin: {
        hidden: true, // Hide this in the main interface since DateRange will handle it
      },
    },
    {
      name: "endDate", // New field
      type: "date",
      admin: {
        hidden: true, // Hide this in the main interface since DateRange will handle it
      },
    },
    {
      name: "dateRange",
      type: "ui",
      admin: {
        components: {
          Field: DateRange,
        },
      },

      label: "Date Range",
    },
  ],
};

export default HomepageMarquee;
