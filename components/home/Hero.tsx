"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * HeroCarousel – production‑ready, dependency‑free carousel for Next.js + Tailwind
 *
 * Highlights
 * - Autoplay (pause on hover, focus & when tab is hidden)
 * - Keyboard navigation (← →), swipe on touch
 * - Bullets + arrows + progress bar
 * - Prefers‑reduced‑motion respected
 * - Accessible: roles, aria‑labels, buttons, focus states
 * - Responsive layout with overlay gradient for contrast
 *
 * Usage (Next.js):
 * 1) Drop this component in your app (e.g., components/HeroCarousel.tsx)
 * 2) Ensure Tailwind is configured. Place <HeroCarousel slides={slides}/> in your page.
 */

export type HeroSlide = {
  id: number | string
  title: string
  subtitle?: string
  description?: string
  image: string // Public URL (e.g., /images/hero/slide1.jpg)
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  alignment?: "left" | "center" | "right"
};

type Props = {
  slides: HeroSlide[]
  autoPlayMs?: number // default 5000
  className?: string
};

export default function HeroCarousel({ slides, autoPlayMs = 5000, className = "" }: Props) {
  const [index, setIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const touchStartX = useRef<number | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)

  const total = slides.length
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  // Auto‑advance
  useEffect(() => {
    if (prefersReducedMotion || isHovering || isFocused || isInteracting || total <= 1) return

    let active = true
    const tick = () => {
      if (!active) return
      setIndex((i) => (i + 1) % total)
    }

    const id = setInterval(tick, autoPlayMs)
    return () => {
      active = false
      clearInterval(id)
    }
  }, [autoPlayMs, prefersReducedMotion, isHovering, isFocused, isInteracting, total])

  // Pause when tab hidden
  useEffect(() => {
    const onVisibility = () => setIsInteracting(document.hidden)
    document.addEventListener("visibilitychange", onVisibility)
    return () => document.removeEventListener("visibilitychange", onVisibility)
  }, [])

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!containerRef.current) return
      if (!containerRef.current.contains(document.activeElement)) return
      if (e.key === "ArrowRight") {
        e.preventDefault()
        next()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const go = (i: number) => setIndex(((i % total) + total) % total)
  const next = () => go(index + 1)
  const prev = () => go(index - 1)

  // Touch swipe
  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (touchStartX.current == null) return
    const diff = e.touches[0].clientX - touchStartX.current
    if (Math.abs(diff) > 60) {
      diff > 0 ? prev() : next()
      touchStartX.current = null
    }
  }
  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    touchStartX.current = null
  }

  // Progress bar animation
  useEffect(() => {
    if (!progressRef.current) return
    if (prefersReducedMotion || isHovering || isFocused || isInteracting) {
      progressRef.current.style.transition = "none"
      progressRef.current.style.width = "0%"
      return
    }
    progressRef.current.style.transition = "none"
    progressRef.current.style.width = "0%"
    requestAnimationFrame(() => {
      if (!progressRef.current) return
      // trigger reflow then animate
      void progressRef.current.offsetWidth
      progressRef.current.style.transition = `width ${autoPlayMs}ms linear`
      progressRef.current.style.width = "100%"
    })
  }, [index, autoPlayMs, prefersReducedMotion, isHovering, isFocused, isInteracting])

  return (
    <section
      ref={containerRef}
      className={`relative isolate w-full h-[80vh] min-h-[520px] overflow-hidden bg-slate-900 ${className}`}
      aria-roledescription="carousel"
      aria-label="Gratias Technology hero"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={() => setIsFocused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
            role={i === index ? "group" : undefined}
            aria-roledescription={i === index ? "slide" : undefined}
            aria-label={i === index ? `${i + 1} / ${total}` : undefined}
          >
            <img
              src={s.image}
              alt="Hero background"
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : undefined}
              decoding="async"
            />
            {/* Contrast overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className={
                `mx-auto w-full max-w-7xl px-6 sm:px-8 grid ${
                  s.alignment === "right"
                    ? "place-items-end"
                    : s.alignment === "center"
                      ? "place-items-center"
                      : "place-items-start"
                }`
              }>
                <div className="max-w-3xl text-white">
                  {s.subtitle && (
                    <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wider ring-1 ring-white/20 mb-4">
                      {s.subtitle}
                    </span>
                  )}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow">
                    {s.title}
                  </h1>
                  {s.description && (
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl">
                      {s.description}
                    </p>
                  )}

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {s.ctaPrimary && (
                      <a
                        href={s.ctaPrimary.href}
                        className="inline-flex items-center justify-center rounded bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 transition"
                      >
                        {s.ctaPrimary.label}
                      </a>
                    )}
                    {s.ctaSecondary && (
                      <a
                        href={s.ctaSecondary.href}
                        className="inline-flex items-center justify-center rounded bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition"
                      >
                        {s.ctaSecondary.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      {total > 1 && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 sm:px-4">
          <button
            aria-label="Slide précédent"
            onClick={prev}
            className="pointer-events-auto group inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 backdrop-blur ring-1 ring-white/15 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white group-active:scale-95 transition">
              <path fillRule="evenodd" d="M15.78 4.22a.75.75 0 010 1.06L9.06 12l6.72 6.72a.75.75 0 11-1.06 1.06l-7.25-7.25a.75.75 0 010-1.06l7.25-7.25a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            aria-label="Slide suivant"
            onClick={next}
            className="pointer-events-auto group inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 backdrop-blur ring-1 ring-white/15 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white group-active:scale-95 transition">
              <path fillRule="evenodd" d="M8.22 19.78a.75.75 0 010-1.06L14.94 12 8.22 5.28a.75.75 0 011.06-1.06l7.25 7.25a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}

      {/* Bullets */}
      {total > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Aller au slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full ring-1 ring-white/30 transition ${i === index ? "bg-white" : "bg-white/30 hover:bg-white/60"}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      )}

      {/* Progress bar (autoplay indicator) */}
      {total > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <div ref={progressRef} className="h-full w-0 bg-blue-500" />
        </div>
      )}
    </section>
  )
}

