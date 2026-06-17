import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string()).optional(),
    thumbnail: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const workCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    thumbnail: z.string().optional(),
    description: z.string(),
    role: z.string().optional(),
    link: z.string().url().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  work: workCollection,
};
