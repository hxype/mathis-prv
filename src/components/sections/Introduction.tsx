"use client";

import { motion } from "framer-motion";
import { Dumbbell, Zap, Palette } from "lucide-react";

export default function Introduction() {
  const mindsetParallels = [
    {
      title: "Force & Musculation",
      description: (
        <>
          Ce que j'en tire : <span className="font-bold text-anthracite">L'itération</span> et la <span className="font-bold text-anthracite">résilience</span>. À travers 4 séances hebdomadaires strictes, j'ai appris que <span className="font-bold text-anthracite">l'excellence</span> n'est pas un talent, mais une <span className="font-bold text-anthracite">méthode</span>. Accepter l'échec sous une barre lourde ou face à un système informatique verrouillé m'enseigne la même mécanique : <span className="font-bold text-anthracite">mesurer, analyser la faiblesse, corriger et recommencer</span> jusqu'à forcer le passage.
        </>
      ),
      icon: <Dumbbell className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Badminton & Réactivité Tactique",
      description: (
        <>
          Ce que j'en tire : <span className="font-bold text-anthracite">L'analyse sous pression</span>. Ce n'est pas qu'une question de cardio, c'est un jeu d'échecs à haute vitesse. Ce sport m'entraîne à <span className="font-bold text-anthracite">lire la stratégie</span> de mon adversaire, à <span className="font-bold text-anthracite">identifier ses erreurs</span> de placement en une fraction de seconde et à <span className="font-bold text-anthracite">exploiter la moindre faille</span> en temps réel. Un <span className="font-bold text-anthracite">conditionnement mental</span> directement transposable à l'exploitation de vulnérabilités.
        </>
      ),
      icon: <Zap className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "UI Design & Création Graphique",
      description: (
        <>
          Ce que j'en tire : <span className="font-bold text-anthracite">L'ingénierie sociale</span> et le <span className="font-bold text-anthracite">détail</span>. Concevoir des interfaces (Figma, Tailwind) m'apprend comment l'attention humaine est dirigée et manipulée. En cybersécurité, la plus grande faille reste l'humain. Comprendre l'<span className="font-bold text-anthracite">architecture visuelle</span> et les <span className="font-bold text-anthracite">biais cognitifs</span> est une compétence redoutable pour <span className="font-bold text-anthracite">anticiper</span> et concevoir des vecteurs d'attaque basés sur le Social Engineering (phishing).
        </>
      ),
      icon: <Palette className="w-6 h-6 text-indigo-500" />,
    },
  ];

  return (
    <section id="intro" className="py-24 px-8 md:px-24 xl:pl-40 bg-white relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-anthracite tracking-tight">
            Le Parcours <span className="text-indigo-500">& La Discipline</span>
          </h2>
          <p className="font-mono text-xs text-indigo-600 mt-4 uppercase tracking-widest font-bold">
            De l'effort physique à la rigueur numérique
          </p>
        </motion.div>

        {/* Narrative Grid: Two-Column Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 text-anthracite/80 text-sm md:text-base leading-relaxed mb-20">
          <div className="space-y-6">
            <p>
              À <span className="font-bold text-anthracite">19 ans</span>, actuellement en deuxième année de <span className="font-bold text-anthracite">BUT Informatique</span> à l'IUT d'Amiens, je suis spécialisé dans le <span className="italic">Déploiement d'Applications Communicantes et Sécurisées (DACA)</span>. Si j'ai d'abord commencé par le développement pur pour comprendre la logique des programmes, ma véritable passion s'est vite orientée vers l'infrastructure et la <span className="font-bold text-anthracite">sécurité offensive</span> : comprendre précisément ce qui se passe sous le capot de nos machines.
            </p>
            <p>
              Ce qui me motive au quotidien, c'est la maîtrise absolue de l'environnement de travail. Partir d'un système nu, configurer une distribution Arch Linux de A à Z, et verrouiller des bases de données via des règles RLS (Row Level Security), pour mieux comprendre comment une architecture prétendument robuste peut être compromise.
            </p>
          </div>
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <p className="mb-6">
                La discipline nécessaire à cette rigueur technique, je l'ai forgée à travers ma passion pour la <span className="font-bold text-anthracite">musculation</span> et les entraînements de force. À raison de 4 séances par semaine, j'y applique le principe strict de la surcharge progressive pour évoluer et dépasser mes limites. J'utilise exactement cette même logique et ce goût de l'effort dans mon métier : m'auto-former sur Root-Me, analyser finement les flux réseaux sur Wireshark, comprendre le pourquoi d'une faille, et itérer pour affûter mes méthodes d'exploitation et d'attaque.
              </p>
              <p>
                Ma marque de fabrique ? Un perfectionnisme technique et un souci constant du détail. Que ce soit pour optimiser l'interface graphique d'une application ou affiner la configuration visuelle de mon environnement de travail, j'aime que le rendu final soit impeccable, convaincu que la rigueur d'un projet se mesure aussi dans ses finitions.
              </p>
            </div>
            <p className="border-t border-grid pt-6 text-anthracite/80 mt-6 lg:mt-0 font-medium">
              Basé dans le sud d'Amiens, je recherche activement un <span className="text-indigo-600 font-bold">stage en cybersécurité</span> pour l'année 2027.
            </p>
          </div>
        </div>

        {/* Mindset Cards Grid (Horizontal on desktop) */}
        <div>
          <h3 className="font-mono text-xs text-indigo-600 uppercase tracking-widest font-bold mb-8 text-center md:text-left">
            Mes Passions & Disciplines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {mindsetParallels.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-offwhite/50 border border-grid rounded-xl hover:border-indigo-300 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="p-3 bg-white border border-grid rounded-lg shadow-sm w-fit mb-6">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-anthracite mb-3 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-anthracite/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
