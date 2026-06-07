import Link from "next/link";
import SectionBackground from "@/components/SectionBackground";
import { getSiteContent } from "@/lib/data/site-content";
import { getMailtoUrl } from "@/lib/utils/site";

export default function CTASection() {
  const content = getSiteContent().cta;
  const mailto = content.secondary.href.startsWith("mailto:")
    ? content.secondary.href
    : getMailtoUrl();

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <SectionBackground variant="subtle" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 sm:p-12 text-center">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white"
          >
            {content.title}{" "}
            <span className="text-gradient">{content.titleAccent}</span>
          </h2>
          <p className="text-gray-200 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href={content.primary.href} className="btn-primary">
              {content.primary.label}
            </Link>
            <a href={mailto} className="btn-secondary">
              {content.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
