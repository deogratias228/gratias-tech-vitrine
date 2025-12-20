import { getProjectBySlug, projects } from '@/lib/data/projects';
import { getProjectContentBySlug } from '@/lib/data/project-content';
import { notFound } from 'next/navigation';
import { ExternalLink, Github, Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

interface ProjectPageProps {
    params: {
        slug: string;
    };
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Génération des métadonnées dynamiques pour le SEO
export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: 'Projet non trouvé | Gratias Technology',
            description: 'Ce projet n’existe pas ou n’a pas encore été publié.',
        };
    }

    return {
        title: `${project.title} | Gratias Technology`,
        description: project.shortDescription,
        keywords: project.technologies.join(', '),
        openGraph: {
            title: project.title,
            description: project.shortDescription,
            type: 'website',
            images: [project.image],
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: project.shortDescription,
            images: [project.image],
        },
    };
}


export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

const ProjectPage = async ({ params }: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    const content = getProjectContentBySlug(slug);

    if (!project || !content) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header avec image hero */}
            <header className="relative h-[60vh] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Breadcrumb */}
                        <nav className="mb-6">
                            <div className="flex items-center justify-center space-x-2 text-blue-200 text-sm">
                                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                                <span>/</span>
                                <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                                <span>/</span>
                                <span className="text-white">{project.title}</span>
                            </div>
                        </nav>

                        {/* Category badge */}
                        <div className="mb-6">
                            <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                                {project.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl font-bold mb-6">{project.title}</h1>

                        {/* Description */}
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            {project.shortDescription}
                        </p>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-blue-100">
                            {project.client && (
                                <div className="flex items-center gap-2">
                                    <User size={18} />
                                    <span>{project.client}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <Calendar size={18} />
                                <span>{project.year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} />
                                <span>{project.duration}</span>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-4 justify-center mt-8">
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Voir la démo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors font-medium"
                                >
                                    <Github className="w-5 h-5" />
                                    Voir le code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Contenu principal */}
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Back button */}
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour au portfolio
                    </Link>

                    {/* Project content */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                        <div className="p-8 md:p-12">
                            {content} {/* Rendu JSX du contenu détaillé */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProjectPage;