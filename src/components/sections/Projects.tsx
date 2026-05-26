"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);


const techLogos = {
  figma: (
    <svg className="w-3.5 h-3.5" viewBox="-9.5 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 9.5C19 4.253 14.747 0 9.5 0C4.253 0 0 4.253 0 9.5C0 14.747 4.253 19 9.5 19H19V9.5Z" fill="#F24E1E" />
      <path d="M19 28.5C19 23.253 14.747 19 9.5 19C4.253 19 0 23.253 0 28.5C0 33.747 4.253 38 9.5 38H19V28.5Z" fill="#A259FF" />
      <path d="M19 47.5C19 42.253 14.747 38 9.5 38C4.253 38 0 42.253 0 47.5C0 52.747 4.253 57 9.5 57C14.747 57 19 52.747 19 47.5V38H9.5V47.5Z" fill="#0ACF83" />
      <path d="M38 9.5C38 4.253 33.747 0 28.5 0C23.253 0 19 4.253 19 9.5V19H28.5C33.747 19 38 14.747 38 9.5Z" fill="#FF7262" />
      <path d="M38 28.5C38 23.253 33.747 19 28.5 19C23.253 19 19 23.253 19 28.5V38H28.5C33.747 38 38 33.747 38 28.5Z" fill="#1ABCFE" />
    </svg>
  ),
  nextjs: (
    <svg className="w-3.5 h-3.5 fill-current text-black dark:text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
    </svg>
  ),
  supabase: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z" fill="#3ECF8E" />
    </svg>
  ),
  tailwind: (
    <svg className="w-3.5 h-3.5 fill-current text-sky-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  laravel: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z" fill="#FF2D20" />
    </svg>
  ),
  linux: (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z" />
    </svg>
  ),
  archlinux: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554-1.484-.61-2.496-1.224-3.252-1.86C6.86 10.842 4.596 15.138 0 23.395c3.612-2.085 6.412-3.37 9.021-3.862a6.61 6.61 0 01-.171-1.547l.003-.115c.058-2.315 1.261-4.095 2.687-3.973 1.426.12 2.534 2.096 2.478 4.409a6.52 6.52 0 01-.146 1.243c2.58.505 5.352 1.787 8.914 3.844-.702-1.293-1.33-2.459-1.929-3.57-.943-.73-1.926-1.682-3.933-2.713 1.38.359 2.367.772 3.137 1.234-6.09-11.334-6.582-12.84-8.67-17.74z" fill="#1793D1" />
    </svg>
  ),
  wireshark: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#1679A7" d="M13.6 5.24c-2.62 5.24.248 11.4.248 11.4a.516.517 0 0 0 .469.301h5.62v3.05c0 1.04-.817 1.86-1.85 1.86h-18.1c-1.04 0-1.85-.818-1.85-1.86v-3.05h5.39a.516.517 0 0 0 .514-.477s.226-2.8 1.66-5.62c1.34-2.62 3.67-5.17 7.91-5.57z" />
    </svg>
  )
};

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  logos: React.ReactNode[];
  images?: string[];
  testimonial?: {
    author: string;
    role: string;
    text: string;
    initials: string;
    avatar?: string;
    instagram?: string;
  };
  story: {
    role: string;
    narrative: string;
    challenges: { question: string; answer: string }[];
    outcomes: string[];
  };
}

