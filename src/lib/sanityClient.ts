import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "1nyfptqq", // e.g., '1nyfptqq'
  dataset: "production", // or whatever dataset you use
  apiVersion: "2023-01-01", // use a fixed version
  useCdn: true, // true for cached public content
});
