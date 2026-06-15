import fs from "node:fs";
import path from "node:path";
import YAML from "js-yaml";
import { z } from "zod";

const externalPostSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  date: z.coerce.date(),
  source: z.string(),
  emoji: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export type ExternalPost = z.infer<typeof externalPostSchema>;

let cached: ExternalPost[] | null = null;

export function getExternalPosts(): ExternalPost[] {
  if (cached) return cached;

  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "external-posts.yaml"
  );
  const raw = fs.readFileSync(filePath, "utf-8");
  const parsed = YAML.parse(raw);
  const posts = z.array(externalPostSchema).parse(parsed);

  cached = posts;
  return posts;
}
