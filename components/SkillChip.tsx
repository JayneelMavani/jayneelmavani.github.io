interface SkillChipProps {
  name: string;
}

export default function SkillChip({ name }: SkillChipProps) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-cyan-500/15 text-cyan-200 border border-cyan-500/25 rounded-lg transition-colors hover:bg-cyan-500/25 hover:border-cyan-400/40">
      {name}
    </span>
  );
}
