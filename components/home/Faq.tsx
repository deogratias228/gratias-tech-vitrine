"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Questions fréquentes
        </h2>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 overflow-hidden">
              <button
                className="w-full px-1 md:px-6 py-3 md:py-5 flex justify-between items-center text-left text-gray-800 dark:text-gray-200"
                onClick={() => toggle(index)}
              >
                <span>
                  <span className="text-lg md:text-2xl font-semibold">{faq.question}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-2 md:px-8 pb-4 text-gray-600 dark:text-gray-400 text-sm md:text-base border-s-4 border-s-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
