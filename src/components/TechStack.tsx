"use client";

import { motion } from "framer-motion";
import { 
  Code, Coffee, Terminal, Cpu, Server, Layers, Layout, 
  Database, Flame, Brain, GitBranch, Triangle, Cloud, Zap
} from "lucide-react";

// Atom icon for React/Tech
function Atom(props: any) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="2" />
      <path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9Z" />
      <path d="M16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4Z" />
      <path d="M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Z" />
    </svg>
  );
}

const techStack = [
  { name: "Java", icon: Coffee },
  { name: "Python", icon: Terminal },
  { name: "JavaScript", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Zap },
  { name: "FastAPI", icon: Zap },
  { name: "React.js", icon: Atom },
  { name: "Next.js", icon: Triangle },
  { name: "Tailwind CSS", icon: Layout },
  { name: "MongoDB", icon: Database },
  { name: "Firebase", icon: Flame },
  { name: "Ollama", icon: Brain },
  { name: "Whisper", icon: Brain },
  { name: "Git", icon: GitBranch },
  { name: "Vercel", icon: Triangle },
  { name: "Render", icon: Cloud },
];

export default function TechStack() {
  return (
    <section className="py-32 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-8 mb-16">
        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 mb-3 text-center">Section 03 • Expertise</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-center text-white uppercase italic">My <span className="text-white/40 not-italic uppercase">Skills.</span></h2>
      </div>

      <div className="flex relative">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="flex gap-4 whitespace-nowrap py-4"
        >
          {/* Loop twice for seamless marquee */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 px-8 py-4 rounded-full bg-white/[0.02] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all cursor-default group"
            >
              <tech.icon className="h-5 w-5 text-white/30 group-hover:text-white group-hover:scale-110 transition-all" />
              <span className="text-lg font-medium tracking-wide text-white/60 group-hover:text-white transition-colors uppercase">{tech.name}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Cinematic Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
      </div>
    </section>
  );
}
