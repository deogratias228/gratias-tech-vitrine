"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface Props {
    items: Slide[];
    autoPlay?: boolean;
    delay?: number;
    slidesPerView?: {
        base: number;
        sm?: number;
        md?: number;
        lg?: number;
    };
}

export default function CustomCarousel({
    items,
    autoPlay = true,
    delay = 4000,
    slidesPerView = { base: 1, sm: 1, md: 2, lg: 3 },
}: Props) {
    const [current, setCurrent] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [visibleCount, setVisibleCount] = useState(slidesPerView.base);

    // Détecte la taille actuelle de l’écran et ajuste le nombre de cartes visibles
    const updateVisibleCount = () => {
        const width = window.innerWidth;
        if (width >= 1024 && slidesPerView.lg) setVisibleCount(slidesPerView.lg);
        else if (width >= 768 && slidesPerView.md) setVisibleCount(slidesPerView.md);
        else if (width >= 640 && slidesPerView.sm) setVisibleCount(slidesPerView.sm);
        else setVisibleCount(slidesPerView.base);
    };

    useEffect(() => {
        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    // Autoplay
    const resetAutoPlay = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (autoPlay) {
            timeoutRef.current = setTimeout(() => {
                nextSlide();
            }, delay);
        }
    };

    useEffect(() => {
        resetAutoPlay();
        return () => timeoutRef.current && clearTimeout(timeoutRef.current);
    }, [current, visibleCount, autoPlay]);

    const nextSlide = () => {
        const total = Math.ceil(items.length / visibleCount);
        setCurrent((prev) => (prev + 1) % total);
    };

    const prevSlide = () => {
        const total = Math.ceil(items.length / visibleCount);
        setCurrent((prev) => (prev - 1 + total) % total);
    };

    const goToSlide = (index: number) => setCurrent(index);

    const totalGroups = Math.ceil(items.length / visibleCount);
    const groupWidth = 100 / visibleCount;
    const translateX = current * -groupWidth * visibleCount;

    return (
        <div className="relative w-full overflow-hidden">
            {/* Slides */}
            <div
                ref={containerRef}
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    width: `${(items.length / visibleCount) * 100}%`,
                    transform: `translateX(${translateX}%)`,
                }}
            >
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="px-4 py-10 flex-shrink-0 flex flex-col items-center justify-center text-center"
                        style={{ width: `${100 / items.length}%` }}
                    >
                        {item.icon && (
                            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-[#1DAEFF] text-white rounded-2xl shadow-md">
                                {item.icon}
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 max-w-md">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Bullets */}
            <div className="flex justify-center mt-4 gap-2">
                {Array.from({ length: totalGroups }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-[#005098] scale-125" : "bg-[#29A9D8] opacity-50"
                            }`}
                    />
                ))}
            </div>

            {/* Flèches */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full hover:bg-gray-100 transition"
                aria-label="Previous"
            >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full hover:bg-gray-100 transition"
                aria-label="Next"
            >
                <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
        </div>
    );
}
