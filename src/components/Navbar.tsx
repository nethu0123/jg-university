"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Small delay to allow mobile menu to close before scrolling
    setTimeout(() => {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`bg-white/80 backdrop-blur-xl border border-purple-100 rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-xl shadow-purple-900/5' : 'bg-white/50'
        }`}>
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
              <span className="text-white font-bold text-xl">JG</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-purple-950">JG UNIVERSITY</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-purple-900/70">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Programmes', href: '#programmes' },
              { name: 'Alumni', href: '#alumni' },
              { name: 'Admissions', href: '#contact' },
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative group hover:text-purple-600 transition-colors uppercase tracking-wider overflow-hidden py-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-purple-500 translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              whileHover={{ scale: 1.05, backgroundColor: '#7e22ce' }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-semibold transition-all shadow-lg shadow-purple-200"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-purple-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden px-6 mt-2">
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="overflow-hidden bg-white/95 backdrop-blur-2xl border border-purple-100 rounded-2xl shadow-2xl shadow-purple-900/10"
        >
          {/* Mobile Menu Content */}
          <div className="flex flex-col gap-2 p-6">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Programmes', href: '#programmes' },
              { name: 'Alumni', href: '#alumni' },
              { name: 'Admissions', href: '#contact' },
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xl font-display font-medium text-purple-900/70 hover:text-purple-600 transition-all p-3 rounded-xl hover:bg-purple-50 flex items-center"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-purple-100 mt-2">
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-purple-600 text-white p-4 rounded-2xl font-bold text-lg text-center flex items-center justify-center hover:bg-purple-700 transition-colors shadow-xl shadow-purple-200"
              >
                Apply Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
