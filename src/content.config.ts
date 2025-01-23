import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    // Load Markdown files in the src/content/projects directory.
    loader: glob({ base: "./src/data/projects", pattern: "**/*.{md,mdx}" }),
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
};
