import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  backgroundColor: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.font.body,
  lineHeight: 1.6,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  overflowX: "hidden",
  maxWidth: "100vw",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontFamily: vars.font.heading,
  fontWeight: 700,
  margin: 0,
});

globalStyle("a", {
  color: vars.color.primaryDark,
  textDecoration: "none",
  transition: "color 0.2s ease",
});

globalStyle("a:hover", {
  color: vars.color.secondary,
});

globalStyle("code", {
  fontFamily: vars.font.code,
  fontSize: "0.9em",
  fontWeight: 400,
});

globalStyle("pre", {
  fontFamily: vars.font.code,
  fontSize: "0.9rem",
  fontWeight: 400,
  overflowX: "auto",
  WebkitOverflowScrolling: "touch",
  scrollbarWidth: "auto",
  position: "relative",
  background: vars.color.surfaceHover,
});

// スクロールフェードオーバーレイ (右端がフェードアウトしていることを示す)
globalStyle("pre::after", {
  content: '""',
  position: "absolute",
  top: 0,
  right: 0,
  width: "2rem",
  height: "100%",
  background: `linear-gradient(to right, transparent, ${vars.color.surfaceHover})`,
  pointerEvents: "none",
  opacity: 0,
  transition: "opacity 0.25s ease",
  borderRadius: "0 8px 8px 0",
});

globalStyle("pre[data-scrollable]:not([data-scrolled-end])::after", {
  opacity: 1,
});

globalStyle("pre::-webkit-scrollbar", {
  height: "8px",
});

globalStyle("pre::-webkit-scrollbar-track", {
  background: vars.color.surfaceHover,
  borderRadius: "4px",
});

globalStyle("pre::-webkit-scrollbar-thumb", {
  background: vars.color.border,
  borderRadius: "4px",
});

globalStyle("pre code", {
  fontSize: "inherit",
});

globalStyle("*", {
  boxSizing: "border-box",
});
