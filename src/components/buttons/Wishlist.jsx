"use client";
import { Heart } from "lucide-react";
import React, { useState } from "react";

const Wishlist = () => {
  const [isWishList, setIsWishList] = useState(false);

  const handleWishlist = () => {
    setIsWishList(true); // toggle করলে better UX
  };

  return (
    <div>
      <button
        onClick={handleWishlist}
        className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full transition-all duration-300 shadow-sm active:scale-75"
      >
        <Heart
          size={18}
          className={`transition-all ${
            isWishList ? "text-red-500 fill-red-500" : "text-gray-400 fill-transparent"
          }`}
        />
      </button>
    </div>
  );
};

export default Wishlist;
