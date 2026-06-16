import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../theme.css";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const slideUp = keyframes({
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const scaleIn = keyframes({
  from: { opacity: 0, transform: "scale(0.95)" },
  to: { opacity: 1, transform: "scale(1)" },
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
  alignItems: "center",
  justifyContent: "center",
  width: "2.25rem",
  height: "2.25rem",
  padding: 0,
  border: "none",
  borderRadius: "999px",
  background: "none",
  cursor: "pointer",
  zIndex: 1002,
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.color.surfaceHover,
  },
  "@media": {
    "(min-width: 641px)": {
      display: "none",
    },
  },
});

export const mobileNavButtonInner = style({
  position: "relative",
  width: "24px",
  height: "18px",
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
    [`${mobileNavButtonInner} &:nth-child(1)`]: {
      top: 0,
    },
    [`${mobileNavButtonInner} &:nth-child(2)`]: {
      top: "8px",
    },
    [`${mobileNavButtonInner} &:nth-child(3)`]: {
      top: "16px",
    },
    [`${mobileNavButtonInner} &[data-open="true"]:nth-child(1)`]: {
      top: "8px",
      transform: "rotate(45deg)",
    },
    [`${mobileNavButtonInner} &[data-open="true"]:nth-child(2)`]: {
      opacity: 0,
    },
    [`${mobileNavButtonInner} &[data-open="true"]:nth-child(3)`]: {
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
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(4px)",
  zIndex: 1000,
  animationName: fadeIn,
  animationDuration: "0.25s",
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
  animationName: scaleIn,
  animationDuration: "0.3s",
  animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
});

export const mobileNavLink = style({
  fontSize: "1.75rem",
  fontWeight: 600,
  color: vars.color.text,
  textDecoration: "none",
  padding: "0.75rem 1.5rem",
  borderRadius: "12px",
  transition: "all 0.2s ease",
  animationName: slideUp,
  animationDuration: "0.4s",
  animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  animationFillMode: "both",
  ":hover": {
    color: vars.color.primary,
    backgroundColor: `color-mix(in srgb, ${vars.color.primary} 10%, transparent)`,
    transform: "translateX(8px)",
  },
});

export const mobileNavLinkActive = style({
  color: vars.color.primary,
});

export const mobileNavLinks = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
  padding: 0,
  margin: 0,
});

export const mobileNavFooter = style({
  display: "flex",
  gap: "1.5rem",
  marginTop: "3rem",
  padding: "1.5rem",
  borderTop: `1px solid ${vars.color.border}`,
  animationName: slideUp,
  animationDuration: "0.4s",
  animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  animationFillMode: "both",
  animationDelay: "0.3s",
});

export const mobileNavSocialLink = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.5rem",
  height: "2.5rem",
  color: vars.color.muted,
  borderRadius: "50%",
  transition: "all 0.2s ease",
  ":hover": {
    color: vars.color.primary,
    backgroundColor: `color-mix(in srgb, ${vars.color.primary} 10%, transparent)`,
    transform: "translateY(-2px)",
  },
});
