import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const articleWrapper = style({
  display: "flex",
  justifyContent: "center",
  gap: "3rem",
  alignItems: "flex-start",
  padding: "0 1.5rem",
  "@media": {
    "(max-width: 1100px)": {
      gap: "2rem",
    },
    "(max-width: 640px)": {
      padding: "0 1rem",
    },
  },
});

export const articleContainer = style({
  maxWidth: "800px",
  width: "100%",
  margin: "4rem 0 4rem",
  "@media": {
    "(max-width: 640px)": {
      marginTop: "2rem",
      marginBottom: "2rem",
    },
  },
});

export const articleLayout = style({});

export const articleMain = style({});

export const articleSidebar = style({
  width: "260px",
  flexShrink: 0,
  flexGrow: 0,
  position: "sticky",
  top: "6rem",
  alignSelf: "flex-start",
  marginTop: "4rem",
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
  fontSize: "3rem",
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
  gap: "0.5rem",
  flexWrap: "wrap",
});

export const articleTag = style({
  fontSize: "0.875rem",
  color: vars.color.primaryDark,
});

export const articleTagBadge = style({
  fontSize: "0.875rem",
  padding: "0.25rem 0.75rem",
  backgroundColor: vars.color.surfaceHover,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "999px",
});

export const articleMeta = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5rem",
  marginBottom: "1.5rem",
  padding: "1rem 1.25rem",
  backgroundColor: vars.color.surfaceHover,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "8px",
});

export const articleMetaItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
});

export const articleMetaLabel = style({
  fontSize: "0.75rem",
  color: vars.color.muted,
});

export const articleMetaValue = style({
  fontSize: "0.875rem",
  color: vars.color.text,
  fontWeight: 500,
});

export const articleMetaGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
  padding: "1.5rem",
  backgroundColor: vars.color.surfaceHover,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "8px",
});

export const metaLabel = style({
  fontSize: "0.875rem",
  color: vars.color.muted,
  marginBottom: "0.25rem",
});

export const toc = style({
  padding: "1.5rem",
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "12px",
});

export const tocTitle = style({
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: vars.color.muted,
  marginBottom: "0.75rem",
  paddingBottom: "0.75rem",
  borderBottom: `1px solid ${vars.color.border}`,
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
  padding: "0.4rem 0.625rem",
  borderRadius: "6px",
  color: vars.color.muted,
  textDecoration: "none",
  fontSize: "0.875rem",
  fontWeight: 400,
  lineHeight: 1.5,
  transition: "all 0.2s ease",
  ":hover": {
    color: vars.color.text,
    backgroundColor: `color-mix(in srgb, ${vars.color.primary} 8%, transparent)`,
  },
});

export const tocItemLevel2 = style({
  fontWeight: 500,
});

export const tocItemLevel3 = style({
  paddingLeft: "1.5rem",
  fontSize: "0.825rem",
});

export const articleNav = style({
  marginTop: "4rem",
  paddingTop: "2rem",
  borderTop: `1px solid ${vars.color.border}`,
});

export const articleNavTitle = style({
  fontSize: "1.25rem",
  fontWeight: 700,
  marginBottom: "1rem",
  color: vars.color.text,
});

export const articleNavGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
});

export const articleNavCard = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "1rem 1.25rem",
  backgroundColor: vars.color.surfaceHover,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "8px",
  textDecoration: "none",
  transition: "border-color 0.2s, background-color 0.2s",
  ":hover": {
    borderColor: vars.color.primaryDark,
    backgroundColor: vars.color.surface,
  },
});

export const articleNavCardLabel = style({
  fontSize: "0.75rem",
  color: vars.color.muted,
});

export const articleNavCardTitle = style({
  fontSize: "1rem",
  fontWeight: 600,
  color: vars.color.text,
});

export const articleNavCardEmpty = style({
  display: "block",
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
