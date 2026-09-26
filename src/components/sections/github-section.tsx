import * as React from "react";
import { ArrowUpRight, GitBranch, Code, ShieldCheck, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { SOCIAL_LINKS } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";

export function GithubSection() {
  const githubLink = SOCIAL_LINKS.find((s) => s.label === "GitHub")?.href || "https://github.com/rajpatidar00";

  return (
    <section className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card */}
        <div className="relative rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-gradient-to-b from-slate-50 to-slate-100/60 dark:from-slate-900/90 dark:to-slate-950/80 p-8 sm:p-12 overflow-hidden shadow-xs">
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
          
          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10">
              <GitBranch className="h-3.5 w-3.5" />
              <span>06 / Open Source &amp; Code</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Building, Learning &amp; Shipping
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I believe in writing clean, well-tested code, exploring modern web standards, and continuously shipping frontend projects that solve real problems. Check out my GitHub repositories to explore component experiments, full-stack integrations, and frontend architecture.
            </p>

            <div className="pt-2">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2.5 font-semibold shadow-md shadow-blue-500/20">
                  <GithubIcon className="h-5 w-5" />
                  Explore Repositories on GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Clean Engineering Tenets Grid (No fake stats!) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                <Code className="h-4 w-4 text-blue-500" />
                <span>Clean Architecture</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Reusable UI atoms, clean separation of concerns, and intuitive folder hierarchy.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Type Safety</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Strict TypeScript configurations with comprehensive interfaces and clear prop types.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                <Cpu className="h-4 w-4 text-indigo-500" />
                <span>Modern Tooling</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Next.js App Router, Tailwind CSS, Git version control, and performance optimization.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
