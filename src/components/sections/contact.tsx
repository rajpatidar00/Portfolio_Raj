"use client";

import * as React from "react";
import { Mail, Send, Check, Copy, AlertCircle, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [emailCopied, setEmailCopied] = React.useState(false);

  const githubLink = SOCIAL_LINKS.find((s) => s.label === "GitHub")?.href || "https://github.com/rajpatidar00";
  const linkedinLink = SOCIAL_LINKS.find((s) => s.label === "LinkedIn")?.href || "https://www.linkedin.com/in/rajpatidar-dev/";

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief validation & handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 mb-3">
            <span>07 / Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I&apos;m open to frontend development opportunities, interesting projects and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-900/60 p-6 sm:p-8 space-y-6 shadow-xs">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  Direct Communication
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Feel free to reach out directly via email or connect on LinkedIn and GitHub.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Mail className="h-4 w-4 text-blue-500" />
                    <span>Email</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-500" />
                        <span className="text-emerald-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="block text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Connect on Socials:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all text-slate-800 dark:text-slate-200"
                  >
                    <LinkedinIcon className="h-4 w-4 text-blue-600" />
                    <span className="text-xs font-medium">LinkedIn Profile</span>
                  </a>

                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all text-slate-800 dark:text-slate-200"
                  >
                    <GithubIcon className="h-4 w-4 text-slate-900 dark:text-white" />
                    <span className="text-xs font-medium">GitHub Profile</span>
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                <span>Typically responds within 24-48 hours</span>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-900/60 p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill in your details below. This form features client-side validation and is ready for backend integration.
              </p>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200 space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 font-semibold text-sm">
                    <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    Form Validated Successfully
                  </div>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 leading-relaxed">
                    Thank you! The form validation passed. This frontend is primed for future email API integration (e.g. Resend, EmailJS, or Formspree). You can also email directly at{" "}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-medium">
                      {PERSONAL_INFO.email}
                    </a>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Alex Johnson"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                      errors.name
                        ? "border-rose-500 focus:ring-rose-500/20"
                        : "border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-blue-500/20"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                      errors.email
                        ? "border-rose-500 focus:ring-rose-500/20"
                        : "border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-blue-500/20"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell me about your team, project requirements, or opportunity..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors resize-none ${
                      errors.message
                        ? "border-rose-500 focus:ring-rose-500/20"
                        : "border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-blue-500/20"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto font-semibold gap-2 shadow-md shadow-blue-500/10 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Validating...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>

                <p className="text-[11px] text-slate-400 dark:text-slate-500 font-mono pt-1">
                  Ready for API integration. Clean frontend validation enabled.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
