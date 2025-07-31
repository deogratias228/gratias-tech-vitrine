import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-gray-500 pt-12 pb-6 px-4 md:px-12 mt-20 border-gray-500 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Bloc présentation */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Gratias Technology</h2>
          <p className="text-sm opacity-90">
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
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +228 XX XX XX XX</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@gratiastech.com</li>
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
