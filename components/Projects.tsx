"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

const categories = ["all", "web", "creative", "learning"] as const;
type Category = typeof categories[number];

export function Projects() {
  const [filter, setFilter] = useState<Category>("all");

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="panel">
      <div className="section-header">
        <div>
          <p className="eyebrow">The Collection</p>
          <h2>Browse the crates, drop the needle.</h2>
        </div>
        <div className="filters" aria-label="Project filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`chip ${filter === cat ? "chip--active" : ""}`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

