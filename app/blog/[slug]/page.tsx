// /app/blog/[slug]/page.tsx

import { getPostBySlug, posts, Post } from '@/lib/data/posts';
import { getPostContentBySlug } from '@/lib/data/post-content';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User } from 'lucide-react';
import { Metadata } from 'next';

// Props du composant
type PostPageProps = {
    params: Promise<{
        slug: string;
    }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Fonction pour générer les params statiques
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Génération des métadonnées dynamiques pour le SEO
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    // Await params car c'est maintenant une Promise
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Article non trouvé',
        };
    }

    return {
        title: `${post.title} | Gratias Technology`,
        description: post.excerpt,
        keywords: post.tags.join(', '),
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
            images: [post.image],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

// Composant Header pour l'article
const ArticleHeader = ({ post }: { post: Post }) => (
    <header className="bg-gradient-to-r mt-16 from-gray-600 to-gray-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-6">
                <div className="flex items-center space-x-2 text-blue-100 text-sm">
                    <a href="/" className="hover:text-white transition-colors">Accueil</a>
                    <span>/</span>
                    <a href="/blog" className="hover:text-white transition-colors">Blog</a>
                    <span>/</span>
                    <span className="text-white">{post.title}</span>
                </div>
            </nav>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
                {post.excerpt}
            </p>

            {/* Meta informations */}
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                    <User size={18} />
                    <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                </div>
                <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{post.readTime}</span>
                </div>
            </div>
        </div>
    </header>
);

// Composant principal de la page - maintenant async
const PostPage = async ({ params }: PostPageProps) => {
    // Await params car c'est maintenant une Promise
    const { slug } = await params;

    // Récupération des métadonnées
    const post = getPostBySlug(slug);

    // Récupération du contenu JSX
    const content = getPostContentBySlug(slug);

    // Si l'article n'existe pas, retourne 404
    if (!post || !content) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header de l'article */}
            <ArticleHeader post={post} />

            {/* Contenu principal */}
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Article content - Rendu direct du JSX */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-8 md:p-12">
                            {content}
                        </div>
                    </div>

                    {/* Section de navigation entre articles */}
                    <NavigationSection currentSlug={slug} />
                </div>
            </main>
        </div>
    );
};

// Composant pour la navigation entre articles
const NavigationSection = ({ currentSlug }: { currentSlug: string }) => {
    const currentIndex = posts.findIndex(post => post.slug === currentSlug);
    const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
    const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

    return (
        <nav className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Continuer la lecture</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {prevPost ? (
                    <a
                        href={`/blog/${prevPost.slug}`}
                        className="group p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200"
                    >
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <span>← Article précédent</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {prevPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                            {prevPost.excerpt}
                        </p>
                    </a>
                ) : (
                    <div className='w-full'></div>
                )}

                {nextPost ? (
                    <a
                        href={`/blog/${nextPost.slug}`}
                        className="group p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200 md:text-right"
                    >
                        <div className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-2">
                            <span>Article suivant →</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {nextPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                            {nextPost.excerpt}
                        </p>
                    </a>
                ) : (
                    <div className='w-full'></div>
                )}
            </div>
        </nav>
    );
};

export default PostPage;