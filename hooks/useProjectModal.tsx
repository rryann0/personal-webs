"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Project } from "@/lib/data";

interface ProjectModalContextType {
  isOpen: boolean;
  project: Project | null;
  draggedProject: Project | null;
  openModal: (project: Project) => void;
  closeModal: () => void;
  setDraggedProject: (project: Project | null) => void;
}

const ProjectModalContext = createContext<ProjectModalContextType | undefined>(undefined);

export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [draggedProject, setDraggedProject] = useState<Project | null>(null);

  const openModal = (proj: Project) => {
    setProject(proj);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProject(null);
  };

  return (
    <ProjectModalContext.Provider
      value={{
        isOpen,
        project,
        draggedProject,
        openModal,
        closeModal,
        setDraggedProject,
      }}
    >
      {children}
    </ProjectModalContext.Provider>
  );
}

export function useProjectModal() {
  const context = useContext(ProjectModalContext);
  if (!context) {
    throw new Error("useProjectModal must be used within ProjectModalProvider");
  }
  return context;
}

