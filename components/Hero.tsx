export default function Hero() {
  return (
    <div className="relative" id="hero">
      {/* Image de fond visible uniquement sur mobile */}
      <div className="md:hidden absolute inset-0 z-0">
        <img
          src="./hero_bg.png"
          alt="Un utilisateur heureux avec son site web"
          className="w-full h-full object-cover object-center opacity-30"
        />
        {/* Overlay plus sombre pour lisibilité renforcée */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Section Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 py-6 px-4 md:flex-row md:justify-between md:gap-16 md:py-10 md:px-8">
        {/* Bloc Texte */}
        <div className="text-center max-w-xl mx-auto md:text-left">
          {/* Texte */}
          <h1 className="text-gray-900 text-xl font-bold mb-4 md:text-4xl leading-tight">
            Boostez votre présence digitale&nbsp;
            <br className="hidden md:block" />
            avec <span className="text-primary">Gratias Technology</span>
          </h1>
          <p className="text-gray-800 text-sm mb-4 md:text-lg">
            Création de sites web, boutiques en ligne et pages de lancement adaptés à chaque ambition
          </p>
          <button className="bg-[#e0f2fe] text-[#1DAEFF] border border-[#1DAEFF] rounded-xl px-6 py-2 hover:bg-[#1DAEFF] hover:text-white transition shadow-sm">
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
