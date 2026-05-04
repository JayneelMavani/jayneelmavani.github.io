export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-12 text-center relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to work <span className="text-gradient">together?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about tech, 
              I&apos;d love to hear from you. Let&apos;s create something amazing!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Start a Project
              </a>
              <a href="mailto:jayneel@example.com" className="btn-secondary">
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
