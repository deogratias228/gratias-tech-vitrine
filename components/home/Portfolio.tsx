'use client';

import React from 'react';
import { ArrowUpRight } from "lucide-react";
import Image from 'next/image';

const projects = [
    {
        title: "Espoir Médical",
        description: "Développement d'une application métier sur mesure pour la gestion des stocks, des ventes et des rapports pour un cabinet médical.",
        imageUrl: "/images/home/portfolio/espoir-medical.png", // Assurez-vous d'avoir cette image dans votre dossier /public/images
        link: "/portfolio/espoir-medical",
    },
    {
        title: "Boutique en ligne 'Le Marché'",
        description: "Création d'une plateforme e-commerce complète avec paiements mobiles sécurisés pour une boutique de produits locaux à Lomé.",
        imageUrl: "/home/images/ecommerce-togo.jpg",
        link: "/portfolio/le-marche",
    },
    {
        title: "Site vitrine 'L'Artisan du Bois'",
        description: "Conception d'un site vitrine moderne et performant pour présenter les créations et le savoir-faire d'un artisan local.",
        imageUrl: "/home/images/artisan-site.jpg",
        link: "/portfolio/l-artisan-du-bois",
    },
];

export default function PortfolioSection() {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header de la section */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nos dernières réalisations
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Chaque projet est une histoire de réussite. Découvrez comment nous avons aidé d'autres entreprises à se digitaliser.
                    </p>
                </div>

                {/* Grille des projets */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative aspect-video">
                                {/* Utilisez le composant Next.js Image pour de meilleures performances */}
                                <Image
                                    src={project.imageUrl}
                                    alt={`Image du projet ${project.title}`}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Overlay avec les détails */}
                            <a href={project.link} className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-end p-6 md:p-8 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                <div className="text-white">
                                    <h3 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h3>
                                    <p className="text-gray-300 mb-4 text-sm leading-snug">{project.description}</p>
                                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400">
                                        Voir le projet <ArrowUpRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bouton pour le portfolio complet */}
                <div className="text-center mt-16">
                    <a
                        href="/portfolio"
                        className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Voir toutes nos réalisations
                    </a>
                </div>
            </div>
        </section>
    );
}