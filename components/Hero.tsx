"use client";

import { Turntable } from "./Turntable";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero">
      <div className="hero__text">
        <p className="eyebrow">Portfolio</p>
        <h1>
          Ryan Lee: student, engineer, lifelong musician
        </h1>
        <p className="lede">
          I'm a high school junior passionate about quantum engineering, computer science, and education. 
          I design and ship interactive experiences that mix code, storytelling, and a little music.
          Currently exploring web tech, creative quantum tooling, and how people learn complex topics.
        </p>
        <div className="hero__actions">
          <button
            onClick={() => scrollToSection("projects")}
            className="primary-btn"
          >
            View projects
          </button>
        </div>
        <div className="meta">
          <span>Based in: The beaches of Southern California</span>
          <span>Focus: Quantum algorithms · Creative coding</span>
        </div>
      </div>
      <div className="hero__vinyl">
        <Turntable id="vinylPlayer" isFloating={false} />
        <p className="vinyl__caption">
          Drag a project vinyl here to play!
        </p>
      </div>
    </section>
  );
}

