import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import opentype from "opentype.js";
import { load } from "js-yaml";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SITE_TITLE = "ゆきの置き手紙";
const OUTPUT_DIR = path.join(ROOT, "public", "ogp");
const CONTENT_DIR = path.join(ROOT, "src", "content");
const PROFILE_IMG = path.join(ROOT, "src", "assets", "profile.webp");

const FONT_BOLD_URL =
  "https://fonts.gstatic.com/s/notosansjp/v56/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFPYk75s.ttf";
const FONT_CACHE_DIR = path.join(ROOT, "node_modules", ".cache", "ogp-font");
const EXTERNAL_POSTS_PATH = path.join(
  ROOT,
  "src",
  "data",
  "external-posts.yaml"
);

const COLOR = {
  primary: "#0080aa",
  primaryLight: "#40b0d4",
  secondary: "#fd5826",
  text: "#2b2c32",
  muted: "#5c6475",
  bgStart: "#f0fcff",
  bgEnd: "#fff5f5",
  externalBgStart: "#fdf2f8",
  externalBgEnd: "#fdfbf7",
};

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function wrapText(text: string, maxCharsPerLine: number): string[] {
  const lines: string[] = [];
  let current = "";
  for (const char of text) {
    if (current.length >= maxCharsPerLine) {
      lines.push(current);
      current = char;
    } else {
      current += char;
    }
  }
  if (current) lines.push(current);
  return lines;
}

/** Convert text to SVG path data string using opentype.js */
function textToSvgPath(
  font: opentype.Font,
  text: string,
  fontSize: number,
  x: number,
  y: number
): string {
  const path = font.getPath(text, x, y, fontSize);
  return path.toPathData(2);
}

/** Measure text width and reduce font size if overflowing */
function measureAndWrap(
  font: opentype.Font,
  text: string,
  maxWidth: number,
  maxCharsPerLine: number,
  maxFontSize: number
): { lines: string[]; fontSize: number } {
  let fontSize = maxFontSize;
  const lines = wrapText(text, maxCharsPerLine);

  const allFit = lines.every((line) => {
    const w = font.getAdvanceWidth(line, fontSize);
    return w <= maxWidth;
  });

  if (!allFit) {
    for (let fs = maxFontSize - 2; fs >= 24; fs -= 2) {
      const fits = lines.every((line) => {
        const w = font.getAdvanceWidth(line, fs);
        return w <= maxWidth;
      });
      if (fits) {
        fontSize = fs;
        break;
      }
    }
  }

  return { lines, fontSize };
}

async function downloadFont(url: string, cachePath: string): Promise<Buffer> {
  if (fs.existsSync(cachePath)) {
    return fs.readFileSync(cachePath);
  }

  fs.mkdirSync(path.dirname(cachePath), { recursive: true });
  console.log("  ⬇️  Downloading font from Google Fonts...");

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download font: ${response.statusText}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(cachePath, buffer);
  console.log(`  ✅ Font cached at ${cachePath}`);
  return buffer;
}

async function loadBoldFont(): Promise<opentype.Font> {
  const cachePath = path.join(FONT_CACHE_DIR, "NotoSansJP-Bold.ttf");
  const buffer = await downloadFont(FONT_BOLD_URL, cachePath);
  return opentype.parse(buffer);
}

/**
 * Create a circular-masked profile icon as a PNG buffer.
 */
