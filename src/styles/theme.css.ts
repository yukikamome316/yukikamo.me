import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    background: "#fdfdfd", // 白ベース
    surface: "#ffffff", // カード等の表面
    surfaceHover: "#f5f7fa",
    text: "#2b2c32", // ダークグレー（ユーザー指定）
    primary: "#26cafd", // メインの水色（ユーザー指定）
    primaryDark: "#007699", // アクセシビリティ用（WCAG AAクリア可能な暗さ）
    secondary: "#fd5826", // アクセントのオレンジ（補色・ユーザー指定）
    muted: "#5c6475", // 少し明るめのグレー（コントラスト改善済み）
    border: "#e4e7ec", // 薄い境界線
  },
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
});
