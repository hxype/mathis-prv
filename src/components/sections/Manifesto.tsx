"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 px-8 md:px-24 xl:pl-40 bg-offwhite flex flex-col justify-center overflow-clip">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none font-sans">
        <span className="text-[30rem] md:text-[50rem] font-bold text-anthracite leading-none translate-y-12">
          "
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center pt-12 mb-2"
        >
          <span className="font-mono text-xs text-indigo-600 uppercase tracking-widest font-bold block">
            Vision & Manifeste
          </span>
        </motion.div>

        {/* Richard Feynman Quote Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto bg-white border border-grid p-8 rounded-2xl shadow-sm text-center mb-16 relative"
        >
          <p className="text-xl md:text-2xl font-bold text-anthracite italic mb-3 font-serif">
            “What I cannot create, I do not understand.”
          </p>
          <p className="font-mono text-xs text-indigo-600 uppercase tracking-widest font-bold">
            — Richard Feynman
          </p>
        </motion.div>

        {/* Manifesto Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-8 text-base md:text-lg text-anthracite/80 leading-relaxed"
        >
          <p>
            Mon parcours n'est pas celui d'un attaquant qui a appris à coder par hasard. C'est l'inverse : j'ai d'abord appris à <span className="font-bold text-anthracite">bâtir des infrastructures</span> et des applications complexes pour pouvoir ensuite les disséquer. Je suis convaincu qu'il faut <span className="text-indigo-600 font-bold">comprendre la création pour maîtriser la protection</span>. En cybersécurité offensive, maîtriser le code est l'arme ultime pour anticiper et corriger ses vulnérabilités.
          </p>
          <p>
            C'est pour cette raison que je m'auto-forme intensivement sur <span className="font-bold text-anthracite">Root-Me</span> et que j'administre mon propre environnement <span className="font-bold text-anthracite">Arch Linux</span> au quotidien. Ce ne sont pas des passe-temps, mais des laboratoires d'expérimentation stricts où j'apprends à raisonner face à l'inconnu. Il n'y a pas de raccourci : la véritable autonomie naît de la compréhension exhaustive des systèmes, en descendant jusqu'à la ligne de commande et l'analyse de trames.
          </p>
          <p>
            En tant que futur pentesteur, je refuse l'illusion de la sécurité cosmétique. Je crois en une sécurité <span className="text-indigo-600 font-bold">"By Design"</span>, intégrée dès la première ligne d'architecture, et non ajoutée comme un pansement à la fin d'un projet. Un audit n'a de réelle valeur que si l'attaquant possède l'intelligence, la méthode et la rigueur de celui qui a construit le mur.
          </p>
        </motion.div>

        {/* Prochaines Étapes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-20"
        >
          <p className="font-mono text-xs text-indigo-600 uppercase tracking-widest font-bold mb-8 text-center">
            Prochaines Étapes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                label: "Autoformation",
                text: "Progresser en continu sur Root-Me, TryHackMe et HackTheBox.",
              },
              {
                num: "02",
                label: "Stage 2027",
                text: "Décrocher un stage en cybersécurité offensive.",
              },
              {
                num: "03",
                label: "Mastère",
                text: "Intégrer un mastère en cybersécurité à l'issue du BUT.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                className="relative bg-anthracite rounded-xl p-6 overflow-hidden group hover:bg-anthracite/90 transition-colors duration-300"
              >
                {/* Numéro en filigrane */}
                <span className="absolute -top-3 -right-1 text-7xl font-black text-white/5 leading-none select-none group-hover:text-white/8 transition-colors duration-300">
                  {item.num}
                </span>
                {/* Ligne accent */}
                <div className="w-8 h-px bg-indigo-500 mb-5" />
                <p className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-2">
                  {item.label}
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
