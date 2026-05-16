"use client";

import { motion } from 'motion/react';
import { Twitter, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const linkSections = [
    {
      title: 'Academic Programmes',
      links: [
        { name: 'Undergraduate', href: '#programmes' },
        { name: 'Postgraduate', href: '#programmes' },
        { name: 'Doctoral', href: '#programmes' },
        { name: 'Certificates', href: '#programmes' },
      ],
    },
    {
      title: 'University',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Faculty', href: '#about' },
        { name: 'Admissions', href: '#contact' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Alumni', href: '#alumni' },
        { name: 'Library', href: '#programmes' },
        { name: 'Campus Life', href: '#home' },
      ],
    },
  ];

  return (
    <footer className="pt-24 pb-12 px-6 border-t border-purple-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">JG</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-purple-950">JG UNIVERSITY</span>
            </div>
            <p className="text-purple-900/40 max-w-xs leading-relaxed mb-8 text-sm font-medium">
              The premier institution for higher education in Ahmedabad, committed to academic excellence and industry-ready skills.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all shadow-sm">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {linkSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-6 tracking-wide text-xs uppercase text-purple-900/60">{section.title}</h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-purple-900/40 hover:text-purple-600 transition-colors flex items-center gap-1 group text-xs font-bold">
                      {link.name} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-purple-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-purple-900/20 text-xs font-bold tracking-widest uppercase">
            © 2026 JG UNIVERSITY AHMEDABAD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-xs font-bold text-purple-900/20 uppercase tracking-widest">
            <a href="#" className="hover:text-purple-600 transition-colors">India (EN)</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
