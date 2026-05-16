"use client";

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-purple-600 rounded-[3rem] p-12 md:p-24 overflow-hidden text-center group shadow-2xl shadow-purple-900/20">
          {/* Animated background background elements */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-fuchsia-400/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-6xl font-bold mb-8 tracking-tighter text-white"
            >
              Take the first step toward <span className="italic font-medium">Academic Excellence.</span>
            </motion.h2>
            
            <p className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed font-medium">
              Admissions for the current academic session are now open. Secure your seat at Ahmedabad's most innovative university.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-purple-50 transition-all shadow-xl shadow-black/10 flex items-center justify-center"
              >
                Apply Online Now
              </motion.a>
              
              <a 
                href="#contact"
                className="flex items-center gap-2 font-semibold text-white/90 hover:text-white transition-all group px-6 py-4 hover:translate-x-1"
              >
                Enquire Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <p className="mt-12 text-white/40 text-xs font-bold uppercase tracking-[0.3em]">
              Interdisciplinary • Experiential • Industry Ready
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
