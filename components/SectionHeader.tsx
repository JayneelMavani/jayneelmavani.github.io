interface SectionHeaderProps {
  id?: string;
  title: string;
  accent: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  id,
  title,
  accent,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <h2
        id={id}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
      >
        {title} <span className="text-gradient">{accent}</span>
      </h2>
      {description && (
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
