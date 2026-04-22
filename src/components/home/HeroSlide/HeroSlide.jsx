"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// Modules
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

const HeroSlide = () => {
  const slides = [
    {
      id: 1,
      img: "/assets/image1.avif",
      title: "Timeless",
      accent: "Couture",
      sub: "Winter Collection 2026",
    },
    {
      id: 2,
      img: "/assets/image2.avif",
      title: "Urban",
      accent: "Minimal",
      sub: "Defined by Identity",
    },
    {
      id: 3,
      img: "/assets/image3.avif",
      title: "Modern",
      accent: "Luxe",
      sub: "Ultimate Sophistication",
    },
  ];

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-black font-sans">
      <Swiper
        effect={"fade"}
        speed={1200}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        navigation={true}
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        className="w-full h-full hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-center md:justify-start">
              {/* Image with Ken Burns Effect */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover object-center scale-110 animate-luxury-zoom"
                />
              </div>

              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-black/40 md:bg-gradient-to-r md:from-black/90 md:via-black/20 md:to-transparent" />

              {/* Subtle Film Grain (Optional aesthetic touch) */}
              <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              {/* Content */}
              <div className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-16 text-white">
                <div className="max-w-2xl">
                  <p className="text-[10px] md:text-xs uppercase font-bold tracking-[0.4em] mb-6 inline-block border-b border-white/30 pb-2 overflow-hidden animate-reveal-text">
                    {slide.sub}
                  </p>

                  <h1 className="text-6xl md:text-[120px] font-extralight uppercase tracking-tighter leading-[0.85] mb-10">
                    <span className="block mb-2">{slide.title}</span>
                    <span className="block font-black italic outline-text text-transparent opacity-90">
                      {slide.accent}
                    </span>
                  </h1>

                  <div className="flex flex-col sm:flex-row gap-4 mt-4 overflow-hidden">
                    <Link
                      href="/shop"
                      className="group relative px-12 py-5 bg-white text-black text-[11px] font-bold uppercase tracking-[3px] transition-all duration-700 hover:text-white"
                    >
                      <span className="relative z-10">Explore Now</span>
                      <div className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
                    </Link>

                    <Link
                      href="/arrivals"
                      className="px-12 py-5 border border-white/20 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-[3px] hover:bg-white hover:text-black transition-all duration-500"
                    >
                      New Arrivals
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Global CSS for refined animations */}
      <style jsx global>{`
        .outline-text {
          -webkit-text-stroke: 1.5px white;
        }

        /* Luxury Zoom Animation */
        @keyframes luxury-zoom {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }
        .animate-luxury-zoom {
          animation: luxury-zoom 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Swiper Navigation Customization */
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          transform: scale(0.6);
          transition: all 0.3s ease;
          opacity: 0.3;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 1;
          transform: scale(0.7);
        }

        /* Progress Bar Pagination */
        .custom-bullet {
          width: 40px !important;
          height: 2px !important;
          border-radius: 0 !important;
          background: rgba(255, 255, 255, 0.3) !important;
          opacity: 1 !important;
          transition: all 0.5s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: white !important;
          width: 60px !important;
        }

        /* Hide nav on mobile */
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
          .outline-text {
            -webkit-text-stroke: 1px white;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSlide;
