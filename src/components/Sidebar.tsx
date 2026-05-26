"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "hero", label: "Accueil" },
  { id: "intro", label: "Présentation" },
  { id: "about", label: "Environnement" },
  { id: "experience", label: "Parcours" },
  { id: "projects", label: "Projets" },
  { id: "competencies", label: "Compétences" },
  { id: "manifesto", label: "Vision" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      let currentSection = "hero";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            currentSection = item.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial position check
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="hidden xl:flex fixed left-0 top-0 h-full w-24 flex-col items-center justify-center z-50 pointer-events-none mix-blend-difference"
    >
      <div className="flex flex-col items-center gap-6 pointer-events-auto">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative group flex items-center justify-center w-12 h-12"
              aria-label={`Scroll to ${item.label}`}
            >
              {/* The Line/Dot Indicator */}
              <div 
                className={`transition-all duration-500 ease-out ${
                  isActive 
                    ? "h-8 w-1 bg-white" 
                    : "h-2 w-1 bg-white/30 group-hover:bg-white/70 group-hover:h-5"
                }`}
              />
              
              {/* The Text Label */}
              <span 
                className={`absolute left-8 font-mono text-[10px] tracking-widest whitespace-nowrap transition-all duration-500 uppercase ${
                  isActive 
                    ? "text-white font-bold opacity-100 translate-x-2" 
                    : "text-white/40 font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-2"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
