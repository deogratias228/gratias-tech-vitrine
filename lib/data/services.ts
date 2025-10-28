import { Code, Smartphone, Globe, ShieldCheck, TrendingUp, Wrench } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ServiceDetail {
    title: string;
    description: string;
}

export interface ServiceStep {
    number: number;
    title: string;
    description: string;
}

export interface ServiceFaq {
    question: string;
    answer: string;
}

export interface Service {
    name: string;
    slug: string;
    href: string;
    shortDescription: string;
    fullDescription: string;
    icon: LucideIcon;
    meta: {
        title: string;
        description: string;
    };
    highlights: string[];
    details: ServiceDetail[];
    process: ServiceStep[];
    faq: ServiceFaq[];
    cta: {
        text: string;
        link: string;
    };
}

export const services: Service[] = [
    {
        name: "Développement Web Sur Mesure",
        slug: "developpement-web-sur-mesure",
        href: "/services/developpement-web-sur-mesure",
        shortDescription:
            "Conception et développement de sites web et d’applications performantes, adaptées à vos besoins spécifiques.",
        fullDescription:
            "Nous créons des sites web modernes, rapides et évolutifs, conçus sur mesure pour votre entreprise. Notre approche allie performance technique, design soigné et référencement naturel (SEO) afin d’assurer une visibilité durable et une expérience utilisateur optimale.",
        icon: Code,
        meta: {
            title: "Développement Web Sur Mesure | Création de Sites et Applications Professionnels",
            description:
                "Agence experte en développement web sur mesure : création de sites internet, applications, e-commerce et intégrations personnalisées pour entreprises et startups.",
        },
        highlights: [
            "Sites vitrines professionnels",
            "Applications web sur mesure",
            "E-commerce sécurisé et optimisé SEO",
            "Maintenance et évolutivité garanties",
        ],
        details: [
            {
                title: "Technologies modernes et performantes",
                description:
                    "Nous utilisons les frameworks les plus récents (Next.js, Laravel, React...) pour vous offrir rapidité, sécurité et évolutivité.",
            },
            {
                title: "UX/UI Design centré sur vos utilisateurs",
                description:
                    "Chaque interface est pensée pour être intuitive, responsive et alignée avec votre identité de marque.",
            },
            {
                title: "Intégration fluide avec vos outils métiers",
                description:
                    "CRM, ERP, API externes — nous connectons vos solutions pour automatiser et simplifier vos processus internes.",
            },
        ],
        process: [
            { number: 1, title: "Analyse & Stratégie", description: "Nous étudions vos besoins et vos objectifs pour concevoir une solution adaptée." },
            { number: 2, title: "Conception & Design", description: "Prototypage, design UI/UX et validation avant développement." },
            { number: 3, title: "Développement & Tests", description: "Déploiement d’un code propre, optimisé et testé sur tous les appareils." },
            { number: 4, title: "Lancement & Suivi", description: "Mise en ligne et accompagnement continu pour garantir la performance." },
        ],
        faq: [
            {
                question: "Combien de temps faut-il pour développer un site web sur mesure ?",
                answer:
                    "En moyenne entre 3 et 8 semaines selon la complexité du projet et le niveau de personnalisation souhaité.",
            },
            {
                question: "Puis-je modifier mon site moi-même après livraison ?",
                answer:
                    "Oui, nous intégrons un système d’administration simple et formons votre équipe pour une autonomie complète.",
            },
        ],
        cta: {
            text: "Discuter de mon projet web",
            link: "/contact?service=developpement-web-sur-mesure",
        },
    },

    // --- Service WordPress ---
    {
        name: "Sites Web WordPress Clés en Main",
        slug: "solutions-wordpress",
        href: "/services/solutions-wordpress",
        shortDescription:
            "Création de sites WordPress modernes, rapides et faciles à gérer, livrés clés en main pour votre activité.",
        fullDescription:
            "Nos sites WordPress sont conçus pour offrir une présence en ligne professionnelle sans complexité technique. Nous combinons design sur mesure, performances optimisées et sécurité pour vous permettre de gérer facilement votre site, tout en bénéficiant d’une base solide pour le référencement naturel.",
        icon: Globe,
        meta: {
            title: "Création de Sites WordPress Clés en Main | Site Professionnel et Administrable",
            description:
                "Obtenez un site WordPress professionnel, rapide et sécurisé, optimisé SEO et livré prêt à l’emploi. Idéal pour PME, indépendants et portefeuilles.",
        },
        highlights: [
            "Sites vitrines WordPress professionnels",
            "Gestion facile du contenu",
            "Optimisation SEO et performance",
            "Sécurité et mises à jour assurées",
        ],
        details: [
            {
                title: "Installation et configuration personnalisée",
                description:
                    "Nous installons et configurons votre site avec les meilleures pratiques WordPress pour assurer stabilité et sécurité.",
            },
            {
                title: "Design moderne et responsive",
                description:
                    "Chaque site est adapté à votre image et parfaitement lisible sur ordinateur, mobile et tablette.",
            },
            {
                title: "Optimisation SEO intégrée",
                description:
                    "Nous mettons en place les outils nécessaires (Yoast SEO, balises, structure optimisée) pour améliorer votre visibilité sur Google.",
            },
        ],
        process: [
            { number: 1, title: "Choix du design & structure", description: "Nous définissons ensemble la mise en page et les contenus clés du site." },
            { number: 2, title: "Installation & personnalisation", description: "Mise en place du thème, des extensions et des optimisations techniques." },
            { number: 3, title: "Optimisation SEO & tests", description: "Nous optimisons la vitesse, la sécurité et la compatibilité mobile." },
            { number: 4, title: "Livraison & formation", description: "Vous recevez votre site prêt à être utilisé, avec une formation simple à l’appui." },
        ],
        faq: [
            {
                question: "Combien de temps faut-il pour créer un site WordPress ?",
                answer:
                    "En général entre 3 et 10 jours selon le nombre de pages, les contenus et le niveau de personnalisation souhaité.",
            },
            {
                question: "Puis-je gérer le site moi-même sans aide technique ?",
                answer:
                    "Oui ! WordPress est conçu pour être intuitif. Nous vous formons à la mise à jour du contenu et à la gestion du site.",
            },
            {
                question: "Proposez-vous des hébergements ou domaines ?",
                answer:
                    "Nous pouvons vous accompagner pour choisir un hébergeur fiable et configurer votre domaine professionnel.",
            },
        ],
        cta: {
            text: "Créer mon site WordPress",
            link: "/contact?service=solutions-wordpress",
        },
    },

    // --- Service Mobile ---
    {
        name: "Applications Mobiles & PWA",
        slug: "applications-mobiles",
        href: "/services/applications-mobiles",
        shortDescription:
            "Conception et développement d’applications mobiles hybrides et Progressive Web Apps performantes.",
        fullDescription:
            "Nous vous aidons à étendre votre présence au mobile grâce à des applications légères, rapides et accessibles sur tous les appareils. Que ce soit pour un projet d’application native ou une PWA (Progressive Web App), nous garantissons performance, design fluide et expérience utilisateur optimisée.",
        icon: Smartphone,
        meta: {
            title: "Applications Mobiles & PWA | Développement Hybride et Web App Performante",
            description:
                "Créez une application mobile sur mesure ou une PWA accessible sur tous les appareils. Performance, design, et expérience utilisateur au cœur du développement.",
        },
        highlights: [
            "Progressive Web Apps (PWA)",
            "Applications mobiles hybrides (iOS & Android)",
            "Design ergonomique et rapide",
            "Maintenance et suivi continu",
        ],
        details: [
            {
                title: "Technologies cross-platform modernes",
                description:
                    "Nous développons avec React Native, Ionic ou Flutter pour des applications performantes sur tous les appareils.",
            },
            {
                title: "Performance et accessibilité",
                description:
                    "Nos applications sont optimisées pour charger vite, consommer peu de ressources et fonctionner hors ligne si nécessaire.",
            },
            {
                title: "PWA : la flexibilité du web, la puissance du mobile",
                description:
                    "Les Progressive Web Apps combinent la fluidité d’une appli native et la simplicité d’un site web accessible depuis un navigateur.",
            },
        ],
        process: [
            { number: 1, title: "Étude du besoin", description: "Nous analysons vos objectifs et le type d’application le plus adapté à votre audience." },
            { number: 2, title: "Prototypage & design UX/UI", description: "Nous concevons une interface fluide et centrée sur l’utilisateur final." },
            { number: 3, title: "Développement & intégration", description: "Création de l’application, intégration des APIs et tests de performance." },
            { number: 4, title: "Déploiement & suivi", description: "Publication sur le web, Google Play ou App Store, avec suivi post-lancement." },
        ],
        faq: [
            {
                question: "Quelle est la différence entre une application mobile et une PWA ?",
                answer:
                    "Une PWA fonctionne via le navigateur, sans installation, tout en offrant des fonctionnalités proches d’une application native.",
            },
            {
                question: "Peut-on publier l’application sur le Play Store ou App Store ?",
                answer:
                    "Oui, les applications hybrides peuvent être publiées sur les stores ou utilisées directement sur le web selon vos besoins.",
            },
            {
                question: "Quel est le délai moyen pour une application mobile ?",
                answer:
                    "Selon la complexité, comptez entre 4 et 10 semaines pour la conception, le développement et les tests.",
            },
        ],
        cta: {
            text: "Créer mon application mobile",
            link: "/contact?service=applications-mobiles",
        },
    },
];


export const getServiceBySlug = (slug: string): Service | null => {
    return services.find((service) => service.slug === slug) || null;
};
