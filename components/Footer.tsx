import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";

export default function Footer() {
  // Définition des services pour les lister facilement
  const services = [
    { name: "Développement Web & Logiciel", href: "#dev" },
    { name: "Applications Mobiles", href: "#mobile" },
    { name: "Maintenance Informatique", href: "#maintenance" },
    { name: "Conception Graphique", href: "#design" },
    { name: "Prestation de Services IT", href: "#prestation" },
  ];

  // Les liens rapides principaux
  const mainLinks = [
    { name: "Accueil", href: "/" },
    { name: "Nos réalisations", href: "/portfolio" },
    { name: "Publications", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    // J'ai remplacé bg-gray-800 par bg-gray-900 pour un contraste plus fort et élégant
    // J'ai aussi ajouté text-gray-300 à la balise footer pour que toutes les couleurs de texte par défaut soient cohérentes
    <footer className="bg-gray-900 border-t border-gray-700 text-gray-300 pt-10 pb-6 px-6 lg:px-16">
      
      <div className="max-w-7xl mx-auto">

        {/* Logo et Slogan */}
        <div className="mb-3 md:mb-8 flex flex-col items-center md:items-start">
          {/* <img
            src="/logo.png"
            alt="Logo de l'entreprise Gratias Technology"
            className="max-h-16 mb-2 dark:hidden"
          /> */}
          <img
            src="/logo-dark.png"
            alt="Logo de l'entreprise Gratias Technology"
            className="max-h-16 mb-2"
          />
          {/* Intégration du slogan plus percutante */}
          <p className="mt-3 text-lg font-semibold text-white text-center md:text-left">
            "Avec Gratias Technology, le digital ce n'est pas du bla-bla-bla, c'est du <span className="text-accent">concret</span>."
          </p>
        </div>

        {/* Contenu principal : Grille de 4 colonnes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Section 1 : À Propos et Mission */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-5 text-white">Notre Mission</h3>
            <p className="text-sm leading-relaxed">
              Nous construisons des solutions digitales robustes et performantes 
              (web, mobile, logiciel) pour propulser les entreprises africaines. 
              Simplicité, Proximité et Efficacité sont notre promesse.
            </p>
          </div>

          <nav aria-label="Liens Utiles">
            <h3 className="text-lg font-semibold mb-5 text-white">Navigation</h3>
            <ul className="space-y-3 text-sm grid grid-cols-1 lg:grid-cols-2">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-accent transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
              {/* Liens légaux essentiels */}
              <li>
                <a href="/mentions-legales" className="hover:text-accent transition-colors duration-200">
                  Mentions Légales
                </a>
              </li>
              <li>
                <a href="/politique-confidentialite" className="hover:text-accent transition-colors duration-200">
                  Confidentialité
                </a>
              </li>
            </ul>
          </nav>

          {/* Section 4 : Contact et Réseaux Sociaux */}
          <div className="">
            <h3 className="text-lg font-semibold mb-5 text-white">Contactez-nous</h3>
            <ul className="space-y-4 text-sm">
              {/* Note: Accentuation de l'icône de téléphone pour la rendre plus visible */}
              <li className="flex w-full items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 hidden md:flex" /> 
                <a href="tel:+22899866863" className="hover:text-accent transition font-medium">
                  +228 99 86 68 63
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 hidden md:flex" />
                <a href="mailto:hello@deowoblesse.tech" className="hover:text-accent transition">
                  hello@deowoblesse.tech
                </a>
              </li>
            </ul>

            {/* Réseaux Sociaux */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Facebook de Gratias Technology"
                className="text-gray-400 hover:text-accent transition"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram de Gratias Technology"
                className="text-gray-400 hover:text-accent transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn de Gratias Technology"
                className="text-gray-400 hover:text-accent transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter (X) de Gratias Technology"
                className="text-gray-400 hover:text-accent transition"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>

            {/* Appel à l'action pour le contact */}
            <a 
              href="#contact" 
              className="mt-6 inline-block bg-accent text-gray-900 font-bold py-2 px-4 rounded-lg text-sm hover:bg-opacity-90 transition duration-300"
            >
              Démarrer votre projet
            </a>

          </div>

        </div>

      </div>

      {/* Bas du footer : Copyright */}
      <div className="mt-12 text-center text-gray-500 text-xs md:text-sm border-t border-gray-700 pt-5">
        &copy; {new Date().getFullYear()} Gratias Technology — Tous droits réservés.
      </div>

    </footer>
  );
}