const projects: Project[] = [
  {
    id: "01",
    title: "SOA Coaching — Plateforme d'Acquisition & Architecture Sécurisée",
    subtitle: "Next.js & Supabase // Sécurité & RLS",
    description: "Création d'une architecture sécurisée. Focus absolu sur la Row Level Security (RLS) pour garantir l'étanchéité des données de l'espace d'administration du coach, implémentation d'Auth JWT, et déploiement d'une infrastructure Serverless hautement disponible.",
    color: "bg-gray-100",
    logos: [techLogos.nextjs, techLogos.supabase],
    images: [
      "/images/SOA site.png",
      "/images/SOA site dashboard.png"
    ],
    testimonial: {
      author: "Dorian Prevost",
      role: "Coach Sportif & Fondateur de SOA Coaching",
      initials: "DP",
      avatar: "/images/portrait.jpg",
      instagram: "https://www.instagram.com/dorianprevost_soa/",
      text: "Mathis a su cerner parfaitement mes besoins pour numériser mon activité. Il ne s'est pas contenté de créer un site vitrine classique ; il a conçu un espace d'administration ultra-sécurisé d'où je peux gérer et mettre en valeur mes contenus de coaching en toute confidentialité. Sa rigueur de travail, similaire à la discipline requise en force athlétique, et sa maîtrise de la sécurité des données (notamment les règles RLS de PostgreSQL) font de lui un développeur de confiance. Je recommande vivement son expertise technique."
    },
    story: {
      role: "Développeur Full-Stack & Architecte Sécurité",
      narrative: "L'objectif de la plateforme est de digitaliser l'approche d'un coach sportif (Dorian Prevost). Le site a été conçu pour mettre en lumière sa méthodologie et son histoire, tout en servant de socle technique pour l'acquisition de nouveaux athlètes, sans jamais se transformer en un simple catalogue d'offres.",
      challenges: [
        {
          question: "Le Défi Technique",
          answer: "Garantir une transition fluide entre une vitrine publique (l'histoire du coach) et un espace d'administration privé hautement sécurisé d'où le coach gère son contenu à afficher, le tout avec un temps de chargement minime."
        },
        {
          question: "La Stack Technologique",
          answer: "Front-end : Next.js (React) pour un rendu hybride garantissant des performances optimales et une navigation instantanée. Back-end & Base de données : Supabase (PostgreSQL) pour une gestion de la donnée centralisée et robuste."
        },
        {
          question: "La Couche Sécurité - Isolation des données (RLS)",
          answer: "Mise en place stricte de règles Row Level Security (RLS) au sein de PostgreSQL. J'ai conçu la base de données pour garantir de manière cryptographique que seul le coach connecté puisse modifier les contenus publiés."
        },
        {
          question: "La Couche Sécurité - Gestion des Sessions",
          answer: "Implémentation d'une authentification robuste via JWT (JSON Web Tokens) pour sécuriser les routes de l'API et l'accès à l'espace d'administration."
        }
      ],
      outcomes: [
        "Mise en production d'une infrastructure \"Serverless\" sur Vercel, connectée à une base de données Supabase, réduisant les coûts d'hébergement à zéro tout en assurant une scalabilité automatique.",
        "Application d'une rigueur de développement stricte (similaire à la discipline appliquée dans le sport de force) pour délivrer un code propre, maintenable et sécurisé By Design."
      ]
    }
  },
  {
    id: "02",
    title: "AmiGo — Application Web de Covoiturage & Privacy by Design",
    subtitle: "Laravel & Tailwind // Covoiturage universitaire",
    description: "Application de covoiturage étudiant pensée 'Privacy by Design'. Protection des données personnelles via messagerie intégrée, anonymisation des profils et stricte conformité RGPD.",
    color: "bg-slate-100",
    logos: [techLogos.laravel, techLogos.tailwind, techLogos.figma],
    images: ["/images/Amigo accueil.png"],
    story: {
      role: "Référent Identité, Design (UI/UX) et Développeur Front-end",
      narrative: "Conception et développement (en équipe de 3) d'une plateforme de covoiturage exclusivement dédiée aux étudiants de l'IUT d'Amiens. L'objectif était de répondre aux problématiques de mobilité tout en instaurant un cadre de confiance technique absolu, à l'opposé des plateformes grand public.",
      challenges: [
        {
          question: "Le Défi Technique",
          answer: "Permettre à des étudiants de planifier des trajets et de coordonner leurs déplacements en temps réel, sans jamais divulguer leurs données personnelles sensibles (telles que le numéro de téléphone portable ou l'adresse email) avant que le trajet ne soit officiellement validé et sécurisé."
        },
        {
          question: "Identité, Confiance & Conformité - Privacy by Design",
          answer: "Mise en place d'une messagerie intégrée. Ce système de chat privé permet aux covoitureurs de se coordonner sans jamais exposer leurs numéros de téléphone personnels sur le réseau."
        },
        {
          question: "Identité, Confiance & Conformité - Cadre Juridique strict",
          answer: "Rédaction, intégration et mise en conformité de la plateforme avec le RGPD (Règlement Général sur la Protection des Données, la loi européenne encadrant la sécurité des données personnelles), incluant les CGU et les Mentions Légales."
        },
        {
          question: "Identité, Confiance & Conformité - Espace Membre",
          answer: "Conception des parcours d'authentification et de gestion des profils pour garantir des accès légitimes."
        },
        {
          question: "Architecture Front-end & Interface - Intégration Web",
          answer: "Utilisation de Tailwind CSS (un framework utilitaire permettant de créer des designs réactifs directement dans le code) pour garantir un affichage 100% \"Mobile-First\", adapté aux smartphones des étudiants."
        },
        {
          question: "Architecture Front-end & Interface - Prototypage",
          answer: "Réalisation des maquettes interactives sur Figma pour valider l'ergonomie et les parcours utilisateurs avant d'écrire la moindre ligne de code."
        }
      ],
      outcomes: [
        "Travail Collaboratif : Gestion du code source via Git et GitHub (systèmes de contrôle de version pour coder à plusieurs de manière asynchrone) et sessions de Pair Programming (programmation en binôme sur un même écran) pour la résolution de bugs complexes.",
        "Méthode Agile : Pilotage quotidien via Trello en méthode Kanban (gestion visuelle des tâches par statuts) pour fluidifier la charge de travail technique."
      ]
    }
  },
  {
    id: "03",
    title: "Analyse Système & Administration — Environnement Arch Linux",
    subtitle: "Arch Linux // Analyse Système & Administration",
    description: "Installation Arch Linux en Dualboot, gestion de partitionnement complexe et personnalisation complète de l'environnement de travail.",
    color: "bg-zinc-100",
    logos: [techLogos.archlinux],
    images: [],
    story: {
      role: "Administrateur Système",
      narrative: "Projet personnel d'approfondissement technique continu. L'objectif était de quitter les systèmes d'exploitation \"clés en main\" pour construire, configurer et administrer un environnement Linux sur mesure en partant de zéro. Cette démarche garantit une compréhension totale de l'architecture système, compétence indispensable pour sécuriser efficacement une infrastructure complexe.",
      challenges: [
        {
          question: "Déploiement & Architecture Système - Gestion des partitions & Bootloader",
          answer: "Configuration manuelle du partitionnement des disques et installation rigoureuse de GRUB (le programme d'amorçage chargé de lancer le système d'exploitation) pour mettre en place un Dualboot stable et résilient."
        },
        {
          question: "Déploiement & Architecture Système - Environnement sur mesure (Ricing)",
          answer: "Le Ricing est l'art d'optimiser visuellement et techniquement un système Linux minimaliste. J'ai déployé Hyprland, un gestionnaire de fenêtres en mosaïque qui organise l'écran en une grille stricte, pilotable entièrement au clavier. L'interface est unifiée autour du thème Tokyo Night, garantissant un environnement de travail ergonomique dont je maîtrise chaque ligne de configuration."
        },
        {
          question: "Virtualisation & Environnements Isolés - Laboratoires de test",
          answer: "Utilisation d'Oracle VirtualBox (un hyperviseur permettant d'isoler des machines virtuelles dans un ordinateur physique) pour déployer et casser des systèmes sans risque."
        },
        {
          question: "Virtualisation & Environnements Isolés - Optimisation des ressources",
          answer: "Déploiement de serveurs virtuels minimaux (sans interface graphique, pilotés uniquement en ligne de commande) pour économiser la mémoire vive et configurer des services critiques, comme des accès SSH (protocole de connexion à distance sécurisée et chiffrée), dans des conditions réelles de production."
        }
      ],
      outcomes: [
        "Acquisition d'une autonomie totale en troubleshooting (résolution de pannes) et en administration système avancée (gestion des paquets, des permissions et des processus).",
        "Capacité à configurer, sécuriser et personnaliser un système d'exploitation de bout en bout, validant la pertinence et la rigueur d'un profil DACA."
      ]
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Handle body scroll locking when the drawer is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative bg-offwhite py-32 px-8 md:px-24 xl:pl-40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 relative">

        {/* Sticky Left Column for Text */}
        <div className="w-full md:w-1/3 md:sticky md:top-32 h-fit mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-anthracite tracking-tight mb-6 font-sans">
              Projets & Réalisations
            </h2>
            <p className="text-anthracite/60 leading-relaxed">
              Une sélection d'architectures déployées et de systèmes analysés. Chaque projet est abordé sous le prisme de la robustesse et de la sécurité "By Design".
            </p>
          </motion.div>
        </div>

        {/* Right Column for Project Cards */}
        <div className="w-full md:w-2/3 flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {project.images && project.images.length > 0 && (
                <div className="w-full aspect-video rounded-2xl shadow-xl border border-grid flex items-center justify-center overflow-hidden group relative bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="mt-8">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="font-mono text-indigo-600 text-sm tracking-tight font-bold">
                    {project.subtitle}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {project.logos.map((logo, lIdx) => (
                      <div key={lIdx} className="p-1.5 bg-white border border-grid/60 rounded-md shadow-sm flex items-center justify-center">
                        {logo}
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-anthracite mb-4">
                  {project.title}
                </h3>
                <p className="text-anthracite/70 leading-relaxed">
                  {project.description}
                </p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wider font-mono cursor-pointer"
                  data-interactive
                >
                  Lire le récit du projet <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Slide-out Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 cursor-pointer"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
              className="fixed right-0 top-0 bottom-0 h-full w-full max-w-2xl md:max-w-3xl bg-black text-offwhite border-l border-white/10 z-50 overflow-y-auto flex flex-col p-8 md:p-12 shadow-2xl"
              data-lenis-prevent
            >
              {/* Header inside drawer */}
              <div className="flex justify-between items-start mb-10 pb-6 border-b border-white/10">
                <div>
                  <span className="font-mono text-xs text-indigo-400 font-bold uppercase tracking-wider block mb-1">
                    {selectedProject.subtitle}
                  </span>
                  <h3 className="text-3xl font-bold text-white tracking-tight font-sans">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  aria-label="Fermer"
                  data-interactive
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Story Content */}
              <div className="space-y-10 flex-1">
                {/* Section 1: Contexte & Role */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] text-indigo-400 font-bold bg-indigo-500/10 px-2.5 py-1 rounded-full uppercase tracking-widest">
                      Rôle : {selectedProject.story.role}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Contexte & Récit du Projet</h4>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base font-medium">
                    {selectedProject.story.narrative}
                  </p>
                </div>

                {/* Section 2: Challenges */}
                <div className="border-t border-white/10 pt-8">
                  <h4 className="text-lg font-bold text-white mb-6">Défis Techniques & Solutions</h4>
                  <div className="grid grid-cols-1 gap-6">
                    {selectedProject.story.challenges.map((challenge, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <span className="font-mono text-[10px] text-indigo-400 font-bold uppercase tracking-widest block mb-2">
                          Défi {idx + 1} : {challenge.question}
                        </span>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {challenge.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Outcomes */}
                <div className="border-t border-white/10 pt-8 pb-12">
                  <h4 className="text-lg font-bold text-white mb-4">Bilan & Compétences BUT 2 validées</h4>
                  <ul className="space-y-3">
                    {selectedProject.story.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-white/80 font-medium">
                        <span className="text-indigo-400 font-bold font-mono">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section: Testimonial */}
                {selectedProject.testimonial && (
                  <div className="border-t border-white/10 pt-8 pb-12">
                    <h4 className="text-lg font-bold text-white mb-6">Recommandation du client</h4>
                    <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 text-9xl font-serif text-indigo-500/10 pointer-events-none select-none translate-x-4 -translate-y-12">
                        “
                      </div>
                      <p className="text-white/90 italic leading-relaxed text-sm md:text-base mb-6 relative z-10">
                        "{selectedProject.testimonial.text}"
                      </p>
                      
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3">
                          {selectedProject.testimonial.avatar ? (
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-indigo-500/30">
                              <img 
                                src={selectedProject.testimonial.avatar} 
                                alt={selectedProject.testimonial.author} 
                                className="object-cover w-full h-full"
                              />
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center font-mono text-sm font-bold text-indigo-400">
                              {selectedProject.testimonial.initials}
                            </div>
                          )}
                          <div>
                            <span className="block text-sm font-bold text-white">
                              {selectedProject.testimonial.author}
                            </span>
                            <span className="block text-xs text-white/50">
                              {selectedProject.testimonial.role}
                            </span>
                          </div>
                        </div>

                        {selectedProject.testimonial.instagram && (
                          <a 
                            href={selectedProject.testimonial.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider font-mono cursor-pointer"
                            data-interactive
                          >
                            <InstagramIcon /> Voir son profil Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 4: Images */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="border-t border-white/10 pt-8 pb-12">
                    <h4 className="text-lg font-bold text-white mb-6">Aperçu & Captures</h4>
                    <div className="grid grid-cols-1 gap-6">
                      {selectedProject.images.map((image, idx) => (
                        <div key={idx} className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
                          <img
                            src={image}
                            alt={`Capture d'écran ${idx + 1}`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