async function createCircularProfileIcon(size: number): Promise<Buffer> {
  const circleSvg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" />
</svg>`;

  return sharp(PROFILE_IMG)
    .resize(size, size, { fit: "cover" })
    .composite([
      {
        input: Buffer.from(circleSvg),
        blend: "dest-in",
      },
    ])
    .png()
    .toBuffer();
}

/** Composite the circular profile icon onto an OGP base image */
async function compositeProfileIcon(
  baseBuffer: Buffer,
  iconSize: number,
  x: number,
  y: number
): Promise<Buffer> {
  const icon = await createCircularProfileIcon(iconSize);
  return sharp(baseBuffer)
    .composite([
      {
        input: icon,
        top: y,
        left: x,
      },
    ])
    .webp({ quality: 90 })
    .toBuffer();
}

function generateSvg(
  title: string,
  pageType: "default" | "blog" | "work",
  font: opentype.Font
): string {
  const maxWidth = 1040;

  const { lines: titleLines, fontSize: titleFontSize } = measureAndWrap(
    font,
    title,
    maxWidth,
    18,
    title.length > 18 ? 46 : 58
  );

  const lineHeight = titleFontSize * 1.45;
  const totalLines = titleLines.length;
  const textYStart = 290 - ((totalLines - 1) * lineHeight) / 2;

  const titlePaths = titleLines
    .map((line, i) => {
      const y = textYStart + i * lineHeight;
      const d = textToSvgPath(font, line, titleFontSize, 80, y);
      return `    <path d="${d}" fill="${COLOR.text}" />`;
    })
    .join("\n");

  const label =
    pageType === "default"
      ? SITE_TITLE
      : `${pageType === "blog" ? "Articles" : "Work"} | ${SITE_TITLE}`;

  const labelFontSize = 20;
  const labelPath = textToSvgPath(
    font,
    escapeXml(label),
    labelFontSize,
    145,
    543
  );

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${COLOR.bgStart}" />
      <stop offset="100%" stop-color="${COLOR.bgEnd}" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${COLOR.primary}" />
      <stop offset="100%" stop-color="${COLOR.primaryLight}" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="6" fill="url(#accent)" />

  <!-- Decorative circles -->
  <circle cx="150" cy="80" r="220" fill="${COLOR.primary}" opacity="0.07" />
  <circle cx="1050" cy="550" r="180" fill="${COLOR.secondary}" opacity="0.05" />
  <circle cx="600" cy="315" r="350" fill="${COLOR.primary}" opacity="0.03" />

  <!-- Decorative dots -->
  <circle cx="180" cy="420" r="6" fill="${COLOR.primary}" opacity="0.3" />
  <circle cx="380" cy="140" r="4" fill="${COLOR.secondary}" opacity="0.25" />
  <circle cx="920" cy="180" r="8" fill="${COLOR.primary}" opacity="0.2" />
  <circle cx="1020" cy="420" r="5" fill="${COLOR.secondary}" opacity="0.2" />
  <circle cx="720" cy="500" r="4" fill="${COLOR.primary}" opacity="0.25" />
  <circle cx="480" cy="520" r="6" fill="${COLOR.secondary}" opacity="0.2" />
  <circle cx="250" cy="220" r="3" fill="${COLOR.primary}" opacity="0.35" />
  <circle cx="850" cy="350" r="5" fill="${COLOR.secondary}" opacity="0.15" />

  <!-- Decorative small sparkles -->
  <path d="M75 180 Q80 170 85 180 Q80 190 75 180Z" fill="${COLOR.secondary}" opacity="0.3" />
  <path d="M1120 280 Q1125 270 1130 280 Q1125 290 1120 280Z" fill="${COLOR.primary}" opacity="0.25" />

  <!-- Title (rendered as SVG paths for font fidelity) -->
${titlePaths}

  <!-- Site name (rendered as SVG path) -->
  <path d="${labelPath}" fill="${COLOR.primary}" opacity="0.9" />
</svg>`;
}

