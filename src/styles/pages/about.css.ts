import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const pageSection = style({
  marginTop: vars.space.xlarge,
  marginBottom: vars.space.xlarge,
});

export const pageTitle = style({
  fontSize: "3rem",
  fontWeight: 800,
  letterSpacing: "-0.03em",
  marginBottom: "2rem",
});

export const pageDescription = style({
  fontSize: "1.1rem",
  lineHeight: "1.85",
  marginBottom: vars.space.xlarge,
  color: vars.color.muted,
  maxWidth: "680px",
});

export const skillsContainer = style({
  display: "flex",
  gap: "0.75rem",
  flexWrap: "wrap",
  marginBottom: vars.space.xlarge,
});

export const skillTag = style({
  padding: "0.4rem 1rem",
  backgroundColor: vars.color.surfaceHover,
  borderRadius: "9999px",
  border: `1px solid ${vars.color.border}`,
  fontSize: "0.875rem",
  fontWeight: 500,
  color: vars.color.text,
  transition: "background-color 0.2s, border-color 0.2s",
  ":hover": {
    backgroundColor: `color-mix(in srgb, ${vars.color.primary}, transparent 90%)`,
    borderColor: vars.color.primary,
  },
});

export const credentialsContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginBottom: vars.space.xlarge,
});

export const credentialItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  padding: "1rem 1.25rem",
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "10px",
  transition: "border-color 0.2s",
  ":hover": {
    borderColor: vars.color.primary,
  },
});

export const credentialTitle = style({
  fontSize: "1rem",
  fontWeight: 600,
  color: vars.color.text,
});

export const credentialOrg = style({
  fontSize: "0.875rem",
  color: vars.color.primaryDark,
  fontWeight: 500,
});

export const credentialDate = style({
  fontSize: "0.8rem",
  color: vars.color.muted,
});

export const languageGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
  gap: "1rem",
  marginBottom: vars.space.xlarge,
});

export const languageItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  padding: "1rem 1.25rem",
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "10px",
});

export const languageName = style({
  fontSize: "1rem",
  fontWeight: 600,
  color: vars.color.text,
});

export const languageLevel = style({
  fontSize: "0.8rem",
  color: vars.color.muted,
});
