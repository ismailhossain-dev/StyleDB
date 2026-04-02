"use client";
import React from "react";
import { ShieldCheck, Headphones, Truck, Zap } from "lucide-react";

const OurServices = () => {
  const serviceData = [
    {
      id: 1,
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: "Premium Quality",
      desc: "High-quality fabric & long-lasting wear for every occasion.",
    },
    {
      id: 2,
      icon: <Headphones size={32} strokeWidth={1.5} />,
      title: "24/7 Support",
      desc: "Always here to help you. Chat or WhatsApp support available.",
    },
    {
      id: 3,
      icon: <Truck size={32} strokeWidth={1.5} />,
      title: "Fast Delivery",
      desc: "Inside Dhaka: 1-2 days, Outside: 2-4 days max.",
    },
    {
      id: 4,
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: "Trendy Collection",
      desc: "The latest fashion trends updated every single week.",
    },
  ];

  return (
    <section className="  bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl text-center text-primary font-bold font-bold mt-25 mb-10 uppercase">
            Why Shop <span className="font-black italic">With Us?</span>
          </h1>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 text-center"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-50 text-gray-800 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{service.desc}</p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full rounded-b-3xl"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Adding Subtle Fade-In Animation via CSS */}
      <style jsx>{`
        section {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default OurServices;
