import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SITE_TITLE = "ゆきの置き手紙";
const OUTPUT_DIR = path.join(ROOT, "public", "ogp");
const CONTENT_DIR = path.join(ROOT, "src", "content");
const FONTS_DIR = path.join(
  ROOT,
  "node_modules",
  "@fontsource-variable",
  "noto-sans-jp",
  "files"
);
const PROFILE_IMG = path.join(ROOT, "src", "assets", "profile.webp");

const COLOR = {
  primary: "#26cafd",
  primaryLight: "#7ed9f7",
  secondary: "#fd5826",
  text: "#2b2c32",
  bgStart: "#f0fcff",
  bgEnd: "#fff5f5",
};

const FONT_NAME = "Noto Sans JP";

/** Read woff2 files and build embedded @font-face CSS */
function getFontFaces(): string {
  const needed = [
    "noto-sans-jp-latin-wght-normal.woff2",
    "noto-sans-jp-119-wght-normal.woff2",
    "noto-sans-jp-100-wght-normal.woff2",
    "noto-sans-jp-108-wght-normal.woff2",
    "noto-sans-jp-110-wght-normal.woff2",
  ];

  return needed
    .map((file) => {
      const buf = fs.readFileSync(path.join(FONTS_DIR, file));
      const b64 = buf.toString("base64");
      return `@font-face {
  font-family: '${FONT_NAME}';
  font-style: normal;
  font-weight: 100 900;
  src: url(data:font/woff2;base64,${b64}) format('woff2-variations');
}`;
    })
    .join("\n");
}

/** Embed profile image as base64 data URI */
function getProfileImageDataUri(): string {
  const buf = fs.readFileSync(PROFILE_IMG);
  return `data:image/webp;base64,${buf.toString("base64")}`;
}

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

const FONT_FACES = getFontFaces();
const PROFILE_DATA_URI = getProfileImageDataUri();

function generateSvg(
  title: string,
  pageType: "default" | "blog" | "work"
): string {
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

  const label =
    pageType === "default"
      ? SITE_TITLE
      : `${pageType === "blog" ? "Articles" : "Work"} | ${SITE_TITLE}`;

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
${FONT_FACES}
    </style>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${COLOR.bgStart}" />
      <stop offset="100%" stop-color="${COLOR.bgEnd}" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${COLOR.primary}" />
      <stop offset="100%" stop-color="${COLOR.primaryLight}" />
    </linearGradient>
    <clipPath id="avatarClip">
      <circle cx="103" cy="533" r="25" />
    </clipPath>
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

  <!-- Title -->
  <text font-family="'${FONT_NAME}', sans-serif" font-size="${fontSize}" font-weight="700" fill="${COLOR.text}">
${tspans}
  </text>

  <!-- Profile icon (bottom-left) -->
  <image href="${PROFILE_DATA_URI}" x="78" y="508" width="50" height="50" clip-path="url(#avatarClip)" />

  <!-- Site name -->
  <text x="145" y="543" font-family="'${FONT_NAME}', sans-serif" font-size="20" font-weight="600" fill="${COLOR.primary}" letter-spacing="2">
    ${escapeXml(label)}
  </text>
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

async function generateOgp(items: PageItem[]): Promise<void> {
  // Generate default OGP
  console.log("Generating default OGP...");
  const defaultSvg = generateSvg("ゆきの置き手紙", "default");
  await sharp(Buffer.from(defaultSvg))
    .webp({ quality: 90 })
    .toFile(path.join(OUTPUT_DIR, "default.webp"));
  console.log("  ✓ public/ogp/default.webp");

  // Generate per-page OGP
  for (const item of items) {
    const outPath = path.join(OUTPUT_DIR, `${item.slug}.webp`);
    const dir = path.dirname(outPath);
    fs.mkdirSync(dir, { recursive: true });

    const pageType = item.slug.startsWith("blog") ? "blog" : "work";
    const svg = generateSvg(item.title, pageType);
    await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(outPath);
    console.log(`  ✓ public/ogp/${item.slug}.webp`);
  }
}

async function main(): Promise<void> {
  console.log("🔧 Generating OGP images...\n");

  // Clean output directory
  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const items: PageItem[] = [];

  // Collect blog posts
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

  // Collect work items
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

  await generateOgp(items);

  console.log(`\n✅ Done! Generated ${1 + items.length} OGP images.`);
}

main().catch((err) => {
  console.error("❌ Failed to generate OGP images:", err);
  process.exit(1);
});
