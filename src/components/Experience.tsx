"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Users, Star, Trophy } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Section 5: Awards & Recognition */}
          <div id="awards">
            <div className="mb-16">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-3">05 • Achievements</p>
              <h2 className="text-5xl font-bold tracking-tighter text-white">Awards & <span className="text-white/40 italic font-serif">Recognition</span></h2>
            </div>
            
            <div className="space-y-8">
              {[
                { title: "Top 3 Winner", org: "RV University Hackathon", year: "2024", icon: Trophy },
                { title: "Top 10 Finalist", org: "HackAura Hackathon", year: "2024", icon: Star },
                { title: "National Finalist", org: "DecodeX National Hackathon", year: "2023", icon: Award },
                { title: "Buildathon Participant", org: "OpenAI Buildathon", year: "2023", icon: Star },
                { title: "36hr Hackathon", org: "Srishti Hackathon Participant", year: "2023", icon: Star },
              ].map((award, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:bg-white/10 transition-colors">
                    <award.icon className="h-5 w-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white">{award.title}</h3>
                    <p className="text-sm text-white/40 uppercase tracking-widest">{award.org} • {award.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 7: Experience & Leadership */}
          <div>
            <div className="mb-16">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-3">07 • Leadership</p>
              <h2 className="text-5xl font-bold tracking-tighter text-white">Professional <span className="text-white/40 italic font-serif">Experience</span></h2>
            </div>

            <div className="space-y-12">
              {[
                { 
                  role: "Managing Director", 
                  org: "OSCODE", 
                  period: "2023 — Present", 
                  desc: "Leading developer communities and overseeing technical projects and platform scaling.",
                  icon: Users 
                },
                { 
                  role: "Google Gemini Ambassador", 
                  org: "Google Developer Student Clubs", 
                  period: "2024", 
                  desc: "Promoting AI literacy and Gemini integration within the student ecosystem.",
                  icon: Star 
                },
                { 
                  role: "Student Member", 
                  org: "IEEE AGMRCET", 
                  period: "2022 — Present", 
                  desc: "Active participation in technical workshops, seminars, and networking events.",
                  icon: Briefcase 
                },
                { 
                  role: "Hackathon Volunteer", 
                  org: "University Events", 
                  period: "2023", 
                  desc: "Organizing and mentoring participants in campus-wide coding competitions.",
                  icon: Users 
                },
              ].map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-b border-white/5 pb-8 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-white transition-colors">{exp.role}</h3>
                      <p className="text-sm text-white/40 uppercase tracking-[0.2em]">{exp.org} • {exp.period}</p>
                    </div>
                    <exp.icon className="h-6 w-6 text-white/20 group-hover:text-white/60 transition-colors" />
                  </div>
                  <p className="text-white/60 font-light leading-relaxed max-w-lg">
                    {exp.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
