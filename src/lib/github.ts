import { GITHUB_TOKEN as ASTRO_GITHUB_TOKEN } from "astro:env/server";

export interface GitHubRepo {
  name: string;
  description: string | null;
  htmlUrl: string;
  language: string | null;
  languageColor: string;
  stargazersCount: number;
  forksCount: number;
  pushedAt: string;
}

export interface GitHubProfile {
  login: string;
  avatarUrl: string;
  htmlUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
}

export interface GitHubLanguage {
  name: string;
  percentage: number;
  bytes: number;
  color: string;
}

export interface GitHubCommitActivity {
  repo: string;
  repoUrl: string;
  date: string;
  commits?: number;
  message?: string;
}

export interface GitHubActivityData {
  profile: GitHubProfile;
  totalStars: number;
  repos: GitHubRepo[];
  languages: GitHubLanguage[];
  commitActivity: GitHubCommitActivity[];
  contributionsChartUrl: string;
}

const GITHUB_API = "https://api.github.com";
const USER_AGENT = "Saleh-Portfolio-Build";

const LANG_COLORS: Record<string, string> = {
  Java: "#b07219",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "Jupyter Notebook": "#DA5B0B",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Go: "#00ADD8",
  Rust: "#dea584",
  C: "#555555",
  "C++": "#f34b7d",
  CSharp: "#178600",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  Vue: "#41b883",
  Astro: "#ff5a03",
  React: "#61dafb",
};

const CACHE_TTL_MS = 60 * 60 * 1000;

let activityCache: {
  username: string;
  data: GitHubActivityData | null;
  fetchedAt: number;
} | null = null;

function resolveGitHubToken(): string | undefined {
  const token = ASTRO_GITHUB_TOKEN ?? import.meta.env.GITHUB_TOKEN;
  const trimmed = token?.trim();
  return trimmed || undefined;
}

function githubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": USER_AGENT,
  };
  const token = resolveGitHubToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

async function githubFetch<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, { headers: githubHeaders() });
    if (!response.ok) {
      if (import.meta.env.DEV) {
        console.warn(`[GitHub API] ${response.status} ${response.statusText} — ${url}`);
      }
      return null;
    }
    return (await response.json()) as T;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("[GitHub API] fetch failed:", error);
    }
    return null;
  }
}

function contributionsChartUrl(username: string): string {
  const params = new URLSearchParams({
    username,
    bg_color: "0e141b",
    color: "ffffff",
    line: "0078ff",
    point: "0078ff",
    area: "true",
    hide_border: "true",
  });
  return `https://github-readme-activity-graph.vercel.app/graph?${params}`;
}

function formatRelativeDate(iso: string, locale: string): string {
  const date = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (locale === "fr") {
    if (diffDays === 0) return "Aujourd'hui";
    if (diffDays === 1) return "Hier";
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    if (diffDays < 30) return `Il y a ${Math.floor(diffDays / 7)} sem.`;
    return date.toLocaleDateString("fr-FR", { month: "short", day: "numeric", year: "numeric" });
  }

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} wk ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export async function fetchGitHubActivity(username: string): Promise<GitHubActivityData | null> {
  const now = Date.now();
  if (
    activityCache &&
    activityCache.username === username &&
    now - activityCache.fetchedAt < CACHE_TTL_MS
  ) {
    return activityCache.data;
  }

  type ApiUser = {
    login: string;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
    following: number;
  };

  type ApiRepo = {
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    pushed_at: string;
    fork: boolean;
  };

  type ApiEvent = {
    type: string;
    created_at: string;
    repo: { name: string; url: string };
    payload?: {
      commits?: { message: string }[];
    };
  };

  const user = await githubFetch<ApiUser>(`${GITHUB_API}/users/${username}`);
  if (!user) {
    activityCache = { username, data: null, fetchedAt: now };
    return null;
  }

  const reposRaw =
    (await githubFetch<ApiRepo[]>(
      `${GITHUB_API}/users/${username}/repos?sort=pushed&per_page=12&type=owner`,
    )) ?? [];

  const repos: GitHubRepo[] = reposRaw
    .filter((repo) => !repo.fork)
    .slice(0, 6)
    .map((repo) => ({
      name: repo.name,
      description: repo.description,
      htmlUrl: repo.html_url,
      language: repo.language,
      languageColor: repo.language ? (LANG_COLORS[repo.language] ?? "#8b949e") : "#8b949e",
      stargazersCount: repo.stargazers_count,
      forksCount: repo.forks_count,
      pushedAt: repo.pushed_at,
    }));

  const totalStars = reposRaw.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  const langBytes: Record<string, number> = {};
  const reposForLangs = reposRaw.filter((r) => !r.fork).slice(0, 4);

  await Promise.all(
    reposForLangs.map(async (repo) => {
      const langs = await githubFetch<Record<string, number>>(
        `${GITHUB_API}/repos/${username}/${repo.name}/languages`,
      );
      if (!langs) return;
      for (const [lang, bytes] of Object.entries(langs)) {
        langBytes[lang] = (langBytes[lang] ?? 0) + bytes;
      }
    }),
  );

  const totalBytes = Object.values(langBytes).reduce((a, b) => a + b, 0);
  const languages: GitHubLanguage[] = Object.entries(langBytes)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([name, bytes]) => ({
      name,
      bytes,
      percentage: totalBytes ? Math.round((bytes / totalBytes) * 100) : 0,
      color: LANG_COLORS[name] ?? "#8b949e",
    }));

  const events =
    (await githubFetch<ApiEvent[]>(
      `${GITHUB_API}/users/${username}/events/public?per_page=15`,
    )) ?? [];

  let commitActivity: GitHubCommitActivity[] = events
    .filter((event) => event.type === "PushEvent")
    .slice(0, 5)
    .map((event) => ({
      repo: event.repo.name.split("/")[1] ?? event.repo.name,
      repoUrl: `https://github.com/${event.repo.name}`,
      date: event.created_at,
      commits: event.payload?.commits?.length,
      message: event.payload?.commits?.[0]?.message,
    }));

  if (commitActivity.length === 0) {
    commitActivity = repos.slice(0, 5).map((repo) => ({
      repo: repo.name,
      repoUrl: repo.htmlUrl,
      date: repo.pushedAt,
    }));
  }

  const result: GitHubActivityData = {
    profile: {
      login: user.login,
      avatarUrl: user.avatar_url,
      htmlUrl: user.html_url,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
    },
    totalStars,
    repos,
    languages,
    commitActivity,
    contributionsChartUrl: contributionsChartUrl(username),
  };

  activityCache = { username, data: result, fetchedAt: now };
  return result;
}

export { formatRelativeDate };
