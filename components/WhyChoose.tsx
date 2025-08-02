// components/WhyChooseSection.tsx
import { Users, Code, Globe, Rocket, CheckCircle } from "lucide-react";
import CustomSwiper from "./CustomSwiper";

const features = [
  {
    icon: <Users className="w-10 h-10" />,
    title: "Approche humaine",
    description:
      "Nous écoutons et adaptons chaque solution à vos besoins réels, avec proximité et pédagogie.",
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: "Technologies modernes",
    description:
      "Laravel, Tailwind, Next.js… nous utilisons les meilleurs outils pour construire des produits performants.",
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Adapté à l'Afrique",
    description:
      "Des solutions pensées pour les réalités locales : connectivité, simplicité, budget et efficacité.",
  },
  {
    icon: <Rocket className="w-10 h-10" />,
    title: "Livraison rapide",
    description:
      "Nous livrons vite, sans sacrifier la qualité. Votre site peut être prêt en quelques jours seulement.",
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: "Support fiable",
    description:
      "Contact direct via WhatsApp, mail ou visio. Vous n'êtes jamais seul, même après la livraison.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full px-4 md:px-12 mb-2 md:mb-8 pt-8">
      <div className="text-center">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-3" id="whychoose">
          Pourquoi choisir <span className="text-[#1DAEFF]">Gratias Technology</span> ?
        </h2>
        <p className="text-[#4B5563] text-sm max-w-2xl mx-auto leading-relaxed">
          Découvrez ce qui nous rend uniques dans chaque projet que nous menons.
        </p>
      </div>

      <div className="mt-3 md:mt-10">
        <CustomSwiper items={features} />
      </div>
    </section>
  );
}
