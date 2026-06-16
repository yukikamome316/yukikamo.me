import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../theme.css";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
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
  width: "28px",
  height: "20px",
  padding: 0,
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  zIndex: 10002,
});

export const mobileNavButtonLine = style({
  position: "absolute",
  left: 0,
  display: "block",
  height: "1.5px",
  backgroundColor: vars.color.text,
  borderRadius: "2px",
  transition: "width 0.2s ease, transform 0.3s ease, opacity 0.3s ease",
  transformOrigin: "center",
  selectors: {
    "&:nth-child(1)": {
      top: 0,
      width: "100%",
    },
    "&:nth-child(2)": {
      top: "9px",
      width: "calc(100% - 6px)",
    },
    "&:nth-child(3)": {
      top: "18px",
      width: "calc(100% - 12px)",
    },
    [`${mobileNavButton}:hover &:nth-child(2)`]: {
      width: "100%",
    },
    [`${mobileNavButton}:hover &:nth-child(3)`]: {
      width: "100%",
    },
    '&[data-open="true"]:nth-child(1)': {
      width: "100%",
      top: "9px",
      transform: "rotate(45deg)",
    },
    '&[data-open="true"]:nth-child(2)': {
      opacity: 0,
    },
    '&[data-open="true"]:nth-child(3)': {
      width: "100%",
      top: "9px",
      transform: "rotate(-45deg)",
    },
  },
});

export const mobileNavOverlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 10000,
  animationName: fadeIn,
  animationDuration: "0.3s",
  animationTimingFunction: "ease",
});

export const mobileNavPanel = style({
  position: "fixed",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  backgroundColor: vars.color.surface,
  zIndex: 10001,
  animationName: fadeIn,
  animationDuration: "0.25s",
  animationTimingFunction: "ease",
  padding: "5rem 2rem",
});

const linkSlideIn = keyframes({
  from: { opacity: 0, transform: "translateY(12px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

export const mobileNavLink = style({
  fontSize: "1.75rem",
  fontWeight: 600,
  color: vars.color.text,
  textDecoration: "none",
  padding: "0.5rem 0",
  transition: "color 0.2s",
  animationName: linkSlideIn,
  animationDuration: "0.4s",
  animationTimingFunction: "ease-out",
  animationFillMode: "both",
  ":hover": {
    color: vars.color.primary,
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
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const mobileNavFooter = style({
  position: "absolute",
  bottom: "2.5rem",
  display: "flex",
  gap: "1.25rem",
  animationName: linkSlideIn,
  animationDuration: "0.4s",
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
