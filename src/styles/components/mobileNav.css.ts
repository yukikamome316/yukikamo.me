import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const mobileNav = style({
  display: "none",
  "@media": {
    "(max-width: 640px)": {
      display: "block",
    },
  },
});

export const mobileNavButton = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "6px",
  width: "2.25rem",
  height: "2.25rem",
  padding: "0.5rem",
  border: `1px solid ${vars.color.border}`,
  borderRadius: "8px",
  backgroundColor: vars.color.surface,
  cursor: "pointer",
});

export const mobileNavButtonLine = style({
  display: "block",
  width: "100%",
  height: "2px",
  backgroundColor: vars.color.text,
  borderRadius: "2px",
  transition: "transform 0.2s, opacity 0.2s",
  selectors: {
    '&[data-open="true"]:first-child': {
      transform: "translateY(4px) rotate(45deg)",
    },
    '&[data-open="true"]:last-child': {
      transform: "translateY(-4px) rotate(-45deg)",
    },
  },
});

export const mobileNavOverlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  zIndex: 9,
});

export const mobileNavPanel = style({
  position: "fixed",
  top: 0,
  right: 0,
  width: "min(280px, 80vw)",
  height: "100vh",
  padding: "5rem 1.5rem 1.5rem",
  backgroundColor: vars.color.surface,
  borderLeft: `1px solid ${vars.color.border}`,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  zIndex: 10,
});

export const mobileNavLink = style({
  fontSize: "1.25rem",
  fontWeight: 500,
  color: vars.color.text,
  textDecoration: "none",
  padding: "0.5rem 0",
});

export const mobileNavLinkActive = style({
  color: vars.color.primaryDark,
  fontWeight: 700,
});
