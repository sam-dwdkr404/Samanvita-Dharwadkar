"use client";

import { motion, useTransform, MotionValue, useMotionValueEvent } from "framer-motion";
import { Server, Cpu, Layers, Layout, Link, Code2, Github } from "lucide-react";
import { useState } from "react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Track which section is active — guaranteed react-state driven switching
  const [activeSection, setActiveSection] = useState<"hero" | "expertise" | "about">("hero");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest <= 0.30) {
      setActiveSection("hero");
    } else if (latest > 0.30 && latest <= 0.65) {
      setActiveSection("expertise");
    } else {
      setActiveSection("about");
    }
  });

  // Opacity/Y motion values for smooth entry/exit animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28, 0.30], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.28, 0.30], [0, 0, -80]);

  const expertiseOpacity = useTransform(scrollYProgress, [0.30, 0.32, 0.63, 0.65], [0, 1, 1, 0]);
  const expertiseY = useTransform(scrollYProgress, [0.30, 0.32, 0.63, 0.65], [80, 0, 0, -80]);

  const aboutOpacity = useTransform(scrollYProgress, [0.65, 0.67, 1.0], [0, 1, 1]);
  const aboutY = useTransform(scrollYProgress, [0.65, 0.67, 1.0], [80, 0, 0]);

  const heroIntro = "I build intelligent systems. Bridging AI and backend engineering.";

  return (
    <div
      className="text-white font-sans"
      style={{ position: "sticky", top: 0, height: "100vh", width: "100%", zIndex: 80, overflow: "hidden", pointerEvents: "none" }}
    >

      {/* SECTION 1: HERO — visible until 30% */}
      {activeSection === "hero" && (
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] mb-4 text-white uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Samanvita<br />Dharwadkar.
          </h1>
          <p className="text-[10px] md:text-sm font-bold tracking-[0.4em] text-white/50 uppercase mb-8">
            AI Product Engineer
          </p>
          <p className="max-w-xl text-base md:text-xl font-bold text-white/80 leading-relaxed uppercase">
            {heroIntro}
          </p>
          <div className="absolute bottom-20 flex flex-col items-center gap-3">
            <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1 opacity-40">
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-1 h-1 rounded-full bg-white" />
            </div>
            <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-white/30">Scroll Down</span>
          </div>
        </motion.div>
      )}

      {/* SECTION 2: EXPERTISE — visible 30% to 65% */}
      {activeSection === "expertise" && (
        <motion.div
          id="capabilities"
          style={{ opacity: expertiseOpacity, y: expertiseY }}
          className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-24"
        >
          <div className="w-full max-w-6xl">
            <div className="mb-12 text-center">
              <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/30 mb-3">02 • Expertise</p>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-none">
                What <span className="text-white/30 not-italic">I Do.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Backend Systems", icon: Server, desc: "Scalable APIs and high-performance server logic." },
                { title: "AI Intelligence", icon: Cpu, desc: "GenAI, LLMs, and local inference models." },
                { title: "Full-Stack Ops", icon: Layers, desc: "Building end-to-end user-centric platforms." },
                { title: "System Architecture", icon: Layout, desc: "Designing robust and scalable digital blueprints." },
              ].map((skill, index) => (
                <div key={index} className="group p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:bg-white/[0.1] hover:border-white/20 text-center md:text-left shadow-2xl shadow-black/40">
                  <skill.icon className="h-7 w-7 text-white/60 mb-5 mx-auto md:mx-0 group-hover:text-white group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-3 uppercase tracking-tighter text-white">{skill.title}</h3>
                  <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-widest">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* SECTION 3: ABOUT ME — visible from 65% to end */}
      {activeSection === "about" && (
        <motion.div
          id="about"
          style={{ opacity: aboutOpacity, y: aboutY }}
          className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
        >
          <div className="max-w-4xl" style={{ pointerEvents: "auto" }}>
            <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/30 mb-3">06 • The Story</p>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-white uppercase italic leading-none mb-8">
              About <span className="text-white/30 not-italic">Samanvita.</span>
            </h2>
            <div className="space-y-5 text-base md:text-xl font-light text-white/80 leading-relaxed max-w-3xl mx-auto">
              <p>
                AI and backend engineer building real-world systems with{" "}
                <span className="text-white font-bold italic underline decoration-white/20 underline-offset-8">impactful</span> logic.
              </p>
              <p>
                Learning by building is my path to mastery — from OSCODE platforms to Google Gemini implementation.
              </p>
            </div>
            <div className="pt-10 mt-10 border-t border-white/20 flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="text-[9px] font-bold text-white/30 tracking-[0.3em] uppercase mb-2">Location</p>
                <p className="text-sm font-black uppercase tracking-widest text-white">Hubballi, India</p>
              </div>
              <div className="text-center">
                <p className="text-[9px] font-bold text-white/30 tracking-[0.3em] uppercase mb-2">Focus</p>
                <p className="text-sm font-black uppercase tracking-widest text-white">AI × Backend</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="text-[9px] font-bold text-white/30 tracking-[0.3em] uppercase">Profiles</p>
                <div className="flex gap-3">
                  <a href="https://leetcode.com/u/samanvita_rd/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black transition-all">
                    <Code2 className="h-5 w-5" />
                  </a>
                  <a href="https://linktr.ee/samanvita_dharwadkar" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black transition-all">
                    <Link className="h-5 w-5" />
                  </a>
                  <a href="https://github.com/sam-dwdkr404" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black transition-all">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
