import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().optional(),
    languages: z.array(z.string()),
  }),
});

const photos = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      caption: z.string().optional(),
      date: z.coerce.date(),
    }),
});

export const collections = { projects, photos };
