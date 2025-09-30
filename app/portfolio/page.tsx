"use client";
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import * as Icons from 'lucide-react';
import { projects } from '@/lib/data/projects';

const HeroSection = () => {
    return (
        <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
            <Image
                src="/images/portfolio/cover.png"
                alt="Cover image of our portfolio"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center p-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-50 mb-4 animate-fade-in-up animation-delay-100">
                        <span className="text-white">L'art de l'ingénierie</span> : Découvrez nos projets
                    </h2>
                    <p className="text-xl text-gray-100 leading-10 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                        Chaque projet est une histoire de passion et de précision. Plongez dans notre univers et voyez comment nous transformons les idées en solutions digitales percutantes et élégantes.
                    </p>
                </div>
            </div>
        </div>
    );
};

const Portfolio = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grille des projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => {
                        // @ts-ignore - Dynamic icon loading from Lucide
                        const IconComponent = Icons[project.icon] || Icons.Package;
                        
                        return (
                            <div
                                key={project.id}
                                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-visible border border-gray-100 dark:border-gray-700"
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                style={{
                                    transform: hoveredProject === project.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0px) scale(1)',
                                }}
                            >
                                {/* Badge catégorie */}
                                <div className="absolute z-10 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-gray-800 backdrop-blur-sm rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white shadow-md">
                                        <IconComponent className="w-4 h-4" />
                                        {project.category}
                                    </span>
                                </div>

                                {/* Image du projet */}
                                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                                    
                                    {/* Status indicator */}
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            project.status === 'completed' ? 'bg-green-100 text-green-800' :
                                            project.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-blue-100 text-blue-800'
                                        }`}>
                                            {project.status === 'completed' ? '✓ Terminé' :
                                             project.status === 'in-progress' ? '⏳ En cours' : '🔧 Maintenance'}
                                        </span>
                                    </div>
                                </div>

                                {/* Contenu simplifié */}
                                <div className="p-6 pt-8">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                                    </div>
                                    
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-2">
                                        {project.shortDescription}
                                    </p>

                                    {/* Technologies (max 3 pour éviter l'encombrement) */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Key Features (max 2) */}
                                    <div className="space-y-1 mb-6">
                                        {project.keyFeatures.slice(0, 2).map((feature, index) => (
                                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3">
                                        <Link
                                            href={`/portfolio/${project.slug}`}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium transform hover:scale-105"
                                        >
                                            Voir les détails
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                        
                                        <div className="flex gap-2">
                                            {project.demoUrl && (
                                                <a
                                                    href={project.demoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                                    title="Voir la démo"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                                    title="Voir sur GitHub"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Effet de hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default function Page() {
    return (
        <div className='relative w-full'>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-50"></div>

            <HeroSection />
            <Portfolio />
        </div>
    );
}