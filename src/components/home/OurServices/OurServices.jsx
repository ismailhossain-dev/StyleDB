"use client";
import React from "react";
import { ShieldCheck, Headphones, Truck, Zap } from "lucide-react";
import Title from "@/components/Title/Title";

const OurServices = () => {
  const serviceData = [
    {
      id: 1,
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      title: "Premium Quality",
      desc: "Experience luxury with our high-grade fabrics designed for lasting comfort.",
    },
    {
      id: 2,
      icon: <Headphones size={28} strokeWidth={1.5} />,
      title: "Concierge Support",
      desc: "Our dedicated team is online 24/7. Reach us via Chat or WhatsApp.",
    },
    {
      id: 3,
      icon: <Truck size={28} strokeWidth={1.5} />,
      title: "Express Delivery",
      desc: "Swift shipping across the country. Inside Dhaka in just 24-48 hours.",
    },
    {
      id: 4,
      icon: <Zap size={28} strokeWidth={1.5} />,
      title: "Weekly Drops",
      desc: "Stay ahead of the curve with our fresh, trend-setting weekly collections.",
    },
  ];

  return (
    <section className=" bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-20">
          <Title>Elevating Your Shopping Experience</Title>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-2xl bg-white border border-gray-100 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Card Accent Line (Hidden by default, slides in on hover) */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>

              {/* Icon Container with subtle animation */}
              <div className="mb-8 relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-50 text-gray-800 transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:rotate-[360deg]">
                  {service.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed font-normal group-hover:text-gray-600">
                  {service.desc}
                </p>
              </div>

              {/* Decorative Numbering (Subtle background text) */}
              <span className="absolute -bottom-4 -right-2 text-8xl font-black text-gray-50/50 group-hover:text-gray-100/40 transition-colors pointer-events-none">
                0{service.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
