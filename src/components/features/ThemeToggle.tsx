import { useEffect, useState } from "react";
import {
  themeToggle,
  themeToggleIcon,
} from "../../styles/components/themeToggle.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const saved = localStorage.getItem("theme");
      if (!saved) {
        const dark = mediaQuery.matches;
        setIsDark(dark);
        document.documentElement.classList.toggle("dark", dark);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <button type="button" className={themeToggle} aria-label="テーマ切替">
        <span className={themeToggleIcon}>☀️</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={themeToggle}
      onClick={toggle}
      aria-label={isDark ? "ライトモードに切替" : "ダークモードに切替"}
    >
      <span className={themeToggleIcon}>{isDark ? "🌙" : "☀️"}</span>
    </button>
  );
}
