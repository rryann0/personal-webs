"use client";

const skills = ["Qiskit", "Python", "HTML/CSS", "JavaScript", "React", "Java", "C++"];

export function About() {
  return (
    <section id="about" className="panel">
      <div>
        <p className="eyebrow">About</p>
        <h2>Building a diverse toolkit.</h2>
        <p className="body">
          I'm a student who combines design with hands-on engineering.
          I love prototyping fast, learning in public, and collaborating on
          projects that feel like art but work like products (when I'm not
          coding, I'm probably crate-digging for vinyls).
        </p>
      </div>
      <div className="tags">
        {skills.map((skill) => (
          <span key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

