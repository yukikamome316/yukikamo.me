import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const container = style({
  position: "relative",
  perspective: "900px",
  overflow: "visible",
  "@media": {
    "(max-width: 768px)": {
      transform: "scale(0.75) translate(25%, 25%)",
    },
    "(max-width: 480px)": {
      transform: "scale(0.55) translate(25%, 25%)",
    },
  },
});

export const card = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "12px",
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  transformStyle: "preserve-3d",
  willChange: "transform",
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
});
