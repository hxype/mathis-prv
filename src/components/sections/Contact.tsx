"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// Inline SVGs to avoid dependency casing issues in older/newer lucide-react versions
const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current text-indigo-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current text-indigo-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-offwhite py-24 px-8 md:px-24 xl:pl-40 border-t-4 border-indigo-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYwNSIvPjwvc3ZnPg==')] opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-16">

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-8 text-indigo-400">
            <span className="text-xs uppercase tracking-widest font-bold font-sans">Contact & Liens</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 font-sans">
            Prêt à collaborer <br /> sur votre prochain projet ?
          </h2>

          <div className="flex flex-col gap-5 text-sm md:text-base">
            <a href="mailto:mathis.prv06@gmail.com" className="hover:text-indigo-400 transition-colors flex items-center gap-3.5 w-fit" data-interactive>
              <Mail className="w-4 h-4 text-indigo-500" /> mathis.prv06@gmail.com
            </a>
            <a href="https://github.com/hxype" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-3.5 w-fit" data-interactive>
              <GithubIcon /> GitHub: @hxype
            </a>
            <a href="https://linkedin.com/in/prevost-mathis" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-3.5 w-fit" data-interactive>
              <LinkedinIcon /> LinkedIn: prevost-mathis
            </a>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <motion.a
            href="mailto:mathis.prv06@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center justify-center bg-indigo-500 text-white font-bold font-sans uppercase tracking-wider py-5 px-10 rounded-xl overflow-hidden w-full md:w-auto shadow-lg shadow-indigo-500/20"
            data-interactive
          >
            <span className="relative z-10 flex items-center gap-2">
              INITIER LE CONTACT
            </span>
            <div className="absolute inset-0 bg-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out" />
          </motion.a>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© {new Date().getFullYear()} Mathis Prevost. Tous droits réservés.</p>
        <p>Disponible pour de nouvelles opportunités</p>
      </div>
    </section>
  );
}
