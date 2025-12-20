// /lib/data/projects.ts
export interface Project {
    id: number;
    slug: string;
    title: string;
    category: string;
    shortDescription: string; // Pour la carte
    image: string;
    technologies: string[];
    keyFeatures: string[]; // 3-4 features max pour la carte
    icon: string; // Nom de l'icone Lucide
    color: string;
    status: 'completed' | 'in-progress' | 'maintenance';
    client?: string;
    duration: string;
    year: number;
    demoUrl?: string;
    githubUrl?: string;
}

import {
    Package,
    Users,
    Globe,
    ShoppingCart,
    MessageCircle,
} from "lucide-react";

export const projects: Project[] = [
    {
        id: 0,
        slug: "espoir-ecommerce",
        title: "Espoir E-Commerce",
        category: "Site E-commerce",
        shortDescription:
            "Site e-commerce orienté conversion avec commande directe via WhatsApp. Les clients ajoutent des produits au panier puis finalisent leur commande par discussion.",
        image:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='espoir' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2316A34A'/%3E%3Cstop offset='100%25' stop-color='%23065F46'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23espoir)'/%3E%3C/svg%3E",
        technologies: ["Laravel", "Blade", "TailwindCSS", "JavaScript"],
        keyFeatures: [
            "Panier dynamique",
            "Commande via WhatsApp",
            "Catalogue sport & médical",
        ],
        icon: "MessageCircle",
        color: "green",
        status: "completed",
        client: "Espoir Médical",
        duration: "2 mois",
        year: 2025,
        demoUrl: "https://espoir-medical.com",
    },

    {
        id: 1,
        slug: "stockzoom-inventory-management",
        title: "StockZoom",
        category: "Application Web",
        shortDescription:
            "Solution complète de gestion de stock avec analytics en temps réel, pensée pour les PME africaines.",
        image:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%234F46E5'/%3E%3C/svg%3E",
        technologies: ["Laravel", "Blade", "TailwindCSS", "MySQL"],
        keyFeatures: [
            "Gestion temps réel",
            "Tableaux de bord",
            "Multi-utilisateurs",
        ],
        icon: "Package",
        color: "blue",
        status: "completed",
        duration: "3 mois",
        year: 2025,
        githubUrl: "https://github.com/deogratias228/stock-zoom",
    },

    {
        id: 2,
        slug: "quickcv-generator",
        title: "QuickCV Generator",
        category: "Outil Web",
        shortDescription:
            "Générateur de CV modernes avec export PDF rapide et interface intuitive.",
        image:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%2310B981'/%3E%3C/svg%3E",
        technologies: ["HTML", "CSS", "JavaScript"],
        keyFeatures: [
            "Templates modernes",
            "Export PDF",
            "Rapide et simple",
        ],
        icon: "Users",
        color: "emerald",
        status: "completed",
        duration: "1 mois",
        year: 2025,
        demoUrl: "https://quickcv.gratias.com",
        githubUrl: "https://github.com/deogratias228/quickcv-generator",
    },

    {
        id: 3,
        slug: "gratias-technology-website",
        title: "Gratias Technology",
        category: "Site vitrine",
        shortDescription:
            "Site vitrine moderne présentant les services, projets et la vision de l'entreprise.",
        image:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%236366F1'/%3E%3C/svg%3E",
        technologies: ["Next.js", "TypeScript", "TailwindCSS"],
        keyFeatures: [
            "Design premium",
            "SEO optimisé",
            "Performance élevée",
        ],
        icon: "Globe",
        color: "indigo",
        status: "completed",
        duration: "1 mois",
        year: 2025,
        demoUrl: "https://deowoblesse.tech",
    },

    {
        id: 4,
        slug: "ecommerce-dashboard",
        title: "E-commerce Dashboard",
        category: "Application Web",
        shortDescription:
            "Dashboard pour piloter une activité e-commerce : ventes, commandes et paiements.",
        image:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%2306B6D4'/%3E%3C/svg%3E",
        technologies: ["React", "Node.js", "PostgreSQL"],
        keyFeatures: [
            "Suivi des ventes",
            "Gestion commandes",
            "Statistiques",
        ],
        icon: "ShoppingCart",
        color: "cyan",
        status: "in-progress",
        duration: "En cours",
        year: 2025,
    },
    // {
    //     id: 6,
    //     slug: "booking-system",
    //     title: "Système de Réservation",
    //     category: "Application Web",
    //     shortDescription: "Plateforme de réservation en ligne pour services professionnels.",
    //     image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='booking' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310B981'/%3E%3Cstop offset='100%25' style='stop-color:%2334D399'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23booking)'/%3E%3Cg fill='white' opacity='0.2'%3E%3Crect x='50' y='50' width='300' height='200' rx='12'/%3E%3C/g%3E%3Cg fill='white' opacity='0.4'%3E%3Crect x='70' y='80' width='40' height='30' rx='4'/%3E%3Crect x='120' y='80' width='40' height='30' rx='4'/%3E%3Crect x='170' y='80' width='40' height='30' rx='4'/%3E%3Crect x='220' y='80' width='40' height='30' rx='4'/%3E%3Crect x='270' y='80' width='40' height='30' rx='4'/%3E%3Crect x='320' y='80' width='40' height='30' rx='4'/%3E%3Cg opacity='0.8'%3E%3Crect x='70' y='130' width='60' height='40' rx='6'/%3E%3Crect x='140' y='150' width='80' height='40' rx='6'/%3E%3Crect x='230' y='130' width='60' height='40' rx='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    //     technologies: ["Vue.js", "Laravel", "MySQL", "Pusher"],
    //     keyFeatures: ["Calendrier interactif", "Notifications temps réel", "Multi-services"],
    //     icon: "Calendar",
    //     color: "from-emerald-500 to-green-400",
    //     status: "completed",
    //     client: "Cabinet médical",
    //     duration: "2 mois",
    //     year: 2024,
    //     demoUrl: "https://demo-booking.com"
    // },
    // {
    //     id: 7,
    //     slug: "finance-tracker",
    //     title: "Finance Tracker",
    //     category: "Application Mobile",
    //     shortDescription: "Application mobile pour suivre ses finances personnelles.",
    //     image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='finance' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F59E0B'/%3E%3Cstop offset='100%25' style='stop-color:%23D97706'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23finance)'/%3E%3Cg fill='white' opacity='0.2'%3E%3Crect x='150' y='30' width='100' height='240' rx='20'/%3E%3C/g%3E%3Cg fill='white' opacity='0.4'%3E%3Crect x='170' y='60' width='60' height='8' rx='4'/%3E%3Crect x='170' y='80' width='40' height='6' rx='3'/%3E%3Cg opacity='0.8'%3E%3Ccircle cx='200' cy='120' r='20'/%3E%3Crect x='170' y='160' width='60' height='6' rx='3'/%3E%3Crect x='170' y='180' width='45' height='6' rx='3'/%3E%3Crect x='170' y='200' width='55' height='6' rx='3'/%3E%3Crect x='170' y='220' width='50' height='6' rx='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    //     technologies: ["React Native", "Firebase", "Stripe API", "Chart.js"],
    //     keyFeatures: ["Suivi dépenses", "Graphiques", "Notifications"],
    //     icon: "TrendingUp",
    //     color: "from-yellow-500 to-orange-600",
    //     status: "in-progress",
    //     duration: "3 mois",
    //     year: 2025
    // },
    // {
    //     id: 8,
    //     slug: "blog-cms",
    //     title: "Blog CMS",
    //     category: "CMS",
    //     shortDescription: "Système de gestion de contenu sur mesure pour blogs professionnels.",
    //     image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='blog' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236B7280'/%3E%3Cstop offset='100%25' style='stop-color:%234B5563'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23blog)'/%3E%3Cg fill='white' opacity='0.2'%3E%3Crect x='50' y='50' width='300' height='200' rx='8'/%3E%3C/g%3E%3Cg fill='white' opacity='0.4'%3E%3Crect x='70' y='80' width='200' height='12' rx='6'/%3E%3Crect x='70' y='110' width='150' height='8' rx='4'/%3E%3Crect x='70' y='130' width='180' height='8' rx='4'/%3E%3Crect x='70' y='150' width='160' height='8' rx='4'/%3E%3Crect x='70' y='180' width='120' height='20' rx='4'/%3E%3Crect x='200' y='180' width='120' height='20' rx='4'/%3E%3C/g%3E%3C/svg%3E",
    //     technologies: ["Next.js", "Sanity", "TypeScript", "Vercel"],
    //     keyFeatures: ["Éditeur WYSIWYG", "SEO intégré", "Multi-auteurs"],
    //     icon: "FileText",
    //     color: "from-gray-600 to-gray-500",
    //     status: "maintenance",
    //     client: "Magazine en ligne",
    //     duration: "2 mois",
    //     year: 2024,
    //     githubUrl: "https://github.com/gratias-technology/blog-cms"
    // },
    // {
    //     id: 9,
    //     slug: "restaurant-pos",
    //     title: "Restaurant POS",
    //     category: "Application Web",
    //     shortDescription: "Point de vente moderne pour restaurants avec gestion des commandes.",
    //     image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='restaurant' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23DC2626'/%3E%3Cstop offset='100%25' style='stop-color:%23B91C1C'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23restaurant)'/%3E%3Cg fill='white' opacity='0.2'%3E%3Crect x='20' y='40' width='150' height='220' rx='8'/%3E%3Crect x='190' y='40' width='180' height='120' rx='8'/%3E%3Crect x='190' y='180' width='180' height='80' rx='8'/%3E%3C/g%3E%3Cg fill='white' opacity='0.4'%3E%3Crect x='40' y='70' width='110' height='60' rx='6'/%3E%3Crect x='40' y='140' width='110' height='60' rx='6'/%3E%3Crect x='40' y='210' width='110' height='30' rx='6'/%3E%3Cg opacity='0.8'%3E%3Crect x='210' y='70' width='60' height='60' rx='8'/%3E%3Crect x='280' y='70' width='60' height='60' rx='8'/%3E%3Crect x='210' y='200' width='140' height='30' rx='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    //     technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    //     keyFeatures: ["Interface tactile", "Gestion tables", "Facturation"],
    //     icon: "Utensils",
    //     color: "from-red-600 to-red-700",
    //     status: "completed",
    //     client: "Chaîne de restaurants",
    //     duration: "3 mois",
    //     year: 2024
    // },
    // {
    //     id: 10,
    //     slug: "learning-platform",
    //     title: "Plateforme E-learning",
    //     category: "Application Web",
    //     shortDescription: "Plateforme d'apprentissage en ligne avec cours vidéo et quiz interactifs.",
    //     image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='learning' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%235B21B6'/%3E%3Cstop offset='100%25' style='stop-color:%237C3AED'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23learning)'/%3E%3Cg fill='white' opacity='0.2'%3E%3Crect x='50' y='60' width='300' height='180' rx='12'/%3E%3C/g%3E%3Cg fill='white' opacity='0.4'%3E%3Crect x='80' y='100' width='240' height='100' rx='8'/%3E%3Cg opacity='0.8'%3E%3Cpolygon points='150,130 150,170 180,150'/%3E%3Crect x='80' y='220' width='60' height='8' rx='4'/%3E%3Crect x='150' y='220' width='80' height='8' rx='4'/%3E%3Crect x='240' y='220' width='80' height='8' rx='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    //     technologies: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    //     keyFeatures: ["Vidéos HD", "Quiz interactifs", "Suivi progression"],
    //     icon: "BookOpen",
    //     color: "from-violet-700 to-purple-600",
    //     status: "in-progress",
    //     client: "Institut de formation",
    //     duration: "5 mois",
    //     year: 2025
    // }
];

export const getProjectBySlug = (slug: string): Project | null => {
    return projects.find(project => project.slug === slug) || null;
};