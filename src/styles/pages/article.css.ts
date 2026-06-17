import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const articleWrapper = style({
  display: "flex",
  justifyContent: "center",
  gap: "6rem",
  alignItems: "flex-start",
  padding: "0 1.5rem",
  "@media": {
    "(max-width: 1100px)": {
      gap: "2rem",
    },
    "(max-width: 640px)": {
      padding: "0",
    },
  },
});

export const articleContainer = style({
  maxWidth: "800px",
  width: "100%",
  margin: "4rem 0 4rem",
  marginLeft: "6rem",
  "@media": {
    "(max-width: 1100px)": {
      marginLeft: "0",
    },
    "(max-width: 640px)": {
      marginTop: "2rem",
      marginBottom: "2rem",
      padding: "0 0.5rem",
    },
  },
});

export const articleLayout = style({});

export const articleMain = style({});

export const articleSidebar = style({
  width: "280px",
  flexShrink: 0,
  position: "sticky",
  top: "6rem",
  marginTop: "4rem",
  maxHeight: "calc(100vh - 8rem)",
  overflowY: "auto",
  "@media": {
    "(max-width: 1100px)": {
      display: "none",
    },
  },
});

export const articleHeader = style({
  marginBottom: "3rem",
});

export const articleDate = style({
  color: vars.color.muted,
  fontSize: "0.875rem",
});

export const articleTitle = style({
  fontSize: "1.875rem",
  marginTop: "0.5rem",
  marginBottom: "1.5rem",
});

export const articleDescription = style({
  fontSize: "1.125rem",
  color: vars.color.muted,
  marginBottom: "2rem",
});

export const articleTagList = style({
  display: "flex",
  gap: "0.375rem",
  flexWrap: "wrap",
});

export const articleTag = style({
  fontSize: "0.8rem",
  fontWeight: 500,
  color: vars.color.primaryDark,
  padding: "0.2rem 0.6rem",
  backgroundColor: `color-mix(in srgb, ${vars.color.primary} 6%, transparent)`,
  borderRadius: "6px",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: `color-mix(in srgb, ${vars.color.primary} 14%, transparent)`,
  },
});

export const articleMeta = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  marginBottom: "1.5rem",
});

export const articleMetaItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.125rem",
  padding: "0.6rem 1rem",
  backgroundColor: vars.color.surfaceHover,
  borderRadius: "10px",
  borderTop: `3px solid ${vars.color.primary}`,
});

export const articleMetaLabel = style({
  fontSize: "0.7rem",
  color: vars.color.muted,
  fontWeight: 500,
  letterSpacing: "0.03em",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.25rem",
});

export const articleMetaValue = style({
  fontSize: "1rem",
  color: vars.color.text,
  fontWeight: 700,
});

export const articleMetaGrid = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
});

export const metaLabel = style({
  fontSize: "0.65rem",
  color: vars.color.muted,
  fontWeight: 500,
  letterSpacing: "0.03em",
  marginBottom: "0.125rem",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.25rem",
});

export const metaCard = style({
  display: "flex",
  flexDirection: "column",
  gap: "0",
  padding: "0.6rem 1rem",
  backgroundColor: vars.color.surfaceHover,
  borderRadius: "10px",
  borderTop: `3px solid ${vars.color.primary}`,
});

export const metaCardValue = style({
  fontSize: "1rem",
  color: vars.color.text,
  fontWeight: 700,
  textDecoration: "none",
});

export const toc = style({
  padding: "1.25rem",
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "12px",
  position: "relative",
  overflow: "hidden",
});

export const tocTitle = style({
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: vars.color.muted,
  marginBottom: "0.75rem",
  paddingBottom: "0.75rem",
  borderBottom: `1px solid ${vars.color.border}`,
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  ":before": {
    content: '"—"',
    color: vars.color.primary,
    fontWeight: 400,
    fontSize: "0.8rem",
  },
});

export const tocList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.125rem",
});

export const tocItem = style({
  display: "block",
  padding: "0.375rem 0.75rem",
  borderRadius: "6px",
  color: vars.color.muted,
  textDecoration: "none",
  fontSize: "0.85rem",
  fontWeight: 400,
  lineHeight: 1.5,
  borderLeft: `2px solid transparent`,
  transition: "all 0.2s ease",
  ":hover": {
    color: vars.color.text,
    backgroundColor: `color-mix(in srgb, ${vars.color.primary} 6%, transparent)`,
    borderLeftColor: `color-mix(in srgb, ${vars.color.primary} 30%, transparent)`,
  },
});

