"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Link, Code2 } from "lucide-react";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0a0a0a] pt-32 pb-16 border-t border-white/5">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Section 08: Let's Build Something Impactful */}
        <div className="mb-32">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-6">08 • Contact</p>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 leading-[0.9]">
              Let’s Build Something <br />
              <span className="text-white/40 italic font-serif uppercase">Impactful</span>
            </h2>
            
            <motion.a 
              href="mailto:samanvitadharwadkar@gmail.com"
              className="inline-flex items-center gap-4 text-2xl md:text-4xl font-bold border-b-2 border-white/20 pb-2 hover:border-white transition-all group"
            >
              samanvitadharwadkar@gmail.com
              <ArrowUpRight className="h-8 w-8 text-white/40 group-hover:text-white transition-colors" />
            </motion.a>
          </div>
        </div>

        {/* Section 09/10: Footer Structure */}
        <div className="pt-16 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Logo & Role */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold tracking-tighter mb-4 uppercase">Samanvita.</h3>
              <p className="text-[10px] font-bold text-white/40 tracking-[.3em] uppercase">AI Product Engineer</p>
            </div>

            {/* Location */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/30 mb-4">Location</p>
              <p className="text-sm font-black uppercase tracking-widest text-white">Hubballi, India</p>
            </div>

            {/* Socials */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/30 mb-4">Socials</p>
              <div className="flex flex-col gap-4">
                <a href="https://www.linkedin.com/in/samanvita-dharwadkar-a3103a295/" target="_blank" rel="noopener noreferrer" className="text-[11px] font-black tracking-widest uppercase hover:text-white/60 transition-colors inline-flex items-center gap-2">
                  LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a href="https://github.com/sam-dwdkr404" target="_blank" rel="noopener noreferrer" className="text-[11px] font-black tracking-widest uppercase hover:text-white/60 transition-colors inline-flex items-center gap-2">
                  GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a href="https://leetcode.com/u/samanvita_rd/" target="_blank" rel="noopener noreferrer" className="text-[11px] font-black tracking-widest uppercase hover:text-white/60 transition-colors inline-flex items-center gap-2">
                  LeetCode <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a href="https://linktr.ee/samanvita_dharwadkar" target="_blank" rel="noopener noreferrer" className="text-[11px] font-black tracking-widest uppercase hover:text-white/60 transition-colors inline-flex items-center gap-2">
                  Linktree <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Status */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/30 mb-4">Status</p>
              <p className="text-sm font-black uppercase tracking-widest text-white">Open to Innovation</p>
            </div>
          </div>

          {/* Legal / Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-[10px] font-bold uppercase tracking-[.3em] text-white/20">
            <p>© {currentYear} Samanvita Dharwadkar</p>
            <p className="flex gap-8">
              <span>Privacy-First</span>
              <span>Hubballi-Based</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
