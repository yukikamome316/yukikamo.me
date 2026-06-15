import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const blog = await getCollection("blog");
  const sorted = blog.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: "Yuki's Blog",
    description: "Thoughts on software engineering, security, and life.",
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? "",
      link: `/blog/${post.slug}/`,
      enclosure: {
        url: `${context.site}ogp/blog/${post.slug}.webp`,
        type: "image/webp",
        length: 1,
      },
    })),
    customData: "<language>ja</language>",
  });
}
