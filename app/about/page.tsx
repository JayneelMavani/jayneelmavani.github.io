import Image from "next/image";
import type { Metadata } from "next";
import TimelineSection from "@/components/TimelineSection";
import { getSiteContent } from "@/lib/data/site-content";
import { getTimelineEntries } from "@/lib/data/timeline";

export const metadata: Metadata = {
  title: "About — Portfolio Template",
  description: "Learn more about my background, experience, and journey.",
};

export default function AboutPage() {
  const content = getSiteContent().about;
  const timeline = getTimelineEntries();

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            About <span className="text-gradient">Me</span>
          </h1>
          <div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
            aria-hidden="true"
          />
        </header>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-start mb-16 sm:mb-20">
          <div className="relative w-full aspect-square max-w-md mx-auto md:max-w-none rounded-2xl overflow-hidden glass">
            <Image
              src="/assets/img.png"
              alt="Profile photo"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            {content.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base sm:text-lg text-gray-200 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <ul className="space-y-3 pt-2">
              {content.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 bg-cyan-500 rounded-full shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-base sm:text-lg text-gray-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <TimelineSection entries={timeline} />
      </div>
    </div>
  );
}
