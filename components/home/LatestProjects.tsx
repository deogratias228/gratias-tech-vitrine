"use client";
import { useState } from 'react';
import { Package, Users, Calendar, Globe, ArrowRight, Code } from 'lucide-react';
import Image from 'next/image';

const LatestProjects = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const projects = [
        {
            id: 1,
            slug: 'stockzoom-inventory-management',
            title: "StockZoom",
            category: "Application Web",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='stockzoom' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234F46E5'/%3E%3Cstop offset='100%25' style='stop-color:%237C3AED'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23stockzoom)'/%3E%3Cg fill='white' opacity='0.1'%3E%3Crect x='20' y='40' width='360' height='20' rx='4'/%3E%3Crect x='20' y='80' width='280' height='20' rx='4'/%3E%3Crect x='20' y='120' width='320' height='20' rx='4'/%3E%3Crect x='20' y='160' width='240' height='20' rx='4'/%3E%3Crect x='20' y='200' width='300' height='20' rx='4'/%3E%3C/g%3E%3Cg fill='white' opacity='0.3'%3E%3Ccircle cx='60' cy='250' r='8'/%3E%3Ccircle cx='100' cy='240' r='8'/%3E%3Ccircle cx='140' cy='245' r='8'/%3E%3Ccircle cx='180' cy='235' r='8'/%3E%3Ccircle cx='220' cy='250' r='8'/%3E%3C/g%3E%3C/svg%3E",
            icon: Package,
        },
        {
            id: 2,
            slug: 'quickcv-generator',
            title: "QuickCV Generator",
            category: "Outil Web",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='quickcv' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310B981'/%3E%3Cstop offset='100%25' style='stop-color:%2306B6D4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23quickcv)'/%3E%3Cg fill='white' opacity='0.2'%3E%3Crect x='50' y='40' width='300' height='220' rx='8'/%3E%3Cg opacity='0.6'%3E%3Crect x='70' y='60' width='60' height='60' rx='30'/%3E%3Crect x='150' y='70' width='180' height='8' rx='4'/%3E%3Crect x='150' y='90' width='120' height='8' rx='4'/%3E%3Crect x='70' y='140' width='260' height='4' rx='2'/%3E%3Crect x='70' y='160' width='200' height='4' rx='2'/%3E%3Crect x='70' y='180' width='240' height='4' rx='2'/%3E%3Crect x='70' y='210' width='180' height='4' rx='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
            icon: Users,
        },
        {
            id: 4,
            slug: 'gratias-technology-website',
            title: "Gratias Technology",
            category: "Site Vitrine",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='gratias' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236366F1'/%3E%3Cstop offset='100%25' style='stop-color:%238B5CF6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23gratias)'/%3E%3Cg fill='white' opacity='0.1'%3E%3Crect x='0' y='20' width='400' height='60'/%3E%3Crect x='40' y='100' width='320' height='40'/%3E%3Crect x='40' y='160' width='120' height='80' rx='8'/%3E%3Crect x='180' y='160' width='120' height='80' rx='8'/%3E%3Crect x='320' y='160' width='40' height='80' rx='8'/%3E%3C/g%3E%3Cg fill='white' opacity='0.3'%3E%3Ctext x='50' y='45' font-family='Arial, sans-serif' font-size='16' font-weight='bold'%3EGRATIAS%3C/text%3E%3Ccircle cx='80' cy='200' r='12'/%3E%3Ccircle cx='240' cy='200' r='12'/%3E%3Crect x='300' y='40' width='80' height='20' rx='10'/%3E%3C/g%3E%3C/svg%3E",
            icon: Globe,
        },
        {
            id: 3,
            slug: 'taskboard-simple',
            title: "TaskBoard Simple",
            category: "Productivité",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='taskboard' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F59E0B'/%3E%3Cstop offset='100%25' style='stop-color:%23EF4444'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23taskboard)'/%3E%3Cg fill='white' opacity='0.2'%3E%3Crect x='20' y='50' width='110' height='200' rx='8'/%3E%3Crect x='145' y='50' width='110' height='200' rx='8'/%3E%3Crect x='270' y='50' width='110' height='200' rx='8'/%3E%3C/g%3E%3Cg fill='white' opacity='0.4'%3E%3Crect x='30' y='80' width='90' height='30' rx='4'/%3E%3Crect x='30' y='120' width='90' height='30' rx='4'/%3E%3Crect x='155' y='80' width='90' height='30' rx='4'/%3E%3Crect x='280' y='80' width='90' height='30' rx='4'/%3E%3Crect x='280' y='120' width='90' height='30' rx='4'/%3E%3C/g%3E%3C/svg%3E",
            icon: Calendar,
        },
    ];

    return (
        <section className="relative py-20 dark:bg-gray-900">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Titre et CTA */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 text-center md:text-left">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Nos Dernières Réalisations</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Découvrez les projets récents qui font notre fierté.
                        </p>
                    </div>
                    <a
                        href="/portfolio"
                        className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                    >
                        Voir tous les projets <ArrowRight className="w-5 h-5 ml-1" />
                    </a>
                </div>

                {/* Grille des projets (version simplifiée) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.slice(0, 4).map((project, index) => {
                        const IconComponent = project.icon;
                        return (
                            <div
                                key={project.id}
                                className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer"
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                onClick={() => window.location.href = `/portfolio/${project.slug}`}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center gap-2 mb-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        <IconComponent className="w-4 h-4" />
                                        <span>{project.category}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default LatestProjects;