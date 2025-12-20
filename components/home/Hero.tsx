"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

/* ============================
   Types
============================ */

export type HeroSlide = {
  id: number | string
  title: string
  subtitle?: string
  description?: string
  image: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  alignment?: "left" | "center" | "right"
}

type Props = {
  slides: HeroSlide[]
  autoPlayMs?: number
  className?: string
}

/* ============================
   Motion variants
============================ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.35,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

/* ============================
   Component
============================ */

export default function HeroCarousel({
  slides,
  autoPlayMs = 5000,
  className = "",
}: Props) {
  const [index, setIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const touchStartX = useRef<number | null>(null)

  const total = slides.length
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  /* ============================
     Helpers
  ============================ */

  const go = (i: number) => setIndex(((i % total) + total) % total)
  const next = () => go(index + 1)
  const prev = () => go(index - 1)

  /* ============================
     Autoplay
  ============================ */

  useEffect(() => {
    if (
      prefersReducedMotion ||
      isHovering ||
      isFocused ||
      isInteracting ||
      total <= 1
    )
      return

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, autoPlayMs)

    return () => clearInterval(id)
  }, [
    autoPlayMs,
    prefersReducedMotion,
    isHovering,
    isFocused,
    isInteracting,
    total,
  ])

  /* Pause when tab hidden */
  useEffect(() => {
    const onVisibility = () => setIsInteracting(document.hidden)
    document.addEventListener("visibilitychange", onVisibility)
    return () =>
      document.removeEventListener("visibilitychange", onVisibility)
  }, [])

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!containerRef.current) return
      if (!containerRef.current.contains(document.activeElement)) return

      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [index])

  /* ============================
     Touch swipe
  ============================ */

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

  const onTouchEnd = () => {
    touchStartX.current = null
  }

  /* ============================
     Progress bar
  ============================ */

  useEffect(() => {
    if (!progressRef.current) return

    if (
      prefersReducedMotion ||
      isHovering ||
      isFocused ||
      isInteracting
    ) {
      progressRef.current.style.transition = "none"
      progressRef.current.style.width = "0%"
      return
    }

    progressRef.current.style.transition = "none"
    progressRef.current.style.width = "0%"

    requestAnimationFrame(() => {
      if (!progressRef.current) return
      void progressRef.current.offsetWidth
      progressRef.current.style.transition = `width ${autoPlayMs}ms linear`
      progressRef.current.style.width = "100%"
    })
  }, [
    index,
    autoPlayMs,
    prefersReducedMotion,
    isHovering,
    isFocused,
    isInteracting,
  ])

  /* ============================
     Render
  ============================ */

  return (
    <section
      ref={containerRef}
      className={`relative isolate h-[70vh] md:h-[80vh] w-full overflow-hidden bg-slate-900 ${className}`}
      aria-roledescription="carousel"
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
          <motion.div
            key={s.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1 : 1.02,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={s.image}
              alt=""
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/80"
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div
                className={`mx-auto w-full max-w-7xl px-6 sm:px-8 grid ${s.alignment === "right"
                    ? "place-items-end"
                    : s.alignment === "center"
                      ? "place-items-center"
                      : "place-items-start"
                  }`}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={i === index ? "visible" : "hidden"}
                  className="max-w-5xl text-white"
                >
                  {s.subtitle && (
                    <motion.span
                      variants={itemVariants}
                      className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wider ring-1 ring-white/20 mb-4"
                    >
                      {s.subtitle}
                    </motion.span>
                  )}

                  <motion.h1
                    variants={itemVariants}
                    className="mt-10 text-[22px] md:text-5xl font-bold leading-tight"
                  >
                    {s.title}
                  </motion.h1>

                  {s.description && (
                    <motion.p
                      variants={itemVariants}
                      className="mt-4 text-base md:text-xl text-white/90 max-w-3xl"
                    >
                      {s.description}
                    </motion.p>
                  )}

                  <motion.div
                    variants={itemVariants}
                    className="mt-12 flex flex-wrap gap-3"
                  >
                    {s.ctaPrimary && (
                      <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        href={s.ctaPrimary.href}
                        className="rounded bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600"
                      >
                        {s.ctaPrimary.label}
                      </motion.a>
                    )}

                    {s.ctaSecondary && (
                      <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        href={s.ctaSecondary.href}
                        className="rounded bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20"
                      >
                        {s.ctaSecondary.label}
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bullets */}
      {total > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              className={`h-2.5 w-2.5 rounded-full ring-1 ring-white/30 ${i === index ? "bg-white" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      {total > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <div ref={progressRef} className="h-full w-0 bg-blue-500" />
        </div>
      )}
    </section>
  )
}

/* ============================
   Slides example
============================ */

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Construisons l’Afrique digitale, un projet à la fois.",
    subtitle: "Gratias Technology",
    description:
      "Du site vitrine aux plateformes SaaS sur-mesure : des solutions fiables, élégantes et évolutives.",
    image: "/images/home/hero/africa-digital.jpg",
    ctaPrimary: { label: "Voir nos réalisations", href: "/portfolio" },
    ctaSecondary: { label: "Demander un devis", href: "/contact" },
    alignment: "center",
  },
  {
    id: 2,
    title: "Des produits qui tiennent la charge et la route.",
    subtitle: "Qualité • Performance • Sécurité",
    description:
      "Laravel, Next.js & Tailwind au service de vos ambitions : code propre, UX soignée, déploiements maîtrisés.",
    image: "/images/home/hero/saas-dashboard.jpg",
    ctaPrimary: { label: "Voir des cas concrets", href: "/portfolio" },
    ctaSecondary: { label: "Demander un devis", href: "/contact" },
    alignment: "center",
  },
  {
    id: 3,
    title: "PME africaines : gagnez du temps, vendez mieux, grandissez vite.",
    subtitle: "Impact business",
    description:
      "StockZoom, Surrdv et plus : des outils pragmatiques pour vos ventes, vos rendez‑vous et votre croissance.",
    image: "/images/home/hero/team-collab.jpg",
    ctaPrimary: { label: "Portfolio", href: "/portfolio" },
    ctaSecondary: { label: "Demander un devis", href: "/contact" },
    alignment: "center",
  },
]

