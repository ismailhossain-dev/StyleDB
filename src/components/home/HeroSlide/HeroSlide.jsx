"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Images
import image1 from "../../../assets/image1.avif";
import image2 from "../../../assets/image2.avif";
import image3 from "../../../assets/image3.avif";
import image4 from "../../../assets/image4.avif";

const HeroSlide = () => {
  const slides = [
    {
      id: 1,
      img: image1,
      title: "Timeless Fashion",
      sub: "Exclusive Winter Collection 2026",
      accent: "Fashion",
    },
    {
      id: 2,
      img: image2,
      title: "Urban Streetwear",
      sub: "Style That Defines Your Identity",
      accent: "Streetwear",
    },
    {
      id: 3,
      img: image3,
      title: "Modern Minimalist",
      sub: "Simplicity Is The Ultimate Sophistication",
      accent: "Minimalist",
    },
    {
      id: 4,
      img: image4,
      title: "Premium Fabrics",
      sub: "Experience Comfort With Every Stitch",
      accent: "Fabrics",
    },
  ];

  return (
    <section className="relative w-full h-[70vh] md:h-screen overflow-hidden bg-[#0a0a0a]">
      <Swiper
        effect={"fade"}
        speed={1500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* মেইন কন্টেইনার - পজিশন রিলেটিভ */}
            <div className="relative w-full h-full flex items-center">
              {/* ১. ইমেজ সেকশন - Z-Index 0 */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover object-center animate-ken-burns"
                />
              </div>

              {/* ২. গ্রেডিয়েন্ট ওভারলে - Z-Index 10 */}
              <div className="absolute inset-0 z-10 bg-black/50 md:bg-gradient-to-r md:from-black/80 md:via-black/30 md:to-transparent" />

              {/* ৩. টেক্সট কন্টেন্ট - Z-Index 20 (সবচেয়ে উপরে থাকবে) */}
              <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 text-white">
                <div className="overflow-hidden">
                  <p className="text-xs md:text-sm uppercase font-medium tracking-[6px] mb-4 opacity-0 animate-slide-up-fade [animation-delay:200ms] [animation-fill-mode:forwards]">
                    {slide.sub}
                  </p>
                </div>

                <div className="overflow-hidden">
                  <h1 className="text-5xl md:text-8xl font-light uppercase tracking-tighter mb-8 leading-[0.9] opacity-0 animate-slide-up-fade [animation-delay:400ms] [animation-fill-mode:forwards]">
                    {slide.title.split(" ")[0]} <br />
                    <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                      {slide.accent}
                    </span>
                  </h1>
                </div>

                <div className="flex flex-wrap gap-5 opacity-0 animate-slide-up-fade [animation-delay:600ms] [animation-fill-mode:forwards]">
                  <Link
                    href="/shop"
                    className="group relative overflow-hidden bg-white text-black px-10 py-4 rounded-none font-bold uppercase text-[10px] tracking-[2px] transition-all duration-500 hover:text-white"
                  >
                    <span className="relative z-10">Explore Collection</span>
                    <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
                  </Link>

                  <Link
                    href="/new-arrivals"
                    className="border border-white/30 backdrop-blur-md text-white px-10 py-4 rounded-none font-bold uppercase text-[10px] tracking-[2px] hover:bg-white hover:text-black transition-all duration-500"
                  >
                    View Arrivals
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.15);
          }
        }

        @keyframes slide-up-fade {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-ken-burns {
          animation: ken-burns 12s ease-out forwards;
        }

        .animate-slide-up-fade {
          animation: slide-up-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Pagination index fix */
        .swiper-pagination {
          z-index: 30 !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSlide;
