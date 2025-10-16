'use client';

import { Users, Code, Globe, Rocket, CheckCircle } from "lucide-react";
import React from 'react';

const features = [
  {
    icon: <Globe className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Adapté à l'Afrique",
    description: "Des solutions pensées pour les réalités locales : connectivité, simplicité, budget et efficacité.",
    iconBgClass: "bg-gradient-to-br from-orange-500 to-red-600",
  },
  {
    icon: <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Support fiable",
    description: "Contact direct via WhatsApp, mail ou visio. Vous n'êtes jamais seul, même après la livraison.",
    iconBgClass: "bg-gradient-to-br from-sky-500 to-cyan-600",
  },
  {
    icon: <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Livraison rapide",
    description: "Nous livrons vite, sans sacrifier la qualité. Votre site peut être prêt en quelques jours seulement.",
    iconBgClass: "bg-gradient-to-br from-rose-500 to-amber-600",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative py-8 md:pt-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header de la section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir <span className="bg-blue-500 bg-clip-text text-transparent">Gratias Technology</span> ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nous ne nous contentons pas de coder, nous construisons un partenariat durable.
          </p>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-full p-3 lg:p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                <div className={`h-full w-full ${feature.iconBgClass} rounded-xl`}></div>
              </div>

              <div className="relative z-10">
                {/* Icône avec fond en gradient */}
                <div className="flex items-center gap-x-4">
                  <div className={`p-4 rounded-full inline-flex items-center justify-center mb-6 ${feature.iconBgClass}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text- lg:text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                </div>

                {/* Titre et description */}
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}