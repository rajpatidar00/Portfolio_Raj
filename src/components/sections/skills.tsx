"use client";

import * as React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Database,
  Wrench,
  Layers,
  Sparkles,
  Terminal,
  Cpu,
  Globe,
  Check,
} from "lucide-react";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const categories = [
    { id: "all", label: "All Technologies", icon: Layers },
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "backend", label: "Backend / API", icon: Database },
    { id: "tools", label: "Developer Tools", icon: Wrench },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 mb-3">
              <span>02 / Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Skills &amp; Tech Stack
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Modern frontend technologies, API integration libraries, and developer tools I utilize to craft production-ready web experiences.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categorized Display */}
        <div className="space-y-10">
          {SKILL_CATEGORIES.map((category) => {
            const isCategoryActive =
              selectedCategory === "all" ||
              (selectedCategory === "frontend" && category.title.includes("Frontend")) ||
              (selectedCategory === "backend" && category.title.includes("Backend")) ||
              (selectedCategory === "tools" && category.title.includes("Tools"));

            if (!isCategoryActive) return null;

            return (
              <div key={category.title} className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
                    {category.title}
                  </h3>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    {category.skills.length} technologies
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {category.description}
                </p>

                {/* Tech Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 pt-1">
                  {category.skills.map((skill) => (
                    <Card
                      key={skill.name}
                      className="group border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xs transition-all duration-200"
                    >
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-mono text-xs font-bold group-hover:scale-105 transition-transform">
                            {skill.name.slice(0, 2).toUpperCase()}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400">
                              {skill.badge}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