// --- Example data (you can remove this and pass slides from the page) ---
export const exampleSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Construisons l’Afrique digitale, un projet à la fois.",
    subtitle: "Gratias Technology",
    description:
      "Du site vitrine aux plateformes SaaS sur‑mesure : nous transformons vos idées en solutions fiables, élégantes et évolutives.",
    image: "/images/hero/africa-digital.jpg",
    ctaPrimary: { label: "Demander un devis", href: "/contact" },
    ctaSecondary: { label: "Découvrir nos solutions", href: "/solutions" },
    alignment: "left",
  },
  {
    id: 2,
    title: "Des produits qui tiennent la charge et la route.",
    subtitle: "Qualité • Performance • Sécurité",
    description:
      "Laravel, Next.js & Tailwind au service de vos ambitions : code propre, UX soignée, déploiements maîtrisés.",
    image: "/images/hero/saas-dashboard.jpg",
    ctaPrimary: { label: "Voir des cas concrets", href: "/portfolio" },
    ctaSecondary: { label: "Parler à un expert", href: "/rdv" },
    alignment: "center",
  },
  {
    id: 3,
    title: "PME africaines : gagnez du temps, vendez mieux, grandissez vite.",
    subtitle: "Impact business",
    description:
      "StockZoom, Surrdv et plus : des outils pragmatiques pour vos ventes, vos rendez‑vous et votre croissance.",
    image: "/images/hero/team-collab.jpg",
    ctaPrimary: { label: "Essayer une démo", href: "/demos" },
    ctaSecondary: { label: "Obtenir une estimation", href: "/devis" },
    alignment: "right",
  },
]

/**
 * Example usage in a Next.js page:
 *
 * import HeroCarousel, { exampleSlides } from "@/components/HeroCarousel";
 *
 * export default function HomePage() {
 *   return (
 *     <main className="min-h-screen bg-white">
 *       <HeroCarousel slides={exampleSlides} />
 *       ...other sections...
 *     </main>
 *   );
 * }
 */
