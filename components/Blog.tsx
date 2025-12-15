"use client";

import { blogPosts } from "@/lib/data";

export function Blog() {
  return (
    <section id="blog" className="panel">
      <div className="section-header">
        <div>
          <p className="eyebrow">Blog</p>
          <h2>Notes from the journey.</h2>
        </div>
      </div>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.title} className="blog-card">
            <div className="date">{post.date}</div>
            <h3>{post.title}</h3>
            <p className="project-meta">{post.summary}</p>
            <a
              href={post.url || "https://medium.com/@ryanelee00"}
              target="_blank"
              rel="noopener noreferrer"
              className="project-links"
            >
              Read more
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