function generateExternalSvg(title: string, source: string): string {
  const escaped = escapeXml(title);
  const lines = wrapText(escaped, 18);

  const totalLines = lines.length;
  const fontSize = totalLines > 1 ? 46 : 58;
  const lineHeight = fontSize * 1.45;
  const textYStart = 290 - ((totalLines - 1) * lineHeight) / 2;

  const tspans = lines
    .map((line, i) => {
      const y = textYStart + i * lineHeight;
      return `      <tspan x="80" y="${y}">${line}</tspan>`;
    })
    .join("\n");

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${COLOR.externalBgStart}" />
      <stop offset="100%" stop-color="${COLOR.externalBgEnd}" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${COLOR.secondary}" />
      <stop offset="100%" stop-color="#ff9a6e" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="6" fill="url(#accent)" />

  <!-- Decorative circles -->
  <circle cx="150" cy="80" r="220" fill="${COLOR.secondary}" opacity="0.07" />
  <circle cx="1050" cy="550" r="180" fill="${COLOR.secondary}" opacity="0.05" />
  <circle cx="600" cy="315" r="350" fill="${COLOR.secondary}" opacity="0.03" />

  <!-- Decorative dots -->
  <circle cx="180" cy="420" r="6" fill="${COLOR.secondary}" opacity="0.3" />
  <circle cx="380" cy="140" r="4" fill="${COLOR.secondary}" opacity="0.25" />
  <circle cx="920" cy="180" r="8" fill="${COLOR.secondary}" opacity="0.2" />
  <circle cx="1020" cy="420" r="5" fill="${COLOR.secondary}" opacity="0.2" />
  <circle cx="720" cy="500" r="4" fill="${COLOR.secondary}" opacity="0.25" />
  <circle cx="480" cy="520" r="6" fill="${COLOR.secondary}" opacity="0.2" />
  <circle cx="250" cy="220" r="3" fill="${COLOR.secondary}" opacity="0.35" />
  <circle cx="850" cy="350" r="5" fill="${COLOR.secondary}" opacity="0.15" />

  <!-- Title -->
  <text font-family="'Noto Sans JP', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', 'MS PGothic', sans-serif" font-size="${fontSize}" font-weight="700" fill="${COLOR.text}">
${tspans}
  </text>

  <!-- Source name -->
  <text x="80" y="570" font-family="'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif" font-size="20" font-weight="600" fill="${COLOR.secondary}" letter-spacing="2">
    ${escapeXml(source)} | ${escapeXml(SITE_TITLE)}
  </text>
</svg>`;
}

interface PageItem {
  title: string;
  slug: string;
}

interface ExternalItem {
  title: string;
  url: string;
  slug: string;
  source: string;
}

function parseFrontmatter(filePath: string): { title: string } {
  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { title: "Untitled" };

  const yaml = match[1];
  const titleMatch =
    yaml.match(/^title:\s*"(.+)"$/m) || yaml.match(/^title:\s*(.+)$/m);
  return { title: titleMatch?.[1] ?? "Untitled" };
}

async function generateOgp(
  items: PageItem[],
  font: opentype.Font
): Promise<void> {
  const renderWithProfile = async (svgContent: string, outPath: string) => {
    // Render base SVG (no <image> tag — sharp can't handle data URIs)
    const pngBuf = await sharp(Buffer.from(svgContent)).png().toBuffer();
    // Composite circular profile icon at bottom-left
    const result = await compositeProfileIcon(pngBuf, 50, 78, 508);
    await sharp(result).toFile(outPath);
  };

  console.log("Generating default OGP...");
  const defaultSvg = generateSvg("ゆきの置き手紙", "default", font);
  await renderWithProfile(defaultSvg, path.join(OUTPUT_DIR, "default.webp"));
  console.log("  ✓ public/ogp/default.webp");

  for (const item of items) {
    const outPath = path.join(OUTPUT_DIR, `${item.slug}.webp`);
    const dir = path.dirname(outPath);
    fs.mkdirSync(dir, { recursive: true });

    const pageType = item.slug.startsWith("blog") ? "blog" : "work";
    const svg = generateSvg(item.title, pageType, font);
    await renderWithProfile(svg, outPath);
    console.log(`  ✓ public/ogp/${item.slug}.webp`);
  }
}

async function generateExternalOgp(items: ExternalItem[]): Promise<void> {
  for (const item of items) {
    const outPath = path.join(OUTPUT_DIR, "external", `${item.slug}.webp`);
    const dir = path.dirname(outPath);
    fs.mkdirSync(dir, { recursive: true });

    const svg = generateExternalSvg(item.title, item.source);
    await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(outPath);
    console.log(`  ✓ public/ogp/external/${item.slug}.webp`);
  }
}

function urlToSlug(url: string): string {
  // https://zenn.dev/minecode/articles/81f2485f646ae4 -> zenn-81f2485f646ae4
  const u = new URL(url);
  const hostname = u.hostname.replace(/\./g, "-");
  const id = u.pathname.split("/").filter(Boolean).pop() ?? "external";
  return `${hostname}-${id}`;
}

async function main(): Promise<void> {
  console.log("🔧 Generating OGP images...\n");

  console.log("Loading font...");
  const font = await loadBoldFont();
  console.log("  ✅ Font loaded\n");

  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const items: PageItem[] = [];

  const blogDir = path.join(CONTENT_DIR, "blog");
  if (fs.existsSync(blogDir)) {
    const files = fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
    for (const file of files) {
      const frontmatter = parseFrontmatter(path.join(blogDir, file));
      items.push({
        title: frontmatter.title,
        slug: `articles/${file.replace(/\.mdx?$/, "")}`,
      });
    }
  }

  const workDir = path.join(CONTENT_DIR, "work");
  if (fs.existsSync(workDir)) {
    const files = fs
      .readdirSync(workDir)
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
    for (const file of files) {
      const frontmatter = parseFrontmatter(path.join(workDir, file));
      items.push({
        title: frontmatter.title,
        slug: `works/${file.replace(/\.mdx?$/, "")}`,
      });
    }
  }

  await generateOgp(items, font);

  // Collect external posts
  const externalItems: ExternalItem[] = [];
  if (fs.existsSync(EXTERNAL_POSTS_PATH)) {
    const raw = fs.readFileSync(EXTERNAL_POSTS_PATH, "utf-8");
    const posts = load(raw) as Array<{
      title: string;
      url: string;
      source: string;
    }>;
    for (const post of posts) {
      externalItems.push({
        title: post.title,
        url: post.url,
        slug: urlToSlug(post.url),
        source: post.source,
      });
    }
    await generateExternalOgp(externalItems);
  }

  console.log(
    `\n✅ Done! Generated ${1 + items.length + externalItems.length} OGP images.`
  );
}

main();
