import Link from 'next/link';
import { services, Service } from '@/lib/data/services';
import { ArrowRight } from 'lucide-react';

// Composant pour afficher une carte de service
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const Icon = service.icon; // L'icône est un composant React

    return (
        <Link 
            href={`/services/${service.slug}`} 
            className="group block p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1"
        >
            <div className="flex items-start mb-4">
                {/* Icône du service */}
                <div className="p-3 bg-blue-500 rounded-full text-white group-hover:bg-blue-600 transition duration-300">
                    <Icon className="w-6 h-6" />
                </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">
                {service.name}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
            </p>
            
            {/* Lien d'appel à l'action */}
            <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
        </Link>
    );
};


export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section d'Introduction */}
                <div className="text-center mb-16">
                    <h1 className="text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Nos Offres</h1>
                    <p className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                        Des solutions conçues pour votre succès
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                        Découvrez comment nous pouvons vous aider à construire, optimiser et maintenir vos plateformes numériques.
                    </p>
                </div>

                {/* Grille des Services */}
                <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard key={service.slug} service={service} />
                    ))}
                </div>
                
                {/* Section d'Appel à l'Action (optionnel) */}
                <div className="mt-20 text-center p-10 bg-blue-50 dark:bg-gray-800 rounded-xl">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Prêt à commencer votre projet ?
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                        Contactez-nous pour une consultation gratuite et sans engagement.
                    </p>
                    <Link 
                        href="/contact?devis=true" 
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
                    >
                        Demander un devis
                    </Link>
                </div>

            </div>
        </div>
    );
}