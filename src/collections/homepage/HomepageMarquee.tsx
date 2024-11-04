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
      name: "startDate",
      type: "date",
      label: "Start Date",
      admin: {
        components: {
          Field: DateRange,
        },
      },
    },
    {
      name: "endDate",
      type: "date",
      label: "End Date",

      admin: {
        condition: (_, siblingData) => siblingData?.startDate,
      },
    },
  ],
};

export default HomepageMarquee;
