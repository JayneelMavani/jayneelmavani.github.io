import type { ReactNode } from "react";

interface ProjectDetailSectionProps {
  title: string;
  children: ReactNode;
}

export default function ProjectDetailSection({
  title,
  children,
}: ProjectDetailSectionProps) {
  return (
    <section className="mb-10 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">{title}</h2>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </section>
  );
}
