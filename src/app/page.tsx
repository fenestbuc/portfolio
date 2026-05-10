"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { data } from "../data";

// Safe SVG Icons
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

// Animation Variants with explicit typing
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
  return (
    <main className="min-h-screen selection:bg-neutral-800 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        
        {/* Header Section */}
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="space-y-10"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-sm text-neutral-400 mb-4 shadow-xl">
              <MapPinIcon />
              {data.location}
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gradient pb-2">
              {data.name}
            </h1>
            <p className="text-2xl md:text-3xl text-neutral-400 font-medium tracking-tight">
              {data.title} @ <span className="text-neutral-200">{data.company}</span>
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-3xl space-y-6">
            {data.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-5 pt-4">
            <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-neutral-100 hover:text-neutral-900 transition-all duration-300 transform hover:scale-110 shadow-lg">
              <TwitterIcon />
            </a>
            <a href={data.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-neutral-100 hover:text-neutral-900 transition-all duration-300 transform hover:scale-110 shadow-lg">
              <GithubIcon />
            </a>
            <a href={`mailto:${data.socials.email}`} className="p-3 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-neutral-100 hover:text-neutral-900 transition-all duration-300 transform hover:scale-110 shadow-lg">
              <MailIcon />
            </a>
          </motion.div>
        </motion.section>

        <div className="h-32"></div>

        {/* Bento Grid Projects */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-between">
            <h2 className="text-3xl font-medium tracking-tight text-neutral-100">Selected Work</h2>
            <div className="p-2 rounded-full bg-neutral-900 border border-neutral-800">
              <ArrowUpRight />
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            {data.projects.map((project, idx) => {
              // Map size to grid span
              let spanClass = "col-span-1 row-span-1";
              if (project.size === "large") spanClass = "col-span-1 md:col-span-2 row-span-1 md:row-span-2";
              if (project.size === "tall") spanClass = "col-span-1 row-span-1 md:row-span-2";
              if (project.size === "wide") spanClass = "col-span-1 md:col-span-2 row-span-1";

              return (
                <motion.div 
                  variants={fadeInUp}
                  key={idx} 
                  className={`glass-panel rounded-3xl p-8 flex flex-col group transition-all duration-500 hover:-translate-y-1 shadow-xl hover:shadow-2xl ${spanClass}`}
                >
                  <h3 className="text-2xl font-medium mb-3 text-neutral-100 group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-950 border border-neutral-800/80 text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <div className="h-32"></div>

        {/* Experience & Capabilities Split */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {/* Experience */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-3xl font-medium tracking-tight text-neutral-100">Experience</h2>
            <div className="space-y-12">
              {data.experience.map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                    <h3 className="text-xl font-medium text-neutral-100">{exp.role}</h3>
                    <span className="text-neutral-500 text-sm font-mono tracking-widest uppercase mt-1 md:mt-0">{exp.date}</span>
                  </div>
                  <div className="text-neutral-300 font-medium mb-4">{exp.company}</div>
                  <p className="text-neutral-400 leading-relaxed text-base">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Capabilities */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-3xl font-medium tracking-tight text-neutral-100">Capabilities</h2>
            <div className="flex flex-wrap gap-3">
              {data.capabilities.map((cap, idx) => (
                <div key={idx} className="glass-panel px-5 py-3 rounded-xl text-neutral-300 text-sm font-medium hover:text-white transition-colors cursor-default shadow-lg">
                  {cap}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-32 pt-8 border-t border-neutral-900/50 text-neutral-500 text-sm flex flex-col md:flex-row items-center justify-between"
        >
          <p>© {new Date().getFullYear()} Vaibhav Sharma. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with Next.js & Framer Motion.</p>
        </motion.footer>

      </div>
    </main>
  );
}