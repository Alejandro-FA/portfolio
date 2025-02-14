import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        tags: z.array(z.string()),
        thumbnail: image(),
        thumbnailAlt: z.string(),
        github: z.string().optional(),
        bibliography: z.array(z.string()).optional(),
      }),
  }),
  misc: defineCollection({
    loader: glob({ base: "./src/content/misc", pattern: "**/*.{md,mdx}" }),
    schema: z.object({}),
  }),
  education: defineCollection({
    loader: glob({ base: "./src/content/education", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
      title: z.string(),
      startDate: z.coerce.date(),
      span: z.string(),
      place: z.string(),
    }),
  }),
  experience: defineCollection({
    loader: glob({
      base: "./src/content/experience",
      pattern: "**/*.{md,mdx}",
    }),
    schema: z.object({
      title: z.string(),
      startDate: z.coerce.date(),
      span: z.string(),
      place: z.string(),
    }),
  }),
};
