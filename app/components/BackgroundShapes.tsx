"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const shapes = [
  {
    src: "/assets/semi circle.svg",
    top: "12vh",
    left: "5vw",
    size: 22,
    delay: 0,
    duration: 7,
  },
  {
    src: "/assets/circle.svg",
    top: "18vh",
    left: "48vw",
    size: 16,
    delay: 1.2,
    duration: 9,
  },
  {
    src: "/assets/squiggly.svg",
    top: "10vh",
    left: "82vw",
    size: 26,
    delay: 0.6,
    duration: 8,
  },
  {
    src: "/assets/circle.svg",
    top: "44vh",
    left: "3vw",
    size: 14,
    delay: 2.0,
    duration: 10,
  },
  {
    src: "/assets/triangle.svg",
    top: "50vh",
    left: "52vw",
    size: 20,
    delay: 0.4,
    duration: 7.5,
  },
  {
    src: "/assets/circle.svg",
    top: "46vh",
    left: "84vw",
    size: 18,
    delay: 1.6,
    duration: 8.5,
  },
  {
    src: "/assets/squiggly.svg",
    top: "76vh",
    left: "6vw",
    size: 24,
    delay: 0.8,
    duration: 9.5,
  },
  {
    src: "/assets/circle.svg",
    top: "72vh",
    left: "47vw",
    size: 14,
    delay: 2.4,
    duration: 7,
  },
  {
    src: "/assets/semi circle.svg",
    top: "74vh",
    left: "81vw",
    size: 22,
    delay: 1.0,
    duration: 8,
  },
];

export default function BackgroundShapes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    const update = () => {
      const container = containerRef.current;
      if (!container) {
        rafId.current = null;
        return;
      }

      const elements =
        container.querySelectorAll<HTMLDivElement>("[data-shape-outer]");

      elements.forEach((el, index) => {
        const isOdd = index % 2 !== 0;
        const direction = isOdd ? -1 : 1;

        // Mouse drift — subtle but noticeable
        const mouseX =
          (mousePos.current.x - window.innerWidth / 2) * 0.025 * direction;
        const mouseY =
          (mousePos.current.y - window.innerHeight / 2) * 0.025 * direction;

        // Scroll glide — different shapes move at different speeds for depth
        const scrollSpeed = 0.06 + (index % 3) * 0.05;
        const scrollOffset = scrollY.current * scrollSpeed * direction;

        const x = mouseX;
        const y = mouseY - scrollOffset;

        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });

      rafId.current = null;
    };

    const requestUpdate = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(update);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      requestUpdate();
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
      requestUpdate();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {shapes.map((shape, index) => (
        <div
          key={index}
          data-shape-outer
          className="absolute will-change-transform"
          style={{
            top: shape.top,
            left: shape.left,
            width: shape.size,
            height: shape.size,
            transition: "transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div
            className={`shape-wiggle shape-wiggle--${index % 3}`}
            style={{
              width: "100%",
              height: "100%",
              animationDelay: `${shape.delay}s`,
              animationDuration: `${shape.duration}s`,
            }}
          >
            <Image
              src={shape.src}
              alt=""
              width={shape.size}
              height={shape.size}
              className="opacity-50"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
