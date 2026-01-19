"use client";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingPlayer } from "@/components/FloatingPlayer";
import { ProjectModal } from "@/components/ProjectModal";
import { BeachOverlay } from "@/components/BeachOverlay";

export default function Home() {
  return (
    <>
      <BeachOverlay />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingPlayer />
      <ProjectModal />
    </>
  );
}

