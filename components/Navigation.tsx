"use client";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="nav">
      <div className="logo">Ryan Lee</div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        onClick={() => scrollToSection("projects")}
        className="ghost-btn"
      >
        See work
      </button>
    </header>
  );
}

