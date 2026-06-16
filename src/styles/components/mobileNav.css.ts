import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../theme.css";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const staggerIn = keyframes({
  from: { opacity: 0, transform: "translateY(16px)" },
  to: { opacity: 1, transform: "translateY(0)" },
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
  position: "relative",
  width: "24px",
  height: "18px",
  padding: 0,
  border: "none",
  background: "none",
  cursor: "pointer",
  zIndex: 1002,
});

export const mobileNavButtonLine = style({
  position: "absolute",
  left: 0,
  display: "block",
  width: "100%",
  height: "2px",
  backgroundColor: vars.color.text,
  borderRadius: "1px",
  transition: "transform 0.3s ease, opacity 0.3s ease",
  selectors: {
    "&:nth-child(1)": {
      top: 0,
    },
    "&:nth-child(2)": {
      top: "8px",
    },
    "&:nth-child(3)": {
      top: "16px",
    },
    '&[data-open="true"]:nth-child(1)': {
      top: "8px",
      transform: "rotate(45deg)",
    },
    '&[data-open="true"]:nth-child(2)': {
      opacity: 0,
    },
    '&[data-open="true"]:nth-child(3)': {
      top: "8px",
      transform: "rotate(-45deg)",
    },
  },
});

export const mobileNavOverlay = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: 1000,
  animationName: fadeIn,
  animationDuration: "0.2s",
  animationTimingFunction: "ease",
});

export const mobileNavPanel = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1001,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.color.surface,
  gap: "0.5rem",
  padding: "6rem 2rem 5rem",
  animationName: fadeIn,
  animationDuration: "0.2s",
  animationTimingFunction: "ease",
});

export const mobileNavLink = style({
  fontSize: "1.5rem",
  fontWeight: 600,
  color: vars.color.text,
  textDecoration: "none",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  transition: "color 0.2s, background-color 0.2s",
  animationName: staggerIn,
  animationDuration: "0.35s",
  animationTimingFunction: "ease-out",
  animationFillMode: "both",
  ":hover": {
    color: vars.color.primary,
    backgroundColor: `color-mix(in srgb, ${vars.color.primary} 8%, transparent)`,
  },
});

export const mobileNavLinkActive = style({
  color: vars.color.primary,
});

export const mobileNavLinks = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.25rem",
  padding: 0,
  margin: 0,
});

export const mobileNavFooter = style({
  display: "flex",
  gap: "1.25rem",
  marginTop: "3rem",
  animationName: staggerIn,
  animationDuration: "0.35s",
  animationTimingFunction: "ease-out",
  animationFillMode: "both",
  animationDelay: "0.3s",
});

export const mobileNavSocialLink = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  height: "2rem",
  color: vars.color.muted,
  transition: "color 0.2s",
  ":hover": {
    color: vars.color.primary,
  },
});
