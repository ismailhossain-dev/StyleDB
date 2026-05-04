import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import axios from "axios";
import Link from "next/link";
import React from "react";
// import AddToCart from "@/components/buttons/AddToCart";

const CollectionDetailsPage = async ({ params }) => {
  const { id } = await params;

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
  } = data;

  const originalPrice = discount ? (price / (1 - discount / 100)).toFixed(2) : null;

  return (
    <div className="bg-[#f1f1f1] min-h-screen mt-20">
      <Navbar />

      <main className="max-w-7xl mx-auto p-4 mt-6">
        <div className="grid md:grid-cols-2 gap-6 bg-white rounded-xl p-4">
          {/* LEFT DESIGN (MATCH IMAGE STYLE) */}
          <div className="relative bg-[#f3f3f3] rounded-xl p-6 overflow-hidden">
            {/* Top Brand */}
            <h2 className="text-xl font-bold text-orange-500 absolute top-4 left-4">
              GADGET <span className="text-blue-500">GARDEN</span>
            </h2>

            {/* Discount */}
            {discount > 0 && (
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-md font-bold">
                {discount}% ছাড়
              </div>
            )}

            {/* Blue pill */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow">
              {category}
            </div>

            {/* Small floating product */}
            <img src={image} className="w-20 absolute top-20 left-6" />

            {/* Main Image */}
            <div className="flex justify-center items-center mt-20 relative z-10">
              <img src={image} alt="product" className="w-[260px] object-contain" />
            </div>

            {/* Orange Shape */}
          </div>

          {/* RIGHT SIDE */}
          <div className="p-4 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-800">{category}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded font-semibold text-sm">
                ★ {rating}
              </span>
              <span className="text-gray-500 text-sm">({reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              {originalPrice && (
                <span className="line-through text-gray-400">৳{originalPrice}</span>
              )}
              <span className="text-2xl font-bold text-orange-500">৳{price}</span>
            </div>

            {/* Delivery */}
            <div>
              <p className="text-orange-500 font-semibold">কুরিয়ার ডেলিভারি চার্জ</p>
              <p className="text-sm text-gray-600">পুরো বাংলাদেশ ৬০ টাকা</p>
            </div>

            {/* Buttons like image */}
            <div className="flex flex-col gap-3 mt-2">
              <Link href="/checkout" className="btn">
                অর্ডার করুন
              </Link>

              <button className="bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
                হোয়াটসঅ্যাপ
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              {description || "Premium quality product with modern design and durability."}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-100 p-3 rounded">
                <p className="text-gray-500">Material</p>
                <p className="font-semibold">{material}</p>
              </div>
              <div className="bg-gray-100 p-3 rounded">
                <p className="text-gray-500">Color</p>
                <p className="font-semibold">{color}</p>
              </div>
              <div className="bg-gray-100 p-3 rounded">
                <p className="text-gray-500">Gender</p>
                <p className="font-semibold capitalize">{gender}</p>
              </div>
            </div>

            {/* <AddToCart data={data} /> */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CollectionDetailsPage;
