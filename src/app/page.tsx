"use client";

import React, { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { data } from "../data";
import CustomCursor from "../components/CustomCursor";
import Grain from "../components/Grain";
import TextScramble from "../components/TextScramble";
import SpotlightCard from "../components/SpotlightCard";
import MagneticButton from "../components/MagneticButton";
import Scene from "../components/Scene";
import Lenis from "lenis";

// Icons
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 15 4 10a8 8 0 0 1 16 0"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <CustomCursor />
      <Grain />
      <main className="min-h-screen selection:bg-neutral-800 overflow-hidden relative text-neutral-50">
        {/* 3D Background Scene */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Scene />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">

          {/* Hero Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="min-h-[100dvh] flex flex-col justify-center py-20 md:py-32 space-y-10"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/60 border border-neutral-800 text-sm text-neutral-400 backdrop-blur-md">
                <MapPinIcon />
                {data.location}
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9]">
                <TextScramble text={data.name} className="text-gradient" />
              </h1>
              <p className="text-2xl md:text-3xl text-neutral-400 font-medium tracking-tight max-w-2xl">
                {data.title} @ <span className="text-neutral-200">{data.company}</span>
              </p>
              <p className="text-xl font-mono text-neutral-500 max-w-2xl mt-4 border-l-2 border-neutral-800 pl-4">
                &ldquo;{data.shortBio}&rdquo;
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-3xl space-y-6 pt-4">
              {data.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-5 pt-6">
              {[
                { href: data.socials.twitter, icon: <TwitterIcon /> },
                { href: data.socials.linkedin, icon: <LinkedinIcon /> },
                { href: data.socials.github, icon: <GithubIcon /> },
                { href: `mailto:${data.socials.email}`, icon: <MailIcon /> },
              ].map((item, i) => (
                <MagneticButton key={i}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center justify-center w-12 h-12 bg-neutral-900/60 border border-neutral-800 rounded-full hover:bg-neutral-100 hover:text-neutral-900 transition-all duration-300 backdrop-blur-md"
                  >
                    {item.icon}
                  </a>
                </MagneticButton>
              ))}
            </motion.div>
          </motion.section>

          {/* Selected Work */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-32 space-y-12"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-between">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100">Selected Work</h2>
              <div className="p-3 rounded-full bg-neutral-900/60 border border-neutral-800 backdrop-blur-md">
                <ArrowUpRight />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[320px]">
              {data.projects.map((project, idx) => {
                let spanClass = "col-span-1 row-span-1";
                if (project.size === "large") spanClass = "col-span-1 md:col-span-2 row-span-1 md:row-span-2";
                if (project.size === "tall") spanClass = "col-span-1 row-span-1 md:row-span-2";
                if (project.size === "wide") spanClass = "col-span-1 md:col-span-2 row-span-1";

                return (
                  <motion.div
                    variants={fadeInUp}
                    key={idx}
                    className={`${spanClass}`}
                  >
                    <SpotlightCard className="h-full p-8 flex flex-col group transition-all duration-500 hover:-translate-y-1 hover:border-neutral-700/50">
                      {project.image && (
                        <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-neutral-950/40" />
                        </div>
                      )}

                      <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-2xl md:text-3xl font-medium mb-4 text-neutral-100 group-hover:text-white transition-colors drop-shadow-lg">
                          {project.name}
                        </h3>
                        <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-950/60 backdrop-blur-md border border-neutral-800/80 text-neutral-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Insights & Essays */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-32 space-y-12"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-between">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100">Insights</h2>
              <a href={data.socials.substack} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
                Read on Substack <ArrowUpRight />
              </a>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {data.essays.map((essay, idx) => (
                <motion.a
                  href={essay.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  key={idx}
                  className="block"
                >
                  <SpotlightCard className="p-8 group h-full transition-all duration-300 hover:border-neutral-700/50">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-medium text-neutral-200 group-hover:text-white transition-colors">{essay.title}</h3>
                      <ArrowUpRight />
                    </div>
                    <p className="text-neutral-400 leading-relaxed text-base">{essay.description}</p>
                    <p className="mt-6 text-xs font-mono text-neutral-500 uppercase tracking-widest">{essay.date}</p>
                  </SpotlightCard>
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Experience & Capabilities */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-32 grid grid-cols-1 md:grid-cols-2 gap-20"
          >
            <motion.div variants={fadeInUp} className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100">Experience</h2>
              <div className="space-y-14">
                {data.experience.map((exp, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                      <h3 className="text-xl font-medium text-neutral-100">{exp.role}</h3>
                      <span className="text-neutral-500 text-sm font-mono tracking-widest uppercase mt-1 md:mt-0">{exp.date}</span>
                    </div>
                    <div className="text-neutral-300 font-medium mb-4">{exp.company}</div>
                    <p className="text-neutral-400 leading-relaxed text-base">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100">Capabilities</h2>
              <div className="flex flex-wrap gap-3">
                {data.capabilities.map((cap, idx) => (
                  <SpotlightCard key={idx} className="px-6 py-3 text-neutral-300 text-sm font-medium hover:text-white transition-colors cursor-default">
                    {cap}
                  </SpotlightCard>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Footer CTA */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="py-32 text-center space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-gradient">Let&apos;s build.</h2>
            <MagneticButton>
              <a
                href={`mailto:${data.socials.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-100 text-neutral-900 rounded-full font-medium text-lg hover:bg-white transition-colors shadow-2xl"
              >
                <MailIcon />
                Get in touch
              </a>
            </MagneticButton>
          </motion.footer>

          <div className="pb-8 text-neutral-600 text-sm flex flex-col md:flex-row items-center justify-between">
            <p>&copy; {new Date().getFullYear()} Vaibhav Sharma.</p>
            <p className="mt-2 md:mt-0">Built with Next.js, Three.js & Framer Motion.</p>
          </div>

        </div>
      </main>
    </>
  );
}
