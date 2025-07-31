// components/WhyChooseSwiper.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards, Autoplay } from "swiper/modules";
import { Users, Code, Globe, Rocket, CheckCircle } from "lucide-react";

const features = [
  {
    icon: <Users className="w-10 h-10" />,
    title: "Approche humaine",
    description: "Nous écoutons et adaptons chaque solution à vos besoins réels, avec proximité et pédagogie.",
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: "Technologies modernes",
    description: "Laravel, Tailwind, Next.js… nous utilisons les meilleurs outils pour construire des produits performants.",
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Adapté à l'Afrique",
    description: "Des solutions pensées pour les réalités locales : connectivité, simplicité, budget et efficacité.",
  },
  {
    icon: <Rocket className="w-10 h-10" />,
    title: "Livraison rapide",
    description: "Nous livrons vite, sans sacrifier la qualité. Votre site peut être prêt en quelques jours seulement.",
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: "Support fiable",
    description: "Contact direct via WhatsApp, mail ou visio. Vous n'êtes jamais seul, même après la livraison.",
  },
];

export default function WhyChoose() {
  return (
    <section className="w-full px-4 md:px-12 bg-white mb-4 md:mb-8 pt-8">

      <div className="">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Pourquoi choisir <span className="block sm:inline">Gratias Technology</span> ?</h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Découvrez ce qui nous rend uniques dans chaque projet que nous menons.
          </p>
        </div>

        {/* Swiper avec design moderne */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet custom-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
          }}
          autoplay={{
            delay: 3000, // chaque slide reste 3 secondes avant défilement
            disableOnInteraction: false, // autoplay reste actif même après interaction utilisateur
          }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className=""
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-full pt-16">
                {/* Carte principale */}
                <div className="relative flex flex-col items-center h-full rounded-2xl p-4 border border-[#1DAEFF] bg-white shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden">

                  {/* Contenu */}
                  <div className="flex flex-col text-center px-4 pb-4 pt-8">
                    <h3 className="text-xl font-bold text-[#111827] mb-2">{feature.title}</h3>
                    <p className="text-[#4B5563] text-sm leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Effet de brillance */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 -left-4 w-4 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-pulse"></div>
                  </div>
                </div>

                {/* Icône flottante au-dessus de la carte */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1DAEFF] text-white shadow-md">
                    {feature.icon}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA subtil */}
        {/* <div className="mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#29A9D8] to-[#005098] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>Découvrez nos réalisations</span>
            <Rocket className="w-4 h-4" />
          </div>
        </div> */}
      </div>

      <style jsx>{`
        .swiper-pagination {
          bottom: 32px !important;
        }
        .custom-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          background-color: #29A9D8 !important;
          opacity: 0.5 !important;
          transition: all 0.3s ease !important;
        }
        .custom-bullet-active {
          opacity: 1 !important;
          width: 12px;
          background-color: #005098 !important;
          transform: scale(1.2) !important;
        }
      `}</style>
    </section>
  );
}