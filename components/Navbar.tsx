"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// Assume this component is the main app component for demonstration purposes
// of the single-file constraint.
export default function App() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Data for the navigation links
  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ];

  const serviceLinks = [
    { name: "Développement Sur Mesure", href: "services/developpement-sur-mesure" },
    { name: "Visibilité Maximale", href: "services/visibilite-maximale" },
    { name: "Tranquillité Absolue", href: "services/tranquillite-absolue" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 py-2 md:py-4 flex items-center justify-between">
        {/* Logo Section */}
        <a href="/" className="text-2xl font-bold flex items-center">
          <img
            src="/logo.png"
            alt="Logo de l'entreprise Gratias Technology"
            className="max-h-8 md:max-h-12 w-auto dark:hidden"
          />
          <img
            src="/logo-dark.png"
            alt="Logo de l'entreprise Gratias Technology"
            className="max-h-8 md:max-h-12 w-auto hidden dark:block"
          />
          {/* <img src="https://placehold.co/100x40/0A539B/FFF?text=Gratias" alt="Logo de l'entreprise Gratias Technology" className="max-h-8 md:max-h-12 w-auto" /> */}
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 items-center text-lg font-medium text-gray-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                {link.name}
              </a>
            </li>
          ))}
          {/* Services Dropdown - Desktop */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none cursor-pointer"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={()=> window.location.href = '/services'}
            >
              Services
              <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <ul className="absolute left-1/2 text-base -translate-x-1/2 w-[200px] bg-white dark:bg-gray-800 font-[400] border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-20 overflow-hidden">
                {serviceLinks.map((service) => (
                  <li key={service.name}>
                    <a href={`/${service.href}`} className="block px-2 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <a
              href="/contact"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Burger Menu */}
        <button
          className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 focus:outline-none transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 bg-white dark:bg-gray-900 md:hidden z-40 transition-transform duration-300 ease-in-out">
          <ul className="flex flex-col space-y-4 p-6 text-lg font-medium text-gray-700 dark:text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
            {/* Services Dropdown - Mobile */}
            <li>
              <button
                className="flex items-center justify-between w-full text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <ul className="mt-2 ml-4 space-y-2 font-normal">
                  {serviceLinks.map((service) => (
                    <li key={service.name}>
                      <a href={`/${service.href}`} className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="pt-4">
              <a
                href="/contact"
                className="block text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
