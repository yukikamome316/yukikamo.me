import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const shareContainer = style({
  marginTop: "3rem",
  paddingTop: "2rem",
  borderTop: `1px solid ${vars.color.border}`,
});

export const shareTitle = style({
  fontSize: "1rem",
  fontWeight: 700,
  marginBottom: "1rem",
  color: vars.color.text,
});

export const shareButtonList = style({
  display: "flex",
  gap: "0.75rem",
  flexWrap: "wrap",
});

export const shareButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: vars.color.text,
  backgroundColor: vars.color.surfaceHover,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "999px",
  cursor: "pointer",
  transition: "background-color 0.2s, border-color 0.2s",
  ":hover": {
    backgroundColor: vars.color.surface,
    borderColor: vars.color.primaryDark,
  },
});

export const shareButtonIcon = style({
  fontSize: "1rem",
});
