import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-300 pt-2 pb-6 px-6 md:px-20 text-foreground">
      <img
        src="./logo.png"
        alt="Logo de l'entreprise Gratias Technology"
        className="max-h-12 md:max-h-20 mb-4 dark:hidden"
      />
      <img
        src="./logo-dark.png"
        alt="Logo de l'entreprise Gratias Technology"
        className="max-h-12 md:max-h-20 mb-4 hidden dark:block"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Présentation */}
        <div>
          <p className="text-gray-600 dark:text-gray-300 md:text-base leading-relaxed">
            Nous créons des sites web, boutiques en ligne et outils digitaux performants, adaptés aux ambitions africaines. Simplicité, proximité et efficacité sont au cœur de notre engagement.
          </p>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
            « Votre partenaire digital, de la première ligne de code à la réussite. »
          </p>
        </div>

        {/* Liens Rapides */}
        <nav aria-label="Liens utiles">
          <h3 className="text-lg font-semibold mb-5">Liens utiles</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-200 text-sm md:text-base">
            <li>
              <a href="#hero" className="hover:text-accent transition-colors duration-200">
                Accueil
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-accent transition-colors duration-200">
                Nos Services
              </a>
            </li>
            <li>
              <a href="#whychoose" className="hover:text-accent transition-colors duration-200">
                Pourquoi nous ?
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Contact</h3>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent" />
              <a href="tel:+22899866863" className="hover:text-accent transition">{"+228 99 86 68 63"}</a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-accent" />
              <a href="https://wa.link/fb90tg" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                +228 91 90 28 24 (WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent" />
              <a href="mailto:hello@deowoblesse.tech" className="hover:text-accent transition">
                hello@deowoblesse.tech
              </a>
            </li>
          </ul>

          <div className="flex gap-6 mt-6">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-accent transition text-gray-500"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-accent transition text-gray-500"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-accent transition text-gray-500"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-accent transition text-gray-500"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="mt-12 text-center text-gray-500 text-xs md:text-sm border-t border-gray-300 pt-5">
        &copy; {new Date().getFullYear()} Gratias Technology — Tous droits réservés
      </div>
    </footer>
  );
}
