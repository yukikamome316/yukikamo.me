import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import opentype from "opentype.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SITE_TITLE = "ゆきの置き手紙";
const OUTPUT_DIR = path.join(ROOT, "public", "ogp");
const CONTENT_DIR = path.join(ROOT, "src", "content");
const PROFILE_IMG = path.join(ROOT, "src", "assets", "profile.webp");

const FONT_BOLD_URL =
  "https://fonts.gstatic.com/s/notosansjp/v56/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFPYk75s.ttf";
const FONT_CACHE_DIR = path.join(ROOT, "node_modules", ".cache", "ogp-font");

const COLOR = {
  primary: "#26cafd",
  primaryLight: "#7ed9f7",
  secondary: "#fd5826",
  text: "#2b2c32",
  bgStart: "#f0fcff",
  bgEnd: "#fff5f5",
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
  return lines.slice(0, 2);
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

function getProfileImageDataUri(): string {
  const buf = fs.readFileSync(PROFILE_IMG);
  return `data:image/webp;base64,${buf.toString("base64")}`;
}

const PROFILE_DATA_URI = getProfileImageDataUri();

function generateSvg(
  title: string,
  pageType: "default" | "blog" | "work",
  font: opentype.Font
): string {
  const escaped = escapeXml(title);
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
    <mask id="avatarMask">
      <circle cx="103" cy="533" r="25" fill="white" />
    </mask>
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

  <!-- Profile icon (bottom-left) -->
  <image href="${PROFILE_DATA_URI}" x="78" y="508" width="50" height="50" mask="url(#avatarMask)" />

  <!-- Site name (rendered as SVG path) -->
  <path d="${labelPath}" fill="${COLOR.primary}" opacity="0.9" />
</svg>`;
}

interface PageItem {
  title: string;
  slug: string;
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
  console.log("Generating default OGP...");
  const defaultSvg = generateSvg("ゆきの置き手紙", "default", font);
  await sharp(Buffer.from(defaultSvg))
    .webp({ quality: 90 })
    .toFile(path.join(OUTPUT_DIR, "default.webp"));
  console.log("  ✓ public/ogp/default.webp");

  for (const item of items) {
    const outPath = path.join(OUTPUT_DIR, `${item.slug}.webp`);
    const dir = path.dirname(outPath);
    fs.mkdirSync(dir, { recursive: true });

    const pageType = item.slug.startsWith("blog") ? "blog" : "work";
    const svg = generateSvg(item.title, pageType, font);
    await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(outPath);
    console.log(`  ✓ public/ogp/${item.slug}.webp`);
  }
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
        slug: `blog/${file.replace(/\.mdx?$/, "")}`,
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
        slug: `work/${file.replace(/\.mdx?$/, "")}`,
      });
    }
  }

  await generateOgp(items, font);

  console.log(`\n✅ Done! Generated ${1 + items.length} OGP images.`);
}

main();
