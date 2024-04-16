// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "best_sellers",
        label: "Best Sellers",
        path: "content/best_sellers",
        format: "json",
        fields: [
          {
            type: "object",
            name: "product",
            label: "Products",
            fields: [
              {
                type: "string",
                label: "Name",
                name: "name"
              },
              {
                type: "string",
                label: "Picture",
                name: "src"
              },
              {
                type: "string",
                label: "Category",
                name: "category"
              },
              {
                type: "string",
                label: "Amount",
                name: "price"
              },
              {
                type: "string",
                label: "Quantity Per Sale [Format: 10 Qty +]",
                name: "piece"
              },
              {
                type: "string",
                label: "Paystack Link",
                name: "link"
              }
            ]
          }
        ]
      }
      // {
      //   name: "post",
      //   label: "Posts",
      //   path: "content/posts",
      //   fields: [
      //     {
      //       type: "string",
      //       name: "title",
      //       label: "Title",
      //       isTitle: true,
      //       required: true,
      //     },
      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Body",
      //       isBody: true,
      //     },
      //   ],
      //   // ui: {
      //   //   // This is an DEMO router. You can remove this to fit your site
      //   //   router: ({ document }) => `/demo/blog/${document._sys.filename}`,
      //   // },
      // },
    ]
  }
});
export {
  config_default as default
};
