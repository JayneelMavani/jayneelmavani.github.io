import { siteConfig } from "@/lib/config/site";

const iconMap: Record<string, string> = {
  github: "🐙",
  linkedin: "💼",
  twitter: "𝕏",
};

export function getSocialIcon(icon: string): string {
  return iconMap[icon] ?? "🔗";
}

export function getResumeUrl(): string {
  return siteConfig.resumePath;
}

export function getMailtoUrl(): string {
  return `mailto:${siteConfig.email}`;
}
