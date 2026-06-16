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
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M12 3a9 9 0 1 0 9 9c-4.97 0-9-4.03-9-9z" fill="currentColor" />
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
