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
      name: "dateRange", // This must match the name property in the DateRange component's value prop
      type: "ui",
      admin: {
        components: {
          Field: DateRange,
        },
      },
      label: "Date Range",
    },
    // The startDate and endDate fields MUST be nested under the dateRange field
    {
      name: "startDate",
      type: "date",
      admin: {
        hidden: true,
      },
    },
    {
      name: "endDate",
      type: "date",
      admin: {
        hidden: true,
      },
    },
  ],
};

export default HomepageMarquee;
