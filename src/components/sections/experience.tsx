import * as React from "react";
import { EXPERIENCES } from "@/data/portfolio-data";
import { Briefcase, Calendar, CheckCircle, MapPin, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 mb-3">
            <span>03 / Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Work Experience
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Professional journey in engineering modern frontend applications and shipping responsive web products.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-500/30 dark:border-blue-500/20 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white ring-4 ring-white dark:ring-slate-950 shadow-xs">
                <Briefcase className="h-3.5 w-3.5" />
              </div>

              {/* Main Card */}
              <div className="rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-900/60 p-6 sm:p-8 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <Badge variant="success" className="text-[11px]">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse mr-1" />
                          Current Role
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                      <Building2 className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/70 px-3 py-1.5 rounded-md w-fit">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.type}</span>
                  </div>
                </div>

                {/* Focus Areas / Responsibilities List */}
                <div className="mt-4 space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Engineering Focus Areas:
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {exp.focusPoints.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack used */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-1">
                    Technologies:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
