import * as React from "react";
import { PROJECTS } from "@/data/portfolio-data";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 mb-3">
            <span>04 / Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Real-world applications engineered with React.js, Next.js, TypeScript, REST APIs, and modern UI systems.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="space-y-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
