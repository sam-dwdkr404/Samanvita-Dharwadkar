"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Brain, Terminal, Smartphone, Database, Globe } from "lucide-react";

const projects = [
  {
    title: "MEDORA.AI",
    subtitle: "AI Medical Assistant",
    description: "A high-performance assistant for medical report analysis and diagnostics. Focuses on privacy-first local LLM inference.",
    tech: ["LLM", "Python", "React"],
    icon: Brain,
    image: "/MEDORA AI.png",
    live: "#",
    github: "https://github.com/sam-dwdkr404"
  },
  {
    title: "OSCODE APTITUDE PLATFORM",
    subtitle: "Aptitude & Analytics System",
    description: "Built a full-stack aptitude testing and analytics platform used by 100+ students, enabling weekly assessments, performance tracking, and real-time leaderboard insights.",
    tech: ["Node.js", "Express", "MongoDB"],
    icon: Terminal,
    image: "/OSCODE Platform.png",
    live: "https://aptitude-platform.vercel.app/",
    github: "https://github.com/sam-dwdkr404/aptitude-platform.git"
  },
  {
    title: "AIML Digital Board",
    subtitle: "Smart Academic Dashboard",
    description: "Interactive QR-based academic dashboard for seamless information retrieval and management.",
    tech: ["TypeScript", "QR-Logic", "Next.js"],
    icon: Smartphone,
    image: "/AIML Digital Board.png",
    live: "#",
    github: "https://github.com/sam-dwdkr404/aiml-qr-digital-board.git"
  },
  {
    title: "Smart Menu System",
    subtitle: "Real-time Digital Menu",
    description: "Dynamic menu management system with real-time updates and customer ordering interface.",
    tech: ["Firebase", "React", "Cloud Functions"],
    icon: Database,
    image: "/Smart Digital Menu.png",
    live: "https://gen-lang-client-0776017148.web.app",
    github: "https://github.com/sam-dwdkr404/agm-hotel.git"
  },
  {
    title: "GREEN MANDI",
    subtitle: "Agri-Supply Chain Platform",
    description: "Digital marketplace with PWA capabilities and offline-sync. Features MongoDB Atlas and Dexie.js for resilient data management.",
    tech: ["Next.js", "MongoDB Atlas", "Dexie.js", "Node.js"],
    icon: Database,
    image: "/green mandi.png",
    live: "https://green-mandi-gamma.vercel.app/",
    github: "https://github.com/sam-dwdkr404/green-mandi.git"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-32">
        <div className="mb-12 sm:mb-20">
          <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 mb-3 sm:mb-4">Section 04 • Portfolio</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic">Selected <span className="text-white/30 not-italic">Work.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[2.5rem] overflow-hidden bg-white/[0.03] border border-white/10 transition-all hover:border-white/20 shadow-2xl shadow-black h-fit"
            >
              {/* Image Container */}
              <div className="aspect-[16/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border-b border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-10 md:p-12 flex flex-col h-full bg-gradient-to-b from-transparent to-black/90">
                <div className="flex justify-between items-start mb-5 sm:mb-8">
                  <div>
                    <h3 className="text-xl sm:text-3xl font-black mb-1 sm:mb-2 tracking-tighter uppercase text-white">{project.title}</h3>
                    <p className="text-[9px] sm:text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">{project.subtitle}</p>
                  </div>
                  <project.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white/20 group-hover:text-white/60 transition-colors" />
                </div>
                
                <p className="text-white/60 text-sm sm:text-lg font-light leading-relaxed mb-6 sm:mb-10">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl text-[9px] font-black tracking-widest uppercase bg-white/5 border border-white/10 text-white/40">
                      {t}
                    </span>
                  ))}
                </div>

                {/* HIGH CONTRAST BUTTONS */}
                <div className="flex items-center gap-3 mt-auto pt-6 sm:pt-8 border-t border-white/10">
                  <a 
                    href={project.live} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 sm:py-4 rounded-full bg-white text-black text-[9px] sm:text-xs font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase hover:bg-white/90 transition-all"
                  >
                    LIVE PREVIEW <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all"
                    title="View GitHub"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
