import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const blog = (await getCollection("blog")).filter((e) => !e.data.draft);
  const sorted = blog.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: "ゆきの置き手紙",
    description:
      "ゆきの個人サイト。IT と旅行が好きなセキュリティエンジニアのブログ。",
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? "",
      link: `/articles/${post.slug}/`,
      enclosure: {
        url: `${context.site}ogp/articles/${post.slug}.webp`,
        type: "image/webp",
        length: 1,
      },
    })),
    customData: "<language>ja</language>",
  });
}
