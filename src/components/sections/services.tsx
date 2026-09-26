import * as React from "react";
import { Layout, Palette, Network, Cpu, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Layout: Layout,
  Palette: Palette,
  Network: Network,
  Cpu: Cpu,
};

export function Services() {
  return (
    <section className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 mb-3">
            <span>05 / Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            What I Do
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Specialized engineering capabilities focused on modern frontend web applications, high performance, and exceptional developer ergonomics.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon] || Layout;
            return (
              <Card
                key={service.id}
                className="group border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-900/60 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Deliverables &amp; Focus:
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      {service.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
