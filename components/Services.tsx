"use client";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Développement Web & Mobile",
    description:
      "Sites vitrines, e-commerce, applications mobiles et plateformes SaaS. Des solutions modernes, sécurisées et évolutives.",
    details: [
      "Sites vitrines & e-commerce",
      "Applications mobiles (iOS & Android)",
      "Plateformes SaaS sur-mesure",
      "Performance & sécurité garanties",
    ],
  },
  {
    id: 2,
    title: "Design & Expérience Utilisateur",
    description:
      "Un design qui attire, une ergonomie qui convertit. Nous créons des expériences mémorables pour vos utilisateurs.",
    details: [
      "Identité visuelle & branding",
      "UI/UX orientée conversion",
      "Supports visuels professionnels",
      "Design moderne et responsive",
    ],
  },
  {
    id: 3,
    title: "Marketing Digital & SEO",
    description:
      "Boostez votre visibilité et attirez vos futurs clients grâce à une stratégie digitale bien pensée.",
    details: [
      "Référencement naturel (SEO)",
      "Campagnes publicitaires (Google, Meta)",
      "Stratégies réseaux sociaux",
      "Création de contenus optimisés",
    ],
  },
  {
    id: 4,
    title: "Conseil & Transformation Digitale",
    description:
      "Nous vous accompagnons dans la digitalisation de votre activité pour plus d’efficacité et de croissance.",
    details: [
      "Audit digital complet",
      "Accompagnement stratégique",
      "Digitalisation des process",
      "Formations sur mesure",
    ],
  },
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleOpenModal = (service: typeof services[0]) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="w-full px-4 md:px-12 mb-16 pt-16">
      <h2
        className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        id="services"
      >
        Nos Domaines d’Expertise
      </h2>

      {/* Grille des services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur rounded-xl p-6 shadow-md hover:shadow-xl cursor-pointer transition"
            onClick={() => handleOpenModal(service)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleOpenModal(service);
            }}
          >
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-400 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center text-sm md:text-base">
                {service.description}
              </p>
            </div>

            {/* <button
              type="button"
              className="mt-6 w-full bg-gray-600 hover:bg-gray-700 text-white rounded-xl px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg transition"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedService(service);
                setModalOpen(true);
              }}
              aria-label={`Découvrir le service ${service.title}`}
            >
              En savoir plus
            </button> */}
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedService && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-8 relative shadow-xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
              aria-label="Fermer"
            >
              ✕
            </button>

            <h3
              id="modal-title"
              className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-4 text-center"
            >
              {selectedService.title}
            </h3>

            <p className="mb-4 text-gray-800 dark:text-gray-300">
              {selectedService.description}
            </p>

            <ul className="mb-6 list-disc list-inside text-gray-700 dark:text-gray-400 space-y-1">
              {selectedService.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="mb-6 text-gray-500 dark:text-gray-400 text-sm text-center">
              Chez <span className="font-semibold text-gray-600">Gratias Technology</span>, nous
              transformons vos idées en solutions digitales concrètes et durables.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold transition shadow-md hover:shadow-lg text-center"
              >
                Demander un devis
              </a>
              <a
                href="/contact"
                className="w-full bg-gray-300 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-gray-900 dark:text-gray-200 rounded-lg py-3 font-medium transition text-center"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
