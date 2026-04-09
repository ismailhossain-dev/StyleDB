import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import axios from "axios";
import React from "react";
import Image from "next/image"; // Next.js Image component recommend kora hoy
import AddToCart from "@/components/buttons/AddToCart";

const CollectionDetailsPage = async ({ params }) => {
  const { id } = await params;

  // Data fetching
  const res = await axios.get(`http://localhost:3000/api/getSingleData/${id}`);
  const data = res.data.result;

  const {
    brand,
    category,
    color,
    description,
    discount,
    gender,
    image,
    material,
    price,
    rating,
    reviews,
    sizes,
  } = data;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-10">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Left: Product Image Section */}
            <div className="relative group">
              <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={image}
                  alt={brand}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {discount > 0 && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{discount}% OFF
                </span>
              )}
            </div>

            {/* Right: Product Info Section */}
            <div className="flex flex-col space-y-5">
              <div>
                <p className="text-sm font-medium text-blue-600 uppercase tracking-widest">
                  {brand}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1 capitalize">
                  {category}
                </h1>

                <div className="flex items-center mt-3 space-x-4">
                  <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
                    <span className="text-yellow-700 font-bold text-sm">★ {rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    ({reviews} Verified Reviews)
                  </span>
                </div>
              </div>

              <div className="border-t border-b py-4">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-gray-900">${price}</span>
                  {discount > 0 && (
                    <span className="text-xl text-gray-400 line-through">
                      ${(price + (price * discount) / 100).toFixed(2)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-green-600 mt-1 font-medium italic">
                  Tax included & Free Shipping
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {description ||
                  "Experience the perfect blend of style and comfort with this premium collection. Crafted with precision for those who value quality."}
              </p>

              {/* Product Specifications */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-500 block">Material</span>
                  <span className="font-semibold text-gray-800">{material}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-500 block">Color</span>
                  <span className="font-semibold text-gray-800">{color}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-500 block">Gender</span>
                  <span className="font-semibold text-gray-800 capitalize">{gender}</span>
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">Available Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes?.map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border rounded-md hover:border-black transition-all font-medium text-sm"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <AddToCart data={data} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CollectionDetailsPage;
