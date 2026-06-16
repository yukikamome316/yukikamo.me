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
  fontSize: "0.875em",
});

globalStyle("pre", {
  fontFamily: vars.font.code,
  fontSize: "0.875rem",
  overflowX: "auto",
  WebkitOverflowScrolling: "touch",
});

globalStyle("pre code", {
  fontSize: "inherit",
});

globalStyle("*", {
  boxSizing: "border-box",
});
