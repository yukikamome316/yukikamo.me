import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const container = style({
  position: "relative",
  width: "100%",
  height: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginRight: "-4rem",
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
  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
  overflow: "hidden",
});

export const windowHeader = style({
  display: "flex",
  alignItems: "center",
  padding: "10px 16px",
  backgroundColor: vars.color.surfaceHover,
  borderBottom: `1px solid ${vars.color.border}`,
  position: "relative",
});

export const windowControls = style({
  display: "flex",
  gap: "6px",
  position: "absolute",
  left: "16px",
});

export const dot = style({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
});

export const dotRed = style([dot, { backgroundColor: vars.color.border }]);
export const dotYellow = style([dot, { backgroundColor: vars.color.border }]);
export const dotGreen = style([dot, { backgroundColor: vars.color.border }]);

export const windowTitle = style({
  flex: 1,
  textAlign: "center",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: vars.color.text,
  letterSpacing: "-0.01em",
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
