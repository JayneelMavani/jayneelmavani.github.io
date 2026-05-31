import type { TimelineEntry } from "@/lib/types";

interface TimelineSectionProps {
  entries: TimelineEntry[];
  title?: string;
  accent?: string;
}

const typeLabels: Record<TimelineEntry["type"], string> = {
  education: "Education",
  experience: "Experience",
  achievement: "Achievement",
};

const typeColors: Record<TimelineEntry["type"], string> = {
  education: "bg-cyan-500",
  experience: "bg-blue-500",
  achievement: "bg-purple-500",
};

export default function TimelineSection({
  entries,
  title = "Timeline",
  accent = "Journey",
}: TimelineSectionProps) {
  return (
    <section aria-labelledby="timeline-heading">
      <h2
        id="timeline-heading"
        className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-white"
      >
        {title} <span className="text-gradient">{accent}</span>
      </h2>

      <ol className="relative space-y-0">
        {/* Vertical line */}
        <div
          aria-hidden="true"
          className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent"
        />

        {entries.map((entry) => (
          <li key={entry.id} className="relative pl-8 sm:pl-12 pb-10 last:pb-0">
            {/* Dot */}
            <div
              aria-hidden="true"
              className={`absolute left-0 top-1.5 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 border-slate-700 ${typeColors[entry.type]} flex items-center justify-center`}
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />
            </div>

            <article className="glass rounded-xl p-5 sm:p-6 hover:border-cyan-500/30 transition-colors">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                  {typeLabels[entry.type]}
                </span>
                <span className="text-gray-500 text-xs" aria-hidden="true">
                  ·
                </span>
                <time className="text-xs text-gray-400">{entry.period}</time>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {entry.title}
              </h3>
              <p className="text-cyan-400/80 text-sm font-medium mb-3">
                {entry.organization}
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {entry.description}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
