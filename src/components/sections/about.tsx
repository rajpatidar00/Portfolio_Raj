import * as React from "react";
import {
  Smartphone,
  Network,
  KeyRound,
  ShieldCheck,
  Component,
  Code2,
  Palette,
  CheckCircle2,
} from "lucide-react";
import { ABOUT_PILLARS, PERSONAL_INFO } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";

const PILLAR_ICONS = [
  Smartphone,
  Network,
  KeyRound,
  ShieldCheck,
  Component,
  Code2,
  Palette,
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 mb-3">
            <span>01 / Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Frontend developer dedicated to building responsive, scalable and production-grade web applications with modern React, Next.js and TypeScript ecosystems.
          </p>
        </div>

        {/* Narrative & Focus Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            {PERSONAL_INFO.aboutText.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-500" />
                Frontend Engineering Focus
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>React.js &amp; Next.js App Router Architecture</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>Strict TypeScript development &amp; maintainability</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>Tailwind CSS &amp; accessible shadcn/ui components</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>REST API data integration &amp; secure JWT handling</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>Role-based access control &amp; protected dashboards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 7 Engineering Pillars Grid */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Core Technical Competencies
            </h3>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              7 Key Pillars
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ABOUT_PILLARS.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
              return (
                <Card
                  key={pillar.title}
                  className="hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-200 group"
                >
                  <CardContent className="p-5 flex flex-col h-full justify-between space-y-3">
                    <div className="space-y-2.5">
                      <div className="h-9 w-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
