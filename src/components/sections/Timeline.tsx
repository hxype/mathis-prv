"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    year: "2024-Présent",
    title: "BUT Informatique DACA",
    description: "Réseau, Sécurité, Architecture Logicielle.",
  },
  {
    year: "Juin 2024",
    title: "Bénévolat",
    description: "Gestion de crise, relationnel et adaptabilité en environnement complexe.",
  },
  {
    year: "2023-2024",
    title: "Licence STAPS",
    description: "Développement de l'endurance physique et de la résilience mentale.",
  },
  {
    year: "2023",
    title: "Bac Maths/SVT",
    description: "Fondations en logique analytique et méthode scientifique.",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 px-8 md:px-24 xl:pl-40 bg-white relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-anthracite tracking-tight">
            Parcours & Évolution
          </h2>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-grid -translate-x-1/2" />
          
          {/* Animated Fill Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-indigo-500 origin-top -translate-x-1/2 rounded-full"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-white border-2 border-indigo-500 -translate-x-1/2 md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 transition-transform duration-300 group-hover:scale-150 group-hover:bg-indigo-500" />
                  
                  {/* Left Side (Empty on mobile, content on desktop if even) */}
                  <div className={`hidden md:block w-1/2 pr-12 text-right ${!isEven ? 'opacity-0' : ''}`}>
                    {isEven && (
                      <TimelineContent item={item} />
                    )}
                  </div>

                  {/* Right Side (Content on mobile, content on desktop if odd) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-12 ${isEven ? 'md:opacity-0' : ''}`}>
                    {(!isEven || true) && (
                      <div className={isEven ? 'md:hidden' : ''}>
                        <TimelineContent item={item} />
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineContent({ item }: { item: { year: string, title: string, description: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-mono text-indigo-600 text-sm tracking-widest font-bold block mb-2">
        {item.year}
      </span>
      <h3 className="text-xl md:text-2xl font-bold text-anthracite mb-2">
        {item.title}
      </h3>
      <p className="text-anthracite/60 leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}
