"use client";
import { useState } from "react";

const services = [
    {
        id: 1,
        title: 'Page de lancement',
        description: 'Captez un max de prospects grâce à une page optimisée pour la conversion.',
        details: [
            'Livraison en 7 jours ouvrés.',
            'Design orienté conversion.',
            'Intégration facile et rapide.',
            'SEO de base inclus.',
            'Support personnalisé après livraison.',
        ],
        message: 'Bonjour, votre offre sur la création de Page de lancement m\'intéresse, peut-on en discuter ?'
    },
    {
        id: 2,
        title: 'Site vitrine Professionnel',
        description: 'Faites une excellente première impression avec un site à votre image.',
        details: [
            'Design moderne et élégant.',
            '100% responsive et mobile-friendly.',
            'Maintenance et mises à jour faciles.',
            'Optimisation SEO incluse.',
            'Formation offerte à l’utilisation.',
        ],
        message: 'Bonjour, votre offre sur la création de Site vitrine Pro m\'intéresse, peut-on en discuter ?'
    },
    {
        id: 3,
        title: 'Site E-commerce',
        description: 'Lancez votre boutique en ligne : simple, sûre et prête à vendre.',
        details: [
            'Plateforme sécurisée.',
            'Paiements intégrés (Stripe, PayPal).',
            'Gestion produits & commandes simplifiée.',
            'Optimisation SEO avancée.',
            'Support technique prioritaire.',
        ],
        message: 'Bonjour, votre offre sur la création de Site E-commerce m\'intéresse, peut-on en discuter ?'
    },
    {
        id: 4,
        title: 'Refonte de Site Web',
        description: 'Transformez votre site existant pour convertir plus et séduire vos visiteurs.',
        details: [
            'Analyse complète et audit UX/UI.',
            'Modernisation graphique et technique.',
            'Amélioration du référencement.',
            'Intégration des dernières technologies.',
            'Suivi post-refonte personnalisé.',
        ],
        message: 'Bonjour, votre offre sur la Refonte de Site web m\'intéresse, peut-on en discuter ?'
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

    const handleClickWhatsapp = (message: string) => {
        const number = '22891902824';
        const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="w-full px-4 md:px-12 mb-8">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-10" id="services">
                Ce que nous vous proposons
            </h2>

            {/* Grille des services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {services.map(service => (
                    <div
                        key={service.id}
                        className="flex flex-col justify-between border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-lg cursor-pointer transition"
                        onClick={() => handleOpenModal(service)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleOpenModal(service) }}
                    >
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-semibold text-[#2563eb] mb-3 text-center">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 text-center text-sm md:text-lg">
                                {service.description}
                            </p>
                        </div>

                        <button
                            type="button"
                            className="mt-6 w-full bg-green-500 hover:font-semibold border border-green-700 text-white rounded-xl px-4 py-2 text-sm hover:bg-green-700 transition"
                            onClick={(e) => {
                                e.stopPropagation(); // éviter ouverture modal
                                handleClickWhatsapp(service.message);
                            }}
                            aria-label={`Contacter pour le service ${service.title}`}
                        >
                            Je veux ce service
                        </button>
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
                    onClick={(e) => {
                        e.stopPropagation();
                        handleCloseModal();
                    }}
                >
                    <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
                            aria-label="Fermer les détails du service"
                        >
                            ✕
                        </button>

                        <h3 id="modal-title" className="text-3xl font-bold text-accent mb-4 text-center">
                            {selectedService.title}
                        </h3>

                        <p className="mb-4 text-gray-800">{selectedService.description}</p>

                        <ul className="mb-6 list-disc list-inside text-gray-700 space-y-1">
                            {selectedService.details.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>

                        <p className="mb-4 text-gray-500 text-sm text-center">
                            Vous cherchez un partenaire impliqué, qui mise sur la réussite de votre projet ? Commençons cette aventure ensemble.
                        </p>

                        <button
                            className="w-full bg-accent hover:bg-[#1e40af] text-white rounded-lg py-3 font-semibold transition"
                            onClick={() => handleClickWhatsapp(selectedService.message)}
                        >
                            Demander ce service sur WhatsApp
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
