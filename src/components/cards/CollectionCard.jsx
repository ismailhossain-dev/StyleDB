import React from "react";
import Link from "next/link";

const ProductCard = ({ collection }) => {
  const { name, image, price, discount, _id } = collection;

  const originalPrice = discount ? (price / (1 - discount / 100)).toFixed(2) : null;

  return (
    <div className="w-[300px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image Section */}
      <div className="relative bg-[#eef4ff] p-4 flex items-center justify-center">
        <img src={image} alt={name} className="h-52 w-full" />

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-md font-bold">
            {discount}% ছাড়
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">{name}</h2>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">৳{originalPrice}</span>
          )}
          <span className="text-orange-500 text-lg font-bold">৳{price}</span>
        </div>

        {/* Button */}
        <Link href={`/collections/${_id}`}>
          <button className="btn">অর্ডার করুন</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
