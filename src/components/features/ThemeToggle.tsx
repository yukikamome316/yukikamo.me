import { useEffect, useState } from "react";
import {
  themeToggle,
  themeToggleIcon,
} from "../../styles/components/themeToggle.css";

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polygon points="12,2 15,9 22,9 16.5,14 18.5,22 12,18 5.5,22 7.5,14 2,9 9,9" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke-dasharray="2 10"
      stroke-dashoffset="3"
    />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="14" r="1" fill="currentColor" stroke="none" />
  </svg>
);

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

  return (
    <button
      type="button"
      className={themeToggle}
      onClick={mounted ? toggle : undefined}
      aria-label={isDark ? "ライトモードに切替" : "ダークモードに切替"}
    >
      <span className={themeToggleIcon}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}
