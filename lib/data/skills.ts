import skillsData from "@/content/skills.json";
import type { SkillCategory } from "@/lib/types";

export function getSkillCategories(): SkillCategory[] {
  return skillsData as SkillCategory[];
}
