import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const themeToggle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.25rem",
  height: "2.25rem",
  padding: 0,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "999px",
  backgroundColor: vars.color.surface,
  cursor: "pointer",
  transition: "background-color 0.2s, border-color 0.2s",
  ":hover": {
    backgroundColor: vars.color.surfaceHover,
    borderColor: vars.color.primaryDark,
  },
});

export const themeToggleIcon = style({
  fontSize: "1rem",
  lineHeight: 1,
});
