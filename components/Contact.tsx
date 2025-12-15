"use client";

export function Contact() {
  return (
    <section id="contact" className="panel contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Collaborate or say hi.</h2>
        <p className="body">
          Want to team up on a project or share playlists? Drop a note below.
        </p>
        <div className="contact-links">
          <a
            href="mailto:ryanelee00@gmail.com"
            className="contact-link contact-link--email"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ryanlee0"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link contact-link--linkedin"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rryann0"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link contact-link--github"
          >
            GitHub
          </a>
        </div>
      </div>
      <form
        className="contact-form"
        action="https://formspree.io/f/mnnelzzj"
        method="POST"
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
          />
        </label>
        <label>
          Message
          <textarea
            rows={5}
            name="message"
            placeholder="Let's build something..."
          />
        </label>
        <button type="submit" className="primary-btn">
          Send message
        </button>
      </form>
    </section>
  );
}

