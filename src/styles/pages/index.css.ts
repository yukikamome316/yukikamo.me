import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const heroContainer = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "60vh",
  padding: "4rem 0 0",
  "@media": {
    "screen and (max-width: 1024px)": {
      flexDirection: "column",
      padding: "2rem 0 0",
      gap: "1.5rem",
    },
  },
});

export const heroProfileContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  marginBottom: "1rem",
  width: "100%",
});

export const heroTextContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxWidth: "500px",
  overflow: "hidden",
  "@media": {
    "screen and (max-width: 1024px)": {
      width: "100%",
    },
  },
});

export const heroVisualContainer = style({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  position: "relative",
  minWidth: "300px",
  width: "100%",
  "@media": {
    "screen and (max-width: 1024px)": {
      justifyContent: "center",
      alignItems: "center",
    },
  },
});

export const profileImage = style({
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  objectFit: "cover",
  margin: 0,
  border: `4px solid #75b0cc`,
  boxShadow: `4px 4px 12px 0px rgba(117, 176, 204, 0.2)`,
  "@media": {
    "screen and (max-width: 1024px)": {
      width: "120px",
      height: "120px",
    },
  },
});

export const heroTitleWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flex: 1,
  minWidth: 0,
  containerType: "inline-size",
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
  fontSize: "clamp(1rem, 10cqi, 1.6rem)",
  color: vars.color.primaryDark,
  fontWeight: 600,
  letterSpacing: "0.02em",
  margin: "0.25rem 0 0 0",
  overflowWrap: "anywhere",
});

export const heroDescription = style({
  marginTop: "1.5rem",
  fontSize: "1.125rem",
  color: vars.color.muted,
  lineHeight: 1.7,
  maxWidth: "600px",
  fontWeight: 400,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1rem",
      lineHeight: 1.8,
    },
  },
});

export const sectionTitle = style({
  fontSize: "1.75rem",
  fontWeight: 600,
  marginBottom: vars.space.medium,
  color: vars.color.text,
  letterSpacing: "-0.02em",
});

export const workSection = style({
  marginTop: "2rem",
});

export const articlesSection = style({
  marginTop: "4rem",
  marginBottom: "4rem",
});
