"use client";
import { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Search, BookOpen, TrendingUp, Filter } from 'lucide-react';
import Image from 'next/image';
import { posts, featuredPost, getCategories } from '../../lib/data/posts'; // Importation des données

export default function Page() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Utilisation de la fonction pour obtenir les catégories dynamiques
    const categories = getCategories();

    const filteredPosts = posts.filter(post => {
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Header */}
            <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
                <Image
                    src="/images/portfolio/cover.png"
                    alt="Cover image of our portfolio"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center p-4">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 backdrop-blur-sm rounded-full text-gray-100 text-sm font-medium mb-6">
                            <BookOpen className="w-4 h-4" />
                            Blog Gratias Technology
                        </div>
                        <h1 className="text-5xl font-bold mb-6">
                            Insights & Expertise
                        </h1>
                        <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
                            Découvrez nos derniers articles sur le développement web, les nouvelles technologies
                            et les meilleures pratiques du secteur.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-md mx-auto relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Rechercher un article..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-white/5"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Article vedette */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-600 font-semibold">Article à la Une</span>
                    </div>

                    <div onClick={(e) => window.location.href = `/blog/${featuredPost.slug}`} className="bg-white  dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="md:w-1/2 p-4 md:p-8 cursor-pointer">
                                <div className="gap-4 mb-4">
                                    <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
                                        <div className="col-span-2 flex justify-between">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium dark:bg-blue-900/40 dark:text-blue-300">
                                                {featuredPost.categoryName}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {featuredPost.readTime}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-4 h-4" />
                                            {featuredPost.author}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {featuredPost.date}
                                        </div>
                                    </div>
                                </div>

                                <h2
                                    onClick={(e) => window.location.href = `/blog/${featuredPost.slug}`}
                                    className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                                    {featuredPost.title}
                                </h2>

                                <p className="text-gray-600 text-justify dark:text-gray-400 mb-6 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>

                                <div className="flex flex-col w-full items-start gap-4 justify-between">
                                    <div className="flex flex-wrap gap-2">
                                        {featuredPost.tags.slice(0, 3).map((tag, index) => (
                                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs dark:bg-gray-700 dark:text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-end w-full">
                                        <a href={`blog/${featuredPost.slug}`} className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium group">
                                            Lire l'article
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-8">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <Filter className="w-5 h-5 text-blue-600" />
                                Catégories
                            </h3>

                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${selectedCategory === category.id
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600'
                                            }`}
                                    >
                                        <span className="font-medium">{category.name}</span>
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${selectedCategory === category.id
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600 dark:bg-gray-600 dark:text-gray-200'
                                            }`}>
                                            {category.count}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Articles Grid */}
                    <div className="lg:w-3/4">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {selectedCategory === 'all' ? 'Tous les articles' : categories.find(c => c.id === selectedCategory)?.name}
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">
                                {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filteredPosts.map((post, index) => (
                                <article
                                    onClick={(e) => window.location.href = `/blog/${post.slug}`}
                                    key={post.id}
                                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <div className="relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full text-sm font-medium dark:bg-gray-900/60 dark:text-blue-300">
                                                {post.categoryName}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <div className="flex items-center gap-4 mb-3 text-gray-500 dark:text-gray-400 text-sm">
                                            <div className="flex items-center gap-1">
                                                <User className="w-4 h-4" />
                                                {post.author}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h3
                                            className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-justify md:text-start">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-wrap gap-1">
                                                {post.tags.slice(0, 2).map((tag, tagIndex) => (
                                                    <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs dark:bg-gray-700 dark:text-gray-300">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="text-blue-600 font-medium text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
                                                Lire plus
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Load More Button */}
                        {/* {filteredPosts.length > 0 && (
                            <div className="text-center mt-12">
                                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-blue-200 text-blue-600 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 font-medium shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-blue-400 dark:hover:bg-gray-700">
                                    Charger plus d'articles
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
};