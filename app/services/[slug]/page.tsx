// /app/services/[slug]/page.tsx

import { services, Service, ServiceDetail } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import Link from 'next/link';

// Fonction pour générer les params statiques (nécessaire pour l'App Router)
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.href.split('/').pop(), // Extrait le slug de l'URL
    }));
}

// Composant pour afficher un point clé
const DetailPoint: React.FC<{ detail: ServiceDetail }> = ({ detail }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
            <Check className="w-6 h-6 text-blue-500" />
        </div>
        <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{detail.title}</h4>
            <p className="mt-1 text-gray-600 dark:text-gray-400">{detail.description}</p>
        </div>
    </div>
);


export default function ServiceDetailPage({ params }: { params: { slug: string } }) {

    const slug = `/services/${params.slug}`;
    const service = services.find(s => s.href === slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* En-tête du service */}
                <header className="text-center pb-12">
                    <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 mb-6">
                        <Icon className="w-8 h-8" />
                    </div>
                    <h1 className="text-5xl font-extrabold mb-4">{service.name}</h1>
                    <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        {service.description}
                    </p>
                </header>

                <hr className="my-12 border-gray-200 dark:border-gray-700" />

                {/* Section des détails */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-10">
                        {service.details.slice(0, 2).map((detail, index) => (
                            <DetailPoint key={index} detail={detail} />
                        ))}
                    </div>
                    <div className="space-y-10">
                        {service.details.slice(2).map((detail, index) => (
                            <DetailPoint key={index} detail={detail} />
                        ))}
                    </div>
                </section>

                {/* Vous pouvez ajouter ici plus de contenu spécifique si vous en avez besoin */}

                <div className="mt-20 text-center">
                    <Link
                        href={`/contact?service=${encodeURIComponent(service.name)}`}
                        className="inline-flex items-center px-3 md:px-10 py-4 border border-transparent text-base md:text-lg font-medium rounded-xl shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                    >
                        Démarrer la discussion sur ce service
                    </Link>

                </div>

            </div>
        </div>
    );
}