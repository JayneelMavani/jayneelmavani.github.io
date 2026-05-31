"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
        setMessage("Thanks for reaching out! I'll get back to you soon.");
        e.currentTarget.reset();
      } else {
        setIsSuccess(false);
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setIsSuccess(false);
      setMessage("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {message && (
        <div
          role="status"
          aria-live="polite"
          className={`p-4 rounded-lg text-sm ${
            isSuccess
              ? "bg-green-500/20 text-green-300"
              : "bg-red-500/20 text-red-300"
          }`}
        >
          {message}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold mb-2 text-gray-200"
        >
          Name{" "}
          <span className="text-red-400" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold mb-2 text-gray-200"
        >
          Email{" "}
          <span className="text-red-400" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold mb-2 text-gray-200"
        >
          Message{" "}
          <span className="text-red-400" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 transition-colors resize-y min-h-[120px]"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
