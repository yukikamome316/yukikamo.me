import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const card = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  minWidth: 0,
  backgroundColor: vars.color.surface,
  borderRadius: vars.space.medium,
  overflow: "hidden",
  transition: "transform 0.2s, box-shadow 0.2s",
  border: `1px solid ${vars.color.border}`,
  textDecoration: "none",
  color: "inherit",
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: `0 10px 30px rgba(38, 202, 253, 0.15)`,
  },
});

export const cardImage = style({
  position: "relative",
  width: "100%",
  aspectRatio: "1200 / 630",
  backgroundColor: vars.color.surfaceHover,
  overflow: "hidden",
});

export const cardImageInner = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const cardDateOverlay = style({
  position: "absolute",
  right: "0.75rem",
  bottom: "0.5rem",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.375rem",
  padding: "0.2rem 0.5rem",
  fontSize: "0.7rem",
  color: "#ffffff",
  backgroundColor: "rgba(0, 0, 0, 0.45)",
  backdropFilter: "blur(4px)",
  borderRadius: "999px",
});

export const cardContent = style({
  padding: vars.space.medium,
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: vars.space.small,
});

export const cardTitle = style({
  fontSize: "1.0625rem",
  fontWeight: 700,
  lineHeight: 1.4,
  color: vars.color.text,
});

export const cardDescription = style({
  color: vars.color.muted,
  fontSize: "0.875rem",
  marginBottom: vars.space.small,
});

export const cardHead = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
});

export const cardHeadItem = style({
  fontSize: "0.875rem",
  color: vars.color.muted,
  lineHeight: 1.5,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const cardSource = style({
  fontSize: "0.65rem",
  fontWeight: 500,
  color: "rgba(255,255,255,0.8)",
});

export const cardTagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.25rem",
  marginTop: "auto",
});

export const cardTag = style({
  fontSize: "0.75rem",
  padding: "0.125rem 0.5rem",
  backgroundColor: vars.color.surfaceHover,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "999px",
  color: vars.color.muted,
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: vars.space.large,
  marginTop: vars.space.large,
});
