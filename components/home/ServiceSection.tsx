"use client";
import { useState } from 'react';

export default function ServicesSection() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    const services = [
        {
            id: 'dev',
            icon: (
                <div className="relative w-18 h-18">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl opacity-20 blur-lg"></div>
                    <div className="relative flex items-center justify-center h-20 w-20 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-400 p-4 rounded-xl">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                </div>
            ),
            title: "Développement Sur Mesure",
            subtitle: "Solutions web & applications",
            description: "Transformons vos idées en solutions digitales performantes. Du concept à la mise en ligne, nous créons des expériences utilisateur exceptionnelles qui génèrent des résultats.",
            features: [
                { name: "Sites vitrines haute performance", highlight: true },
                { name: "E-commerce & paiements sécurisés", highlight: false },
                { name: "Applications métier & dashboards", highlight: false },
                { name: "API & intégrations tierces", highlight: false }
            ],
            cta: "Découvrir nos projets",
            link: "/services/developpement-web",
            badge: "Le plus populaire"
        },
        {
            id: 'presence',
            icon: (
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl opacity-20 blur-lg"></div>
                    <div className="relative flex items-center justify-center h-20 w-20 bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-xl">
                        <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                        </svg>
                    </div>
                </div>
            ),
            title: "Visibilité Maximale",
            subtitle: "Présence en ligne optimisée",
            description: "Dominez votre marché local et digital. Nous optimisons votre présence en ligne pour attirer plus de clients qualifiés et développer votre chiffre d'affaires.",
            features: [
                { name: "Google Business Profile optimisé", highlight: true },
                { name: "Stratégie SEO local", highlight: false },
                { name: "Gestion réseaux sociaux", highlight: false },
                { name: "Analytics & reporting", highlight: false }
            ],
            cta: "Booster ma visibilité",
            link: "/services/presence-en-ligne",
            badge: null
        },
        {
            id: 'maintenance',
            icon: (
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl opacity-20 blur-lg"></div>
                    <div className="relative flex items-center justify-center h-20 w-20 bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-xl">
                        <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                </div>
            ),
            title: "Tranquillité Absolue",
            subtitle: "Maintenance & support 24/7",
            description: "Concentrez-vous sur votre métier, nous nous occupons de la technique. Support réactif, sécurité renforcée et performances optimales garanties.",
            features: [
                { name: "Monitoring temps réel", highlight: true },
                { name: "Sauvegardes automatiques", highlight: false },
                { name: "Support prioritaire", highlight: false },
                { name: "Mises à jour sécurité", highlight: false }
            ],
            cta: "Sécuriser mon site",
            link: "/services/maintenance",
            badge: null
        }
    ];

    return (
        <section className="relative py-8 md:py-12 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header avec animation */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-3 md:mb-6">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        Nos expertises
                    </div>

                    <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-6">
                        Votre succès digital,&nbsp;
                        <span className="bg-blue-950 bg-clip-text text-transparent">
                            notre expertise
                        </span>
                    </h2>

                    <p className="text-base md:text-xl text-justify md:text-center text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Nous accompagnons les entreprises ambitieuses avec des solutions web sur mesure,
                        de la conception à la maintenance, pour transformer vos défis en opportunités de croissance.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:justify-items-center">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`relative group cursor-pointer transition-all duration-500 w-full max-w-sm ${hoveredCard === service.id ? 'scale-105' : 'scale-100'
                                }`}
                            onMouseEnter={() => setHoveredCard(service.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Badge */}
                            {service.badge && (
                                <div className="absolute -top-3 left-6 z-10">
                                    <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg">
                                        {service.badge}
                                    </span>
                                </div>
                            )}

                            {/* Card */}
                            <div className="relative h-full bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
                                {/* Hover effect background */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${service.id === 'dev' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                                        service.id === 'presence' ? 'bg-gradient-to-br from-emerald-500 to-teal-600' :
                                            'bg-gradient-to-br from-orange-500 to-red-600'
                                    }`}></div>

                                <div className="relative p-4 md:p-8 flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="mb-4 md:mb-6 w-24 h-24 flex-shrink-0">
                                        {service.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="mb-6 flex-grow">
                                        <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-2 min-h-[3.5rem] md:min-h-[4.5rem] flex items-center">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm md:text-base font-medium text-slate-400 mb-4">
                                            {service.subtitle}
                                        </p>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-3 mb-8 flex-grow">
                                        {service.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3 group/feature">
                                                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${feature.highlight ? 'bg-blue-500' : 'bg-slate-300'
                                                    } group-hover/feature:bg-blue-500`}></div>
                                                <span className={`text-sm ${feature.highlight ? 'font-semibold text-slate-800' : 'text-slate-600'
                                                    } group-hover/feature:font-semibold`}>
                                                    {feature.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="pt-4 border-t border-slate-100 mt-auto">
                                        <a
                                            href={service.link}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group/link"
                                        >
                                            {service.cta}
                                            <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-white rounded-2xl w-full shadow-lg border border-slate-200">
                        <div className="flex-1 text-center sm:text-left">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Prêt à transformer votre présence digitale ?
                            </h3>
                            <p className="text-slate-600 ">
                                Discutons de votre projet et recevez un devis personnalisé sous 24h
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="/contact"
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
                            >
                                Devis gratuit
                            </a>
                            <a
                                href="/portfolio"
                                className="px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                Voir nos réalisations
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}