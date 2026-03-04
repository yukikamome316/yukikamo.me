import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  margin: "0 auto",
  display: "flex",
  maxWidth: "fit-content",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "1.25rem",
  fontWeight: 500,
  backdropFilter: "blur(10px)",
  transition: "box-shadow 0.5s ease-out",
  overflow: "hidden",
  cursor: "pointer",
});

export const withBorder = style({
  padding: "0.35rem 0.75rem",
});

export const gradientOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "inherit",
  zIndex: 0,
  pointerEvents: "none",
  "::before": {
    content: '""',
    position: "absolute",
    left: "50%",
    top: "50%",
    borderRadius: "inherit",
    width: "calc(100% - 2px)",
    height: "calc(100% - 2px)",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#060010",
    zIndex: -1,
  },
});

export const textContent = style({
  display: "inline-block",
  position: "relative",
  zIndex: 2,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
});
