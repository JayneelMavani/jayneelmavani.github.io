interface SectionBackgroundProps {
  variant?: "hero" | "default" | "subtle";
}

export default function SectionBackground({
  variant = "default",
}: SectionBackgroundProps) {
  const variants = {
    hero: (
      <>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        />
      </>
    ),
    default: (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent"
      />
    ),
    subtle: (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
      />
    ),
  };

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {variants[variant]}
    </div>
  );
}
