"use client";
import { User, UserRoundIcon } from 'lucide-react';

const testimonials = [
  {
    name: "Jean K.",
    role: "Consultant indépendant",
    content: "J’avais besoin d’un site vitrine professionnel rapidement. Déo a su cerner mes besoins dès le départ. Résultat : un site clair, rapide, et qui me ramène des prospects régulièrement.",
    image: "/avatars/male1.png",
  },
  {
    name: "M. Konan",
    role: "Entrepreneur",
    content: "J’ai adoré l’écoute, la disponibilité, et surtout la rapidité. Site livré avant le délai. Je retravaillerai sans hésiter.",
    image: "/avatars/male2.png",
  },
  {
    name: "Rachel B.",
    role: "Salon de beauté",
    content: "Je voulais une landing page simple et efficace. En 3 jours j’avais une page pro prête à partager sur WhatsApp. Merci Gratias !",
    image: "/avatars/female3.png",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full px-4 md:px-12 mb-4 md:mb-8 pt-8">
      <div className="text-center mb-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-0 md:mb-3">Ils nous ont fait confiance</h2>
        <p className="text-[#4B5563] dark:text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
          Ce qu'ils disent de leur expérience avec <span className="block sm:inline font-bold text-[#1DAEFF]">Gratias Technology</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((testi, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-900 cursor-pointer shadow-xl bg-white dark:bg-gray-950 p-4 rounded-xl mb-4
                 flex flex-col justify-between"
            style={{ minHeight: '250px' }} // optionnel : fixe une hauteur minimum pour homogénéité
          >
            <p className="italic mb-4 flex-grow">
              <span className="text-3xl font-bold">"</span>{testi.content}
            </p>

            <div className="flex w-full items-center mt-4">
              <div className="rounded-full p-2 h-12 w-12 bg-[#1DAEFF]/30">
                <UserRoundIcon className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col px-3">
                <h2 className="font-semibold">{testi.name}</h2>
                <p className="text-gray-500">{testi.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
