import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID, // e.g., '1nyfptqq'
  dataset: process.env.SANITY_DATASET, // e.g., 'production'
  apiVersion: "2023-01-01", // use a fixed version
  useCdn: true, // true for cached public content
});
