import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("html", {
  scrollBehavior: "smooth",
});

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
  fontSize: "0.9375em",
  fontWeight: 400,
});

globalStyle("pre", {
  fontFamily: vars.font.code,
  fontSize: "0.9375rem",
  fontWeight: 400,
  overflowX: "auto",
  WebkitOverflowScrolling: "touch",
  scrollbarWidth: "auto",
  position: "relative",
  background: vars.color.surfaceHover,
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

// remark-link-card
globalStyle(".rlc-container", {
  display: "flex",
  gap: "1rem",
  border: `1px solid ${vars.color.border}`,
  borderRadius: "8px",
  padding: "1rem",
  marginBottom: "1.5rem",
  textDecoration: "none",
  color: vars.color.text,
  transition: "border-color 0.2s, box-shadow 0.2s",
});

globalStyle(".rlc-container:hover", {
  borderColor: vars.color.primary,
  boxShadow: `0 2px 8px ${vars.color.border}`,
});

globalStyle(".rlc-info", {
  flex: 1,
  minWidth: 0,
});

globalStyle(".rlc-title", {
  fontSize: "1rem",
  fontWeight: 600,
  marginBottom: "0.25rem",
  color: vars.color.text,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

globalStyle(".rlc-description", {
  fontSize: "0.875rem",
  color: vars.color.muted,
  marginBottom: "0.5rem",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

globalStyle(".rlc-url-container", {
  display: "flex",
  alignItems: "center",
  gap: "0.375rem",
  fontSize: "0.8rem",
  color: vars.color.muted,
});

globalStyle(".rlc-favicon", {
  width: "16px",
  height: "16px",
  borderRadius: "2px",
  flexShrink: 0,
});

globalStyle(".rlc-url", {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

globalStyle(".rlc-image-container", {
  flexShrink: 0,
  width: "120px",
  aspectRatio: "16 / 9",
  borderRadius: "4px",
  overflow: "hidden",
  backgroundColor: vars.color.surfaceHover,
});

globalStyle(".rlc-image", {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "contain",
});
