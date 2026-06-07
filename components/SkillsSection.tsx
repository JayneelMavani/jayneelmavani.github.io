import SectionHeader from "@/components/SectionHeader";
import SectionBackground from "@/components/SectionBackground";
import SkillChip from "@/components/SkillChip";
import { getSkillCategories } from "@/lib/data/skills";

export default function SkillsSection() {
  const categories = getSkillCategories();

  return (
    <section
      aria-labelledby="skills-heading"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <SectionBackground variant="subtle" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          id="skills-heading"
          title="Skills &"
          accent="Expertise"
          description="Technologies and tools I work with"
        />

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {categories.map((group) => (
            <div key={group.category} className="glass rounded-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-5 text-cyan-400">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2 sm:gap-2.5">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <SkillChip name={skill} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
