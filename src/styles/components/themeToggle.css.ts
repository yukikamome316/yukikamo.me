import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const themeToggle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.25rem",
  height: "2.25rem",
  padding: 0,
  border: "none",
  borderRadius: "999px",
  backgroundColor: "transparent",
  color: vars.color.muted,
  cursor: "pointer",
  position: "relative",
  zIndex: 10002,
  transition: "color 0.2s, background-color 0.2s",
  ":hover": {
    color: vars.color.text,
    backgroundColor: vars.color.surfaceHover,
  },
});

export const themeToggleIcon = style({
  display: "inline-flex",
  width: "1.125rem",
  height: "1.125rem",
});
