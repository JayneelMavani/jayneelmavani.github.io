import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/config/site";
import { getSocialIcon } from "@/lib/utils/site";

export const metadata: Metadata = {
  title: "Contact — Portfolio Template",
  description: "Get in touch to discuss projects and opportunities.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6"
            aria-hidden="true"
          />
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Have a question or want to collaborate? Feel free to reach out.
          </p>
        </header>

        <div className="glass rounded-2xl p-6 sm:p-10 md:p-12">
          <ContactForm />
        </div>

        <section
          className="mt-14 sm:mt-16 text-center"
          aria-labelledby="connect-heading"
        >
          <h2
            id="connect-heading"
            className="text-xl sm:text-2xl font-bold mb-6 text-white"
          >
            Connect with me
          </h2>
          <ul className="flex justify-center flex-wrap gap-4">
            {siteConfig.social.map((social) => (
              <li key={social.url}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="glass p-4 rounded-lg hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span className="text-3xl">{getSocialIcon(social.icon)}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
