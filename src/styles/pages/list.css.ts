import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const listSection = style({
  marginTop: "4rem",
  marginBottom: "4rem",
});

export const listTitle = style({
  fontSize: "1.875rem",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  marginBottom: "1.5rem",
  color: vars.color.text,
});

export const listDescription = style({
  color: vars.color.muted,
  marginBottom: "4rem",
  fontSize: "1.1rem",
  lineHeight: 1.7,
});

export const yearGroup = style({
  marginBottom: "4rem",
});

export const yearGroupTitle = style({
  fontSize: "1.5rem",
  fontWeight: 700,
  color: vars.color.muted,
  marginBottom: "1.5rem",
  paddingBottom: "0.5rem",
  borderBottom: `1px solid ${vars.color.border}`,
});
