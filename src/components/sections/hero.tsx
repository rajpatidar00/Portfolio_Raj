import * as React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Sparkles, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolio-data";
import { HeroVisual } from "./hero-visual";
import { Button } from "@/components/ui/button";

export function Hero() {
  const githubLink = SOCIAL_LINKS.find((s) => s.label === "GitHub")?.href || "https://github.com/rajpatidar00";
  const linkedinLink = SOCIAL_LINKS.find((s) => s.label === "LinkedIn")?.href || "https://www.linkedin.com/in/rajpatidar-dev/";

  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-medium w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Heading & Subheading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-400 dark:to-sky-300">Raj Patidar</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-200 tracking-tight leading-snug">
                {PERSONAL_INFO.headline}
              </p>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.shortDescription}
            </p>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono flex items-center gap-1 mr-1">
                <Code2 className="h-3.5 w-3.5 text-blue-500" /> Focus:
              </span>
              {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="#projects">
                <Button size="lg" className="gap-2 font-semibold shadow-md shadow-blue-500/20">
                  View My Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="#contact">
                <Button variant="outline" size="lg" className="font-semibold">
                  Contact Me
                </Button>
              </Link>

              {/* Social buttons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-xs"
                  title="GitHub Profile"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>

                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-xs"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Interactive Code Visual */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
