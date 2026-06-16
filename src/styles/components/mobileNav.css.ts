import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../theme.css";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const slideIn = keyframes({
  from: { transform: "translateX(100%)" },
  to: { transform: "translateX(0)" },
});

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
  alignItems: "center",
  gap: "5px",
  width: "2.25rem",
  height: "2.25rem",
  padding: "0.5rem",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "transparent",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.color.surfaceHover,
  },
});

export const mobileNavButtonLine = style({
  display: "block",
  width: "18px",
  height: "2px",
  backgroundColor: vars.color.text,
  borderRadius: "2px",
  transition: "transform 0.25s ease, opacity 0.25s ease",
  transformOrigin: "center",
  selectors: {
    '&[data-open="true"]:first-child': {
      transform: "translateY(7px) rotate(45deg)",
    },
    '&[data-open="true"]:nth-child(2)': {
      opacity: 0,
    },
    '&[data-open="true"]:last-child': {
      transform: "translateY(-7px) rotate(-45deg)",
    },
  },
});

export const mobileNavOverlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: 9,
  animationName: fadeIn,
  animationDuration: "0.2s",
  animationTimingFunction: "ease",
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
  gap: "0.5rem",
  zIndex: 10,
  animationName: slideIn,
  animationDuration: "0.25s",
  animationTimingFunction: "ease",
});

export const mobileNavLink = style({
  fontSize: "1.125rem",
  fontWeight: 500,
  color: vars.color.text,
  textDecoration: "none",
  padding: "0.75rem 1rem",
  borderRadius: "8px",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.color.surfaceHover,
  },
});

export const mobileNavLinkActive = style({
  color: vars.color.primary,
  fontWeight: 600,
  backgroundColor: `color-mix(in srgb, ${vars.color.primary} 8%, transparent)`,
});
