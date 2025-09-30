// /lib/data/project-content.tsx
import React from 'react';
import { CheckCircle, AlertTriangle, TrendingUp, Users, Database, Smartphone, Monitor, Zap, Shield, Clock, FileText, ShoppingCart, Calendar, BarChart3, Utensils, BookOpen } from 'lucide-react';

// Composants réutilisables pour les projets
const ProjectSection: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <section className="mb-12">{children}</section>
);

const SectionTitle: React.FC<{ children: React.ReactNode; icon?: React.ReactNode }> = ({ children, icon }) => (
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
        {icon}
        {children}
    </h2>
);

const SubTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{children}</h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-lg">{children}</p>
);

const FeatureGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">{children}</div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
        <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                {icon}
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
);

const TechStack: React.FC<{ technologies: { name: string; category: string; color: string }[] }> = ({ technologies }) => (
    <div className="space-y-6">
        {['Frontend', 'Backend', 'Database', 'Outils'].map(category => {
            const techs = technologies.filter(tech => tech.category === category);
            if (techs.length === 0) return null;
            
            return (
                <div key={category}>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-3">
                        {techs.map((tech, index) => (
                            <span 
                                key={index}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color}`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            );
        })}
    </div>
);

const MetricCard: React.FC<{ value: string; label: string; icon: React.ReactNode }> = ({ value, label, icon }) => (
    <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
            {icon}
        </div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </div>
);

const Screenshot: React.FC<{ src: string; alt: string; caption?: string }> = ({ src, alt, caption }) => (
    <div className="mb-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <img 
                src={src} 
                alt={alt}
                className="w-full rounded-lg shadow-md"
            />
        </div>
        {caption && (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-3 italic">
                {caption}
            </p>
        )}
    </div>
);

const Challenge: React.FC<{ title: string; description: string; solution: string }> = ({ title, description, solution }) => (
    <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-6">
        <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400 mt-1 flex-shrink-0" />
            <div>
                <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">{title}</h4>
                <p className="text-orange-800 dark:text-orange-200 mb-3">{description}</p>
                <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 dark:text-green-200 font-medium">{solution}</p>
                </div>
            </div>
        </div>
    </div>
);

// Contenu détaillé des projets
export const projectDetails: Record<string, React.ReactNode> = {
    "stockzoom-inventory-management": (
        <div>
            <ProjectSection>
                <SectionTitle icon={<Database className="w-8 h-8" />}>
                    Vue d'ensemble
                </SectionTitle>
                <Paragraph>
                    <strong>StockZoom</strong> est une application web complète de gestion d'inventaire développée 
                    pour optimiser les flux de marchandises d'une entreprise cliente. Cette solution permet de 
                    suivre en temps réel les stocks, générer des rapports analytiques et automatiser les 
                    processus de réapprovisionnement.
                </Paragraph>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <MetricCard 
                        value="98%" 
                        label="Réduction erreurs stock" 
                        icon={<TrendingUp className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="15+" 
                        label="Utilisateurs simultanés" 
                        icon={<Users className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="5000+" 
                        label="Articles référencés" 
                        icon={<Database className="w-6 h-6" />}
                    />
                </div>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Fonctionnalités clés</SectionTitle>
                <FeatureGrid>
                    <FeatureCard 
                        icon={<Monitor className="w-5 h-5" />}
                        title="Dashboard temps réel"
                        description="Visualisation instantanée des niveaux de stock avec alertes automatiques"
                    />
                    <FeatureCard 
                        icon={<TrendingUp className="w-5 h-5" />}
                        title="Analytics avancés"
                        description="Rapports détaillés sur les mouvements, tendances et prévisions"
                    />
                    <FeatureCard 
                        icon={<Users className="w-5 h-5" />}
                        title="Multi-utilisateurs"
                        description="Gestion des rôles et permissions avec historique des actions"
                    />
                    <FeatureCard 
                        icon={<Smartphone className="w-5 h-5" />}
                        title="Interface responsive"
                        description="Accès optimisé sur tous les appareils (mobile, tablette, desktop)"
                    />
                    <FeatureCard 
                        icon={<Zap className="w-5 h-5" />}
                        title="Automatisation"
                        description="Processus automatisés de réapprovisionnement et notifications"
                    />
                    <FeatureCard 
                        icon={<Shield className="w-5 h-5" />}
                        title="Sécurité renforcée"
                        description="Authentification sécurisée et sauvegarde automatique des données"
                    />
                </FeatureGrid>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Stack technique</SectionTitle>
                <TechStack technologies={[
                    { name: 'Blade Templates', category: 'Frontend', color: 'bg-red-100 text-red-800' },
                    { name: 'TailwindCSS', category: 'Frontend', color: 'bg-cyan-100 text-cyan-800' },
                    { name: 'Alpine.js', category: 'Frontend', color: 'bg-green-100 text-green-800' },
                    { name: 'Laravel 10', category: 'Backend', color: 'bg-red-100 text-red-800' },
                    { name: 'PHP 8.2', category: 'Backend', color: 'bg-purple-100 text-purple-800' },
                    { name: 'MySQL 8.0', category: 'Database', color: 'bg-blue-100 text-blue-800' },
                    { name: 'Redis', category: 'Database', color: 'bg-red-100 text-red-800' },
                    { name: 'Laravel Forge', category: 'Outils', color: 'bg-gray-100 text-gray-800' },
                    { name: 'Git', category: 'Outils', color: 'bg-orange-100 text-orange-800' }
                ]} />
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Défis techniques relevés</SectionTitle>
                <Challenge 
                    title="Performance des requêtes complexes"
                    description="Avec plus de 5000 articles et des milliers de mouvements quotidiens, les requêtes devenaient lentes."
                    solution="Implémentation d'un système de cache Redis et optimisation des requêtes avec des index appropriés."
                />
                <Challenge 
                    title="Synchronisation temps réel"
                    description="Plusieurs utilisateurs modifiant les stocks simultanément créaient des conflits de données."
                    solution="Utilisation de Laravel Echo avec WebSockets pour les mises à jour en temps réel et gestion des transactions."
                />
                <Challenge 
                    title="Gestion des seuils d'alerte"
                    description="Les alertes de stock bas devaient être personnalisables et fiables pour éviter les ruptures."
                    solution="Système d'alertes intelligent basé sur l'historique de consommation et les tendances saisonnières."
                />
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Résultats et impact</SectionTitle>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Impact mesurable</h4>
                            <ul className="space-y-2 text-green-800 dark:text-green-200">
                                <li>• <strong>98% de réduction</strong> des erreurs de stock</li>
                                <li>• <strong>60% d'amélioration</strong> de la productivité des équipes</li>
                                <li>• <strong>30% d'économies</strong> sur les coûts de stockage</li>
                                <li>• <strong>Formation rapide</strong> : 2h suffisent pour maîtriser l'interface</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ProjectSection>
        </div>
    ),

    "quickcv-generator": (
        <div>
            <ProjectSection>
                <SectionTitle icon={<Users className="w-8 h-8" />}>
                    À propos du projet
                </SectionTitle>
                <Paragraph>
                    <strong>QuickCV Generator</strong> est un générateur de CV moderne qui permet de créer 
                    des CV professionnels en quelques minutes. L'outil propose plusieurs templates 
                    élégants, une prévisualisation en temps réel et un export PDF de qualité.
                </Paragraph>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <MetricCard 
                        value="2min" 
                        label="Temps de création moyen" 
                        icon={<Clock className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="8" 
                        label="Templates disponibles" 
                        icon={<Monitor className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="100%" 
                        label="Gratuit et open-source" 
                        icon={<CheckCircle className="w-6 h-6" />}
                    />
                </div>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Fonctionnalités</SectionTitle>
                <FeatureGrid>
                    <FeatureCard 
                        icon={<Monitor className="w-5 h-5" />}
                        title="Templates modernes"
                        description="8 designs professionnels adaptés à différents secteurs d'activité"
                    />
                    <FeatureCard 
                        icon={<Zap className="w-5 h-5" />}
                        title="Prévisualisation live"
                        description="Voir les modifications en temps réel pendant la saisie"
                    />
                    <FeatureCard 
                        icon={<Smartphone className="w-5 h-5" />}
                        title="Export PDF optimisé"
                        description="Génération PDF haute qualité pour impression ou envoi"
                    />
                </FeatureGrid>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Technologies utilisées</SectionTitle>
                <TechStack technologies={[
                    { name: 'HTML5', category: 'Frontend', color: 'bg-orange-100 text-orange-800' },
                    { name: 'CSS3', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
                    { name: 'JavaScript ES6+', category: 'Frontend', color: 'bg-yellow-100 text-yellow-800' },
                    { name: 'PDF-lib', category: 'Outils', color: 'bg-red-100 text-red-800' },
                    { name: 'Vite', category: 'Outils', color: 'bg-purple-100 text-purple-800' }
                ]} />
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Interface utilisateur</SectionTitle>
                <Paragraph>
                    L'interface a été conçue pour être intuitive et accessible. Un formulaire guidé 
                    permet de saisir les informations étape par étape, tandis que la prévisualisation 
                    se met à jour automatiquement.
                </Paragraph>

                <Screenshot 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%23f8fafc'/%3E%3Crect x='50' y='50' width='300' height='400' fill='white' stroke='%23e2e8f0' stroke-width='2' rx='8'/%3E%3Crect x='450' y='50' width='300' height='400' fill='white' stroke='%23e2e8f0' stroke-width='2' rx='8'/%3E%3Ctext x='200' y='30' font-family='Arial' font-size='16' font-weight='bold' text-anchor='middle' fill='%23374151'%3EFormulaire%3C/text%3E%3Ctext x='600' y='30' font-family='Arial' font-size='16' font-weight='bold' text-anchor='middle' fill='%23374151'%3EPrévisualisation%3C/text%3E%3C/svg%3E"
                    alt="Interface QuickCV Generator"
                    caption="Vue d'ensemble de l'interface : formulaire de saisie et prévisualisation temps réel"
                />
            </ProjectSection>
        </div>
    ),

    "taskboard-simple": (
        <div>
            <ProjectSection>
                <SectionTitle icon={<CheckCircle className="w-8 h-8" />}>
                    TaskBoard Simple
                </SectionTitle>
                <Paragraph>
                    Un tableau Kanban minimaliste développé en React pour organiser ses tâches 
                    personnelles. Fonctionnalités drag & drop, sauvegarde locale et interface 
                    claire et épurée.
                </Paragraph>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Fonctionnalités principales</SectionTitle>
                <FeatureGrid>
                    <FeatureCard 
                        icon={<Zap className="w-5 h-5" />}
                        title="Drag & Drop"
                        description="Déplacez vos tâches entre les colonnes par simple glisser-déposer"
                    />
                    <FeatureCard 
                        icon={<Database className="w-5 h-5" />}
                        title="Sauvegarde auto"
                        description="Vos données sont automatiquement sauvées dans le navigateur"
                    />
                    <FeatureCard 
                        icon={<Monitor className="w-5 h-5" />}
                        title="Mode sombre"
                        description="Interface adaptable selon vos préférences visuelles"
                    />
                </FeatureGrid>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Stack technique</SectionTitle>
                <TechStack technologies={[
                    { name: 'React 18', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
                    { name: 'TailwindCSS', category: 'Frontend', color: 'bg-cyan-100 text-cyan-800' },
                    { name: 'DnD Kit', category: 'Frontend', color: 'bg-green-100 text-green-800' },
                    { name: 'LocalStorage API', category: 'Outils', color: 'bg-purple-100 text-purple-800' }
                ]} />
            </ProjectSection>
        </div>
    ),

    "gratias-technology-website": (
        <div>
            <ProjectSection>
                <SectionTitle icon={<Monitor className="w-8 h-8" />}>
                    Site vitrine Gratias Technology
                </SectionTitle>
                <Paragraph>
                    Site vitrine moderne et élégant développé avec Next.js pour présenter 
                    les services et réalisations de Gratias Technology. Design responsive, 
                    animations fluides et optimisations SEO avancées.
                </Paragraph>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <MetricCard 
                        value="98/100" 
                        label="Score Lighthouse" 
                        icon={<TrendingUp className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="< 2s" 
                        label="Temps de chargement" 
                        icon={<Zap className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="100%" 
                        label="Responsive design" 
                        icon={<Smartphone className="w-6 h-6" />}
                    />
                </div>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Fonctionnalités avancées</SectionTitle>
                <FeatureGrid>
                    <FeatureCard 
                        icon={<Zap className="w-5 h-5" />}
                        title="Performance optimale"
                        description="Optimisations avancées avec Next.js : SSG, image optimization, code splitting"
                    />
                    <FeatureCard 
                        icon={<TrendingUp className="w-5 h-5" />}
                        title="SEO avancé"
                        description="Métadonnées dynamiques, sitemap automatique, structured data"
                    />
                    <FeatureCard 
                        icon={<Monitor className="w-5 h-5" />}
                        title="Animations fluides"
                        description="Micro-interactions et animations CSS pour une UX premium"
                    />
                </FeatureGrid>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Architecture technique</SectionTitle>
                <TechStack technologies={[
                    { name: 'Next.js 14', category: 'Frontend', color: 'bg-black text-white' },
                    { name: 'TypeScript', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
                    { name: 'TailwindCSS', category: 'Frontend', color: 'bg-cyan-100 text-cyan-800' },
                    { name: 'Framer Motion', category: 'Frontend', color: 'bg-purple-100 text-purple-800' },
                    { name: 'Vercel', category: 'Outils', color: 'bg-black text-white' },
                    { name: 'ESLint', category: 'Outils', color: 'bg-purple-100 text-purple-800' }
                ]} />
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Optimisations mises en place</SectionTitle>
                <Challenge 
                    title="Performance et Core Web Vitals"
                    description="Nécessité d'atteindre des scores Lighthouse parfaits pour le SEO et l'expérience utilisateur."
                    solution="Optimisation images avec Next.js Image, lazy loading, préchargement des ressources critiques et minification avancée."
                />
                <Challenge 
                    title="SEO technique avancé"
                    description="Besoin de positioning optimal sur les moteurs de recherche dans un secteur concurrentiel."
                    solution="Métadonnées dynamiques, Open Graph, données structurées JSON-LD et optimisation du contenu."
                />
            </ProjectSection>
        </div>
    ),

    "ecommerce-dashboard": (
        <div>
            <ProjectSection>
                <SectionTitle icon={<ShoppingCart className="w-8 h-8" />}>
                    E-commerce Dashboard
                </SectionTitle>
                <Paragraph>
                    Tableau de bord complet pour la gestion d'une boutique en ligne, intégrant 
                    la gestion des produits, commandes, clients et analytics de vente. Solution 
                    développée pour une startup e-commerce en forte croissance.
                </Paragraph>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <MetricCard 
                        value="500+" 
                        label="Commandes/jour gérées" 
                        icon={<TrendingUp className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="10K+" 
                        label="Produits référencés" 
                        icon={<Database className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="99.9%" 
                        label="Uptime des paiements" 
                        icon={<Shield className="w-6 h-6" />}
                    />
                </div>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Fonctionnalités principales</SectionTitle>
                <FeatureGrid>
                    <FeatureCard 
                        icon={<ShoppingCart className="w-5 h-5" />}
                        title="Gestion des commandes"
                        description="Traitement automatisé des commandes avec workflow personnalisable"
                    />
                    <FeatureCard 
                        icon={<TrendingUp className="w-5 h-5" />}
                        title="Analytics de vente"
                        description="Tableaux de bord interactifs avec métriques en temps réel"
                    />
                    <FeatureCard 
                        icon={<Shield className="w-5 h-5" />}
                        title="Paiements sécurisés"
                        description="Intégration Stripe avec gestion des remboursements automatisée"
                    />
                    <FeatureCard 
                        icon={<Users className="w-5 h-5" />}
                        title="CRM intégré"
                        description="Gestion clients avec historique d'achat et segmentation"
                    />
                    <FeatureCard 
                        icon={<Database className="w-5 h-5" />}
                        title="Gestion d'inventaire"
                        description="Suivi stock en temps réel avec alertes de réapprovisionnement"
                    />
                    <FeatureCard 
                        icon={<Smartphone className="w-5 h-5" />}
                        title="Interface responsive"
                        description="Dashboard optimisé pour tous les appareils"
                    />
                </FeatureGrid>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Stack technique</SectionTitle>
                <TechStack technologies={[
                    { name: 'React 18', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
                    { name: 'TypeScript', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
                    { name: 'Recharts', category: 'Frontend', color: 'bg-green-100 text-green-800' },
                    { name: 'Node.js', category: 'Backend', color: 'bg-green-100 text-green-800' },
                    { name: 'Express.js', category: 'Backend', color: 'bg-gray-100 text-gray-800' },
                    { name: 'PostgreSQL', category: 'Database', color: 'bg-blue-100 text-blue-800' },
                    { name: 'Redis', category: 'Database', color: 'bg-red-100 text-red-800' },
                    { name: 'Stripe API', category: 'Outils', color: 'bg-purple-100 text-purple-800' },
                    { name: 'Docker', category: 'Outils', color: 'bg-blue-100 text-blue-800' }
                ]} />
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Défis techniques</SectionTitle>
                <Challenge 
                    title="Scalabilité des paiements"
                    description="Gestion de pics de trafic importants lors des campagnes promotionnelles."
                    solution="Architecture microservices avec mise en queue Redis et load balancing automatique."
                />
                <Challenge 
                    title="Synchronisation des données"
                    description="Maintenir la cohérence entre stock, commandes et paiements en temps réel."
                    solution="Implémentation d'un système d'événements avec PostgreSQL et WebSockets."
                />
            </ProjectSection>
        </div>
    ),

    "booking-system": (
        <div>
            <ProjectSection>
                <SectionTitle icon={<Calendar className="w-8 h-8" />}>
                    Système de Réservation
                </SectionTitle>
                <Paragraph>
                    Plateforme complète de réservation en ligne développée pour un cabinet médical. 
                    Interface intuitive permettant aux patients de prendre rendez-vous et aux 
                    professionnels de gérer leur planning efficacement.
                </Paragraph>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <MetricCard 
                        value="200+" 
                        label="RDV/semaine" 
                        icon={<Calendar className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="5min" 
                        label="Temps de réservation" 
                        icon={<Clock className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="95%" 
                        label="Taux de satisfaction" 
                        icon={<Users className="w-6 h-6" />}
                    />
                </div>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Fonctionnalités</SectionTitle>
                <FeatureGrid>
                    <FeatureCard 
                        icon={<Calendar className="w-5 h-5" />}
                        title="Calendrier interactif"
                        description="Interface drag & drop pour gérer les créneaux et plannings"
                    />
                    <FeatureCard 
                        icon={<Zap className="w-5 h-5" />}
                        title="Notifications temps réel"
                        description="Alertes instantanées via Pusher pour les nouvelles réservations"
                    />
                    <FeatureCard 
                        icon={<Users className="w-5 h-5" />}
                        title="Multi-services"
                        description="Gestion de différents types de consultations et praticiens"
                    />
                </FeatureGrid>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Technologies</SectionTitle>
                <TechStack technologies={[
                    { name: 'Vue.js 3', category: 'Frontend', color: 'bg-green-100 text-green-800' },
                    { name: 'Vuetify', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
                    { name: 'Laravel 10', category: 'Backend', color: 'bg-red-100 text-red-800' },
                    { name: 'MySQL', category: 'Database', color: 'bg-blue-100 text-blue-800' },
                    { name: 'Pusher', category: 'Outils', color: 'bg-purple-100 text-purple-800' }
                ]} />
            </ProjectSection>
        </div>
    ),

    "finance-tracker": (
        <div>
            <ProjectSection>
                <SectionTitle icon={<TrendingUp className="w-8 h-8" />}>
                    Finance Tracker Mobile
                </SectionTitle>
                <Paragraph>
                    Application mobile native développée en React Native pour le suivi des 
                    finances personnelles. Interface moderne avec graphiques interactifs et 
                    synchronisation cloud sécurisée.
                </Paragraph>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <MetricCard 
                        value="iOS + Android" 
                        label="Plateformes supportées" 
                        icon={<Smartphone className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="4.8/5" 
                        label="Note utilisateurs" 
                        icon={<Users className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="256-bit" 
                        label="Chiffrement données" 
                        icon={<Shield className="w-6 h-6" />}
                    />
                </div>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Fonctionnalités</SectionTitle>
                <FeatureGrid>
                    <FeatureCard 
                        icon={<TrendingUp className="w-5 h-5" />}
                        title="Suivi des dépenses"
                        description="Catégorisation automatique et saisie rapide des transactions"
                    />
                    <FeatureCard 
                        icon={<BarChart3 className="w-5 h-5" />}
                        title="Graphiques avancés"
                        description="Visualisation des données avec Chart.js et animations fluides"
                    />
                    <FeatureCard 
                        icon={<Zap className="w-5 h-5" />}
                        title="Notifications smart"
                        description="Alertes personnalisées pour budgets et objectifs d'épargne"
                    />
                </FeatureGrid>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Technologies mobile</SectionTitle>
                <TechStack technologies={[
                    { name: 'React Native', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
                    { name: 'TypeScript', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
                    { name: 'Chart.js', category: 'Frontend', color: 'bg-orange-100 text-orange-800' },
                    { name: 'Firebase', category: 'Backend', color: 'bg-yellow-100 text-yellow-800' },
                    { name: 'Stripe API', category: 'Outils', color: 'bg-purple-100 text-purple-800' },
                    { name: 'Expo', category: 'Outils', color: 'bg-black text-white' }
                ]} />
            </ProjectSection>
        </div>
    ),

    "blog-cms": (
        <div>
            <ProjectSection>
                <SectionTitle icon={<FileText className="w-8 h-8" />}>
                    Blog CMS sur mesure
                </SectionTitle>
                <Paragraph>
                    Système de gestion de contenu développé spécifiquement pour un magazine en ligne. 
                    Interface d'édition moderne avec prévisualisation en temps réel et workflow 
                    de publication avancé.
                </Paragraph>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <MetricCard 
                        value="50+" 
                        label="Articles/mois publiés" 
                        icon={<FileText className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="5" 
                        label="Rédacteurs simultanés" 
                        icon={<Users className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="99.9%" 
                        label="Disponibilité" 
                        icon={<Monitor className="w-6 h-6" />}
                    />
                </div>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Fonctionnalités CMS</SectionTitle>
                <FeatureGrid>
                    <FeatureCard 
                        icon={<FileText className="w-5 h-5" />}
                        title="Éditeur WYSIWYG"
                        description="Interface d'édition riche avec blocs de contenu modulaires"
                    />
                    <FeatureCard 
                        icon={<TrendingUp className="w-5 h-5" />}
                        title="SEO intégré"
                        description="Optimisation automatique et suggestions SEO en temps réel"
                    />
                    <FeatureCard 
                        icon={<Users className="w-5 h-5" />}
                        title="Multi-auteurs"
                        description="Workflow de validation avec rôles et permissions granulaires"
                    />
                </FeatureGrid>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Stack technique</SectionTitle>
                <TechStack technologies={[
                    { name: 'Next.js 14', category: 'Frontend', color: 'bg-black text-white' },
                    { name: 'Sanity CMS', category: 'Backend', color: 'bg-red-100 text-red-800' },
                    { name: 'TypeScript', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
                    { name: 'Vercel', category: 'Outils', color: 'bg-black text-white' }
                ]} />
            </ProjectSection>
        </div>
    ),

    "restaurant-pos": (
        <div>
            <ProjectSection>
                <SectionTitle icon={<Utensils className="w-8 h-8" />}>
                    Restaurant POS System
                </SectionTitle>
                <Paragraph>
                    Point de vente moderne développé pour une chaîne de restaurants. Interface 
                    tactile optimisée, gestion des tables en temps réel et intégration complète 
                    avec la cuisine et la facturation.
                </Paragraph>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <MetricCard 
                        value="300+" 
                        label="Commandes/jour" 
                        icon={<ShoppingCart className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="8" 
                        label="Restaurants connectés" 
                        icon={<Users className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="2s" 
                        label="Temps de commande" 
                        icon={<Clock className="w-6 h-6" />}
                    />
                </div>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Fonctionnalités POS</SectionTitle>
                <FeatureGrid>
                    <FeatureCard 
                        icon={<Smartphone className="w-5 h-5" />}
                        title="Interface tactile"
                        description="Design optimisé pour tablettes avec interactions gestuelles"
                    />
                    <FeatureCard 
                        icon={<Users className="w-5 h-5" />}
                        title="Gestion des tables"
                        description="Plan de salle interactif avec statut en temps réel"
                    />
                    <FeatureCard 
                        icon={<FileText className="w-5 h-5" />}
                        title="Facturation automatisée"
                        description="Génération de factures et intégration comptable"
                    />
                </FeatureGrid>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Technologies</SectionTitle>
                <TechStack technologies={[
                    { name: 'Vue.js 3', category: 'Frontend', color: 'bg-green-100 text-green-800' },
                    { name: 'Vuetify', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
                    { name: 'Node.js', category: 'Backend', color: 'bg-green-100 text-green-800' },
                    { name: 'MongoDB', category: 'Database', color: 'bg-green-100 text-green-800' },
                    { name: 'Socket.io', category: 'Outils', color: 'bg-gray-100 text-gray-800' }
                ]} />
            </ProjectSection>
        </div>
    ),

    "learning-platform": (
        <div>
            <ProjectSection>
                <SectionTitle icon={<BookOpen className="w-8 h-8" />}>
                    Plateforme E-learning
                </SectionTitle>
                <Paragraph>
                    Plateforme d'apprentissage en ligne complète développée pour un institut de 
                    formation. Cours vidéo HD, quiz interactifs et suivi détaillé des progrès 
                    des apprenants avec certificats automatisés.
                </Paragraph>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <MetricCard 
                        value="500+" 
                        label="Étudiants actifs" 
                        icon={<Users className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="50h" 
                        label="Contenu vidéo" 
                        icon={<Monitor className="w-6 h-6" />}
                    />
                    <MetricCard 
                        value="85%" 
                        label="Taux de completion" 
                        icon={<TrendingUp className="w-6 h-6" />}
                    />
                </div>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Fonctionnalités pédagogiques</SectionTitle>
                <FeatureGrid>
                    <FeatureCard 
                        icon={<Monitor className="w-5 h-5" />}
                        title="Vidéos HD streaming"
                        description="Lecteur vidéo adaptatif avec sous-titres et vitesse variable"
                    />
                    <FeatureCard 
                        icon={<CheckCircle className="w-5 h-5" />}
                        title="Quiz interactifs"
                        description="Évaluations en temps réel avec feedback immédiat"
                    />
                    <FeatureCard 
                        icon={<TrendingUp className="w-5 h-5" />}
                        title="Suivi de progression"
                        description="Analytics détaillés pour étudiants et formateurs"
                    />
                </FeatureGrid>
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Infrastructure</SectionTitle>
                <TechStack technologies={[
                    { name: 'React 18', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
                    { name: 'TypeScript', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
                    { name: 'Node.js', category: 'Backend', color: 'bg-green-100 text-green-800' },
                    { name: 'PostgreSQL', category: 'Database', color: 'bg-blue-100 text-blue-800' },
                    { name: 'AWS S3', category: 'Outils', color: 'bg-orange-100 text-orange-800' },
                    { name: 'FFmpeg', category: 'Outils', color: 'bg-gray-100 text-gray-800' }
                ]} />
            </ProjectSection>

            <ProjectSection>
                <SectionTitle>Défis techniques</SectionTitle>
                <Challenge 
                    title="Streaming vidéo optimisé"
                    description="Livraison de contenu vidéo HD à grande échelle avec latence minimale."
                    solution="CDN AWS CloudFront avec transcodage automatique et streaming adaptatif."
                />
                <Challenge 
                    title="Suivi de progression"
                    description="Tracking précis du temps passé et des interactions utilisateur."
                    solution="Système d'événements en temps réel avec analytics PostgreSQL."
                />
            </ProjectSection>
        </div>
    )
};

// Fonction d'accès public pour le contenu
export const getProjectContentBySlug = (slug: string): React.ReactNode | null => {
    return projectDetails[slug] || null;
};