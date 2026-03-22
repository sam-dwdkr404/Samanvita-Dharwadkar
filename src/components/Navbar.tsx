"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, FileText, Link, Code2, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#capabilities" },
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-16 mix-blend-difference text-white"
      >
        {/* Logo */}
        <a href="#" className="text-xl md:text-2xl font-black tracking-tighter uppercase hover:opacity-70 transition-opacity">
          Samanvita.
        </a>

        {/* Desktop Center Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-[11px] font-bold tracking-[0.2em] text-white/60 hover:text-white transition-all uppercase">
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://drive.google.com/file/d/1OQGZwO376S3EUHPWlv52HEuVhZy6Y691/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all">
            <FileText className="h-3.5 w-3.5" /> RESUME
          </a>
          <div className="flex items-center gap-3">
            <a href="https://github.com/sam-dwdkr404" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Github className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/in/samanvita-dharwadkar-a3103a295/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="https://leetcode.com/u/samanvita_rd/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Code2 className="h-4 w-4" /></a>
            <a href="https://linktr.ee/samanvita_dharwadkar" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Link className="h-4 w-4" /></a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-white/70 hover:text-white transition-colors">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-white"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-3xl font-black uppercase tracking-tighter hover:text-white/50 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            <div className="flex items-center gap-5 mt-4 pt-8 border-t border-white/10 w-32 justify-center">
              <a href="https://github.com/sam-dwdkr404" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5 text-white/50" /></a>
              <a href="https://www.linkedin.com/in/samanvita-dharwadkar-a3103a295/" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5 text-white/50" /></a>
              <a href="https://leetcode.com/u/samanvita_rd/" target="_blank" rel="noopener noreferrer"><Code2 className="h-5 w-5 text-white/50" /></a>
            </div>
            <a href="https://drive.google.com/file/d/1OQGZwO376S3EUHPWlv52HEuVhZy6Y691/view?usp=sharing" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-xs font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all">
              <FileText className="h-4 w-4" /> RESUME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
