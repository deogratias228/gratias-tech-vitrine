export default function Hero() {
    return (
        <div className="relative">
            {/* Section Hero */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 py-10 md:px-8">
                {/* Bloc Texte */}
                <div className="text-center md:text-left max-w-xl">
                    <h1 className="text-2xl md:text-4xl font-bold mb-12 leading-tight text-gray-900">
                        Boostez votre présence digitale<br className="hidden md:block" /> avec <span className="text-primary">Gratias Technology</span>
                    </h1>
                    <p className="text-base md:text-lg mb-6 text-gray-700">
                        Création de sites web, boutiques en ligne et pages de lancement adaptés à chaque ambition
                    </p>
                    <button className="text-[#1DAEFF] cursor-pointer border border-[#1DAEFF] rounded-xl px-5 py-2 hover:bg-[#1DAEFF] hover:text-white transition">
                        Commencer maintenant
                    </button>
                </div>

                {/* Image */}
                <div className="w-full md:w-[45%]">
                    <img src="./hero_bg.png" alt="Un utilisateur heureux avec son site web" className="w-full h-auto" />
                </div>
            </div>

            {/* Séparateur courbé */}
            {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-[calc(150%+1.3px)] h-[100px]" viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path d="M0,0 C360,100 1080,0 1440,100 L1440,100 L0,100 Z"
                        fill="#1daeff" />
                </svg>
            </div> */}
        </div>
    );
}
