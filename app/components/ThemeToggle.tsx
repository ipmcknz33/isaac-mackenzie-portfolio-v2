"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { toggle } = useTheme();

  return (
    <button
      type="button"
      className="mode-btn"
      onClick={toggle}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <svg
        className="theme-icon theme-icon-moon"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z" />
      </svg>
      <svg
        className="theme-icon theme-icon-sun"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}
