"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import TechStack from "@/components/TechStack";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // CORRECT PATTERN: Track the container's position in the viewport.
  // scrollYProgress = 0 when container top hits viewport top.
  // scrollYProgress = 1 when container bottom hits viewport bottom.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      {/* Scrollytelling narrative container - MUST be position:relative for framer-motion */}
      <div
        ref={containerRef}
        style={{ position: "relative", height: "400vh" }}
      >
        {/* Nav anchors at mid-points of each section's window */}
        <div id="capabilities" style={{ position: "absolute", top: "120vh" }} />
        <div id="about" style={{ position: "absolute", top: "230vh" }} />

        <ScrollyCanvas scrollYProgress={scrollYProgress} />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>

      {/* Professional sections below the narrative */}
      <div style={{ position: "relative", zIndex: 30 }}>
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
