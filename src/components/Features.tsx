"use client";

import { motion } from 'motion/react';
import { Shield, Smartphone, Globe, Cpu, Cloud, Infinity } from 'lucide-react';

const programmes = [
  {
    title: 'Management (MBA/BBA)',
    desc: 'Cutting-edge management programs designed to create future business leaders.',
    icon: Shield,
    color: 'from-purple-600/20 to-transparent'
  },
  {
    title: 'Computer Applications (MCA/BCA)',
    desc: 'In-depth IT education focusing on modern software engineering and data science.',
    icon: Smartphone,
    color: 'from-purple-600/20 to-transparent'
  },
  {
    title: 'Commerce (M.Com/B.Com)',
    desc: 'Comprehensive commerce courses covering accountancy, finance, and trade.',
    icon: Globe,
    color: 'from-purple-600/20 to-transparent'
  },
  {
    title: 'Information Technology (M.Sc IT)',
    desc: 'Advanced IT specialization for deep technical expertise and research.',
    icon: Cpu,
    color: 'from-purple-600/20 to-transparent'
  },
  {
    title: 'Certificate Courses',
    desc: 'Short-term professional certificates to enhance your specialized skill set.',
    icon: Cloud,
    color: 'from-purple-600/20 to-transparent'
  },
  {
    title: 'Doctoral (Ph.D)',
    desc: 'High-impact research programs for academic and professional excellence.',
    icon: Infinity,
    color: 'from-purple-600/20 to-transparent'
  }
];

export default function Features() {
  return (
    <section id="programmes" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold mb-6 tracking-tight text-purple-950"
          >
            Academic <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700">Programmes</span>
          </motion.h2>
          <p className="text-purple-900/40 max-w-2xl mx-auto text-lg uppercase tracking-[0.2em] font-bold text-xs">
            Choose your path to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl relative group overflow-hidden border border-purple-100 shadow-sm hover:shadow-xl hover:shadow-purple-900/5 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${prog.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-8 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-all transform group-hover:rotate-12">
                  <prog.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-purple-950">{prog.title}</h3>
                <p className="text-purple-900/50 leading-relaxed group-hover:text-purple-900 transition-colors">
                  {prog.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
