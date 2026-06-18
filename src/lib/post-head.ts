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
 * Markdown テキストから本文 (frontmatter / 見出し / 引用 / リスト / コードブロックを除いた行) の
 * 最初の 2 行を抽出して返す。カード表示用。
 */
export function extractExcerpt(
  markdown: string | undefined,
  maxLines = 2,
  maxLenPerLine = 80
): string[] {
  if (!markdown) return [];
  const lines = markdown.split("\n");
  const bodyLines: string[] = [];
  let inFence = false;
  for (const raw of lines) {
    if (bodyLines.length >= maxLines) break;
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
    if (/^---+\s*$/.test(line)) continue;
    const trimmed =
      line.length <= maxLenPerLine
        ? line
        : line.slice(0, maxLenPerLine).trimEnd() + "…";
    bodyLines.push(trimmed);
  }
  return bodyLines;
}
