"use client";

import { motion } from 'motion/react';
import { Sparkles, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center items-center px-6">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-[100px] -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 backdrop-blur-xl border border-purple-200 mb-8 text-purple-600 text-sm font-semibold tracking-wide">
          <Sparkles className="w-4 h-4" />
          <span>TOP-TIER UNIVERSITY IN AHMEDABAD</span>
        </div>
        
        <h1 className="font-display text-4xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter text-purple-950">
          Empowering Minds, <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700">Shaping Futures</span> at JG University
        </h1>
        
        <p className="text-purple-900/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          The best University in Ahmedabad offering world-class Education in Management, IT, Commerce, and more. Experience an interdisciplinary approach to learning.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a
            href="#programmes"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-purple-200 transition-all text-center"
          >
            Explore Programmes
          </motion.a>
          
          <button className="flex items-center gap-3 text-purple-900/60 hover:text-purple-900 transition-all group hover:translate-x-1">
            <div className="w-12 h-12 rounded-full bg-white backdrop-blur-xl border border-purple-100 flex items-center justify-center group-hover:bg-purple-50 group-hover:scale-110 transition-all shadow-sm">
              <Play className="w-5 h-5 fill-current text-purple-600" />
            </div>
            <span className="font-bold uppercase tracking-widest text-xs">Campus Tour</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
