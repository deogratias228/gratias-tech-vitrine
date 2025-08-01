// components/WhyChooseSimple.tsx
import { Users, Code, Globe, Rocket, CheckCircle } from "lucide-react";
import CustomCarousel from "./CustomCarousel";

const features = [
    {
        icon: <Users className="w-8 h-8" />,
        title: "Approche humaine",
        description: "Nous écoutons et adaptons chaque solution à vos besoins réels, avec proximité et pédagogie.",
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "Technologies modernes",
        description: "Laravel, Tailwind, Next.js… nous utilisons les meilleurs outils pour construire des produits performants.",
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Adapté à l'Afrique",
        description: "Des solutions pensées pour les réalités locales : connectivité, simplicité, budget et efficacité.",
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Livraison rapide",
        description: "Nous livrons vite, sans sacrifier la qualité. Votre site peut être prêt en quelques jours seulement.",
    },
    {
        icon: <CheckCircle className="w-8 h-8" />,
        title: "Support fiable",
        description: "Contact direct via WhatsApp, mail ou visio. Vous n'êtes jamais seul, même après la livraison.",
    },
];

export default function WhyChooseSimple() {
    return (
        <section className="w-full px-4 md:px-12 py-10 bg-white">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Pourquoi choisir <span className="text-[#1DAEFF]">Gratias Technology</span> ?
                </h2>
                <p className="text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
                    Découvrez ce qui nous rend uniques dans chaque projet que nous menons.
                </p>
            </div>

            <CustomCarousel
                items={features}
                delay={5000}
                autoPlay={true}
                slidesPerView={{ base: 1, sm: 1, md: 2, lg: 3 }}
            />
        </section>
    );
}
