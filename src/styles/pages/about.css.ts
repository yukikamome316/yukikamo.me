import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const pageSection = style({
  marginTop: vars.space.xlarge,
});

export const pageTitle = style({
  fontSize: "3rem",
  marginBottom: "2rem",
});

export const pageDescription = style({
  fontSize: "1.2rem",
  lineHeight: "1.8",
  marginBottom: vars.space.xlarge,
  color: vars.color.muted,
});

export const experienceSection = style({
  marginBottom: vars.space.xlarge,
});

export const skillsContainer = style({
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  marginBottom: vars.space.xlarge,
});

export const skillTag = style({
  padding: "0.5rem 1rem",
  backgroundColor: vars.color.surfaceHover,
  borderRadius: "9999px",
  border: `1px solid ${vars.color.border}`,
  fontSize: "0.875rem",
});
