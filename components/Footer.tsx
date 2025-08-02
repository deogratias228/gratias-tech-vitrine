import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, WheatIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-6 pb-6 px-4 md:px-12 mt-20 border-gray-400 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Bloc présentation */}
        <div>
          <img src="./logo.png" alt="Logo de l'entreprise Gratias Technology" className="max-h-8 md:max-h-16 w-auto" />
          <p className="text-sm md:text-base opacity-90">
            Nous créons des sites web, boutiques et outils digitaux adaptés aux ambitions africaines. Proximité, efficacité, simplicité.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:underline">Accueil</a></li>
            <li><a href="#services" className="hover:underline">Nos Services</a></li>
            <li><a href="#whychoose" className="hover:underline">Pourquoi nous ?</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact + Réseaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" />
              <a href="tel:+22899866863">+228 99 86 68 63</a>
            </li>
            <li className="flex items-center gap-2"><WheatIcon className="w-4 h-4" />
              <a href="https://wa.link/fb90tg" className="">Wh +228 91 90 28 24</a>
            </li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" />
              <a href="mailto:hello@deowoblesse.tech">hello@deowoblesse.tech</a>
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#"><Facebook className="w-5 h-5 hover:text-gray-200" /></a>
            <a href="#"><Instagram className="w-5 h-5 hover:text-gray-200" /></a>
            <a href="#"><Linkedin className="w-5 h-5 hover:text-gray-200" /></a>
            <a href="#"><Twitter className="w-5 h-5 hover:text-gray-200" /></a>
          </div>
        </div>
      </div>

      {/* Footer bas */}
      <div className="mt-12 text-center text-sm opacity-80 border-t border-black/20 pt-4">
        © {new Date().getFullYear()} Gratias Technology — Tous droits réservés
      </div>
    </footer>
  );
}
