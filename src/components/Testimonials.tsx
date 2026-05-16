"use client";

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jigardan Gadhvi',
    role: 'Alumni',
    content: 'JG University provided me with the platform to explore my creative potential while maintaining a strong academic foundation.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Parth Rupareliya',
    role: 'Alumni',
    content: 'The faculty and the interdisciplinary approach at JG have been instrumental in my career growth in the industry.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Disha Thaker',
    role: 'Alumni',
    content: 'The experiential learning pedagogy helped me bridge the gap between theory and practical application effectively.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export default function Testimonials() {
  return (
    <section id="alumni" className="py-24 px-6 relative overflow-hidden bg-purple-50">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-2xl"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 tracking-tight text-purple-950">
              Our Alumni <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700">Testimonials.</span>
            </h2>
            <p className="text-purple-900/40 uppercase tracking-widest text-xs font-bold">What our students say</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] relative group border border-purple-100 shadow-sm hover:shadow-xl hover:shadow-purple-900/5 transition-all"
            >
              <div className="absolute top-8 right-8 text-purple-600/10 group-hover:text-purple-600/20 transition-colors">
                <Quote className="w-12 h-12 rotate-180" />
              </div>
              
              <div className="flex flex-col h-full">
                <p className="text-xl text-purple-900/80 mb-10 leading-relaxed italic font-medium">
                  "{t.content}"
                </p>
                
                <div className="mt-auto flex items-center gap-4">
                  <img 
                    src={t.image} 
                    alt={t.name}
                    className="w-14 h-14 rounded-2xl object-cover transition-all duration-500 border border-purple-100 shadow-sm"
                  />
                  <div>
                    <h4 className="font-bold text-purple-950 tracking-wide">{t.name}</h4>
                    <p className="text-purple-950/40 text-sm font-semibold">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
