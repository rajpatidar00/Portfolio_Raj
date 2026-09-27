"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/data/portfolio-data";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const githubLink = SOCIAL_LINKS.find((s) => s.label === "GitHub")?.href || "https://github.com/rajpatidar00";
  const linkedinLink = SOCIAL_LINKS.find((s) => s.label === "LinkedIn")?.href || "https://www.linkedin.com/in/rajpatidar-dev/";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-xs py-3"
          : "bg-transparent py-4 md:py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#"
          className="group flex items-center gap-2.5 text-slate-900 dark:text-white font-semibold text-lg tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-xs font-bold shadow-xs group-hover:scale-105 transition-transform">
            <Image src="/projects/dp.png" alt="Logo" width={32} height={32} className="rounded-lg" />
          </span>
          <div className="flex flex-col">
            <span className="leading-tight font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-wider uppercase hidden sm:block">
              Frontend Dev
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/80 backdrop-blur-xs">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800/90 transition-all duration-150"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Icons & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-2">
          {/* GitHub Link Button */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-xs"
            title="View GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          {/* LinkedIn Link Button */}
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-xs"
            title="View LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>

          {/* Light / Dark Mode Toggle */}
          <ThemeToggle />

          {/* Contact quick CTA */}
          <Link
            href="#contact"
            className="ml-1 inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-xs shadow-blue-500/20 transition-all active:scale-95"
          >
            Hire Me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium border border-slate-200 dark:border-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium border border-slate-200 dark:border-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
