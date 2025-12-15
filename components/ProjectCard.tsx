"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";
import { useProjectModal } from "@/hooks/useProjectModal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const { setDraggedProject } = useProjectModal();

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true);
    setDraggedProject(project);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDraggedProject(null);
  };

  return (
    <article className="project-card">
      <div className="project-card__content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.description}</p>
      </div>
      <div
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className={`project-card__disc project-card__disc--variant-${index % 5} ${isDragging ? "dragging" : ""}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
      </div>
    </article>
  );
}

