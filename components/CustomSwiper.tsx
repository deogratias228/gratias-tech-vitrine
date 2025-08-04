// components/CustomSwiper.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ReactNode } from "react";

interface CustomSwiperProps {
  items: {
    icon?: ReactNode;
    title: string;
    description: string;
  }[];
  autoplay?: boolean;
  bullets?: boolean;
  slidesPerView?: number;
  breakpoints?: Record<number, any>;
}

export default function CustomSwiper({
  items,
  autoplay = true,
  bullets = true,
  slidesPerView = 1,
  breakpoints = {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
}: CustomSwiperProps) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={
          bullets
            ? {
                clickable: true,
                bulletClass: 'swiper-pagination-bullet custom-bullet',
                bulletActiveClass:
                  'swiper-pagination-bullet-active custom-bullet-active',
              }
            : false
        }
        autoplay={
          autoplay
            ? {
                delay: 3500,
                disableOnInteraction: false,
              }
            : false
        }
        spaceBetween={32}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="group relative h-full pt-16">
              <div className="relative flex flex-col items-center h-full rounded-2xl p-4 border border-gray-300 dark:border-gray-900 bg-transparent dark:bg-gray-950 dark:hover:border-gray-800 dark:hover:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="flex flex-col text-center px-4 pb-4 pt-8">
                  <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#4B5563] dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 -left-4 w-4 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-pulse"></div>
                </div>
              </div>
              {item.icon && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1DAEFF] text-white shadow-md">
                    {item.icon}
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Styles internes personnalisés */}
      {bullets && (
        <style jsx>{`
          .swiper-pagination {
            bottom: 32px !important;
          }
          .custom-bullet {
            width: 12px !important;
            height: 12px !important;
            margin: 0 6px !important;
            background-color: #29a9d8 !important;
            opacity: 0.5 !important;
            transition: all 0.3s ease !important;
          }
          .custom-bullet-active {
            opacity: 1 !important;
            width: 12px;
            background-color: #005098 !important;
            transform: scale(1.2) !important;
          }
        `}</style>
      )}
    </div>
  );
}
