export default function Hero() {
  return (
    <div className="relative" id="hero">
      {/* Image de fond visible uniquement sur mobile */}
      <div className="md:hidden absolute inset-0 z-0">
        <img
          src="./hero_bg.png"
          alt="Un utilisateur heureux avec son site web"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-white opacity-70" />
      </div>

      {/* Section Hero */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 py-10 px-4 md:px-8">
        {/* Bloc Texte */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-xl md:text-4xl font-bold mb-4 md:mb-12 leading-tight text-gray-900">
            Boostez votre présence digitale
            <br className="hidden md:block" />
            avec <span className="text-primary">Gratias Technology</span>
          </h1>
          <p className="text-sm md:text-lg mb-2 md:mb-6 text-gray-700">
            Création de sites web, boutiques en ligne et pages de lancement adaptés à chaque ambition
          </p>
          <button className="text-[#1DAEFF] cursor-pointer border border-[#1DAEFF] rounded-xl px-5 py-2 hover:bg-[#1DAEFF] hover:text-white transition">
            Commencer maintenant
          </button>
        </div>

        {/* Image à droite sur desktop */}
        <div className="hidden md:block w-full md:w-[45%] z-10">
          <img
            src="./hero_bg.png"
            alt="Un utilisateur heureux avec son site web"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
