/**
 * Markdown テキストから見出し (h2) だけを抽出して返す。
 * カード表示用に最大 2 行分まで取り出すことを想定。
 */
export function extractHeadings(
  markdown: string | undefined,
  max = 2
): string[] {
  if (!markdown) return [];
  const lines = markdown.split("\n");
  const headings: string[] = [];
  for (const line of lines) {
    const m = line.match(/^##\s+(.+?)\s*$/);
    if (m) {
      headings.push(m[1].trim());
      if (headings.length >= max) break;
    }
  }
  return headings;
}
