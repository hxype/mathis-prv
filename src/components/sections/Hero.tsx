"use client";

import { motion } from "framer-motion";
import DarkVeil from "./DarkVeil";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-20 px-8 md:px-16 xl:pl-40 bg-black overflow-hidden">
      {/* DarkVeil Background - Blends with black background (perfect balance of visibility) */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        <DarkVeil 
          noiseIntensity={0.05} 
          speed={0.5} 
          warpAmount={0.025} 
          scanlineIntensity={0.0} 
          resolutionScale={1.0}
        />
      </div>

      {/* Spacer to maintain balance */}
      <div className="h-6 relative z-10" />

      {/* Center Content: Typography Layout */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center my-auto py-12">
        <div className="flex flex-col w-full cursor-default overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full"
          >
             <h1 className="text-[16vw] md:text-[11vw] font-light tracking-tight text-white leading-none uppercase whitespace-nowrap">
               MATHIS
             </h1>
             <div className="hidden md:block h-[2px] flex-1 bg-gradient-to-r from-white/10 to-transparent mt-2 md:mt-4" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-end md:items-center justify-end gap-4 md:gap-8 w-full mt-2 md:mt-4"
          >
             <div className="hidden md:block h-[2px] flex-1 bg-gradient-to-l from-indigo-500/20 to-transparent mb-2 md:mb-4" />
             <h1 className="text-[16vw] md:text-[11vw] font-light tracking-tight text-white leading-none uppercase whitespace-nowrap">
               PREVOST
             </h1>
          </motion.div>
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 1 }}
           className="mt-12 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs tracking-wider uppercase font-medium text-white/60 font-sans"
        >
           <div>Cybersécurité</div>
           <div className="text-blue-400/50">•</div>
           <div className="text-blue-400 font-semibold">Pentesting</div>
        </motion.div>
      </div>

      {/* Bottom Content: Description & Scroll */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-end gap-12 w-full mt-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="max-w-md"
        >
          <h3 className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-3 font-semibold">
            Objectif
          </h3>
          <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium">
            Je conçois des architectures système sécurisées et traque les vulnérabilités pour déjouer les menaces.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-4 text-right"
        >
          <div className="w-6 h-10 md:w-8 md:h-12 border border-white/20 rounded-full flex justify-center p-1 relative">
             <motion.div 
               animate={{ y: [0, 16, 0], opacity: [1, 0.5, 1] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
               className="w-1 md:w-1.5 h-1 md:h-1.5 bg-indigo-400 rounded-full"
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
