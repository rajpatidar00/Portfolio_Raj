"use client";

import * as React from "react";
import { Check, Copy, Terminal, FileCode, Layers, ShieldCheck } from "lucide-react";

export function HeroVisual() {
  const [activeTab, setActiveTab] = React.useState<"ts" | "stack" | "standards">("ts");
  const [copied, setCopied] = React.useState(false);

  const tsCode = `// raj-patidar.profile.ts
import type { FrontendEngineer } from "@/types";

export const rajPatidar: FrontendEngineer = {
  name: "Raj Patidar",
  title: "Frontend Developer",
  core: ["React.js", "Next.js", "TypeScript"],
  links: {
    github: "github.com/rajpatidar00",
    linkedin: "in/rajpatidar-dev",
    email: "user.rajpatidar@gmail.com",
  },
  architecture: {
    stateAndData: "REST APIs + Axios",
    security: "JWT Authentication & RBAC",
    design: "Responsive, Accessible, Modular",
  },
  currentOrg: "Kalinga Vriti",
  status: "Available for new opportunities",
};`;

  const stackCode = `// tech-stack.json
{
  "frontend": [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui"
  ],
  "api_and_auth": [
    "REST APIs",
    "Axios Client",
    "JWT Session Guards"
  ],
  "tooling": [
    "Git",
    "GitHub",
    "VS Code",
    "Cursor",
    "Antigravity IDE"
  ]
}`;

  const standardsCode = `// engineering-standards.ts
export const FE_STANDARDS = {
  responsive: "Mobile-first & fluid typography",
  codeQuality: "Strict TypeScript & ESLint",
  uiArchitecture: "Reusable atomic components",
  apiIntegration: "Axios interceptors & clean error states",
  performance: "Optimized Next.js App Router renders",
};`;

  const currentCode =
    activeTab === "ts" ? tsCode : activeTab === "stack" ? stackCode : standardsCode;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Decorative background glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-sky-500/20 blur-xl opacity-60 dark:opacity-40" />

      {/* Main Code Terminal Card */}
      <div className="relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-blue-500" />
              raj-patidar-dev
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 px-2 py-1 rounded-md hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-colors"
              title="Copy code"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 text-emerald-500" />
                  <span className="text-emerald-500 text-[10px]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span className="text-[10px]">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-2 pt-1 gap-1 text-xs">
          <button
            onClick={() => setActiveTab("ts")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-md font-mono text-[11px] transition-colors border-b-2 ${
              activeTab === "ts"
                ? "border-blue-500 text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 font-semibold"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
            }`}
          >
            <FileCode className="h-3 w-3" />
            profile.ts
          </button>
          <button
            onClick={() => setActiveTab("stack")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-md font-mono text-[11px] transition-colors border-b-2 ${
              activeTab === "stack"
                ? "border-blue-500 text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 font-semibold"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
            }`}
          >
            <Layers className="h-3 w-3" />
            tech-stack.json
          </button>
          <button
            onClick={() => setActiveTab("standards")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-md font-mono text-[11px] transition-colors border-b-2 ${
              activeTab === "standards"
                ? "border-blue-500 text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 font-semibold"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
            }`}
          >
            <ShieldCheck className="h-3 w-3" />
            standards.ts
          </button>
        </div>

        {/* Code Content Area */}
        <div className="p-4 font-mono text-xs overflow-x-auto leading-relaxed max-h-[340px] select-text">
          <pre className="text-slate-800 dark:text-slate-200">
            <code>{currentCode}</code>
          </pre>
        </div>

        {/* Status Footer */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-600 dark:text-slate-300">Ready to build &amp; ship</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
            <span>TypeScript 5.x</span>
            <span>•</span>
            <span>Next.js 15+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
