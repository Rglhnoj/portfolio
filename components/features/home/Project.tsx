import Link from "next/link";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Section } from "@/components/common/Section";
import { PROJECTS } from "@/constants/project";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Projects() {
  return (
    // Increased py-24 to match the HomeBanner and added items-center for better layout
    <Section className="bg-white dark:bg-slate-950 py-24 px-6 md:px-20 transition-colors duration-300">
      <div className="container mx-auto space-y-16"> {/* Increased space-y for better separation */}
        
        {/* Section Heading - Ensuring text colors look good in dark mode */}
        <div className="max-w-3xl">
          <SectionHeading 
            title="Featured Projects" 
            description="Here are some of the projects I've worked on recently. Each one presented unique challenges and learning opportunities." 
          />
        </div>

        {/* Featured Top 3 Projects - Refined grid gap */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <div key={index} className="hover:-translate-y-2 transition-transform duration-300">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* CTA Button - Updated to match the rounded style of the banner */}
        <div className="flex justify-center pt-8">
          <Link href="/projects">
            <Button 
              variant="outline" 
              size="lg" 
              className="group rounded-full px-8 py-6 border-slate-200 dark:border-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all"
            >
              Check out all projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}