"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Link, Code2 } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "Services", href: "#capabilities" },
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Awards", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-8 md:px-16 mix-blend-difference text-white"
    >
      {/* Logo */}
      <div className="flex items-center">
        <a href="#" className="text-2xl font-black tracking-tighter uppercase transition-opacity hover:opacity-70">
          Samanvita.
        </a>
      </div>

      {/* Center Links (Akshay Style) */}
      <div className="hidden items-center gap-10 lg:flex">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-[11px] font-bold tracking-[0.2em] text-white/60 transition-all hover:text-white"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <a 
          href="https://drive.google.com/file/d/1OQGZwO376S3EUHPWlv52HEuVhZy6Y691/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold tracking-[0.2em] text-white backdrop-blur-xl transition-all hover:bg-white hover:text-black"
        >
          <FileText className="h-4 w-4" />
          RESUME
        </a>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/sam-dwdkr404" 
            target="_blank" 
            rel="noopener noreferrer"
            title="GitHub"
            className="text-white/40 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a 
            href="https://www.linkedin.com/in/samanvita-dharwadkar-a3103a295/" 
            target="_blank" 
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-white/40 transition-colors hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a 
            href="https://leetcode.com/u/samanvita_rd/" 
            target="_blank" 
            rel="noopener noreferrer"
            title="LeetCode"
            className="text-white/40 transition-colors hover:text-white"
          >
            <Code2 className="h-4 w-4" />
          </a>
          <a 
            href="https://linktr.ee/samanvita_dharwadkar" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Linktree"
            className="text-white/40 transition-colors hover:text-white"
          >
            <Link className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
