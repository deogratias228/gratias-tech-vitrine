// RootLayout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdvancedLoader from "@/components/ui/AdvancedLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  preload: true,
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Gratias Technology - Création de sites web modernes et mobiles",
  description:
    "Gratias Technology, votre partenaire pour des solutions digitales modernes, accessibles et performantes. Création et refonte de sites web, boutiques en ligne, pages de lancement et plus.",
  keywords: [
    "création site web",
    "création site mobile",
    "développement web",
    "startup tech",
    "Gratias Technology",
    "refonte site web",
    "site vitrine",
    "e-commerce",
  ],
  authors: [{ name: "Gratias Technology", url: "https://deowoblesse.tech" }],
  creator: "Gratias Technology",
  publisher: "Gratias Technology",
  openGraph: {
    title: "Gratias Technology - Création de sites web modernes et mobiles",
    description:
      "Création de sites web, boutiques en ligne et pages de lancement adaptées à votre ambition. Startup tech innovante basée en Afrique.",
    url: "https://deowoblesse.tech",
    siteName: "Gratias Technology",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://deowoblesse.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gratias Technology - création de sites web modernes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gratias Technology - Création de sites web modernes et mobiles",
    description:
      "Votre partenaire pour des solutions digitales modernes, accessibles et performantes.",
    creator: "@gratias_tech",
    images: ["https://deowoblesse.tech/og-image.jpg"],
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" /* pour mieux cibler ton public francophone */>
      <head>
      </head>
      <body
        className={`${poppinsFont.variable} ${geistSans.variable} ${geistMono.variable} bg-animated antialiased`}
      >
        {/* <AdvancedLoader> */}
          <div className="h-full w-full">
            <Navbar />
            <div className="mt-8 pt-8 m-h-100vh">
              {children}
              <Footer />
            </div>
          </div>
        {/* </AdvancedLoader> */}
      </body>
    </html>
  );
}
