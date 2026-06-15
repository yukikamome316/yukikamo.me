import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const listSection = style({
  marginTop: "4rem",
  marginBottom: "4rem",
  "@media": {
    "(max-width: 640px)": {
      marginTop: "2rem",
      marginBottom: "2rem",
    },
  },
});

export const listTitle = style({
  fontSize: "3rem",
  fontWeight: 800,
  letterSpacing: "-0.03em",
  marginBottom: "2rem",
  color: vars.color.text,
});

export const listDescription = style({
  color: vars.color.muted,
  marginBottom: "4rem",
  fontSize: "1.1rem",
  lineHeight: 1.7,
  "@media": {
    "(max-width: 640px)": {
      marginBottom: "2rem",
    },
  },
});

export const yearGroup = style({
  marginBottom: "4rem",
});

export const yearGroupTitle = style({
  fontSize: "1.5rem",
  fontWeight: 700,
  color: vars.color.muted,
  marginBottom: "1.5rem",
  paddingBottom: "0.5rem",
  borderBottom: `1px solid ${vars.color.border}`,
});
