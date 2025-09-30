// /lib/data/posts.ts

import { Calendar, Clock, User, TrendingUp, Code, Lightbulb, Package, Users } from 'lucide-react';

// Interfaces pour un typage plus strict
export interface Post {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    categoryName: string;
    author: string;
    date: string;
    readTime: string;
    tags: string[];
    slug: string; // <-- Rendre le slug obligatoire
    content?: string; // <-- Ajouter la propriété content (optionnel si géré séparément)
}

export interface Category {
    id: string;
    name: string;
    count: number;
}

// Données des articles (les images restent en SVG pour l'exemple)
export const posts: Post[] = [
    {
        id: 2,
        title: "Guide complet pour optimiser les performances React",
        excerpt: "Techniques avancées pour améliorer les performances de vos applications React : lazy loading, memoization et optimisations bundle.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Cdefs%3E%3ClinearGradient id='react' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2360A5FA'/%3E%3Cstop offset='100%25' style='stop-color:%233B82F6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23react)'/%3E%3Cg fill='white' opacity='0.2'%3E%3Ccircle cx='200' cy='125' r='50' stroke='white' stroke-width='2' fill='none'/%3E%3Cellipse cx='200' cy='125' rx='80' ry='30' stroke='white' stroke-width='2' fill='none'/%3E%3Cellipse cx='200' cy='125' rx='80' ry='30' stroke='white' stroke-width='2' fill='none' transform='rotate(60 200 125)'/%3E%3Cellipse cx='200' cy='125' rx='80' ry='30' stroke='white' stroke-width='2' fill='none' transform='rotate(120 200 125)'/%3E%3C/g%3E%3C/svg%3E",
        category: "web-dev",
        categoryName: "Développement Web",
        author: "Déo Gratias",
        date: "12 Sept 2025",
        readTime: "12 min",
        tags: ["React", "Performance", "JavaScript"],
        slug: "guide-complet-pour-optimiser-les-performances-react", // <-- Correction du slug pour l'URL
    },
    // ... (Ajoutez le slug et le content pour les autres posts de la même manière)
    {
        id: 3,
        title: "MongoDB vs PostgreSQL : Quel choix en 2025 ?",
        excerpt: "Comparaison détaillée entre ces deux systèmes de base de données populaires pour vous aider à faire le bon choix selon votre projet.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Cdefs%3E%3ClinearGradient id='database' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236366F1'/%3E%3Cstop offset='100%25' style='stop-color:%234F46E5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23database)'/%3E%3Cg fill='white' opacity='0.2'%3E%3Crect x='50' y='60' width='120' height='130' rx='8'/%3E%3Crect x='230' y='60' width='120' height='130' rx='8'/%3E%3C/g%3E%3Cg fill='white' opacity='0.3'%3E%3Crect x='70' y='80' width='80' height='8' rx='4'/%3E%3Crect x='70' y='100' width='60' height='8' rx='4'/%3E%3Crect x='70' y='120' width='80' height='8' rx='4'/%3E%3Crect x='250' y='80' width='80' height='8' rx='4'/%3E%3Crect x='250' y='100' width='60' height='8' rx='4'/%3E%3Crect x='250' y='120' width='80' height='8' rx='4'/%3E%3C/g%3E%3C/svg%3E",
        category: "web-dev",
        categoryName: "Développement Web",
        author: "Déo Gratias",
        date: "10 Sept 2025",
        readTime: "10 min",
        tags: ["MongoDB", "PostgreSQL", "Database"],
        slug: "mongodb-vs-postgresql-quel-choix-en-2025",
        content: "Le choix entre MongoDB et PostgreSQL dépend de la nature de votre projet. PostgreSQL, une base de données relationnelle, offre une grande fiabilité, tandis que MongoDB, NoSQL, offre une flexibilité sans schéma. Voici l'analyse..."
    },
    {
        id: 4,
        title: "L'IA générative dans le développement logiciel",
        excerpt: "Comment les outils d'IA comme GitHub Copilot et ChatGPT transforment la façon dont nous développons des applications.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Cdefs%3E%3ClinearGradient id='ai' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232563EB'/%3E%3Cstop offset='100%25' style='stop-color:%231D4ED8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23ai)'/%3E%3Cg fill='white' opacity='0.2'%3E%3Ccircle cx='200' cy='125' r='60'/%3E%3Ccircle cx='120' cy='80' r='20'/%3E%3Ccircle cx='280' cy='170' r='25'/%3E%3Ccircle cx='100' cy='180' r='15'/%3E%3Ccircle cx='320' cy='60' r='18'/%3E%3C/g%3E%3Cg stroke='white' stroke-width='2' fill='none' opacity='0.3'%3E%3Cline x1='140' y1='90' x2='170' y2='110'/%3E%3Cline x1='230' y1='110' x2='260' y2='150'/%3E%3Cline x1='170' y1='160' x2='120' y2='170'/%3E%3Cline x1='240' y1='140' x2='300' y2='80'/%3E%3C/g%3E%3C/svg%3E",
        category: "tech-trends",
        categoryName: "Tendances Tech",
        author: "Déo Gratias",
        date: "8 Sept 2025",
        readTime: "15 min",
        tags: ["IA", "GitHub Copilot", "Productivité"],
        slug: "ia-generative-dans-le-developpement-logiciel",
    },
    {
        id: 5,
        title: "Créer une API REST avec Node.js et Express",
        excerpt: "Tutoriel step-by-step pour construire une API REST robuste avec authentification JWT et validation des données.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Cdefs%3E%3ClinearGradient id='api' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231E40AF'/%3E%3Cstop offset='100%25' style='stop-color:%231E3A8A'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23api)'/%3E%3Cg fill='white' opacity='0.4'%3E%3Crect x='70' y='70' width='20' height='20' rx='4'/%3E%3Crect x='100' y='70' width='60' height='8' rx='4'/%3E%3Crect x='70' y='100' width='20' height='20' rx='4'/%3E%3Crect x='100' y='100' width='80' height='8' rx='4'/%3E%3Crect x='70' y='130' width='20' height='20' rx='4'/%3E%3Crect x='100' y='130' width='70' height='8' rx='4'/%3E%3Crect x='70' y='160' width='20' height='20' rx='4'/%3E%3Crect x='100' y='160' width='90' height='8' rx='4'/%3E%3C/g%3E%3C/svg%3E",
        category: "tutorials",
        categoryName: "Tutoriels",
        author: "Déo Gratias",
        date: "5 Sept 2025",
        readTime: "20 min",
        tags: ["Node.js", "Express", "API", "JWT"],
        slug: "creer-une-api-rest-avec-nodejs-et-express",
    },
    {
        id: 6,
        title: "CSS Grid vs Flexbox : Guide pratique 2025",
        excerpt: "Quand utiliser CSS Grid ou Flexbox ? Exemples pratiques et cas d'usage pour maîtriser ces deux systèmes de layout.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Cdefs%3E%3ClinearGradient id='css' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233B82F6'/%3E%3Cstop offset='100%25' style='stop-color:%232563EB'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23css)'/%3E%3Cg fill='white' opacity='0.2'%3E%3Crect x='40' y='40' width='80' height='60' rx='4'/%3E%3Crect x='140' y='40' width='80' height='60' rx='4'/%3E%3Crect x='240' y='40' width='80' height='60' rx='4'/%3E%3Crect x='40' y='120' width='180' height='60' rx='4'/%3E%3Crect x='240' y='120' width='80' height='60' rx='4'/%3E%3C/g%3E%3C/svg%3E",
        category: "tutorials",
        categoryName: "Tutoriels",
        author: "Déo Gratias",
        date: "2 Sept 2025",
        readTime: "8 min",
        tags: ["CSS", "Grid", "Flexbox", "Layout"],
        slug: "css-grid-vs-flexbox-guide-pratique-2025",
    },
    {
        id: 7,
        title: "Optimiser votre SEO avec Next.js",
        excerpt: "Les meilleures pratiques pour un référencement optimal sur Next.js, incluant le rendu côté serveur et les sitemaps dynamiques.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Cdefs%3E%3ClinearGradient id='seo' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236B7280'/%3E%3Cstop offset='100%25' style='stop-color:%234B5563'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23seo)'/%3E%3Cg fill='white' opacity='0.2'%3E%3Cpath d='M120,80 Q100,100 120,120 T160,160 Q180,180 200,160 T240,120 Q260,100 240,80 T200,40 Q180,20 160,40 Z'/%3E%3Ccircle cx='200' cy='125' r='25' fill='white' opacity='0.3'/%3E%3Cpath d='M180,110 L220,110 M180,140 L220,140' stroke='white' stroke-width='3' stroke-linecap='round' opacity='0.4'/%3E%3C/g%3E%3C/svg%3E",
        category: "web-dev",
        categoryName: "Développement Web",
        author: "Déo Gratias",
        date: "25 Août 2025",
        readTime: "9 min",
        tags: ["Next.js", "SEO", "Performance"],
        slug: "optimiser-votre-seo-avec-nextjs",
        },
    {
        id: 8,
        title: "Les microservices avec NestJS",
        excerpt: "Comment architecturer des applications d'entreprise en utilisant l'approche des microservices avec le framework NestJS.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Cdefs%3E%3ClinearGradient id='nestjs' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23EC4899'/%3E%3Cstop offset='100%25' style='stop-color:%23DB2777'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23nestjs)'/%3E%3Cg fill='white' opacity='0.2'%3E%3Ccircle cx='100' cy='125' r='20'/%3E%3Ccircle cx='200' cy='125' r='20'/%3E%3Ccircle cx='300' cy='125' r='20'/%3E%3Cline x1='120' y1='125' x2='180' y2='125' stroke='white' stroke-width='4'/%3E%3Cline x1='220' y1='125' x2='280' y2='125' stroke='white' stroke-width='4'/%3E%3C/g%3E%3C/svg%3E",
        category: "web-dev",
        categoryName: "Développement Web",
        author: "Déo Gratias",
        date: "20 Août 2025",
        readTime: "18 min",
        tags: ["NestJS", "Microservices", "TypeScript"],
        slug: "les-microservices-avec-nestjs",
    }
];

// Article vedette (le premier du tableau pour des raisons de simplicité)
export const featuredPost = posts[0];

// Fonction utilitaire pour trouver un post par son slug
export const getPostBySlug = (slug: string) => {
    return posts.find(post => post.slug === slug);
};

// Fonction pour calculer dynamiquement les catégories
export const getCategories = () => {
    const categoryMap = posts.reduce((acc, post) => {
        if (acc[post.category]) {
            acc[post.category].count += 1;
        } else {
            acc[post.category] = {
                id: post.category,
                name: post.categoryName,
                count: 1
            };
        }
        return acc;
    }, {} as Record<string, Category>);

    const dynamicCategories = Object.values(categoryMap);

    const allCategory = {
        id: 'all',
        name: 'Tous les articles',
        count: posts.length,
    };

    return [allCategory, ...dynamicCategories];
};