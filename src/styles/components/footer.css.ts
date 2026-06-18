import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const footer = style({
  padding: `${vars.space.large} ${vars.space.medium}`,
  borderTop: `1px solid ${vars.color.border}`,
  marginTop: vars.space.xlarge,
  color: vars.color.muted,
  fontSize: "0.875rem",
});

export const footerInner = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  maxWidth: "1200px",
  margin: "0 auto",
  "@media": {
    "(max-width: 640px)": {
      flexDirection: "column",
      gap: "0.75rem",
    },
  },
});

export const footerLinks = style({
  display: "flex",
  gap: "0.75rem",
});

export const footerIconLink = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.25rem",
  height: "2.25rem",
  borderRadius: "999px",
  color: vars.color.muted,
  border: `1px solid ${vars.color.border}`,
  transition: "color 0.2s, border-color 0.2s, background-color 0.2s",
  selectors: {
    "&:hover": {
      color: vars.color.primary,
      borderColor: vars.color.primary,
      backgroundColor: `color-mix(in srgb, ${vars.color.primary} 8%, transparent)`,
    },
  },
});
