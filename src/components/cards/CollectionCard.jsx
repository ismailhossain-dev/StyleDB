import React from "react";
import { ShoppingCart, Star, Heart, ArrowUpRight } from "lucide-react";

const CollectionCard = ({ collection }) => {
  const { name, image, price, discount, rating } = collection;

  // অরিজিনাল প্রাইস ক্যালকুলেশন
  const originalPrice = discount > 0 ? (price / (1 - discount / 100)).toFixed(2) : null;

  return (
    <div className="group relative w-full  bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden bg-[#f8f8f8]">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Hover Overlay with Details Button */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white/90 backdrop-blur-md text-black px-5 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-black hover:text-white">
            Details <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4">
          {discount > 0 && (
            <span className="bg-red-500 text-white text-[10px] font-black px-2.5 py-1 rounded-lg shadow-sm">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-all duration-300 shadow-sm active:scale-75">
          <Heart size={16} fill="currentColor" className="fill-transparent hover:fill-red-500" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                fill={i < Math.floor(rating) ? "currentColor" : "none"}
                className={i < Math.floor(rating) ? "" : "text-gray-200"}
              />
            ))}
          </div>
          <span className="text-[10px] font-bold text-gray-400">({rating})</span>
        </div>

        <h2 className="text-[16px] font-bold text-primary mb-4 truncate leading-tight group-hover:text-primary transition-colors">
          {name}
        </h2>

        {/* Price & Action */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-[11px] line-through text-gray-400 decoration-red-400/50">
                ${originalPrice}
              </span>
            )}
            <span className="text-xl font-black text-gray-900 tracking-tight">${price}</span>
          </div>

          <button className="flex items-center justify-center bg-gray-900 text-white p-3 rounded-2xl hover:bg-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 active:scale-90 group/cart">
            <ShoppingCart size={18} className="group-hover/cart:animate-pulse" />
          </button>
        </div>
      </div>

      {/* Modern Accent Border */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-primary transition-all duration-700 group-hover:w-full" />
    </div>
  );
};

export default CollectionCard;
