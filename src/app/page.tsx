import React from "react";
import { data } from "../data";

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

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-neutral-800">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-32 space-y-24">
        
        {/* Header */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
              {data.name}
            </h1>
            <p className="text-xl text-neutral-400">
              {data.role}
            </p>
          </div>
          
          <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl">
            {data.bio}
          </p>

          <div className="flex items-center gap-4 text-neutral-400">
            <div className="flex items-center gap-1.5">
              <MapPinIcon />
              <span className="text-sm">{data.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors">
              <TwitterIcon />
            </a>
            <a href={data.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors">
              <GithubIcon />
            </a>
            <a href={`mailto:${data.socials.email}`} className="p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors">
              <MailIcon />
            </a>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-8">
          <h2 className="text-2xl font-medium">Experience</h2>
          <div className="space-y-10">
            {data.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-6 border-l border-neutral-800">
                <div className="absolute w-3 h-3 bg-neutral-900 border border-neutral-700 rounded-full -left-[6.5px] top-1.5" />
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-lg font-medium">{exp.role}</h3>
                  <span className="text-neutral-500 text-sm">{exp.date}</span>
                </div>
                <div className="text-neutral-400 font-medium mb-3">{exp.company}</div>
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-8">
          <h2 className="text-2xl font-medium">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-900 transition-colors group">
                <h3 className="text-lg font-medium mb-2 group-hover:text-white text-neutral-100 transition-colors">{project.name}</h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs rounded-md bg-neutral-800 text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-900 text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Vaibhav Sharma. Built with Next.js.</p>
        </footer>

      </div>
    </main>
  );
}