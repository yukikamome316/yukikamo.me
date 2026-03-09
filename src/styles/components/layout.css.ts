import { style } from "@vanilla-extract/css";

export const mainContent = style({
  minHeight: "calc(100vh - 160px)",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 32px",
  "@media": {
    "screen and (min-width: 769px)": {
      padding: "0 16px",
    },
  },
});
