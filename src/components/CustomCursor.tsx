"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const handleMouseEnterInteractive = () => {
      outline.style.width = "64px";
      outline.style.height = "64px";
      outline.style.borderColor = "rgba(255,255,255,0.5)";
      outline.style.backgroundColor = "rgba(255,255,255,0.05)";
    };

    const handleMouseLeaveInteractive = () => {
      outline.style.width = "40px";
      outline.style.height = "40px";
      outline.style.borderColor = "rgba(255,255,255,0.2)";
      outline.style.backgroundColor = "transparent";
    };

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      outline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateOutline);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const interactiveElements = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterInteractive);
      el.addEventListener("mouseleave", handleMouseLeaveInteractive);
    });

    const rafId = requestAnimationFrame(animateOutline);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterInteractive);
        el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
      });
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#fff",
          transition: "width 0.2s, height 0.2s",
        }}
      />
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.2)",
          transition: "width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s",
        }}
      />
      <style jsx global>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
