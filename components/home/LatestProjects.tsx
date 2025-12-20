"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
    Package,
    Users,
    Calendar,
    Globe,
    ArrowRight,
    Code,
} from "lucide-react";

const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const headerLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const headerRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const gridVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function LatestProjects() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const projects = [
        {
            id: 1,
            slug: "espoir-ecommerce",
            title: "Espoir E-Commerce",
            category: "Plateforme E-commerce",
            image:
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='primary' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23059669'/%3E%3Cstop offset='100%25' stop-color='%2310B981'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23primary)'/%3E%3Cg fill='white' opacity='0.15'%3E%3Crect x='40' y='60' width='320' height='24' rx='6'/%3E%3Crect x='40' y='110' width='260' height='20' rx='6'/%3E%3Crect x='40' y='160' width='300' height='20' rx='6'/%3E%3C/g%3E%3C/svg%3E",
            icon: Code,
            highlight: true,
        },
        {
            id: 2,
            slug: "stockzoom",
            title: "StockZoom",
            category: "Application Web",
            image:
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%237C3AED'/%3E%3C/svg%3E",
            icon: Package,
        },
        {
            id: 3,
            slug: "quickcv",
            title: "QuickCV Generator",
            category: "Outil Web",
            image:
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%2306B6D4'/%3E%3C/svg%3E",
            icon: Users,
        },
        {
            id: 4,
            slug: "gratias-technology",
            title: "Gratias Technology",
            category: "Site vitrine",
            image:
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%236366F1'/%3E%3C/svg%3E",
            icon: Globe,
        },
    ];

    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative py-10 md:py-20 bg-gray-50 dark:bg-gray-900"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <motion.div variants={headerLeft}>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Nos Dernières Réalisations
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Des projets concrets, pensés pour l’impact et la performance.
                        </p>
                    </motion.div>

                    <motion.a
                        variants={headerRight}
                        whileHover={{ scale: 1.05 }}
                        href="/portfolio"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors"
                    >
                        Voir tous les projets
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </div>

                {/* Grid */}
                <motion.div
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {projects.map((project) => {
                        const Icon = project.icon;

                        return (
                            <motion.div
                                key={project.id}
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                className={`relative group rounded-xl overflow-hidden border border-gray-200 shadow cursor-pointer transition-shadow bg-white dark:bg-gray-800`}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                onClick={() =>
                                    (window.location.href = `/portfolio/${project.slug}`)
                                }
                            >
                                <div className="relative h-24 md:h-44 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-3 md:p-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                                        <Icon className="w-4 h-4" />
                                        {project.category}
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </motion.section>
    );
}
