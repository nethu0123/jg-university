"use client";

import { motion } from 'motion/react';
import { Eye, Zap, Layers } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Academic Excellence', value: '25+', icon: Zap },
    { label: 'Industry Partners', value: '100+', icon: Eye },
    { label: 'Alumni Network', value: '15k+', icon: Layers },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 tracking-tight text-purple-950">
            Our Strengths are built on an <span className="text-purple-600 italic font-medium">Interdisciplinary Approach.</span>
          </h2>
          <p className="text-purple-900/60 text-lg mb-12 leading-relaxed">
            Welcome to JG University, recognized as the best university in Ahmedabad. Our learning pedagogy focuses on Immersive & Experiential Learning, ensuring our students are ready for the industry from day one.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group bg-purple-50 p-6 rounded-3xl border border-purple-100 hover:bg-white hover:shadow-xl hover:shadow-purple-900/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white group-hover:bg-purple-700 transition-all transform group-hover:scale-110">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-display font-bold text-purple-950">{stat.value}</h4>
                  <p className="text-purple-900/40 uppercase tracking-widest text-[10px] font-bold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
