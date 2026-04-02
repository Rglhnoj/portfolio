"use client";

import { useState } from "react";
import { PROJECTS } from "@/constants/project";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Section } from "@/components/common/Section";
import { Search, Globe } from "lucide-react";

export default function ProjectsPageProvider() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Dynamic Categories based on your PROJECTS data
  const categories = ["All", "Frontend Development", "Backend Development", "UI Design / Frontend Development"];

  // Filter Logic
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Section className="dark:bg-slate-950 transition-colors duration-300 py-20">
      {/* Header */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-5xl font-bold text-slate-900 dark:text-white">My Projects</h1>
        <p className="text-slate-500 dark:text-white max-w-2xl mx-auto">
          A collection of my work showcasing my skills and experience in web development.
        </p>
      </div>

      {/* Search and Filter UI */}
      <div className="max-w-2xl mx-auto mb-16 space-y-6  ">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 dark:bg-slate-800 dark:text-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg">No projects found matching your search.</p>
        </div>
      )}
    </Section>
  );
}