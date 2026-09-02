export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "portfolio-theme";

/** Default on first visit — developer portfolio starts in dark mode */
export const DEFAULT_THEME_PREFERENCE: ThemePreference = "dark";

export const THEME_META_COLORS: Record<ResolvedTheme, string> = {
  dark: "#0a0e14",
  light: "#f5f7fa",
};

export function resolveTheme(preference: ThemePreference): ResolvedTheme {
  if (preference === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return preference;
}

export function getStoredPreference(): ThemePreference {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") return stored;
  return DEFAULT_THEME_PREFERENCE;
}

export function savePreference(preference: ThemePreference): void {
  localStorage.setItem(THEME_STORAGE_KEY, preference);
}

export function applyTheme(preference: ThemePreference, animate = false): ResolvedTheme {
  const resolved = resolveTheme(preference);
  const root = document.documentElement;

  if (animate) root.classList.add("theme-transition");
  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.dataset.themePreference = preference;
  root.dataset.themeResolved = resolved;

  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta) meta.content = THEME_META_COLORS[resolved];

  document.dispatchEvent(
    new CustomEvent("theme-change", { detail: { preference, resolved } }),
  );

  if (animate) {
    window.setTimeout(() => root.classList.remove("theme-transition"), 400);
  }

  return resolved;
}

export function contributionsChartUrl(username: string, theme: ResolvedTheme): string {
  const params = new URLSearchParams({
    username,
    area: "true",
    hide_border: "true",
  });

  if (theme === "dark") {
    params.set("bg_color", "0a0e14");
    params.set("color", "cdd9e5");
    params.set("line", "3b9eff");
    params.set("point", "22d3ee");
  } else {
    params.set("bg_color", "ffffff");
    params.set("color", "1a2332");
    params.set("line", "1d4ed8");
    params.set("point", "2563eb");
  }

  return `https://github-readme-activity-graph.vercel.app/graph?${params}`;
}
