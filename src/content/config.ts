import { defineCollection, z } from "astro:content";

const jobsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    department: z.string(),
    location: z.string(),
  }),
});

export const collections = {
  jobs: jobsCollection,
};
