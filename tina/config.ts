import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "best_sellers",
        label: "Best Sellers",
        path: "content/best_sellers",
        format: "json",
        ui: {
          router: (props) => {
            return "/";
          },
        },
        fields: [
          {
            type: "string",
            label: "Name",
            name: "name",
          },
          {
            type: "image",
            label: "Picture",
            name: "src",
          },
          {
            type: "string",
            label: "Category",
            name: "category",
            options: [
              "Oils",
              "Veges",
              "Aquas",
              "Tubers",
              "Grains",
              "Fruits",
              "Meat",
              "Others",
            ],
          },
          {
            type: "string",
            label: "Amount",
            name: "price",
          },
          {
            type: "string",
            label: "Quantity Per Sale [Format: 10 Qty +]",
            name: "piece",
          },
          {
            type: "string",
            label: "Paystack Link",
            name: "link",
          },
        ],
      },
      {
        name: "announcement",
        label: "Announcement",
        path: "content/announcement",
        // format: "json",
        ui: {
          router: (props) => {
            return "/";
          },
          // allowedActions: {
          //   create: false,
          //   delete: false,
          // },
        },
        defaultItem: () => {
          return {
            // When a new post is created the title field will be set to "New post"
            display: true,
          };
        },
        fields: [
          {
            type: "string",
            label: "Message",
            name: "message",
          },
          {
            type: "string",
            label: "Discount or CTA",
            name: "discount",
          },
          {
            type: "string",
            label: "Button Text",
            name: "button",
          },
          {
            type: "string",
            label: "Button Link",
            name: "link",
          },
          {
            type: "boolean",
            label: "Display",
            name: "display",
          },
        ],
      },
    ],
  },
});
