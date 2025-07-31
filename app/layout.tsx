import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";


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
  weight: ['300', '400', '500', '600']
});

export const metadata: Metadata = {
  title: "Gratias Technology",
  description: "La référence des solution moderne à prix abordale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
