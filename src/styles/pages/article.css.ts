import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const articleContainer = style({
  maxWidth: "800px",
  margin: "4rem auto 6rem",
});

export const articleHeader = style({
  marginBottom: "3rem",
});

export const articleDate = style({
  color: vars.color.muted,
  fontSize: "0.875rem",
});

export const articleTitle = style({
  fontSize: "2.5rem",
  marginTop: "0.5rem",
  marginBottom: "1rem",
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
  color: vars.color.primary,
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
  fontSize: "1.125rem",
});

// Markdown コンテンツ用のグローバルスタイル
globalStyle(`${articleBody} h1, ${articleBody} h2, ${articleBody} h3`, {
  marginTop: "2.5rem",
  marginBottom: "1rem",
});

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
  fontSize: "0.875em",
});