export const tocItemLevel2 = style({
  fontWeight: 500,
});

globalStyle("[data-toc-active][data-toc-active]", {
  color: vars.color.primary,
  backgroundColor: `color-mix(in srgb, ${vars.color.primary} 10%, transparent)`,
  fontWeight: 600,
  borderRadius: "6px",
  borderLeft: `2px solid ${vars.color.primary}`,
});

export const tocItemLevel3 = style({
  paddingLeft: "1.5rem",
  fontSize: "0.8rem",
});

export const tocMobile = style({
  display: "none",
  marginBottom: "2rem",
  "@media": {
    "(max-width: 1100px)": {
      display: "block",
    },
  },
});

export const articleBody = style({
  lineHeight: "1.8",
  fontSize: "1.125rem",
});

// Markdown コンテンツ用のグローバルスタイル
globalStyle(`${articleBody} h1, ${articleBody} h2, ${articleBody} h3`, {
  marginTop: "2.5rem",
  marginBottom: "1rem",
  position: "relative",
});

// パーマリンクコピー用アンカーアイコン
globalStyle(`${articleBody} h2, ${articleBody} h3, ${articleBody} h4`, {
  paddingLeft: "1.5rem",
  marginLeft: "-1.5rem",
});

globalStyle(
  `${articleBody} h2 .copy-anchor, ${articleBody} h3 .copy-anchor, ${articleBody} h4 .copy-anchor`,
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "1.5rem",
    color: vars.color.primary,
    textDecoration: "none",
    opacity: 0,
    transition: "opacity 0.2s",
    cursor: "pointer",
    fontSize: "0.8em",
    fontWeight: 400,
    border: "none",
    background: "none",
    padding: 0,
  }
);

globalStyle(
  `${articleBody} h2:hover .copy-anchor, ${articleBody} h3:hover .copy-anchor, ${articleBody} h4:hover .copy-anchor`,
  {
    opacity: 1,
  }
);

globalStyle(`${articleBody} p`, {
  marginBottom: "1.5rem",
});

globalStyle(`${articleBody} ul, ${articleBody} ol`, {
  marginBottom: "1.5rem",
  paddingLeft: "1.5rem",
});

globalStyle(`${articleBody} li`, {
  marginBottom: "0.5rem",
});

globalStyle(`${articleBody} code`, {
  background: vars.color.surfaceHover,
  padding: "0.2rem 0.4rem",
  borderRadius: "4px",
  fontSize: "0.9375em",
});

globalStyle(`${articleBody} pre`, {
  background: vars.color.surfaceHover,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "8px",
  padding: "1.25rem",
  overflowX: "auto",
  position: "relative",
  marginBottom: "1.5rem",
});

globalStyle(`${articleBody} pre code`, {
  background: "transparent",
  padding: 0,
  fontSize: "0.9375em",
});

// テーブル
globalStyle(`${articleBody} table`, {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: "1.5rem",
  fontSize: "0.9rem",
});

globalStyle(`${articleBody} th, ${articleBody} td`, {
  padding: "0.625rem 1rem",
  textAlign: "left",
  borderBottom: `1px solid ${vars.color.border}`,
});

globalStyle(`${articleBody} thead th`, {
  fontWeight: 600,
  backgroundColor: vars.color.surfaceHover,
  borderBottom: `1px solid ${vars.color.primary}`,
});

globalStyle(`${articleBody} tbody tr:hover`, {
  backgroundColor:
    "color-mix(in srgb, " + vars.color.primary + " 5%, transparent)",
});

globalStyle(`${articleBody} tbody tr:last-child td`, {
  borderBottom: "none",
});

// 注釈ブロック（テーマ対応）
globalStyle(`${articleBody} .admonition`, {
  padding: "1rem 1.25rem",
  borderRadius: "8px",
  borderLeftWidth: "4px",
  borderLeftStyle: "solid",
  marginBottom: "1.5rem",
});

globalStyle(`${articleBody} .admonition p`, {
  margin: 0,
});

globalStyle(`${articleBody} .admonition.info`, {
  backgroundColor:
    "color-mix(in srgb, " +
    vars.color.primary +
    " 12%, " +
    vars.color.surface +
    ")",
  borderLeftColor: vars.color.primary,
});

globalStyle(`${articleBody} .admonition.warning`, {
  backgroundColor:
    "color-mix(in srgb, " +
    vars.color.secondary +
    " 12%, " +
    vars.color.surface +
    ")",
  borderLeftColor: vars.color.secondary,
});
