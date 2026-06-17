import { chromium } from "playwright";
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

// Simple static server for the dist directory
function serveStatic(dir, port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(
        dir,
        req.url === "/" ? "index.html" : req.url.split("?")[0]
      );
      try {
        if (fs.statSync(filePath).isDirectory())
          filePath = path.join(filePath, "index.html");
      } catch {
        filePath = path.join(dir, "index.html");
      }
      if (!fs.existsSync(filePath)) filePath = path.join(dir, "index.html");
      const ext = path.extname(filePath);
      const types = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "application/javascript",
        ".webp": "image/webp",
        ".png": "image/png",
        ".svg": "image/svg+xml",
        ".xml": "application/xml",
      };
      res.writeHead(200, { "Content-Type": types[ext] || "text/plain" });
      res.end(fs.readFileSync(filePath));
    });
    server.listen(port, "127.0.0.1", () => resolve(server));
  });
}

const server = await serveStatic(distDir, 4173);
const serverUrl = "http://127.0.0.1:4173";

// Run tests
try {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });

  await page.goto(serverUrl + "/blog/first-post/", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(1000);

  // Check if page loaded correctly (not 404)
  const pageTitle = await page.title();
  console.log("Page title:", pageTitle);
  if (pageTitle.includes("404") || pageTitle.includes("Not Found")) {
    throw new Error("Page not found: /blog/first-post/");
  }

  // Check sidebar exists
  const hasSidebar = await page.evaluate(() => {
    const tocLinks = document.querySelectorAll("[data-heading]");
    return tocLinks.length > 0;
  });
  console.log("TOC items found:", hasSidebar);

  // Get sidebar element
  const sidebarInfo = await page.evaluate(() => {
    const tocLinks = document.querySelectorAll("[data-heading]");
    let sidebar = null;
    let el = tocLinks[0].parentElement;
    while (el && getComputedStyle(el).overflowY !== "auto")
      el = el.parentElement;
    sidebar = el;
    if (!sidebar) return null;

    return {
      scrollHeight: sidebar.scrollHeight,
      clientHeight: sidebar.clientHeight,
      scrollTop: sidebar.scrollTop,
      maxScroll: sidebar.scrollHeight - sidebar.clientHeight,
      items: Array.from(tocLinks).map((li, i) => ({
        index: i,
        offsetTop: li.offsetTop,
        offsetHeight: li.offsetHeight,
        text: li.textContent?.trim(),
      })),
    };
  });

  if (sidebarInfo) {
    console.log("Sidebar info:", sidebarInfo);
    console.log("Max scroll possible:", sidebarInfo.maxScroll);

    // Scroll to last heading
    console.log("\n--- Scrolling to last heading ---");
    for (let i = 0; i < 30; i++) {
      await page.evaluate(() => window.scrollBy(0, 200));
      await page.waitForTimeout(100);
    }
    await page.waitForTimeout(1000);

    const afterScroll = await page.evaluate(() => {
      const tocLinks = document.querySelectorAll("[data-heading]");
      let sidebar = null;
      let el = tocLinks[0].parentElement;
      while (el && getComputedStyle(el).overflowY !== "auto")
        el = el.parentElement;
      sidebar = el;
      if (!sidebar) return null;

      // Find active item
      let activeIndex = -1;
      tocLinks.forEach((li, i) => {
        if (li.dataset.tocActive !== undefined) activeIndex = i;
      });

      return {
        scrollTop: sidebar.scrollTop,
        scrollHeight: sidebar.scrollHeight,
        clientHeight: sidebar.clientHeight,
        maxScroll: sidebar.scrollHeight - sidebar.clientHeight,
        activeIndex,
        lastItemBottom:
          tocLinks.length > 0
            ? tocLinks[tocLinks.length - 1].offsetTop +
              tocLinks[tocLinks.length - 1].offsetHeight
            : 0,
      };
    });

    if (afterScroll) {
      console.log("After scroll:", afterScroll);
      const diff = afterScroll.maxScroll - afterScroll.scrollTop;
      console.log("Gap from bottom:", diff, "px");
      if (diff <= 2) {
        console.log("✅ Bottom reached!");
      } else {
        console.log("❌ Not at bottom. Gap:", diff, "px");
      }
    }
  }

  await browser.close();
} catch (err) {
  console.error("Test failed:", err);
}

server.close();
process.exit(0);
