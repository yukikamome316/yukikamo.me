import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

const colorContract = createGlobalThemeContract({
  color: {
    background: "color-background",
    surface: "color-surface",
    surfaceHover: "color-surfaceHover",
    text: "color-text",
    primary: "color-primary",
    primaryDark: "color-primaryDark",
    secondary: "color-secondary",
    muted: "color-muted",
    border: "color-border",
  },
  font: {
    body: "font-body",
    heading: "font-heading",
    code: "font-code",
  },
  space: {
    xs: "space-xs",
    small: "space-small",
    medium: "space-medium",
    large: "space-large",
    xlarge: "space-xlarge",
    xxlarge: "space-xxlarge",
  },
});

const lightColors = {
  background: "#fdfdfd",
  surface: "#ffffff",
  surfaceHover: "#f5f7fa",
  text: "#2b2c32",
  primary: "#0080aa",
  primaryDark: "#0080aa",
  secondary: "#fd5826",
  muted: "#5c6475",
  border: "#e4e7ec",
};

const darkColors = {
  background: "#1a1b1e",
  surface: "#25262b",
  surfaceHover: "#2c2d35",
  text: "#e4e7ec",
  primary: "#75b0cc",
  primaryDark: "#75b0cc",
  secondary: "#ff7a52",
  muted: "#9ca3af",
  border: "#3f3f46",
};

const sharedTokens = {
  font: {
    body: '"Noto Sans JP Variable", system-ui, sans-serif',
    heading: '"Noto Sans JP Variable", system-ui, sans-serif',
    code: '"Fira Code", "Noto Sans JP Variable", monospace',
  },
  space: {
    xs: "4px",
    small: "12px",
    medium: "24px",
    large: "48px",
    xlarge: "96px",
    xxlarge: "160px",
  },
};

createGlobalTheme(":root", colorContract, {
  color: lightColors,
  ...sharedTokens,
});

createGlobalTheme(".dark", colorContract, {
  color: darkColors,
  ...sharedTokens,
});

export const vars = colorContract;
