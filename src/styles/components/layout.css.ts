import { style } from "@vanilla-extract/css";

export const mainContent = style({
  minHeight: "calc(100vh - 160px)",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 16px",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "0 32px",
    },
  },
});
