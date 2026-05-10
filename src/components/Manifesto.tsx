"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { data } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      textRefs.current.forEach((el) => {
        if (!el) return;
        
        // Split text into characters
        const split = new SplitType(el, { types: "chars,words" });
        
        // Setup initial state
        gsap.set(split.chars, { opacity: 0.1, color: "#333333" });

        // Create scroll animation
        gsap.to(split.chars, {
          color: "#ffffff",
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 40%",
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-40 relative z-10 flex flex-col items-center justify-center min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/80 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-24">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">The Thesis</span>
        </div>
        
        {data.manifesto.map((line, i) => (
          <h2 
            key={i} 
            ref={(el) => { textRefs.current[i] = el; }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-center"
          >
            {line}
          </h2>
        ))}
      </div>
    </section>
  );
}
