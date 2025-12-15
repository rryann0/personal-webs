"use client";

import { useState } from "react";
import { useProjectModal } from "@/hooks/useProjectModal";

interface TurntableProps {
  id: string;
  isFloating?: boolean;
}

export function Turntable({ id, isFloating = false }: TurntableProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const { draggedProject, openModal } = useProjectModal();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (draggedProject) {
      openModal(draggedProject);
    }
  };

  return (
    <div
      id={id}
      data-drop-zone="true"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`turntable ${isFloating ? "turntable--floating" : ""} ${isDragOver ? "drag-over" : ""}`}
    >
      {/* Turntable Base */}
      <div className="turntable__base">
        {/* Platter (where the vinyl sits) */}
        <div 
          className="turntable__platter"
          style={{
            animation: isDragOver ? "none" : "slow-spin 14s linear infinite",
          }}
        >
          <div className="turntable__platter-ring"></div>
          <div className={`turntable__center ${isFloating ? "turntable__center--floating" : ""}`}>
            <span>Drop</span>
            <span>Here</span>
          </div>
        </div>
        
        {/* Tonearm */}
        <div className="turntable__tonearm">
          <div className="turntable__tonearm-pivot"></div>
          <div className="turntable__tonearm-arm"></div>
          <div className="turntable__tonearm-headshell">
            <div className="turntable__cartridge"></div>
          </div>
        </div>
      </div>
      {!isFloating && <div className="turntable__shadow" />}
    </div>
  );
}
