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
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.small,
});

export const footerSocial = style({
  display: "flex",
  gap: vars.space.medium,
});

export const footerSocialLink = style({
  color: vars.color.muted,
  textDecoration: "none",
  transition: "color 0.2s",
  ":hover": {
    color: vars.color.primaryDark,
  },
});

export const footerCopyright = style({
  margin: 0,
});
