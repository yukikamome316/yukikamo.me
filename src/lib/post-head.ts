/**
 * Markdown テキストから見出し (h1/h2) を抽出して返す。
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
    const m = line.match(/^#{1,2}\s+(.+?)\s*$/);
    if (m) {
      headings.push(m[1].trim());
      if (headings.length >= max) break;
    }
  }
  return headings;
}

/**
 * Markdown テキストから本文 (frontmatter と見出しを除いた最初の数行) を抽出する。
 * カード表示用に短く切り出す。
 */
export function extractExcerpt(
  markdown: string | undefined,
  maxLen = 80
): string {
  if (!markdown) return "";
  const lines = markdown.split("\n");
  const bodyLines: string[] = [];
  let inFence = false;
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line.startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (!line) continue;
    if (line.startsWith("#")) continue;
    if (line.startsWith(">")) continue;
    if (line.startsWith("- ") || line.startsWith("* ")) continue;
    if (/^\d+\.\s/.test(line)) continue;
    bodyLines.push(line);
  }
  const text = bodyLines.join(" ").replace(/\s+/g, " ").trim();
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).trimEnd() + "…";
}
