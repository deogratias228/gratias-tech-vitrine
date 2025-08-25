"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-800">
                    <img src="./logo.png" alt="Logo de l'entreprise Gratias Technology" className="max-h-8 md:max-h-16 w-auto dark:hidden" />
                    <img src="./logo-dark.png" alt="Logo de l'entreprise Gratias Technology" className="max-h-8 md:max-h-16 w-auto hidden dark:block" />
                </div>

                {/* Desktop menu */}
                <ul className="hidden md:flex space-x-8 items-center text-xl font-[500]">
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                            Accueil
                        </a>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button
                            className="flex items-center text-gray-700 hover:text-blue-600 transition focus:outline-none"
                            aria-haspopup="true"
                            aria-expanded={servicesOpen}
                        >
                            Services
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {servicesOpen && (
                            <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                                        Service 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                                        Service 2
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                                        Service 3
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile burger */}
                <button
                    className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Menu"
                >
                    {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile menu panel */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    <ul className="flex flex-col space-y-2 p-4 text-lg font-[500]">
                        <li>
                            <a href="#" className="block text-gray-700 hover:text-blue-600 transition">
                                Accueil
                            </a>
                        </li>
                        <li>
                            <button
                                className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition"
                                onClick={() => setServicesOpen(!servicesOpen)}
                            >
                                Services
                                <svg className={`ml-1 w-4 h-4 transform transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {servicesOpen && (
                                <ul className="mt-2 ml-4 space-y-1">
                                    <li>
                                        <a href="#" className="block px-2 py-1 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition">
                                            Service 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-2 py-1 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition">
                                            Service 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-2 py-1 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition">
                                            Service 3
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a href="#" className="block text-gray-700 hover:text-blue-600 transition">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block text-gray-700 hover:text-blue-600 transition">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block text-gray-700 hover:text-blue-600 transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
