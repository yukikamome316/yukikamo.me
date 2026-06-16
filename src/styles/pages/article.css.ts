import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const articleContainer = style({
  maxWidth: "720px",
  margin: "4rem auto 4rem",
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
  fontSize: "1rem",
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

export const articleBody = style({
  lineHeight: "1.8",
  fontSize: "1rem",
});

// Markdown コンテンツ用のグローバルスタイル
globalStyle(`${articleBody} h1`, {
  fontSize: "1.5rem",
  marginTop: "2.5rem",
  marginBottom: "0.75rem",
  position: "relative",
});

globalStyle(`${articleBody} h2`, {
  fontSize: "1.25rem",
  marginTop: "2rem",
  marginBottom: "0.5rem",
  position: "relative",
});

globalStyle(`${articleBody} h3`, {
  fontSize: "1.125rem",
  marginTop: "1.5rem",
  marginBottom: "0.5rem",
  position: "relative",
});

globalStyle(`${articleBody} h1, ${articleBody} h2, ${articleBody} h3`, {
  fontWeight: 700,
  lineHeight: 1.4,
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
  marginBottom: "1.25rem",
});

globalStyle(`${articleBody} ul, ${articleBody} ol`, {
  marginBottom: "1.25rem",
  paddingLeft: "1.5rem",
});

globalStyle(`${articleBody} li`, {
  marginBottom: "0.375rem",
});

globalStyle(`${articleBody} code`, {
  background: vars.color.surfaceHover,
  padding: "0.15rem 0.35rem",
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

globalStyle(`${articleBody} pre code`, {
  background: "transparent",
  padding: 0,
  fontSize: "0.875em",
});

globalStyle(`${articleBody} pre`, {
  background: vars.color.surfaceHover,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "8px",
  padding: "1rem",
  overflowX: "auto",
  marginBottom: "1.5rem",
  fontSize: "0.875rem",
  lineHeight: 1.6,
});
