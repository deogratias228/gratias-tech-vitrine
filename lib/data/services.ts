// /lib/data/services.ts

import { Code, TrendingUp, ShieldCheck } from 'lucide-react';
import { LucideIcon } from 'lucide-react'; // Importez le type pour les icônes

// Interface pour typer chaque service
export interface Service {
    name: string;
    href: string;
    description: string;
    icon: LucideIcon; // Utiliser le type LucideIcon pour les icônes
    details: ServiceDetail[]; // Pour la section détaillée du service
}

// Interface pour les points clés d'un service
export interface ServiceDetail {
    title: string;
    description: string;
}


// Liste complète et détaillée des services
export const services: Service[] = [
    {
        name: "Développement Sur Mesure",
        href: "/services/developpement-sur-mesure",
        description: "Création d'applications web et mobiles personnalisées, conçues pour répondre parfaitement à vos besoins métier uniques, sans les contraintes des solutions standard.",
        icon: Code,
        details: [
            { title: "Architecture Robuste", description: "Conception d'une base solide et scalable pour garantir la performance à long terme." },
            { title: "Expérience Utilisateur (UX)", description: "Interface utilisateur intuitive et agréable pour maximiser l'adoption et la satisfaction." },
            { title: "Intégration Systèmes", description: "Connexion transparente avec vos outils existants (ERP, CRM, API tierces)." },
        ]
    },
    {
        name: "Visibilité Maximale",
        href: "/services/visibilite-maximale",
        description: "Stratégies d'acquisition et d'optimisation pour que votre plateforme atteigne son audience. Nous assurons un référencement (SEO) de pointe et des performances rapides.",
        icon: TrendingUp,
        details: [
            { title: "Audit SEO Complet", description: "Analyse approfondie pour identifier les opportunités de classement sur les moteurs de recherche." },
            { title: "Optimisation de la Vitesse", description: "Réduction des temps de chargement pour un meilleur classement et une meilleure expérience." },
            { title: "Stratégie de Contenu", description: "Planification et production de contenu qui attire et engage votre public cible." },
        ]
    },
    {
        name: "Tranquillité Absolue",
        href: "/services/tranquillite-absolue",
        description: "Maintenance, sécurité et support technique 24/7. Concentrez-vous sur votre business pendant que nous gérons l'infrastructure et la pérennité de votre solution.",
        icon: ShieldCheck,
        details: [
            { title: "Surveillance Proactive", description: "Détection et correction des problèmes avant qu'ils n'impactent vos utilisateurs." },
            { title: "Mises à Jour Régulières", description: "Application des correctifs de sécurité et des mises à jour de framework." },
            { title: "Support Dédié", description: "Accès rapide à nos experts pour toute question ou urgence technique." },
        ]
    },
];

// Liens simplifiés pour la navigation (comme vous les aviez)
export const serviceLinks = services.map(s => ({
    name: s.name,
    href: s.href,
}));