export default function CTAWhatsApp() {
    return (
        <section className="flex justify-center px-4 py-8 md:py-16">
            <div className="relative bg-gradient-to-r from-[#e0f2fe] to-[#f0f9ff] rounded-3xl px-1 md:px-12 w-full max-w-5xl flex flex-col md:flex-row items-center gap-6 shadow-md">

                {/* Image avec débordement */}
                <div className="relative w-40 md:w-84 shrink-0">
                    <img
                        src="/cta-whatsapp.png"
                        alt="Homme heureux qui envoie un message WhatsApp"
                        className="w-full relative -top-0 z-10"
                    />
                </div>

                {/* Contenu texte */}
                <div className="text-center md:text-left flex flex-col justify-center pb-4 md:pb-6">
                    <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                        Prêt à passer à l’action ?
                    </h2>
                    <p className="text-gray-600 text-sm mb-2 md:mb-6">
                        Bénéficiez d’un accompagnement personnalisé avec un partenaire de confiance. Discutons-en sur WhatsApp dès maintenant !
                    </p>
                    <div className="w-full flex justify-center md:justify-start">
                        <a
                            href="https://wa.me/22891902824"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[#1DAEFF] text-[#1DAEFF] px-2 md:px-6 py-2 rounded-xl hover:bg-[#1DAEFF] hover:text-white transition text-sm"
                        >
                            Contacter sur WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
