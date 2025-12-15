"use client";

import { useEffect } from "react";
import { useProjectModal } from "@/hooks/useProjectModal";
import type { Project } from "@/lib/data";

export function ProjectModal() {
  const { isOpen, project, closeModal } = useProjectModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  return (
    <div
      className="modal"
      aria-hidden={!isOpen}
      onClick={closeModal}
    >
      {isOpen && project && (
        <>
          <div className="modal__overlay" />
          <div
            className="modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="modal__close"
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="modal__header">
              <h2>{project.title}</h2>
              <div className="modal__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="modal__body">
              <p>{project.fullDescription}</p>
              <div className="modal__links">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

