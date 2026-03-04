import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const container = style({
  position: "relative",
  width: "100%",
  height: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const cardContent = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "16px",
  height: "100%",
  width: "100%",
  boxSizing: "border-box",
  boxShadow: "0 8px 24px rgba(38, 202, 253, 0.15)",
  overflow: "hidden",
  padding: "8px",
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
});
