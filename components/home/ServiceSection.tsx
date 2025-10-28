"use client";
import { useState } from 'react';

export default function ServicesSection() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    const services = [
        {
            id: 'devweb',
            title: "Développement Web Sur Mesure",
            subtitle: "Sites et applications modernes pour votre entreprise",
            description:
                "Nous créons des sites web rapides, sécurisés et adaptés à vos besoins. Idéal pour les entreprises qui veulent une solution digitale performante et évolutive.",
            features: [
                { name: "Sites vitrines professionnels", highlight: true },
                { name: "Plateformes e-commerce personnalisées", highlight: false },
                { name: "Applications web sur mesure", highlight: false },
                { name: "Maintenance et support", highlight: false }
            ],
            cta: "Découvrir le service",
            link: "/services/developpement-web-sur-mesure",
            badge: "Le plus puissant"
        },
        {
            id: 'wordpress',
            title: "Sites WordPress Clés en Main",
            subtitle: "Rapide, professionnel et facile à gérer",
            description:
                "Obtenez un site WordPress moderne, optimisé et prêt à l’emploi. Une solution idéale pour PME, indépendants et portefeuilles en ligne.",
            features: [
                { name: "Création de sites vitrines WordPress", highlight: true },
                { name: "Boutiques en ligne WooCommerce", highlight: false },
                { name: "Optimisation SEO et performance", highlight: false },
                { name: "Formation et assistance", highlight: false }
            ],
            cta: "Créer mon site WordPress",
            link: "/services/solutions-wordpress",
            badge: "Le plus populaire"
        },
        {
            id: 'mobile',
            title: "Applications Mobiles & PWA",
            subtitle: "Présence mobile fluide et performante",
            description:
                "Développez une application mobile ou une Progressive Web App pour offrir une expérience utilisateur optimale sur tous les appareils.",
            features: [
                { name: "Progressive Web Apps (PWA)", highlight: true },
                { name: "Applications mobiles hybrides", highlight: false },
                { name: "Conversion de site en application", highlight: false },
                { name: "Suivi et maintenance", highlight: false }
            ],
            cta: "Créer mon application mobile",
            link: "/services/applications-mobiles",
            badge: "Le plus innovant"
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
                                    {/* <div className="mb-4 md:mb-6 w-24 h-24 flex-shrink-0">
                                        {service.icon}
                                    </div> */}

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
                                            {/* {service.cta} */}
                                            En savoir plus
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