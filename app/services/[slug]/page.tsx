import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/data/services";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import FAQ from "@/components/home/Faq";
import { serviceFaqs } from "@/lib/data/faqs";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* HERO */}
      <section className="py-24 text-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
              <Icon className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.name}</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mx-auto">
            {service.fullDescription}
          </p>
          <div className="mt-10">
            <Link
              href={service.cta.link}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              {service.cta.text}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* POINTS FORTS */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir ce service ?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.highlights.map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 border border-gray-100 dark:border-gray-700 text-center"
              >
                <Check className="mx-auto text-blue-500 mb-4 w-6 h-6" />
                <p className="font-medium text-gray-700 dark:text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DÉTAILS */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.details.map((d, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-center">{d.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉTAPES */}
      <section className="py-10 bg-blue-50 dark:bg-gray-800/60">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Notre processus de travail</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {service.process.map((step) => (
              <div key={step.number} className="bg-white dark:bg-gray-900 rounded-2xl p-2 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="text-4xl font-bold text-blue-600 mb-4 mt-4">{step.number}</div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={serviceFaqs[slug] || []}></FAQ>
      {/* <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Questions fréquentes</h2>
          <div className="space-y-6">
            {service.faq.map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA FINALE */}
      <section className="py-10 text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
        <Link
          href={service.cta.link}
          className="inline-flex items-center gap-3 bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-50 transition-all duration-300"
        >
          {service.cta.text}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </main>
  );
}
