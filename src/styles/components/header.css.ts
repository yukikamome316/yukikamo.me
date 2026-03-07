import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css.ts";

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.space.medium} ${vars.space.large}`,
  position: "sticky",
  top: 0,
  zIndex: 10,
  backdropFilter: "blur(8px)",
  backgroundColor: "rgba(253, 253, 253, 0.85)",
  borderBottom: `1px solid ${vars.color.border}`,
});

export const logo = style({
  fontSize: "1.5rem",
  fontWeight: 800,
  color: vars.color.text,
  textDecoration: "none",
});

export const nav = style({
  display: "flex",
  gap: vars.space.medium,
});

export const navLink = style({
  color: vars.color.muted,
  fontWeight: 500,
  textDecoration: "none",
  transition: "color 0.2s",
  ":hover": {
    color: vars.color.primary,
  },
});
