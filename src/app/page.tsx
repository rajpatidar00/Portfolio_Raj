import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { GithubSection } from "@/components/sections/github-section";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <GithubSection />
      <Contact />
    </div>
  );
}
