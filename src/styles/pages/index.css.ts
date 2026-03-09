import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css.ts";

export const heroContainer = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "60vh",
  padding: "6rem 0 8rem",
  "@media": {
    "screen and (max-width: 1024px)": {
      flexDirection: "column",
      padding: "4rem 0 6rem",
      gap: "4rem",
    },
  },
});

export const heroTextContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxWidth: "500px",
  gap: "1rem", // アイコンとテキストの間隔
});

export const profileImage = style({
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  objectFit: "cover",
  border: `4px solid ${vars.color.primary}`,
  boxShadow: `0 12px 24px rgba(38, 202, 253, 0.4)`,
});

export const heroTitleWrapper = style({
  display: "flex",
  flexDirection: "column",
});

export const heroTitle = style({
  fontSize: "clamp(3.5rem, 8vw, 5.5rem)",
  fontWeight: 800,
  letterSpacing: "-0.03em",
  margin: 0,
  lineHeight: 1.1,
  color: vars.color.text,
});

export const heroSubtitle = style({
  fontSize: "1.5rem",
  color: vars.color.primaryDark,
  fontWeight: 600,
  letterSpacing: "0.02em",
  margin: "0.25rem 0 0 0",
});

export const heroDescription = style({
  marginTop: "1.5rem",
  fontSize: "1.125rem",
  color: vars.color.muted,
  lineHeight: 1.7,
  maxWidth: "600px",
  fontWeight: 400,
});

export const sectionTitle = style({
  fontSize: "1.75rem",
  fontWeight: 600,
  marginBottom: vars.space.medium,
  color: vars.color.text,
  letterSpacing: "-0.02em",
});
