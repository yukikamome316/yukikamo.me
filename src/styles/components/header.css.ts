import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.space.medium} ${vars.space.large}`,
  position: "sticky",
  top: 0,
  zIndex: 10002,
  backdropFilter: "blur(8px)",
  backgroundColor: `color-mix(in srgb, ${vars.color.background} 85%, transparent)`,
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
    color: vars.color.primaryDark,
  },
});

export const navLinkActive = style({
  color: vars.color.text,
  fontWeight: 700,
});

export const navActions = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.small,
});

export const desktopOnly = style({
  "@media": {
    "(max-width: 640px)": {
      display: "none",
    },
  },
});
