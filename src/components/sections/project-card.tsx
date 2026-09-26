"use client";

import * as React from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { ExternalLink, CheckCircle2, Layers, AlertCircle } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [showNotice, setShowNotice] = React.useState(false);

  const handlePlaceholderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowNotice(true);
    setTimeout(() => setShowNotice(false), 3000);
  };

  return (
    <div className="group rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-900/60 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Project Preview Image Column */}
        <div className="lg:col-span-6 relative bg-slate-950 p-4 sm:p-6 flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-slate-800 group-hover:scale-[1.02] transition-transform duration-300">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} Preview`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-500 font-mono text-xs">
                Project Preview Placeholder
              </div>
            )}
          </div>

          {/* Project index watermark */}
          <div className="absolute top-4 right-6 font-mono text-2xl font-black text-slate-800 dark:text-slate-800/40 select-none">
            0{index + 1}
          </div>
        </div>

        {/* Project Details Column */}
        <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            {/* Tagline / Placeholder badge */}
            <div className="flex items-center gap-2 flex-wrap">
              {project.isPlaceholder ? (
                <Badge variant="outline" className="border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/5 text-[11px]">
                  Customizable Template / Placeholder
                </Badge>
              ) : (
                <Badge variant="default" className="text-[11px]">
                  Featured Project
                </Badge>
              )}
              {project.tagline && (
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {project.tagline}
                </span>
              )}
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Key Platform Features:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                {project.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Badges */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Tech Stack:
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {/* GitHub Button */}
              <button
                onClick={handlePlaceholderClick}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                title="View Code Repository"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
              </button>

              {/* Live Demo Button */}
              <button
                onClick={handlePlaceholderClick}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs shadow-blue-500/10 cursor-pointer"
                title="Open Live Application"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </button>
            </div>

            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
              Production Architecture
            </span>
          </div>

          {/* Placeholder Notification banner */}
          {showNotice && (
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-blue-700 dark:text-blue-300 animate-in fade-in">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>Project link is currently set as a placeholder as requested. Ready for real URL mapping.</span>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
