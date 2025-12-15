"use client";

import { useEffect, useState } from "react";
import { Turntable } from "./Turntable";

export function FloatingPlayer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(!entry.isIntersecting);
        });
      },
      {
        threshold: 0.7,
        rootMargin: "-50px",
      }
    );

    const heroElement = document.querySelector(".hero__vinyl");
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="floatingPlayer"
      className="floating-player"
      aria-hidden={!isVisible}
    >
      <Turntable id="floatingTurntable" isFloating={true} />
      <p className="floating-player__hint">
        Drag project here
      </p>
    </div>
  );
}

