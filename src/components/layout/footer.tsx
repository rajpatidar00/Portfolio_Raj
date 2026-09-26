"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolio-data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const githubLink = SOCIAL_LINKS.find((s) => s.label === "GitHub")?.href || "https://github.com/rajpatidar00";
  const linkedinLink = SOCIAL_LINKS.find((s) => s.label === "LinkedIn")?.href || "https://www.linkedin.com/in/rajpatidar-dev/";

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-white font-mono text-[10px] font-bold">
                RP
              </span>
              <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Frontend Developer | React.js | Next.js | TypeScript
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Email"
            >
              <Mail className="h-4 w-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="ml-2 flex items-center gap-1 p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs font-mono"
              title="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} Raj Patidar. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            Engineered with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
