import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const books = defineCollection({
  loader: glob({ base: "./src/content/books", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    keywords: z.string(),
    cover: image(),
    slug: z.string(),
    links: z.array(z.string()).optional().nullable(),
    tags: z.array(z.string()).optional().nullable(),
    translators: z.array(z.string()).optional().nullable(),
    edition: z.string().optional().nullable(),
    pubDate: z.coerce.date().optional().nullable(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

const footer = defineCollection({
  loader: glob({ base: "./src/content/footer", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    marqueeLinks: z
      .array(
        z.object({
          text: z.string(),
          url: z.string(),
        }),
      )
      .optional(),
    marqueeText: z.string().optional(),
  }),
});

export const collections = { blog, footer, books };
