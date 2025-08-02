// components/FAQ.tsx
"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Combien de temps faut-il pour créer un site vitrine ?",
        answer: "En général entre 3 et 7 jours ouvrés selon la complexité. Tout est transparent dès le début.",
    },
    {
        question: "Est-ce que je peux vous contacter sur WhatsApp directement ?",
        answer: "Oui, bien sûr ! C’est l’un de nos canaux privilégiés pour échanger simplement et rapidement.",
    },
    {
        question: "Proposez-vous des paiements en plusieurs fois ?",
        answer: "Oui, nous proposons des facilités selon le type de projet. Parlons-en ensemble.",
    },
    {
        question: "Et si je n’ai aucune idée du design que je veux ?",
        answer: "Pas de souci ! On vous accompagne avec des exemples et des propositions claires et personnalisées.",
    },
    {
        question: "Est-ce que vous faites aussi les sites e-commerce ou les applications ?",
        answer: "Oui. Nous réalisons des boutiques en ligne, des plateformes SaaS et des solutions sur mesure.",
    },
    {
        question: "Y a-t-il un suivi après la livraison ?",
        answer: "Oui ! Vous bénéficiez d’un support pendant une période définie, avec possibilité d’assistance étendue sur demande.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-8 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-xl md:text-4xl font-bold text-gray-800 text-center mb-10">
                    Foire aux questions
                </h2>
                <div className="">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-300 overflow-hidden">
                            <button
                                className="w-full px-1 md:px-6 py-4 flex justify-between items-center text-left text-gray-800 focus:outline-none cursor-pointer"
                                onClick={() => toggle(index)} >

                                <span>
                                    <span className="text-xl md:text-5xl text-gray-500 font-bold">0{index + 1}.</span>
                                    <span className="text-sm md:text-2xl font-bold ps-2">{faq.question}</span>
                                </span>

                                <ChevronDown
                                    className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                            </button>
                            {openIndex === index && (
                                <div className="px-2 lg:px-22 pb-4 text-gray-600 text-sm md:text-xl">
                                    <div className="pl-4 border-s-4 border-s-gray-400">
                                        {faq.answer}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
