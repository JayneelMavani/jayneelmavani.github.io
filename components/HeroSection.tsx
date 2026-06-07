import Image from "next/image";
import Link from "next/link";
import SectionBackground from "@/components/SectionBackground";
import { siteConfig } from "@/lib/config/site";
import { getSiteContent } from "@/lib/data/site-content";
import { getSocialIcon } from "@/lib/utils/site";

export default function HeroSection() {
  const content = getSiteContent().hero;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100vh-4rem)] flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      <SectionBackground variant="hero" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold leading-tight mb-5 sm:mb-6 text-white"
            >
              {content.greeting}{" "}
              <span className="text-gradient">{content.name}</span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-cyan-400 font-semibold mb-4 sm:mb-6">
              {content.role}
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              {content.bio}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href={content.ctaPrimary.href} className="btn-primary">
                {content.ctaPrimary.label}
              </a>
              <Link href={content.ctaSecondary.href} className="btn-secondary">
                {content.ctaSecondary.label}
              </Link>
            </div>

            <ul className="flex gap-5 mt-10" aria-label="Social links">
              {siteConfig.social.map((social) => (
                <li key={social.url}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-2xl sm:text-3xl hover:scale-110 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 md:order-2 relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden glass">
              <Image
                src="/assets/img.png"
                alt="Profile photo"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
