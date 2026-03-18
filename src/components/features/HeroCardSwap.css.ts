import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const container = style({
  position: "relative",
  width: "100%",
  height: "500px",
  marginRight: "2rem",
  "@media": {
    "screen and (max-width: 1200px)": {
      marginRight: 0,
      transform: "scale(0.85)",
      transformOrigin: "right center",
    },
    "screen and (max-width: 1024px)": {
      transform: "scale(0.9)",
      transformOrigin: "center center",
      height: "450px",
    },
    "screen and (max-width: 768px)": {
      transform: "scale(0.7)",
      transformOrigin: "center center",
      height: "350px",
    },
    "screen and (max-width: 480px)": {
      transform: "scale(0.55)",
      transformOrigin: "center center",
      height: "275px",
    },
  },
});

export const cardSwapWrapper = style({
  position: "absolute",
  top: "50%",
  right: 0,
  transform: "translateY(-50%)",
  width: "600px",
  height: "381px",
  vars: {
    "--ssr-skew": "4deg",
  },
  "@media": {
    "screen and (max-width: 1024px)": {
      left: "50%",
      right: "auto",
      transform: "translate(calc(-50% - 30px), -50%)",
    },
    "screen and (max-width: 768px)": {
      vars: {
        "--ssr-skew": "1deg",
      },
    },
  },
});

export const cardContent = style({
  display: "flex",
  flexDirection: "column",
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "16px",
  height: "100%",
  width: "100%",
  boxSizing: "border-box",
  boxShadow: "0 24px 64px rgba(0, 0, 0, 0.16), 0 8px 24px rgba(0, 0, 0, 0.08)",
  overflow: "hidden",
});

export const windowHeader = style({
  display: "flex",
  alignItems: "center",
  padding: "12px 16px",
  backgroundColor: vars.color.surfaceHover,
  borderBottom: `1px solid rgba(0, 0, 0, 0.05)`,
  position: "relative",
});

export const windowControls = style({
  display: "flex",
  gap: "6px",
  position: "absolute",
  left: "16px",
});

export const dot = style({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
  backgroundColor: "rgba(0, 0, 0, 0.15)",
  transition: "background-color 0.2s ease",
});

export const dotRed = style([
  dot,
  {
    selectors: {
      "&:hover": {
        backgroundColor: "#ff5f56",
      },
    },
  },
]);

export const dotYellow = style([
  dot,
  {
    selectors: {
      "&:hover": {
        backgroundColor: "#ffbd2e",
      },
    },
  },
]);

export const dotGreen = style([
  dot,
  {
    selectors: {
      "&:hover": {
        backgroundColor: "#27c93f",
      },
    },
  },
]);

export const windowTitle = style({
  flex: 1,
  textAlign: "center",
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: vars.color.text,
  letterSpacing: "0.02em",
});

export const windowBody = style({
  flex: 1,
  overflow: "hidden",
  position: "relative",
  backgroundColor: vars.color.background,
});

export const image = style({
  objectFit: "cover",
  display: "block",
});
